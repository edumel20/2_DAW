<template>
  <div class="app">
    <header class="nav">
      <h1 class="brand">MiApp</h1>

      <nav class="links">
        <RouterLink to="/" class="link" active-class="active">Home</RouterLink>
        <RouterLink to="/login" class="link" active-class="active">Login</RouterLink>
        <RouterLink to="/register" class="link" active-class="active">Register</RouterLink>
      </nav>
    </header>

    <main class="content">
      <RouterView />
    </main>
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
}
.active {
  font-weight: bold;
}
</style>
