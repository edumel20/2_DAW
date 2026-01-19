<template>
  <div class="habilidades-view">
    <h2 class="view-title">Mis Habilidades</h2>
    <p class="view-subtitle">Tecnologías y herramientas que domino</p>
    
    <div class="habilidades-grid">
      <TarjetaHabilidad 
        v-for="habilidad in habilidades" 
        :key="habilidad.id" 
        :habilidad="habilidad"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import cvData from '@/data/cv.json';
import TarjetaHabilidad from './TarjetaHabilidad.vue';

// Interface para mantener la estructura tipada
interface Habilidad {
  id: number;
  nombre: string;
  logo: string;
  descripcion: string;
  nivel: number;
  categoria: string;
}

const habilidades = ref<Habilidad[]>([]);

onMounted(() => {
  // Cargar habilidades desde el JSON
  habilidades.value = cvData.habilidades;
});
</script>

<style scoped>
.habilidades-view {
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

.habilidades-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .habilidades-view {
    padding: 1rem;
  }
  
  .view-title {
    font-size: 2rem;
  }
}
</style>

