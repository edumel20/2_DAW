<template>
  <div class="proyectos-view">
    <h2 class="view-title">Mis Proyectos</h2>
    <p class="view-subtitle">Explora algunos de los proyectos en los que he trabajado</p>
    
    <div class="proyectos-grid">
      <TarjetaProyecto 
        v-for="proyecto in proyectos" 
        :key="proyecto.id" 
        :proyecto="proyecto"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import cvData from '@/data/cv.json';
import TarjetaProyecto from './TarjetaProyecto.vue';

// Interface para mantener la estructura tipada
interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  enlace: string;
  imagen: string;
}

const proyectos = ref<Proyecto[]>([]);

onMounted(() => {
  // Cargar proyectos desde el JSON
  proyectos.value = cvData.proyectos;
});
</script>

<style scoped>
.proyectos-view {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.view-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  text-align: center;
}

.view-subtitle {
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.proyectos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .proyectos-view {
    padding: 1rem;
  }
  
  .view-title {
    font-size: 2rem;
  }
}
</style>

