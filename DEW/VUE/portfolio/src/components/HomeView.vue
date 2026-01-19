<template>
  <div class="home-view">
    <div class="home-hero">
      <div class="hero-content">
        <h1 class="hero-title">¡Hola! Soy <span class="highlight">Eduardo</span></h1>
        <p class="hero-subtitle">Desarrollador Web Full Stack</p>
        <p class="hero-description">
          Creo aplicaciones web modernas, escalables y eficientes usando las mejores tecnologías del mercado.
        </p>
        <div class="hero-buttons">
          <RouterLink to="/proyectos" class="btn btn-primary">
            Ver Proyectos
          </RouterLink>
          <RouterLink to="/contacto" class="btn btn-secondary">
            Contactar
          </RouterLink>
        </div>
      </div>
      <div class="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop" 
          alt="Desarrollo Web"
        />
      </div>
    </div>
    
    <div class="home-features">
      <div class="feature-card">
        <i class="pi pi-code feature-icon"></i>
        <h3>Frontend Moderno</h3>
        <p>Vue.js, TypeScript, PrimeVue y las últimas tendencias en desarrollo frontend.</p>
      </div>
      <div class="feature-card">
        <i class="pi pi-server feature-icon"></i>
        <h3>Backend Robusto</h3>
        <p>APIs RESTful con Node.js, bases de datos y arquitectura escalable.</p>
      </div>
      <div class="feature-card">
        <i class="pi pi-mobile feature-icon"></i>
        <h3>Diseño Responsive</h3>
        <p>Interfaces que se adaptan perfectamente a todos los dispositivos.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.home-view {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.home-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 60vh;
}

.hero-title {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.highlight {
  color: #42b983;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 1rem;
}

.hero-description {
  color: #555;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #42b983;
  color: white;
}

.btn-primary:hover {
  background: #3aa876;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #2c3e50;
  border: 2px solid #2c3e50;
}

.btn-secondary:hover {
  background: #2c3e50;
  color: white;
  transform: translateY(-2px);
}

.hero-image img {
  width: 100%;
  max-width: 450px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.home-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  color: #42b983;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 0.75rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 968px) {
  .home-hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-image {
    order: -1;
  }
  
  .hero-image img {
    max-width: 100%;
  }
  
  .home-features {
    grid-template-columns: 1fr;
  }
}
</style>
