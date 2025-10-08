class DroneManager {
  constructor() {
    this.drones = [];
  }

  // Crear: añadir un nuevo drone
  addDrone(id, modelo, bateria) {
    this.drones.push({ id, modelo, bateria });
  }

  // Leer: listar todos los drones
  listDrones() {
    return this.drones;
  }

  // Actualizar: actualizar la batería de un drone
  updateBateria(id, nuevaBateria) {
    const drone = this.drones.find((drone) => drone.id === id);
    if (drone) {
      drone.bateria = nuevaBateria;
    }
  }

  // Borrar: eliminar un drone por su id
  removeDrone(id) {
    this.drones = this.drones.filter((drone) => drone.id !== id);
  }

  // Obtener solo modelos
  getDroneModels() {
    return this.drones.map((drone) => drone.modelo);
  }

  // Calcular promedio de batería
  getPromedioBateria() {
    if (this.drones.length === 0) return 0;
    const totalBateria = this.drones.reduce(
      (total, drone) => total + drone.bateria,
      0
    );
    return totalBateria / this.drones.length;
  }
}

// Ejemplo de uso
const manager = new DroneManager();
manager.addDrone(1, "DJI Mavic", 85);
manager.addDrone(2, "Parrot Anafi", 75);
manager.addDrone(3, "DJI Phantom", 90);

console.log("Drones:", manager.listDrones());
console.log("Modelos:", manager.getDroneModels());
console.log("Promedio de batería:", manager.getPromedioBateria());

manager.updateBateria(1, 80);
console.log("Drones tras actualización:", manager.listDrones());

manager.removeDrone(2);
console.log("Drones tras eliminación:", manager.listDrones());
console.log(
  "Promedio de batería tras eliminación:",
  manager.getPromedioBateria()
);
