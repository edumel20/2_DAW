<template>
  <div class="tarjeta-habilidad">
    <div class="habilidad-header">
      <img :src="habilidad.logo" :alt="habilidad.nombre" class="habilidad-logo" />
      <span class="habilidad-nombre">{{ habilidad.nombre }}</span>
    </div>
    <p class="habilidad-descripcion">{{ habilidad.descripcion }}</p>
    <div class="habilidad-nivel-container">
      <div class="habilidad-nivel-texto">
        <span>Nivel:</span>
        <span class="nivel-valor">{{ habilidad.nivel }}%</span>
      </div>
      <div class="habilidad-barra-progreso">
        <div 
          class="habilidad-barra-fill" 
          :style="{ width: habilidad.nivel + '%' }"
        ></div>
      </div>
    </div>
    <span class="habilidad-categoria">{{ habilidad.categoria }}</span>
  </div>
</template>

<script setup lang="ts">
// Interface para la estructura de habilidad
interface Habilidad {
  id: number;
  nombre: string;
  logo: string;
  descripcion: string;
  nivel: number;
  categoria: string;
}

// Definir las props del componente
interface Props {
  habilidad: Habilidad;
}

// Usar la interface para tipar las props
defineProps<Props>();
</script>

<style scoped>
.tarjeta-habilidad {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.tarjeta-habilidad:hover {
  transform: translateY(-3px);
}

.habilidad-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.habilidad-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.habilidad-nombre {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
}

.habilidad-descripcion {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex: 1;
}

.habilidad-nivel-container {
  width: 100%;
  margin-bottom: 0.75rem;
}

.habilidad-nivel-texto {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: #555;
}

.nivel-valor {
  font-weight: 600;
  color: #42b983;
}

.habilidad-barra-progreso {
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.habilidad-barra-fill {
  height: 100%;
  background: linear-gradient(90deg, #42b983, #2c3e50);
  border-radius: 4px;
  transition: width 0.5s ease;
}

.habilidad-categoria {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #f0f0f0;
  border-radius: 20px;
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>

