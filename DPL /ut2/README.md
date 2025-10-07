# Guía paso a paso: Despliegue de Calculadora PHP con Nginx + PHP-FPM

## 0️⃣ Archivos de la aplicación
Crea una carpeta de proyecto (por ejemplo `calculadora-app`) y dentro de ella los siguientes archivos.

### `index.php`
```php
<?php
// index.php - calculadora simple (POST)
$resultado = null;
$error = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $v1 = isset($_POST['number_1']) ? trim($_POST['number_1']) : '';
    $v2 = isset($_POST['number_2']) ? trim($_POST['number_2']) : '';
    $op = $_POST['operaciones'] ?? '';

    if ($v1 === '' || $v2 === '') {
        $error = 'Rellena ambos valores.';
    } elseif (!is_numeric($v1) || !is_numeric($v2)) {
        $error = 'Introduce números válidos.';
    } else {
        $a = floatval($v1);
        $b = floatval($v2);
        switch ($op) {
            case 'sumar': $resultado = $a + $b; break;
            case 'restar': $resultado = $a - $b; break;
            case 'multiplicar': $resultado = $a * $b; break;
            case 'dividir':
                if ($b == 0) $error = 'Error: división por 0.';
                else $resultado = $a / $b;
                break;
            default:
                $error = 'Operación no válida.';
        }
    }
}
?>
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Calculadora PHP - Nginx + PHP-FPM</title>
  <link rel="stylesheet" href="calculadora.css">
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body>
  <h1>Calculadora</h1>
  <form method="post" action="">
    <label>Valor 1: <input type="number" step="any" name="number_1" value="<?php echo isset($_POST['number_1'])?htmlspecialchars($_POST['number_1']):''; ?>"></label><br><br>
    <label>Valor 2: <input type="number" step="any" name="number_2" value="<?php echo isset($_POST['number_2'])?htmlspecialchars($_POST['number_2']):''; ?>"></label><br><br>
    <label>Operación:
      <select name="operaciones">
        <option value="sumar" <?php if(isset($_POST['operaciones']) && $_POST['operaciones']=='sumar') echo 'selected'; ?>>Sumar</option>
        <option value="restar" <?php if(isset($_POST['operaciones']) && $_POST['operaciones']=='restar') echo 'selected'; ?>>Restar</option>
        <option value="multiplicar" <?php if(isset($_POST['operaciones']) && $_POST['operaciones']=='multiplicar') echo 'selected'; ?>>Multiplicar</option>
        <option value="dividir" <?php if(isset($_POST['operaciones']) && $_POST['operaciones']=='dividir') echo 'selected'; ?>>Dividir</option>
      </select>
    </label><br><br>

    <button type="submit">Calcular</button>
  </form>

  <?php if ($error): ?>
    <p style="color:crimson;"><?php echo htmlspecialchars($error); ?></p>
  <?php elseif ($resultado !== null): ?>
    <p style="color:green;">Resultado: <?php echo rtrim(rtrim(number_format($resultado,8,'.',''),'0'),'.'); ?></p>
  <?php endif; ?>
</body>
</html>
```

### `calculadora.css`
```css
body { font-family: Arial, sans-serif; padding: 20px; }
label { display:block; margin-bottom: 6px; }
input, select { padding:6px; margin-top:4px; }
button { padding:8px 12px; }
```

---

## 1️⃣ Despliegue Nativo (Nginx + PHP-FPM)

### 1.1 Instalar paquetes
```bash
sudo apt update
sudo apt install -y nginx php-fpm
```

### 1.2 Copiar la app al docroot
```bash
sudo mkdir -p /var/www/calculadora
sudo cp -r ./calculadora-app/* /var/www/calculadora/
sudo chown -R $USER:www-data /var/www/calculadora
sudo chmod -R 755 /var/www/calculadora
```

### 1.3 Verificar socket PHP-FPM
```bash
grep -R "listen =" /etc/php/*/fpm/pool.d/*.conf
```
Salida típica: `/run/php/php8.2-fpm.sock`

### 1.4 Configurar Nginx
Archivo `/etc/nginx/sites-available/calculadora`:
```nginx
server {
    listen 80;
    server_name localhost;
    root /var/www/calculadora;
    index index.php index.html;

    access_log /var/log/nginx/calculadora.access.log;
    error_log /var/log/nginx/calculadora.error.log;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_pass unix:/run/php/php8.2-fpm.sock;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

Activar sitio y reiniciar:
```bash
sudo ln -s /etc/nginx/sites-available/calculadora /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

### 1.5 Probar
Abrir [http://localhost](http://localhost)

---

## 2️⃣ Despliegue Dockerizado (Nginx + PHP-FPM)

### 2.1 Archivos Docker

**docker-compose.yml**
```yaml
version: '3.8'
services:
  php:
    image: php:8.2-fpm
    container_name: calc_php
    volumes:
      - ./app:/var/www/html

  nginx:
    image: nginx:stable-alpine
    container_name: calc_nginx
    depends_on:
      - php
    ports:
      - "80:80"
    volumes:
      - ./app:/var/www/html:ro
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf:ro
```

**nginx/default.conf**
```nginx
server {
    listen 80;
    server_name localhost;
    root /var/www/html;
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_pass php:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

### 2.2 Ejecutar
```bash
sudo systemctl stop nginx    # detener nginx nativo si usa puerto 80
docker compose up -d
```

Abrir [http://localhost](http://localhost)

### 2.3 Logs
```bash
docker compose logs -f nginx
docker compose logs -f php
```

---

## 3️⃣ Solución de problemas
| Problema | Causa | Solución |
|-----------|--------|-----------|
| 404 | Root incorrecto o archivo no copiado | Verifica `/var/www/calculadora/index.php` |
| 502 Bad Gateway | Socket php-fpm mal configurado o no iniciado | Ajusta `fastcgi_pass` y revisa `sudo systemctl status php*-fpm` |
| Puerto 80 ocupado | Otro servicio en puerto 80 | `sudo systemctl stop nginx` o usa `"8080:80"` en Docker |
| Permisos en Docker | Archivos del host sin permiso de lectura | `chmod 755 app` o `chown $USER` |

---

## 4️⃣ Comandos útiles
```bash
# Nativo
sudo mkdir -p /var/www/calculadora
sudo cp -r ./calculadora-app/* /var/www/calculadora/
sudo chown -R $USER:www-data /var/www/calculadora
sudo nginx -t && sudo systemctl restart nginx

# Docker
sudo systemctl stop nginx
docker compose up -d
docker compose ps
```
