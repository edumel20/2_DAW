<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import ProyectCard from "./components/ProyectCard.vue";
import Navbar from "./components/Navbar.vue";

const projects = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "App con Vue y Tailwind",
    tags: ["Vue", "TailWind", "Vite"],
    demoUrl: "https://example1.com",
    codeUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Landing responsive",
    tags: ["Vue", "TailWind", "Vite"],
    demoUrl: "https://example2.com",
    codeUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Grid y layouts",
    tags: ["Vue", "TailWind", "Vite"],
    demoUrl: "https://example3.com",
    codeUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Proyecto 4",
    description: "Cosas",
    tags: ["Vue", "TailWind", "Vite"],
    demoUrl: "https://example4.com",
    codeUrl: "https://github.com",
  },
];
</script>

<template>
  <div id="top" class="min-h-screen bg-black text-white">
    <div class="max-w-4xl mx-auto px-6 py-10">
      <Navbar />
      <header class="mb-16 flex items-center justify-between">
        <h1 class="text-4xl font-bold">Eduardo</h1>
        <p class="mt-2 text-white/70">Frontend Developer · Vue · Tailwind</p>
        <div class="test-sm text-white/70">alumno@gmail.com</div>
      </header>
      <section id="sobre-mi" class="mb-16">
        <h2 class="text-2xl font-semibold">Sobre mí</h2>
        <p class="mt-4 text-white/70">
          Aquí escribirás una breve presentación personal.
        </p>
      </section>
      <section id="proyectos" class="mb-16">
        <h2 class="text-2xl font-semibold">Proyectos</h2>
        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ProyectCard
            v-for="project in projects"
            :key="project.id"
            :title="project.title"
            :description="project.description"
            :tags="project.tags"
            :demoUrl="project.demoUrl"
            :codeUrl="project.codeUrl"
          />
        </div>
      </section>
      <footer class="text-sm text-white/50">© 2026 — Eduardo</footer>
    </div>
    <section id="contacto" class="mb-16">
      <h2 class="text-2xl font-semibold">Contacto</h2>
      <div class="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
        <p class="text-white/70">¿Te interesa contactar conmigo?</p>
        <div class="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:tuemail@correo.com"
            class="bg-white text-black px-4 py-2 rounded-lg"
            >Enviar email</a
          >
          <a href="https://github.com" class="border px-4 py-2 rounded-lg"
            >GitHub</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
