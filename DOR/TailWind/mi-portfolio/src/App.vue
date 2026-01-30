<script setup>
import Navbar from './components/Navbar.vue'
import ProyectCard from './components/ProyectCard.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)
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

const handleMouseMove = (e) => {
  mouseX.value = (e.clientX / window.innerWidth) * 100
  mouseY.value = (e.clientY / window.innerHeight) * 100
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <div 
    class="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans selection:bg-[#22d3ee]/30 relative overflow-x-hidden"
    :style="{ '--mouse-x': `${mouseX}%`, '--mouse-y': `${mouseY}%` }"
  >
    <!-- Noise texture overlay -->
    <div class="noise fixed inset-0 pointer-events-none z-50"></div>
    
    <!-- Scanline effect -->
    <div class="scanline fixed inset-0 pointer-events-none z-[9999]"></div>
    
    <Navbar />
    
    <main class="relative">
      <!-- Advanced background with grid and gradients -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <!-- Animated grid -->
        <div class="absolute inset-0 opacity-[0.03]">
          <div class="absolute inset-0" style="
            background-image: 
              linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px);
            background-size: 50px 50px;
          "></div>
        </div>
        
        <!-- Multiple gradient orbs -->
        <div class="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-[#22d3ee]/8 rounded-full blur-[150px] animate-float"></div>
        <div class="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-[#a855f7]/8 rounded-full blur-[150px] animate-float-delayed"></div>
        <div class="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-[#22d3ee]/4 rounded-full blur-[100px] animate-pulse"></div>
        <div class="absolute top-[10%] right-[20%] w-[25%] h-[25%] bg-[#a855f7]/5 rounded-full blur-[120px] animate-pulse" style="animation-delay: 2s;"></div>
        
        <!-- Central glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-radial from-[#22d3ee]/10 via-transparent to-transparent rounded-full blur-[100px]"></div>
      </div>

      <!-- Spotlight effect following cursor -->
      <div class="fixed inset-0 pointer-events-none z-10 opacity-30">
        <div 
          class="absolute w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none transition-all duration-500 ease-out"
          :style="{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)',
            left: `calc(${mouseX}% - 300px)`,
            top: `calc(${mouseY}% - 300px)`,
          }"
        ></div>
      </div>

      <!-- Floating geometric elements -->
      <div class="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <!-- Floating circles -->
        <div class="absolute top-[20%] right-[10%] w-20 h-20 border border-[#22d3ee]/20 rounded-full animate-float" style="animation-duration: 8s;"></div>
        <div class="absolute bottom-[30%] left-[5%] w-12 h-12 border border-[#a855f7]/30 rounded-full animate-float-delayed" style="animation-duration: 10s;"></div>
        <div class="absolute top-[60%] right-[15%] w-8 h-8 border border-[#22d3ee]/40 rounded-full animate-float" style="animation-duration: 6s; animation-delay: 1s;"></div>
        <div class="absolute top-[30%] left-[15%] w-16 h-16 border border-[#a855f7]/20 rounded-full animate-float-delayed" style="animation-duration: 12s;"></div>
        
        <!-- Floating squares -->
        <div class="absolute top-[15%] left-[25%] w-10 h-10 border border-[#22d3ee]/20 rotate-45 animate-float" style="animation-duration: 9s;"></div>
        <div class="absolute bottom-[20%] right-[20%] w-14 h-14 border border-[#a855f7]/25 rotate-12 animate-float-delayed" style="animation-duration: 11s;"></div>
        
        <!-- Connecting lines decoration -->
        <svg class="absolute inset-0 w-full h-full opacity-[0.05]">
          <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="url(#lineGradient)" stroke-width="1" />
          <line x1="70%" y1="20%" x2="30%" y2="80%" stroke="url(#lineGradient)" stroke-width="1" />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#22d3ee" />
              <stop offset="100%" stop-color="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div class="relative max-w-5xl mx-auto px-8 pt-32 z-20">
        <!-- Hero Section -->
        <section id="home" class="min-h-screen flex flex-col justify-center pb-20">
          <div class="space-y-8 animate-fade-in-up text-center">
            <!-- Status badge with glow -->
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#22d3ee]/5 border border-[#22d3ee]/30 text-[#22d3ee] text-sm group hover:bg-[#22d3ee]/10 transition-all duration-300">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22d3ee] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-[#22d3ee]"></span>
              </span>
              <span class="neon-cyan">Available for work</span>
            </div>
            
            <!-- Glitch effect title -->
            <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white relative">
              <span class="glitch inline-block relative" data-text="Eduardo">Eduardo<span class="text-[#22d3ee]">.</span></span>
            </h1>
            
            <p class="text-xl md:text-2xl text-[#888] max-w-2xl leading-relaxed">
              Creative developer crafting digital experiences with 
              <span class="gradient-text font-semibold">modern technologies</span> and 
              <span class="text-white">thoughtful design</span>.
            </p>

            <div class="flex flex-wrap gap-4 pt-4 justify-center">
              <a 
                href="#projects" 
                class="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#22d3ee] text-[#0a0a0a] font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              >
                <span class="relative z-10 flex items-center gap-2">
                  View Projects
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#22d3ee] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background-size: 200% 100%;"></div>
              </a>
              <a 
                href="#contact" 
                class="group relative inline-flex items-center px-8 py-4 border border-[#333] text-[#e0e0e0] font-medium rounded-lg overflow-hidden transition-all duration-300 hover:border-[#22d3ee] hover:text-[#22d3ee] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                <span class="relative z-10">Get in touch</span>
                <div class="absolute inset-0 bg-[#22d3ee]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
            
            <!-- Stats decoration -->
            <div class="flex gap-8 pt-8 border-t border-[#222] justify-center">
              <div class="text-center">
                <p class="text-3xl font-bold gradient-text">4+</p>
                <p class="text-xs text-[#666] uppercase tracking-wider mt-1">Projects</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-bold gradient-text">2+</p>
                <p class="text-xs text-[#666] uppercase tracking-wider mt-1">Years</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-bold gradient-text">100%</p>
                <p class="text-xs text-[#666] uppercase tracking-wider mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <!-- Enhanced scroll indicator -->
          <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span class="text-xs text-[#555] uppercase tracking-widest">Scroll</span>
            <div class="w-6 h-10 border-2 border-[#333] rounded-full flex justify-center pt-2">
              <div class="w-1 h-2 bg-[#22d3ee] rounded-full animate-bounce"></div>
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-48 border-t border-[#222] relative">
          <!-- Section decoration -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-[#22d3ee]/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div class="grid lg:grid-cols-2 gap-16 text-center lg:text-left">
            <div class="relative">
              <h2 class="text-sm font-medium text-[#22d3ee] uppercase tracking-widest mb-4">About</h2>
              <h3 class="text-3xl md:text-4xl font-semibold text-white mb-6">
                Building digital products with <span class="gradient-text">purpose</span> and <span class="gradient-text">precision</span>.
              </h3>
              
              <!-- Decorative element -->
              <div class="absolute -left-4 top-0 w-20 h-[1px] bg-gradient-to-r from-[#22d3ee] to-transparent"></div>
            </div>
            <div class="space-y-6 text-[#888] leading-relaxed">
              <p class="relative pl-4 border-l-2 border-[#22d3ee]/30 hover:border-[#22d3ee] transition-colors duration-300">
                I'm a frontend developer focused on creating clean, performant, and accessible web experiences. I believe great software should be invisible—working seamlessly to serve its users.
              </p>
              <p class="relative pl-4 border-l-2 border-[#a855f7]/30 hover:border-[#a855f7] transition-colors duration-300">
                Currently building with Vue.js, React, and modern CSS. Always learning, always creating.
              </p>
              <div class="pt-6">
                <h4 class="text-sm font-medium text-[#666] uppercase tracking-wider mb-4 text-center lg:text-left">Skills</h4>
                <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span 
                    v-for="(skill, index) in skills" 
                    :key="skill"
                    class="group px-3 py-1.5 text-sm bg-[#111] border border-[#222] text-[#888] rounded-md hover:border-[#22d3ee] hover:text-[#22d3ee] transition-all duration-300 cursor-default"
                    :style="{ animationDelay: `${index * 0.1}s` }"
                  >
                    <span class="relative z-10">{{ skill }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-48 border-t border-[#222] relative">
          <!-- Section decoration -->
          <div class="absolute top-0 left-0 w-64 h-64 bg-[#a855f7]/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8 text-center md:text-left">
            <div class="w-full text-center md:text-left">
              <h2 class="text-sm font-medium text-[#22d3ee] uppercase tracking-widest mb-4">Projects</h2>
              <h3 class="text-3xl md:text-4xl font-semibold text-white">Selected Work</h3>
            </div>
            <div class="flex gap-2 mx-auto md:mx-0">
              <div class="w-2 h-2 rounded-full bg-[#22d3ee]"></div>
              <div class="w-2 h-2 rounded-full bg-[#a855f7]"></div>
              <div class="w-2 h-2 rounded-full bg-[#22d3ee]"></div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 w-full">
            <ProyectCard
              v-for="(project, index) in projects"
              :key="project.id"
              :project="project"
              class="animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.15}s` }"
            />
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-48 border-t border-[#222] mb-20 relative">
          <!-- Section decoration -->
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#22d3ee]/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div class="grid lg:grid-cols-2 gap-16 text-center lg:text-left">
            <div class="relative">
              <h2 class="text-sm font-medium text-[#a855f7] uppercase tracking-widest mb-4">Contact</h2>
              <h3 class="text-3xl md:text-4xl font-semibold text-white mb-6">
                Let's work <span class="gradient-text">together</span>.
              </h3>
              <p class="text-[#888] leading-relaxed max-w-md">
                Have a project in mind or just want to say hello? I'd love to hear from you.
              </p>
              
              <!-- Decorative tech specs -->
              <div class="mt-8 space-y-3 text-sm text-[#555]">
                <p class="flex items-center gap-2">
                  <span class="w-1 h-1 bg-[#22d3ee] rounded-full"></span>
                  Response time: < 24h
                </p>
                <p class="flex items-center gap-2">
                  <span class="w-1 h-1 bg-[#a855f7] rounded-full"></span>
                  Available for freelance
                </p>
                <p class="flex items-center gap-2">
                  <span class="w-1 h-1 bg-[#22d3ee] rounded-full"></span>
                  Remote work friendly
                </p>
              </div>
            </div>
            
            <div class="space-y-4 w-full">
              <a 
                href="mailto:alumno@gmail.com" 
                class="group relative flex items-center gap-4 p-6 bg-[#111] border border-[#222] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#22d3ee] hover:bg-[#0a0a0a] hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                <div class="relative p-3 bg-[#22d3ee]/10 rounded-lg text-[#22d3ee] group-hover:bg-[#22d3ee]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div class="absolute inset-0 bg-[#22d3ee] rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity"></div>
                </div>
                <div class="relative z-10">
                  <p class="text-sm text-[#666] uppercase tracking-wider">Email</p>
                  <p class="text-white group-hover:text-[#22d3ee] transition-colors">alumno@gmail.com</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#444] ml-auto group-hover:text-[#22d3ee] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                class="group relative flex items-center gap-4 p-6 bg-[#111] border border-[#222] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#a855f7] hover:bg-[#0a0a0a] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
              >
                <div class="relative p-3 bg-[#a855f7]/10 rounded-lg text-[#a855f7] group-hover:bg-[#a855f7]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div class="absolute inset-0 bg-[#a855f7] rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity"></div>
                </div>
                <div class="relative z-10">
                  <p class="text-sm text-[#666] uppercase tracking-wider">GitHub</p>
                  <p class="text-white group-hover:text-[#a855f7] transition-colors">github.com/eduardo</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#444] ml-auto group-hover:text-[#a855f7] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                class="group relative flex items-center gap-4 p-6 bg-[#111] border border-[#222] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#22d3ee] hover:bg-[#0a0a0a] hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                <div class="relative p-3 bg-[#22d3ee]/10 rounded-lg text-[#22d3ee] group-hover:bg-[#22d3ee]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <div class="absolute inset-0 bg-[#22d3ee] rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity"></div>
                </div>
                <div class="relative z-10">
                  <p class="text-sm text-[#666] uppercase tracking-wider">LinkedIn</p>
                  <p class="text-white group-hover:text-[#22d3ee] transition-colors">linkedin.com/in/eduardo</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#444] ml-auto group-hover:text-[#22d3ee] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>

      <!-- Footer -->
      <footer class="relative border-t border-[#222] py-8 z-20">
        <div class="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-sm text-[#555]">
          <p>© 2025 Eduardo. All rights reserved.</p>
          <p class="flex items-center gap-2">
            <span>Built with</span>
            <span class="text-[#22d3ee] neon-cyan">Vue 3</span>
            <span>+</span>
            <span class="text-[#a855f7] neon-purple">Tailwind</span>
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

/* Background gradient for radial effect */
.bg-gradient-radial {
  background: radial-gradient(ellipse at center, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%);
}

/* Glitch effect styles */
.glitch {
  position: relative;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: -2px 0 #00fff9;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% {
    clip: rect(31px, 9999px, 94px, 0);
  }
  5% {
    clip: rect(62px, 9999px, 56px, 0);
  }
  10% {
    clip: rect(12px, 9999px, 83px, 0);
  }
  15% {
    clip: rect(85px, 9999px, 23px, 0);
  }
  20% {
    clip: rect(42px, 9999px, 67px, 0);
  }
  25% {
    clip: rect(19px, 9999px, 91px, 0);
  }
  30% {
    clip: rect(56px, 9999px, 34px, 0);
  }
  35% {
    clip: rect(91px, 9999px, 12px, 0);
  }
  40% {
    clip: rect(23px, 9999px, 78px, 0);
  }
  45% {
    clip: rect(67px, 9999px, 45px, 0);
  }
  50% {
    clip: rect(34px, 9999px, 89px, 0);
  }
  55% {
    clip: rect(78px, 9999px, 23px, 0);
  }
  60% {
    clip: rect(12px, 9999px, 56px, 0);
  }
  65% {
    clip: rect(45px, 9999px, 78px, 0);
  }
  70% {
    clip: rect(89px, 9999px, 34px, 0);
  }
  75% {
    clip: rect(56px, 9999px, 91px, 0);
  }
  80% {
    clip: rect(23px, 9999px, 12px, 0);
  }
  85% {
    clip: rect(67px, 9999px, 45px, 0);
  }
  90% {
    clip: rect(91px, 9999px, 67px, 0);
  }
  95% {
    clip: rect(34px, 9999px, 23px, 0);
  }
  100% {
    clip: rect(78px, 9999px, 56px, 0);
  }
}

@keyframes glitch-anim2 {
  0% {
    clip: rect(65px, 9999px, 21px, 0);
  }
  5% {
    clip: rect(23px, 9999px, 89px, 0);
  }
  10% {
    clip: rect(78px, 9999px, 45px, 0);
  }
  15% {
    clip: rect(34px, 9999px, 67px, 0);
  }
  20% {
    clip: rect(89px, 9999px, 23px, 0);
  }
  25% {
    clip: rect(12px, 9999px, 56px, 0);
  }
  30% {
    clip: rect(56px, 9999px, 91px, 0);
  }
  35% {
    clip: rect(91px, 9999px, 34px, 0);
  }
  40% {
    clip: rect(45px, 9999px, 78px, 0);
  }
  45% {
    clip: rect(78px, 9999px, 12px, 0);
  }
  50% {
    clip: rect(23px, 9999px, 56px, 0);
  }
  55% {
    clip: rect(67px, 9999px, 34px, 0);
  }
  60% {
    clip: rect(12px, 9999px, 89px, 0);
  }
  65% {
    clip: rect(89px, 9999px, 23px, 0);
  }
  70% {
    clip: rect(34px, 9999px, 67px, 0);
  }
  75% {
    clip: rect(56px, 9999px, 12px, 0);
  }
  80% {
    clip: rect(91px, 9999px, 56px, 0);
  }
  85% {
    clip: rect(23px, 9999px, 78px, 0);
  }
  90% {
    clip: rect(67px, 9999px, 45px, 0);
  }
  95% {
    clip: rect(45px, 9999px, 89px, 0);
  }
  100% {
    clip: rect(78px, 9999px, 34px, 0);
  }
}
</style>
