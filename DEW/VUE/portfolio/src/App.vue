<template>
    <div class="app">
      <header class="nav">
          <h1 class="brand"><RouterLink to="/" id="brand-name"  class="link" active-class="active">Portfolio</RouterLink></h1>
          <nav class="links">
            <RouterLink to="/sobre-mi" class="link" active-class="active">Sobre mi</RouterLink>
            <RouterLink to="/proyectos" class="link" active-class="active">Proyectos</RouterLink>
            <RouterLink to="/habilidades" class="link" active-class="active">Habilidades</RouterLink>
            <RouterLink to="/experiencia" class="link" active-class="active">Experiencia</RouterLink>
            <RouterLink to="/contacto" class="link" active-class="active">Contacto</RouterLink>
          </nav>
      </header>
    </div>
</template>


<script setup lang="ts"></script>


<style scoped>
  .nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}
.links {
  display: flex;
  gap: 1rem;
}
.link {
  text-decoration: none;
  color: black;
}
.active {
  font-weight: bold;
}
#brand-name{
  text-decoration: none;
  color: black;
}
</style>
