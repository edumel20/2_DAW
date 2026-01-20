<script setup>
import Navbar from './components/Navbar.vue'
import ProyectCard from './components/ProyectCard.vue'

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Panel de administración moderno con Vue 3 y Tailwind CSS, incluyendo gráficos interactivos y gestión de productos en tiempo real.",
    tags: ["Vue 3", "Tailwind", "Chart.js"],
    demoUrl: "https://example1.com",
    codeUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "Aplicación de gestión de tareas con drag & drop, categorías y sincronización con base de datos.",
    tags: ["Vue 3", "Pinia", "Firebase"],
    demoUrl: "https://example2.com",
    codeUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Weather Forecast",
    description: "App meteorológica con geolocalización, pronóstico extendido y animaciones suaves.",
    tags: ["Vue 3", "API Rest", "CSS Animations"],
    demoUrl: "https://example3.com",
    codeUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Portfolio Template",
    description: "Template minimalista para portfolios personales, completamente responsive y personalizable.",
    tags: ["Vue 3", "Tailwind", "Vite"],
    demoUrl: "https://example4.com",
    codeUrl: "https://github.com",
  },
]

const skills = [
  "JavaScript", "Vue.js 3", "React", "Tailwind CSS", 
  "HTML5", "CSS3", "Node.js", "Git", "Figma"
]

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans selection:bg-[#22d3ee]/30">
    <Navbar />
    
    <main class="relative">
      <!-- Background gradient orbs -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#22d3ee]/5 rounded-full blur-[120px] animate-pulse"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#22d3ee]/3 rounded-full blur-[120px] animate-pulse" style="animation-delay: 3s;"></div>
      </div>

      <div class="relative max-w-4xl mx-auto px-6 pt-32">
        <!-- Hero Section -->
        <section id="home" class="min-h-screen flex flex-col justify-center pb-20">
          <div class="space-y-8">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/20 text-[#22d3ee] text-sm">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22d3ee] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-[#22d3ee]"></span>
              </span>
              Available for work
            </div>
            
            <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
              Eduardo<span class="text-[#22d3ee]">.</span>
            </h1>
            
            <p class="text-xl md:text-2xl text-[#888] max-w-2xl leading-relaxed">
              Creative developer crafting digital experiences with 
              <span class="text-white">modern technologies</span> and 
              <span class="text-white">thoughtful design</span>.
            </p>

            <div class="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                class="group inline-flex items-center gap-2 px-6 py-3 bg-[#22d3ee] text-[#0a0a0a] font-semibold rounded-lg transition-all duration-300 hover:bg-[#22d3ee]/90 hover:scale-105"
              >
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#contact" 
                class="inline-flex items-center px-6 py-3 border border-[#333] text-[#e0e0e0] font-medium rounded-lg transition-all duration-300 hover:border-[#22d3ee] hover:text-[#22d3ee]"
              >
                Get in touch
              </a>
            </div>
          </div>

          <!-- Scroll indicator -->
          <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-32 border-t border-[#222]">
          <div class="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 class="text-sm font-medium text-[#22d3ee] uppercase tracking-widest mb-4">About</h2>
              <h3 class="text-3xl md:text-4xl font-semibold text-white mb-6">
                Building digital products with <span class="text-[#22d3ee]">purpose</span> and <span class="text-[#22d3ee]">precision</span>.
              </h3>
            </div>
            <div class="space-y-6 text-[#888] leading-relaxed">
              <p>
                I'm a frontend developer focused on creating clean, performant, and accessible web experiences. I believe great software should be invisible—working seamlessly to serve its users.
              </p>
              <p>
                Currently building with Vue.js, React, and modern CSS. Always learning, always creating.
              </p>
              <div class="pt-6">
                <h4 class="text-sm font-medium text-[#666] uppercase tracking-wider mb-4">Skills</h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="skill in skills" 
                    :key="skill"
                    class="px-3 py-1.5 text-sm bg-[#111] border border-[#222] text-[#888] rounded-md hover:border-[#22d3ee] hover:text-[#22d3ee] transition-colors duration-200"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-32 border-t border-[#222]">
          <div class="flex items-end justify-between mb-16">
            <div>
              <h2 class="text-sm font-medium text-[#22d3ee] uppercase tracking-widest mb-4">Projects</h2>
              <h3 class="text-3xl md:text-4xl font-semibold text-white">Selected Work</h3>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <ProyectCard
              v-for="project in projects"
              :key="project.id"
              :project="project"
            />
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-32 border-t border-[#222] mb-20">
          <div class="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 class="text-sm font-medium text-[#22d3ee] uppercase tracking-widest mb-4">Contact</h2>
              <h3 class="text-3xl md:text-4xl font-semibold text-white mb-6">
                Let's work <span class="text-[#22d3ee]">together</span>.
              </h3>
              <p class="text-[#888] leading-relaxed max-w-md">
                Have a project in mind or just want to say hello? I'd love to hear from you.
              </p>
            </div>
            
            <div class="space-y-4">
              <a 
                href="mailto:alumno@gmail.com" 
                class="group flex items-center gap-4 p-6 bg-[#111] border border-[#222] rounded-xl hover:border-[#22d3ee] hover:bg-[#0a0a0a] transition-all duration-300"
              >
                <div class="p-3 bg-[#22d3ee]/10 rounded-lg text-[#22d3ee]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-[#666] uppercase tracking-wider">Email</p>
                  <p class="text-white group-hover:text-[#22d3ee] transition-colors">alumno@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-4 p-6 bg-[#111] border border-[#222] rounded-xl hover:border-[#22d3ee] hover:bg-[#0a0a0a] transition-all duration-300"
              >
                <div class="p-3 bg-[#22d3ee]/10 rounded-lg text-[#22d3ee]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-[#666] uppercase tracking-wider">GitHub</p>
                  <p class="text-white group-hover:text-[#22d3ee] transition-colors">github.com/eduardo</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-4 p-6 bg-[#111] border border-[#222] rounded-xl hover:border-[#22d3ee] hover:bg-[#0a0a0a] transition-all duration-300"
              >
                <div class="p-3 bg-[#22d3ee]/10 rounded-lg text-[#22d3ee]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-[#666] uppercase tracking-wider">LinkedIn</p>
                  <p class="text-white group-hover:text-[#22d3ee] transition-colors">linkedin.com/in/eduardo</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>

      <!-- Footer -->
      <footer class="border-t border-[#222] py-8">
        <div class="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#555]">
          <p>© 2025 Eduardo. All rights reserved.</p>
          <p class="flex items-center gap-2">
            <span>Built with</span>
            <span class="text-[#22d3ee]">Vue 3</span>
            <span>+</span>
            <span class="text-[#22d3ee]">Tailwind</span>
          </p>
        </div>
      </footer>
    </main>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #0a0a0a;
}

::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #444;
}
</style>

