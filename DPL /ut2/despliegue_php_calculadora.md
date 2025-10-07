# Despliegue paso a paso: Calculadora PHP con Nginx + PHP-FPM

Este documento explica **paso a paso** cómo desplegar una pequeña aplicación PHP que funciona como calculadora usando **Nginx + PHP-FPM** en **localhost**. Incluye **entorno nativo (Ubuntu/Debian / Fedora/CentOS)** y **entorno dockerizado** (Docker Compose). Todos los ejemplos asumen que trabajas en tu máquina local y quieres acceder a `http://localhost`.

---

## Resumen rápido

- Aplicación: formulario simple con dos operandos y operaciones (+, -, *, /).
- Entorno nativo: instalar `nginx` y `php-fpm`, colocar archivos en `/var/www/calculator` y configurar un server block para `localhost`.
- Docker: `docker-compose.yml` con servicios `php` (php-fpm) y `nginx`, volúmenes que montan la app, y configuración de Nginx que hace `fastcgi_pass` al servicio `php`.

---

## Requisitos

- Máquina local con Linux, macOS o Windows (Windows: usar WSL2 para entorno nativo o usar Docker).
- Para entorno nativo: privilegios `sudo`.
- Para docker: `docker` y `docker-compose` (o `docker compose`) instalados.

---

## Estructura del proyecto (sugerida)

```
calculator-project/
├── app/
│   └── index.php
├── docker/
│   └── nginx/
│       └── default.conf
├── docker-compose.yml
└── README.md  (este archivo)
```

---

# 1) Código de la calculadora (app/index.php)

Crea `app/index.php` con el siguiente contenido. Esta implementación evita `eval()` y prepara un formulario seguro con validación básica.

```php
<?php
// app/index.php
function to_float($v) {
    // Reemplaza coma por punto y convierte a float
    $v = str_replace(',', '.', trim($v));
    if ($v === '') return 0.0;
    return floatval($v);
}

$result = null;
$error = null;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $a = to_float($_POST['a'] ?? '0');
    $b = to_float($_POST['b'] ?? '0');
    $op = $_POST['op'] ?? '+';

    switch ($op) {
        case '+':
            $result = $a + $b;
            break;
        case '-':
            $result = $a - $b;
            break;
        case '*':
            $result = $a * $b;
            break;
        case '/':
            if ($b == 0.0) {
                $error = 'Error: División por cero';
            } else {
                $result = $a / $b;
            }
            break;
        default:
            $error = 'Operación no soportada';
    }
}
?>

<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Calculadora PHP - Nginx + PHP-FPM</title>
  <style>
    body{font-family:system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;margin:40px}
    label,input,select,button{display:block;margin:8px 0}
    .result{margin-top:12px;font-weight:bold}
  </style>
</head>
<body>
  <h1>Calculadora PHP</h1>
  <form method="post">
    <label>Operando A: <input name="a" type="text" value="<?= htmlentities($_POST['a'] ?? ''); ?>"></label>
    <label>Operando B: <input name="b" type="text" value="<?= htmlentities($_POST['b'] ?? ''); ?>"></label>
    <label>Operación:
      <select name="op">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
    </label>
    <button type="submit">Calcular</button>
  </form>

  <?php if ($error): ?>
    <div class="result" style="color:darkred"><?= htmlentities($error) ?></div>
  <?php elseif ($result !== null): ?>
    <div class="result">Resultado: <?= htmlentities((string)$result) ?></div>
  <?php endif; ?>

</body>
</html>
```

---

# 2) Despliegue **en entorno nativo** (Ubuntu/Debian - pasos)

> Estos comandos asumen Ubuntu/Debian. Si usas Fedora/CentOS cambia `apt` por `dnf`/`yum` y los nombres de paquetes (`php-fpm` suele ser `php-fpm` pero el servicio puede llamarse `php-fpm` o `php74-php-fpm` según la distro).

1. Actualiza e instala paquetes (Ubuntu/Debian):

```bash
sudo apt update
sudo apt install -y nginx php-fpm php-cli php-mbstring php-xml
```

2. Crea la carpeta de la app y copia `index.php`:

```bash
sudo mkdir -p /var/www/calculator
sudo chown $USER:$USER /var/www/calculator
# desde el directorio del proyecto local:
cp -r app/* /var/www/calculator/
```

3. Ajusta permisos (usuario de nginx suele ser `www-data` en Debian/Ubuntu):

```bash
sudo chown -R www-data:www-data /var/www/calculator
sudo chmod -R 755 /var/www/calculator
```

4. Crea un server block de Nginx (archivo: `/etc/nginx/sites-available/calculator`):

```
server {
    listen 80;
    server_name localhost; # accede por http://localhost

    root /var/www/calculator;
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # Manejo de ficheros php
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        # Opción 1: socket unix (común en Debian/Ubuntu)
        fastcgi_pass unix:/run/php/php-fpm.sock; # <- ajusta si tu socket se llama php7.4-fpm.sock o php8.1-fpm.sock
        # Opción 2: si PHP-FPM escucha en TCP (9000):
        # fastcgi_pass 127.0.0.1:9000;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

> **IMPORTANTE:** en muchas instalaciones Debian/Ubuntu el socket es `/run/php/php7.4-fpm.sock` o `/run/php/php8.1-fpm.sock`. Para saber qué socket usa tu PHP-FPM:

```bash
# busca el valor listen en la configuración de pools
grep -R "listen =" /etc/php/*/fpm/pool.d || true
# o lista sockets existentes
ls /run/php/*.sock
```

5. Habilita el site y desactiva el `default` si quieres:

```bash
sudo ln -s /etc/nginx/sites-available/calculator /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
# reinicia php-fpm con el nombre correcto (puede variar: php7.4-fpm, php8.1-fpm, o php-fpm)
sudo systemctl restart php7.4-fpm || sudo systemctl restart php8.1-fpm || sudo systemctl restart php-fpm
```

6. Abre en el navegador `http://localhost` y deberías ver la calculadora.

---

## Troubleshooting rápido (nativo)

- `sudo nginx -t` — comprueba sintaxis de nginx.
- `sudo journalctl -u nginx -f` y `sudo journalctl -u php7.4-fpm -f` — seguimiento de logs.
- Revisa `/var/log/nginx/error.log` y `/var/log/nginx/access.log`.
- Si nginx devuelve 502 Bad Gateway, revisa que `fastcgi_pass` apunte al socket/tcp correcto y que `php-fpm` esté activo (`systemctl status php*-fpm`).

---

# 3) Despliegue **dockerizado** (Docker Compose)

A continuación un `docker-compose.yml` mínimo y un archivo de configuración de nginx para el contenedor.

### `docker-compose.yml`

```yaml
version: '3.8'
services:
  php:
    image: php:8.2-fpm
    container_name: php-fpm-calculator
    volumes:
      - ./app:/var/www/html:delegated
    restart: unless-stopped

  nginx:
    image: nginx:stable
    container_name: nginx-calculator
    depends_on:
      - php
    ports:
      - "80:80"
    volumes:
      - ./app:/var/www/html:ro
      - ./docker/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro
    restart: unless-stopped
```

> Nota: si necesitas extensiones PHP adicionales (p.ej. `intl`, `pdo_mysql`, etc.) crea un `Dockerfile` para `php` e instala los paquetes con `docker-php-ext-install`.

### `docker/nginx/default.conf` (configuración para que nginx pase PHP a php-fpm)

```
server {
    listen 80;
    server_name localhost;
    root /var/www/html;
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass php:9000; # apunta al servicio php (nombre de servicio) puerto 9000
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

### Pasos para levantar (docker)

1. Desde la carpeta del proyecto (donde está `docker-compose.yml`):

```bash
docker compose up -d
# o en sistemas con docker-compose clásico:
# docker-compose up -d
```

2. Comprueba contenedores:

```bash
docker compose ps
# para ver logs:
docker compose logs -f nginx
```

3. Abre `http://localhost` en el navegador y verás la aplicación.

---

## Consejos y notas (docker)

- Si `80` está ocupado en tu host, cambia `ports:` en `docker-compose.yml` a `"8080:80"` y accede por `http://localhost:8080`.
- Para depurar dentro del contenedor PHP:

```bash
docker exec -it php-fpm-calculator bash
# ahora puedes inspeccionar /var/www/html
```

- Si ves `502` desde Nginx en el contenedor, asegúrate de que `fastcgi_pass php:9000;` está y que el servicio `php` está arrancado.

---

# 4) Comandos útiles y chequeos finales (cheat-sheet)

- Ver servicios y estado (nativo):
  - `systemctl status nginx`
  - `systemctl status php*-fpm`
- Probar petición local:
  - `curl -I http://localhost` (ver encabezados)
- Logs:
  - Nginx: `/var/log/nginx/error.log` y `/var/log/nginx/access.log`
  - PHP-FPM: `/var/log/php*-fpm.log` o `journalctl -u php*-fpm`
- Docker:
  - `docker compose ps`
  - `docker compose logs -f nginx`
  - `docker compose logs -f php`

---

# 5) Seguridad y producción (breves recomendaciones)

- No uses esta configuración tal cual en producción: añade HTTPS (certificado TLS), revisa permisos, configura `worker_processes` y `php-fpm` pools por carga, limita acceso, y evita exponer puertos innecesarios.
- Usa un usuario no-root en contenedores y reduce privilegios.

---

# 6) Resumen y seguimiento

Has recibido:

- Código de la aplicación (`app/index.php`).
- Instrucciones completas para desplegar **nativamente** (Ubuntu/Debian) y **dockerizado** con `docker-compose`.
- Archivos de ejemplo: `nginx` config tanto para host como para contenedor, `docker-compose.yml`.

Si quieres, puedo:

- Adaptar el `nginx` config para otra distribución o versión de PHP (p. ej. `php8.1-fpm` socket exacto).
- Añadir `Dockerfile` para instalar extensiones PHP concretas.
- Crear un paquete `.tar.gz` o ZIP con la estructura del proyecto listo para copiar.

¡Listo! Si deseas que adapte algo (otra ruta, otro puerto, más operaciones o estilos), me lo dices.

