<template>
  <div class="sobre-mi-view">
    <h2 class="view-title">Sobre Mí</h2>
    
    <div class="sobre-mi-content">
      <div class="sobre-mi-card">
        <div class="foto-container">
          <img :src="sobreMi.foto" :alt="sobreMi.nombre" class="foto-perfil" />
        </div>
        
        <div class="info-container">
          <h3 class="nombre">{{ sobreMi.nombre }}</h3>
          <p class="titulo">{{ sobreMi.titulo }}</p>
          <p class="bio">{{ sobreMi.bio }}</p>
          
          <div class="stats">
            <div class="stat-item">
              <span class="stat-number">{{ proyectos.length }}</span>
              <span class="stat-label">Proyectos</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ habilidades.length }}</span>
              <span class="stat-label">Habilidades</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ experiencia.length }}</span>
              <span class="stat-label">Experiencias</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import cvData from '@/data/cv.json';

interface SobreMi {
  nombre: string;
  titulo: string;
  foto: string;
  bio: string;
}

interface Proyecto {
  id: number;
}

interface Habilidad {
  id: number;
}

interface ExperienciaItem {
  id: number;
}

const sobreMi = ref<SobreMi>({
  nombre: '',
  titulo: '',
  foto: '',
  bio: ''
});

const proyectos = ref<Proyecto[]>([]);
const habilidades = ref<Habilidad[]>([]);
const experiencia = ref<ExperienciaItem[]>([]);

onMounted(() => {
  sobreMi.value = cvData.sobreMi;
  proyectos.value = cvData.proyectos;
  habilidades.value = cvData.habilidades;
  experiencia.value = cvData.experiencia;
});
</script>

<style scoped>
.sobre-mi-view {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.view-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.sobre-mi-card {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 3rem;
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.foto-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.foto-perfil {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.info-container {
  display: flex;
  flex-direction: column;
}

.nombre {
  font-size: 2rem;
  color: #2c3e50;
  margin: 0 0 0.25rem 0;
}

.titulo {
  color: #42b983;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.bio {
  color: #555;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.stats {
  display: flex;
  gap: 2rem;
  margin-top: auto;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
  min-width: 100px;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #42b983;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 968px) {
  .sobre-mi-card {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2rem;
  }
  
  .foto-container {
    justify-content: center;
  }
  
  .foto-perfil {
    width: 200px;
    height: 200px;
  }
  
  .stats {
    justify-content: center;
  }
  
  .view-title {
    font-size: 2rem;
  }
}
</style>
