# Repaso JavaScript 
## Práctica evaluable 9/10/2025:
#### 1. Laboratorio de Drones Autónomos
Implementa funciones para un CRUD de un array drones [{id, modelo, batería}]. Crear: addDrone.
Leer: listDrones. Actualizar: updateBateria(id, nuevaBateria). Borrar: removeDrone(id). Usa map
para obtener solo modelos y reduce para el promedio de batería.

```javascript
// Array de drones
let drones = [];

// Función para agregar un nuevo drone
function addDrone(drone) {
    drones.push(drone);
}

// Función para listar los modelos de los drones
function listDrones() {
    return drones.map(drone => drone.modelo);
}

// Función para actualizar la batería de un drone dado su ID
function updateBateria(id, nuevaBateria) {
    drones = drones.map(drone => {
        if (drone.id === id) {
            return { ...drone, bateria: nuevaBateria };
        }
        return drone;
    });
}

// Función para eliminar un drone dado su ID
function removeDrone(id) {
    drones = drones.filter(drone => drone.id !== id);
}

// Función para calcular el promedio de la batería
function calcularPromedioBateria() {
    if (drones.length === 0) return 0;

    const totalBateria = drones.reduce((acumulador, drone) => acumulador + drone.bateria, 0);
    return totalBateria / drones.length;
}

// Ejemplo de uso
addDrone({ id: 1, modelo: "DJI Phantom", bateria: 80 });
addDrone({ id: 2, modelo: "Parrot Anafi", bateria: 70 });
addDrone({ id: 3, modelo: "DJI Mavic", bateria: 90 });

console.log("Modelos de drones:", listDrones()); // ["DJI Phantom", "Parrot Anafi", "DJI Mavic"]
console.log("Promedio de batería:", calcularPromedioBateria()); // 80

updateBateria(2, 75);
console.log("Después de actualizar:", listDrones()); // ["DJI Phantom", "Parrot Anafi", "DJI Mavic"]

removeDrone(1);
console.log("Después de eliminar:", listDrones()); // ["Parrot Anafi", "DJI Mavic"]
console.log("Promedio de batería después de eliminar:", calcularPromedioBateria()); // 82.5
```
**Explicación:**
* addDrone: Agrega un nuevo objeto drone al array.
* listDrones: Utiliza map para crear y devolver un nuevo array que  contiene solo los modelos de los drones.
* updateBateria: Utiliza map para recorrer el array de drones, actualizando la batería del drone que coincide con el ID proporcionado.
* removeDrone: Utiliza filter para eliminar el drone con el ID especificado.
* calcularPromedioBateria: Utiliza reduce para sumar todas las baterías y luego dividir por el número de drones para obtener el promedio.

___
#### 2. Estación de Energía Hiperión
Escribe funciones flecha para convertir energía entre unidades: julios↔megaJ, kWh↔Wh. Lee
valores por argumentos o prompt. Valida números con funciones puras. Devuelve resultados con 2
decimales. Añade una función pipeline(opciones) que encadene dos conversiones.

```javascript
const readline = require('readline');

// Configurar la interfaz de entrada/salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funciones de conversión
const juliosToMegaJ = (julios) => {
    validateNumber(julios);
    return (julios / 1_000_000).toFixed(2);
};

const megaJToJulios = (megaJ) => {
    validateNumber(megaJ);
    return (megaJ * 1_000_000).toFixed(2);
};

const kWhToWh = (kWh) => {
    validateNumber(kWh);
    return (kWh * 1_000).toFixed(2);
};

const whToKWh = (Wh) => {
    validateNumber(Wh);
    return (Wh / 1_000).toFixed(2);
};

// Función para validar números
const validateNumber = (value) => {
    if (isNaN(value) || value < 0) {
        throw new Error("Por favor, ingresa un número válido y positivo.");
    }
};

// Función para mostrar el menú
const showMenu = () => {
    console.log("\nSeleccione una opción:");
    console.log("1. Convertir Julios a MegaJ");
    console.log("2. Convertir MegaJ a Julios");
    console.log("3. Convertir kWh a Wh");
    console.log("4. Convertir Wh a kWh");
    console.log("5. Salir");
};

// Manejar la selección del usuario
const handleUserInput = (option) => {
    if (option === '5') {
        console.log("Saliendo...");
        rl.close();
        return;
    }

    rl.question("Ingresa el valor a convertir: ", (value) => {
        try {
            let result;
            switch (option) {
                case '1':
                    result = juliosToMegaJ(parseFloat(value));
                    console.log(`${value} Julios son ${result} MegaJ`);
                    break;
                case '2':
                    result = megaJToJulios(parseFloat(value));
                    console.log(`${value} MegaJ son ${result} Julios`);
                    break;
                case '3':
                    result = kWhToWh(parseFloat(value));
                    console.log(`${value} kWh son ${result} Wh`);
                    break;
                case '4':
                    result = whToKWh(parseFloat(value));
                    console.log(`${value} Wh son ${result} kWh`);
                    break;
                default:
                    console.log("Opción inválida.");
            }
        } catch (error) {
            console.error(error.message);
        } finally {
            showMenu();
            rl.question("Selecciona una opción: ", handleUserInput);
        }
    });
};

// Inicio del programa
showMenu();
rl.question("Selecciona una opción: ", handleUserInput);
```
**Explicación:**
* Interfaz de Terminal: Utiliza readline de Node.js para manejar la entrada y salida desde la terminal.
* Funciones de Conversión: Convertir entre julios, megajulios, kilovatios-hora y vatios-hora.
* Validación de Números: La función validateNumber verifica que el input sea un número positivo.
* Menú Interactivo: Muestra un menú donde el usuario puede elegir qué conversión realizar.
* Manejo de Selecciones: Según la opción elegida, solicita el valor a convertir y muestra el resultado.
* Opción de Salir: Permite al usuario salir del programa introduciendo '5'.

___
#### 3. Taller de Prótesis Biónicas
Crea un array protesis [{id, tipo, precio}]. Implementa funciones calcularIGIC(precio), precioFinal,
y un resumen con reduce del coste total. Agrega filtrarPorTipo(tipo) y map para obtener
descripciones “ID:tipo → €precioFinal”.

```javascript
// Array de prótesis
let protesis = [
    { id: 1, tipo: "Pierna", precio: 1000 },
    { id: 2, tipo: "Brazo", precio: 1500 },
    { id: 3, tipo: "Mano", precio: 700 },
    { id: 4, tipo: "Rodilla", precio: 1200 },
];

// Función para calcular IGIC (ejemplo: 7%)
const calcularIGIC = (precio) => {
    const IGIC = 0.07; // Cambia aquí la tasa si es necesario
    return (precio * IGIC).toFixed(2);
};

// Función para calcular el precio final
const precioFinal = (precio) => {
    const igic = calcularIGIC(precio);
    return (parseFloat(precio) + parseFloat(igic)).toFixed(2);
};

// Función para obtener el resumen del coste total usando reduce
const resumenCosteTotal = () => {
    return protesis.reduce((total, protesisItem) => {
        return total + parseFloat(precioFinal(protesisItem.precio));
    }, 0).toFixed(2);
};

// Función para filtrar por tipo
const filtrarPorTipo = (tipo) => {
    return protesis.filter(protesisItem => protesisItem.tipo === tipo);
};

// Función para obtener descripciones
const obtenerDescripciones = () => {
    return protesis.map(protesisItem => {
        const finalPrice = precioFinal(protesisItem.precio);
        return `ID:${protesisItem.id}:${protesisItem.tipo} → €${finalPrice}`;
    });
};

// Ejemplo de uso
console.log("Resumen del coste total:", resumenCosteTotal()); // Coste total

const tipoFiltrado = "Brazo"; // Cambia aquí el tipo que deseas filtrar
console.log(`Prótesis filtradas por tipo '${tipoFiltrado}':`, filtrarPorTipo(tipoFiltrado)); 

console.log("Descripciones de prótesis:");
console.log(obtenerDescripciones()); 
```
**Explicación:**
* Array de Prótesis: Define un array protesis con objetos que contienen un id, tipo y precio.
* Calcular IGIC:
calcularIGIC(precio): Calcula el IGIC sobre un precio y lo devuelve con dos decimales.
* Precio Final:
precioFinal(precio): Calcula el precio final (precio más IGIC) y lo devuelve con dos decimales.
* Resumen del Coste Total:
resumenCosteTotal(): Usa reduce para sumar el precio final de todas las prótesis y devolver la suma total.
* Filtrar por Tipo:
filtrarPorTipo(tipo): Filtra las prótesis que coinciden con el tipo especificado.
* Obtener Descripciones:
obtenerDescripciones(): Usa map para crear una lista de descripciones de prótesis en el formato deseado.

___
#### 4. Centro de Clones: Control de lotes
Usa closures para generar IDs únicos: const nextId = crearGenerador(“CL-”); Cada llamada
devuelve “CL-0001”, “CL-0002”… Inserta clones en un array con addClone({id, nombre}).
Muestra el listado con listClones().

```javascript
// Función para crear un generador de IDs
const crearGenerador = (prefijo) => {
    let contador = 0; // Inicializar el contador

    return () => {
        contador += 1; // Incrementar el contador
        return `${prefijo}${contador.toString().padStart(4, '0')}`; // Formatear el ID
    };
};

// Generar un nuevo generador de IDs
const nextId = crearGenerador("CL-");

// Array para almacenar clones
const clones = [];

// Función para añadir un clon
const addClone = ({ nombre }) => {
    const id = nextId(); // Generar un nuevo ID
    clones.push({ id, nombre }); // Añadir el clon al array
};

// Función para listar clones
const listClones = () => {
    return clones.map(clone => `ID: ${clone.id}, Nombre: ${clone.nombre}`).join('\n');
};

// Ejemplo de uso
addClone({ nombre: "Clone A" });
addClone({ nombre: "Clone B" });
addClone({ nombre: "Clone C" });

console.log("Listado de clones:");
console.log(listClones());
```
**Explicación:**
* Función crearGenerador:
Utiliza un closure para mantener un contador privado que se incrementa cada vez que se llama a la función.
Devuelve una función que, al ser llamada, genera un nuevo ID único basado en el prefijo y el contador.
* Generador de IDs:
const nextId = crearGenerador("CL-"): Llama a la función generadora, para que devuelva una función que podemos usar para generar IDs únicos.
* Array de Clones:
clones: Un array donde se almacenan los clones como objetos que contienen un id y un nombre.
* Función addClone:
Crea un clon usando un nuevo ID generado y lo añade al array.
* Función listClones:
Mapea el array de clones a un formato legible y lo devuelve como un string.

___
#### 5. Tráfico Orbital: Planificador Asíncrono
Simula la secuencia de despegue con callbacks y setTimeout: chequearSistemas →
cargarCombustible → acoplarMódulo → cuentaAtras → lanzamiento. Cada paso es una función
que recibe callback y registra el evento en un array log. Al final, imprime el log.

```javascript
// Array para registrar los eventos
const log = [];

// Función para chequear sistemas
const chequearSistemas = (callback) => {
    setTimeout(() => {
        log.push("Chequeando sistemas...");
        console.log("Chequeando sistemas...");
        callback(); // Llama al siguiente paso
    }, 1000);
};

// Función para cargar combustible
const cargarCombustible = (callback) => {
    setTimeout(() => {
        log.push("Cargando combustible...");
        console.log("Cargando combustible...");
        callback(); // Llama al siguiente paso
    }, 2000);
};

// Función para acoplar módulo
const acoplarModulo = (callback) => {
    setTimeout(() => {
        log.push("Acoplando módulo...");
        console.log("Acoplando módulo...");
        callback(); // Llama al siguiente paso
    }, 1500);
};

// Función para cuenta atrás
const cuentaAtras = (callback) => {
    let countdown = 3;  // Cuenta regresiva de 3 segundos
    const interval = setInterval(() => {
        log.push(`Cuenta regresiva: ${countdown}`);
        console.log(`Cuenta regresiva: ${countdown}`);
        countdown--;
        if (countdown < 0) {
            clearInterval(interval);
            callback(); // Llama al siguiente paso
        }
    }, 1000);
};

// Función para lanzamiento
const lanzamiento = () => {
    setTimeout(() => {
        log.push("Lanzamiento: ¡Despegando!");
        console.log("Lanzamiento: ¡Despegando!");
        imprimirLog(); // Imprime el log al finalizar
    }, 1000);
};

// Función para imprimir el log
const imprimirLog = () => {
    console.log("\nRegistro de eventos:");
    log.forEach(evento => console.log(evento));
};

// Iniciar la secuencia de despegue
chequearSistemas(() => {
    cargarCombustible(() => {
        acoplarModulo(() => {
            cuentaAtras(() => {
                lanzamiento();
            });
        });
    });
});
```
**Explicación:**
* Log de Eventos: Se crea un array log para almacenar todos los eventos ocurriendo durante la secuencia de lanzamiento.
* Funciones de Cada Paso:
chequearSistemas: Registra el evento y llama al siguiente paso usando un callback.
cargarCombustible: Similar al anterior, esta función carga combustible y llama al siguiente paso.
acoplarModulo: Registra el acoplamiento del módulo y llama al siguiente paso.
cuentaAtras: Realiza una cuenta regresiva de 3 a 0, registrando los eventos y llamando al siguiente paso al finalizar.
lanzamiento: Registra el lanzamiento y llama a imprimirLog para mostrar todos los eventos.
* Simulación del Proceso: Cada función usa setTimeout para simular un retardo, lo que representa el tiempo que se tardan en completarse esas acciones.
* Impresión del Log: Cuando el proceso de lanzamiento termina, se imprime el registro de eventos para apreciar el flujo de operaciones.

___
#### 6. Bioimpresora 3D: Catálogo de Tejidos
CRUD sobre tejidos [{id, nombre, viabilidad(0–1)}]. Implementa actualizarViabilidad(id, v). Usa
reduce para calcular la viabilidad media y map para devolver etiquetas “OK” si v≥0.7. Añade
buscarPorNombre(query) ignorando mayúsculas/acentos.

```javascript
// Array de tejidos
let tejidos = [
    { id: 1, nombre: "Tejido A", viabilidad: 0.85 },
    { id: 2, nombre: "Tejido B", viabilidad: 0.65 },
    { id: 3, nombre: "Tejido C", viabilidad: 0.90 },
    { id: 4, nombre: "Tejido D", viabilidad: 0.40 },
];

// Función para actualizar la viabilidad de un tejido
const actualizarViabilidad = (id, viabilidad) => {
    tejidos = tejidos.map(tejido => {
        if (tejido.id === id) {
            return { ...tejido, viabilidad }; // Actualiza la viabilidad
        }
        return tejido; // Devuelve el tejido sin cambios
    });
};

// Función para calcular la viabilidad media
const calcularViabilidadMedia = () => {
    if (tejidos.length === 0) return 0;

    const totalViabilidad = tejidos.reduce((total, tejido) => {
        return total + tejido.viabilidad;
    }, 0);

    return (totalViabilidad / tejidos.length).toFixed(2); // Devuelve la media con 2 decimales
};

// Función para devolver etiquetas "OK" si viabilidad >= 0.7
const etiquetarViabilidades = () => {
    return tejidos.map(tejido => ({
        ...tejido,
        etiqueta: tejido.viabilidad >= 0.7 ? "OK" : "No OK" // Añade una etiqueta
    }));
};

// Función para buscar tejidos por nombre (ignorando mayúsculas y acentos)
const buscarPorNombre = (query) => {
    const normalizeString = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const normalizedQuery = normalizeString(query);

    return tejidos.filter(tejido => normalizeString(tejido.nombre).includes(normalizedQuery));
};

// Ejemplo de uso
console.log("Viabilidad media:", calcularViabilidadMedia()); // Calcula y muestra la viabilidad media
actualizarViabilidad(2, 0.75); // Actualiza la viabilidad del tejido con ID 2
console.log("Viabilidad media después de actualizar:", calcularViabilidadMedia());
console.log("Etiquetas de viabilidades:", etiquetarViabilidades()); // Muestra etiquetas
console.log("Resultados de búsqueda:", buscarPorNombre("tejido a")); // Busca por nombre
```
**Explicación:**
* Array de Tejidos: Se define un array tejidos que contiene objetos con id, nombre y viabilidad.
* Actualizar Viabilidad:
actualizarViabilidad(id, viabilidad): Actualiza la viabilidad de un tejido dado su ID, utilizando map para devolver el array actualizado.
* Calcular Viabilidad Media:
calcularViabilidadMedia(): Utiliza reduce para calcular la viabilidad media de todos los tejidos y devolverla con dos decimales.
* Etiquetar Viabilidades:
etiquetarViabilidades(): Utiliza map para devolver objetos que incluyen una etiqueta "OK" si la viabilidad es mayor o igual a 0.7.
* Buscar por Nombre:
buscarPorNombre(query): Normaliza la cadena de búsqueda y los nombres de los tejidos para ignorar mayúsculas y acentos, utilizando normalize y replace para hacer la comparación.

___
#### 7. Flota de Vehículos Autónomos: Ruta Óptima
Dado vehículos [{id, consumoKWh, km}] crea funciones: coste(veh)=consumoKWh*tarifa. Usa
reduce para el coste total de la flota y map para coste por km. Implementa
filtrarIneficientes(umbral) y una función reporte() que imprime métricas clave.

```javascript
// Array de vehículos
let vehiculos = [
    { id: 1, consumoKWh: 0.2, km: 100 },
    { id: 2, consumoKWh: 0.3, km: 150 },
    { id: 3, consumoKWh: 0.15, km: 200 },
    { id: 4, consumoKWh: 0.4, km: 80 },
];

// Tarifa por kWh
const tarifa = 0.15; // Cambia este valor según sea necesario

// Función para calcular el coste de un vehículo
const coste = (vehiculo) => {
    return vehiculo.consumoKWh * tarifa; // Calcula el coste
};

// Función para calcular el coste total de la flota
const costeTotalFlota = () => {
    return vehiculos.reduce((total, vehiculo) => total + coste(vehiculo), 0).toFixed(2);
};

// Función para calcular el coste por km
const costePorKm = () => {
    return vehiculos.map(vehiculo => ({
        id: vehiculo.id,
        costePorKm: (coste(vehiculo) / vehiculo.km).toFixed(4) // Calcula el coste por km
    }));
};

// Función para filtrar vehículos ineficientes
const filtrarIneficientes = (umbral) => {
    return vehiculos.filter(vehiculo => (coste(vehiculo) / vehiculo.km) > umbral);
};

// Función para generar un reporte
const reporte = () => {
    console.log("Reporte de flota:");
    console.log(`Coste total de la flota: €${costeTotalFlota()}`);
    console.log("Coste por km de cada vehículo:");
    costePorKm().forEach(item => {
        console.log(`Vehículo ID ${item.id}: €${item.costePorKm} por km`);
    });
};

// Ejemplo de uso
console.log("Vehículos ineficientes (umbral 0.05):", filtrarIneficientes(0.05));
reporte(); // Imprime el reporte
```
**Explicación:**
* Array de Vehículos: Se define un array vehiculos, donde cada objeto contiene un id, consumoKWh y km.
* Tarifa: Se establece una tarifa por kWh, que se puede ajustar según sea necesario.
* Coste por Vehículo:
coste(vehiculo): Calcula el coste de un vehículo multiplicando el consumo por la tarifa.
* Coste Total de la Flota:
costeTotalFlota(): Utiliza reduce para sumar el coste total de todos los vehículos y devuelve el resultado con dos decimales.
* Coste por Kilómetro:
costePorKm(): Utiliza map para calcular el coste por km de cada vehículo y devuelve un nuevo array con los resultados.
* Filtrar Ineficientes:
filtrarIneficientes(umbral): Filtra los vehículos cuyo coste por km excede un umbral determinado.
* Generar Reporte:
reporte(): Imprime métricas clave, incluyendo el coste total de la flota y el coste por km de cada vehículo.

___
#### 8. IA Médica: Triaje de Pacientes Sintéticos
Array pacientes [{id, nombre, riesgo(1–5)}]. Implementa funciones flecha para normalizar
nombres, subirRiesgo(id), bajarRiesgo(id). Usa reduce para contar pacientes por nivel de riesgo y
map para etiquetas “ALTO/BAJO”. Incluye removePaciente(id).

```javascript
// Array de pacientes
let pacientes = [
    { id: 1, nombre: "Juan Pérez", riesgo: 3 },
    { id: 2, nombre: "Ana Gómez", riesgo: 5 },
    { id: 3, nombre: "Luis Fernández", riesgo: 2 },
    { id: 4, nombre: "María López", riesgo: 1 },
];

// Función para normalizar nombres
const normalizarNombre = (nombre) => {
    return nombre.trim().toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
};

// Función para subir el riesgo de un paciente
const subirRiesgo = (id) => {
    pacientes = pacientes.map(paciente => {
        if (paciente.id === id && paciente.riesgo < 5) {
            return { ...paciente, riesgo: paciente.riesgo + 1 }; // Sube el riesgo
        }
        return paciente; // Devuelve el paciente sin cambios
    });
};

// Función para bajar el riesgo de un paciente
const bajarRiesgo = (id) => {
    pacientes = pacientes.map(paciente => {
        if (paciente.id === id && paciente.riesgo > 1) {
            return { ...paciente, riesgo: paciente.riesgo - 1 }; // Baja el riesgo
        }
        return paciente; // Devuelve el paciente sin cambios
    });
};

// Función para contar pacientes por nivel de riesgo
const contarPacientesPorRiesgo = () => {
    return pacientes.reduce((acc, paciente) => {
        acc[paciente.riesgo] = (acc[paciente.riesgo] || 0) + 1;
        return acc;
    }, {});
};

// Función para etiquetar los niveles de riesgo
const etiquetarRiesgo = () => {
    return pacientes.map(paciente => ({
        ...paciente,
        etiqueta: paciente.riesgo >= 3 ? "ALTO" : "BAJO" // Etiqueta según el riesgo
    }));
};

// Función para eliminar un paciente
const removePaciente = (id) => {
    pacientes = pacientes.filter(paciente => paciente.id !== id);
};

// Ejemplo de uso
console.log("Pacientes antes de la normalización:");
console.log(pacientes);

// Normaliza los nombres
pacientes = pacientes.map(paciente => ({
    ...paciente,
    nombre: normalizarNombre(paciente.nombre)
}));

console.log("Pacientes después de la normalización:");
console.log(pacientes);

subirRiesgo(1); // Sube el riesgo de Juan
bajarRiesgo(3); // Baja el riesgo de Luis
removePaciente(4); // Elimina a María

console.log("Conteo de pacientes por riesgo:");
console.log(contarPacientesPorRiesgo());

console.log("Etiquetas de riesgo:");
console.log(etiquetarRiesgo());
```
**Explicación:**
* Array de Pacientes: Se define un array pacientes, donde cada objeto contiene un id, nombre y riesgo.
* Normalización de Nombres:
normalizarNombre(nombre): Normaliza un nombre, poniéndolo en minúsculas y capitalizando la primera letra de cada palabra.
* Aumentar/Bajar Riesgo:
subirRiesgo(id): Aumenta el riesgo del paciente con el ID especificado, asegurándose de que no exceda 5.
bajarRiesgo(id): Disminuye el riesgo del paciente con el ID proporcionado, asegurándose de que no sea inferior a 1.
* Contar Pacientes por Riesgo:
contarPacientesPorRiesgo(): Utiliza reduce para contar el número de pacientes en cada nivel de riesgo y devolver un objeto con los resultados.
* Etiquetas de Riesgo:
etiquetarRiesgo(): Utiliza map para devolver un nuevo array que incluye etiquetas "ALTO" o "BAJO" según el nivel de riesgo de cada paciente.
* Eliminar Paciente:
removePaciente(id): Filtra y elimina el paciente con el ID especificado.

___
#### 9. Archivo Cuántico: Compresor de Lecturas
Escribe funciones puras para: normalizar(secuencia:string) → solo A,C,G,T; chunk(secuencia, n) →
array de trozos; frecuencia(trozos) → objeto {trozo:conteo}. Usa map para generar trozos y reduce
para la tabla de frecuencias. Imprime la más frecuente.

```javascript
// Función para normalizar la secuencia
const normalizar = (secuencia) => {
    return secuencia
        .toUpperCase() // Convertir a mayúsculas
        .replace(/[^ACGT]/g, ''); // Solo permite A, C, G, T
};

// Función para dividir la secuencia en trozos
const chunk = (secuencia, n) => {
    const resultado = [];
    for (let i = 0; i < secuencia.length; i += n) {
        resultado.push(secuencia.slice(i, i + n)); // Corta la secuencia en trozos de tamaño n
    }
    return resultado;
};

// Función para contar la frecuencia de los trozos
const frecuencia = (trozos) => {
    return trozos.reduce((acc, trozo) => {
        acc[trozo] = (acc[trozo] || 0) + 1; // Incrementa el conteo del trozo
        return acc;
    }, {});
};

// Función para encontrar el trozo más frecuente
const masFrecuente = (frecuencias) => {
    return Object.entries(frecuencias).reduce((max, [trozo, conteo]) => {
        return conteo > max.conteo ? { trozo, conteo } : max; // Devuelve el trozo con mayor conteo
    }, { trozo: null, conteo: 0 });
};

// Ejemplo de uso
const secuencia = "ACGTACGTTCGATCGATCGAACGTTAGC";

const secuenciaNormalizada = normalizar(secuencia);
console.log("Secuencia Normalizada:", secuenciaNormalizada);

const trozos = chunk(secuenciaNormalizada, 4); // Por ejemplo, trozos de tamaño 4
console.log("Trozos:", trozos);

const freqs = frecuencia(trozos);
console.log("Frecuencias de los trozos:", freqs);

const trozoMásFrecuente = masFrecuente(freqs);
console.log("Trozo más frecuente:", trozoMásFrecuente);
```
**Explicación:**
* Normalizar:
normalizar(secuencia): Convierte la secuencia a mayúsculas y elimina cualquier carácter que no sea A, C, G o T.
* Dividir en Trozos:
chunk(secuencia, n): Divide la secuencia normalizada en trozos de longitud n y devuelve un array con los trozos.
* Contar Frecuencia:
frecuencia(trozos): Utiliza reduce para contar cuántas veces aparece cada trozo en el array y devuelve un objeto donde cada propiedad es un trozo con su respectivo conteo.
* Encontrar el Trozo Más Frecuente:
masFrecuente(frecuencias): Utiliza reduce para encontrar el trozo que tiene el conteo más alto entre los datos de frecuencia.

___
#### 10. Mercado NeoTech: Carrito Modular
Array carrito [{id, producto, unidades, precioUnit}]. Implementa addItem, updateUnidades,
removeItem. Usa map para obtener subtotales y reduce para total con descuento por tramos (función
calcularDescuento(total)). Muestra ticket formateado por consola.

```javascript
// Array del carrito
let carrito = [];

// Función para agregar un artículo al carrito
const addItem = (id, producto, unidades, precioUnit) => {
    carrito.push({ id, producto, unidades, precioUnit });
};

// Función para actualizar las unidades de un artículo
const updateUnidades = (id, unidades) => {
    carrito = carrito.map(item => {
        if (item.id === id) {
            return { ...item, unidades }; // Actualiza las unidades
        }
        return item; // Devuelve el item sin cambios
    });
};

// Función para eliminar un artículo del carrito
const removeItem = (id) => {
    carrito = carrito.filter(item => item.id !== id); // Filtra el artículo a eliminar
};

// Función para calcular subtotal de cada artículo
const subtotales = () => {
    return carrito.map(item => ({
        ...item,
        subtotal: (item.unidades * item.precioUnit).toFixed(2) // Calcula el subtotal
    }));
};

// Función para calcular total con descuento
const calcularTotal = () => {
    const total = subtotales().reduce((acc, item) => acc + parseFloat(item.subtotal), 0);
    return calcularDescuento(total); // Aplica descuento al total
};

// Función para calcular descuento
const calcularDescuento = (total) => {
    if (total > 100) return (total * 0.90).toFixed(2); // 10% de descuento
    if (total > 50) return (total * 0.95).toFixed(2); // 5% de descuento
    return total.toFixed(2); // Sin descuento
};

// Función para mostrar el ticket
const mostrarTicket = () => {
    console.log("********** TICKET **********");
    subtotales().forEach(item => {
        console.log(`${item.producto} (Unidades: ${item.unidades}) - Subtotal: €${item.subtotal}`);
    });
    const totalFinal = calcularTotal();
    console.log(`Total con descuento: €${totalFinal}`);
    console.log("*****************************");
};

// Ejemplo de uso
addItem(1, "Producto A", 2, 30.00);
addItem(2, "Producto B", 1, 25.00);
addItem(3, "Producto C", 3, 15.00);

updateUnidades(2, 2); // Actualiza unidades de Producto B a 2
removeItem(3); // Elimina Producto C

mostrarTicket(); // Muestra el ticket
```
**Explicación:**
* Array del Carrito: Se define un array carrito que contiene objetos con información sobre cada artículo (id, producto, unidades, precioUnit).
* Agregar Artículo:
addItem(id, producto, unidades, precioUnit): Añade un nuevo artículo al carrito.
* Actualizar Unidades:
updateUnidades(id, unidades): Actualiza el número de unidades de un artículo en el carrito.
* Eliminar Artículo:
removeItem(id): Elimina un artículo del carrito dado su ID.
* Calcular Subtotales:
subtotales(): Usa map para calcular el subtotal de cada artículo y devolver un nuevo array con esta información.
* Calcular Total:
calcularTotal(): Usa reduce para sumar todos los subtotales y aplica un descuento según el total usando calcularDescuento(total).
* Calcular Descuento:
calcularDescuento(total): Aplica descuentos según tramos predefinidos: 10% para totales mayores a 100 y 5% para aquellos mayores a 50.
* Mostrar Ticket:
mostrarTicket(): Imprime el ticket en consola, mostrando los subtotales de cada producto y el total final con descuento.