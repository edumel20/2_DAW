<template>
  <div class="app">
    <header class="navbar">
      <div class="navbar-container">
        <h1 class="brand">
          <RouterLink to="/" class="brand-link">
            <i class="pi pi-code"></i>
            Portfolio
          </RouterLink>
        </h1>
        <nav class="nav-links">
          <RouterLink to="/" class="nav-link" active-class="active">
            <i class="pi pi-home"></i>
            Inicio
          </RouterLink>
          <RouterLink to="/sobre-mi" class="nav-link" active-class="active">
            <i class="pi pi-user"></i>
            Sobre Mí
          </RouterLink>
          <RouterLink to="/proyectos" class="nav-link" active-class="active">
            <i class="pi pi-briefcase"></i>
            Proyectos
          </RouterLink>
          <RouterLink to="/habilidades" class="nav-link" active-class="active">
            <i class="pi pi-star"></i>
            Habilidades
          </RouterLink>
          <RouterLink to="/experiencia" class="nav-link" active-class="active">
            <i class="pi pi-chart-line"></i>
            Experiencia
          </RouterLink>
          <RouterLink to="/contacto" class="nav-link" active-class="active">
            <i class="pi pi-envelope"></i>
            Contacto
          </RouterLink>
        </nav>
        <button class="mobile-toggle" @click="toggleMobileMenu">
          <i :class="mobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
        </button>
      </div>
      <nav v-if="mobileMenuOpen" class="mobile-nav">
        <RouterLink to="/" class="mobile-link" @click="closeMobileMenu">
          <i class="pi pi-home"></i> Inicio
        </RouterLink>
        <RouterLink to="/sobre-mi" class="mobile-link" @click="closeMobileMenu">
          <i class="pi pi-user"></i> Sobre Mí
        </RouterLink>
        <RouterLink to="/proyectos" class="mobile-link" @click="closeMobileMenu">
          <i class="pi pi-briefcase"></i> Proyectos
        </RouterLink>
        <RouterLink to="/habilidades" class="mobile-link" @click="closeMobileMenu">
          <i class="pi pi-star"></i> Habilidades
        </RouterLink>
        <RouterLink to="/experiencia" class="mobile-link" @click="closeMobileMenu">
          <i class="pi pi-chart-line"></i> Experiencia
        </RouterLink>
        <RouterLink to="/contacto" class="mobile-link" @click="closeMobileMenu">
          <i class="pi pi-envelope"></i> Contacto
        </RouterLink>
      </nav>
    </header>
    
    <main class="main-content">
      <RouterView />
    </main>
    
    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} Portfolio Personal. Creado con Vue.js + PrimeVue</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.brand {
  margin: 0;
  font-size: 1.5rem;
}

.brand-link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
}

.brand-link:hover {
  color: #42b983;
}

.brand-link i {
  color: #42b983;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: #555;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #42b983;
  background: #f0f9f4;
}

.nav-link.active {
  color: #42b983;
  background: #f0f9f4;
}

.nav-link i {
  font-size: 0.9rem;
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #2c3e50;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-nav {
  display: none;
  flex-direction: column;
  padding: 1rem;
  background: white;
  border-top: 1px solid #eee;
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #555;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.mobile-link:hover,
.mobile-link.active {
  background: #f0f9f4;
  color: #42b983;
}

.main-content {
  flex: 1;
  background: #f8f9fa;
}

.footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 1.5rem;
  margin-top: auto;
}

.footer p {
  margin: 0;
  opacity: 0.8;
}

@media (max-width: 968px) {
  .nav-links {
    display: none;
  }
  
  .mobile-toggle {
    display: block;
  }
  
  .mobile-nav {
    display: flex;
  }
  
  .navbar-container {
    padding: 0 1rem;
  }
}
</style>
