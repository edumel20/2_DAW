<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('home')
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const scrollProgress = ref(0)

const navItems = [
  { id: 'home', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'about', label: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { id: 'projects', label: 'Projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  { id: 'contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
]

const socialLinks = [
  { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', url: 'https://github.com' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  // Calculate scroll progress
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (winScroll / height) * 100
  
  // Determine active section
  const sections = ['home', 'about', 'projects', 'contact']
  for (const id of sections.reverse()) {
    const section = document.getElementById(id)
    if (section) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 150) {
        activeSection.value = id
        break
      }
    }
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden',
      isScrolled 
        ? 'bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-[#22d3ee]/30 py-3' 
        : 'bg-transparent py-5'
    ]"
  >
    <!-- Scroll progress bar -->
    <div 
      class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#22d3ee] transition-all duration-100"
      :style="{ width: `${scrollProgress}%` }"
    ></div>
    
    <!-- Background grid pattern -->
    <div 
      class="absolute inset-0 opacity-[0.03]"
      :class="{ 'pointer-events-none': !isScrolled }"
    >
      <div class="absolute inset-0" style="
        background-image: 
          linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px);
        background-size: 50px 50px;
      "></div>
    </div>
    
    <!-- Enhanced gradient orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-[-50%] left-[-10%] w-[40%] h-[40%] bg-[#22d3ee]/10 rounded-full blur-[120px] animate-float" :class="{ 'opacity-0': !isScrolled, 'opacity-100': isScrolled }" style="transition: opacity 0.5s;"></div>
      <div class="absolute top-[-30%] right-[-10%] w-[35%] h-[35%] bg-[#a855f7]/10 rounded-full blur-[120px] animate-float-delayed" :class="{ 'opacity-0': !isScrolled, 'opacity-100': isScrolled }" style="transition: opacity 0.5s; animation-delay: 1s;"></div>
      <div class="absolute top-[10%] left-[40%] w-[20%] h-[20%] bg-[#22d3ee]/8 rounded-full blur-[100px] animate-pulse" :class="{ 'opacity-0': !isScrolled, 'opacity-100': isScrolled }" style="transition: opacity 0.5s;"></div>
      <!-- Additional orbs -->
      <div class="absolute bottom-[-30%] left-[30%] w-[25%] h-[25%] bg-[#a855f7]/6 rounded-full blur-[100px] animate-pulse" :class="{ 'opacity-0': !isScrolled, 'opacity-100': isScrolled }" style="transition: opacity 0.5s; animation-delay: 1.5s;"></div>
    </div>
    
    <!-- Enhanced floating geometric elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Circle top-right -->
      <div 
        class="absolute top-2 right-[20%] w-12 h-12 border border-[#22d3ee]/30 rounded-full animate-float"
        :class="{ 'opacity-0': !isScrolled, 'opacity-100': isScrolled }"
        style="transition: opacity 0.5s; animation-duration: 8s;"
      ></div>
      <!-- Circle bottom-left -->
      <div 
        class="absolute bottom-[-20%] left-[10%] w-16 h-16 border border-[#a855f7]/30 rounded-full animate-float-delayed"
        :class="{ 'opacity-0': !isScrolled, 'opacity-100': isScrolled }"
        style="transition: opacity 0.5s; animation-duration: 10s; animation-delay: 2s;"
      ></div>
      <!-- Rotated square -->
      <div 
        class="absolute top-3 left-[25%] w-8 h-8 border border-[#22d3ee]/30 rotate-45 animate-float"
        :class="{ 'opacity-0': !isScrolled, 'opacity-100': isScrolled }"
        style="transition: opacity 0.5s; animation-duration: 9s; animation-delay: 0.5s;"
      ></div>
      <!-- Triangle decoration -->
      <div 
        class="absolute top-1/2 right-[5%] w-6 h-6 border border-[#a855f7]/30 rotate-180 animate-float"
        :class="{ 'opacity-0': !isScrolled, 'opacity-100': isScrolled }"
        style="transition: opacity 0.5s; animation-duration: 7s; animation-delay: 1s;"
      ></div>
    </div>
    
    <!-- Enhanced glow effect when scrolled -->
    <div 
      v-if="isScrolled"
      class="absolute inset-0 bg-gradient-to-r from-[#22d3ee]/10 via-transparent to-[#a855f7]/10 opacity-60"
    ></div>
    
    <!-- Scanline effect -->
    <div 
      v-if="isScrolled"
      class="absolute inset-0 pointer-events-none"
      style="background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 0.03) 2px, rgba(34, 211, 238, 0.03) 4px);"
    ></div>
    
    <nav class="relative w-full px-6">
      <div class="flex justify-between items-center">
        <!-- Enhanced Logo with multiple effects -->
        <a 
          href="#home" 
          class="group relative flex items-center gap-3"
        >
          <!-- Logo icon with rotation effect -->
          <div class="relative w-10 h-10 flex items-center justify-center">
            <!-- Outer rotating ring -->
            <div 
              class="absolute inset-0 rounded-xl border-2 border-[#22d3ee]/30 animate-spin-slow"
              style="animation-duration: 8s;"
              :class="{ 'opacity-0': !isScrolled, 'opacity-100': isScrolled }"
            ></div>
            <!-- Inner rotating ring (reverse) -->
            <div 
              class="absolute inset-1 rounded-lg border border-[#a855f7]/30 animate-spin-slow"
              style="animation-duration: 10s; animation-direction: reverse;"
              :class="{ 'opacity-0': !isScrolled, 'opacity-100': isScrolled }"
            ></div>
            <!-- Logo text -->
            <span class="relative z-10 text-2xl font-bold text-white group-hover:text-[#22d3ee] transition-all duration-300">
              E<span class="text-[#22d3ee] group-hover:text-[#a855f7] transition-colors duration-300">.</span>
            </span>
            <!-- Glow effect -->
            <span class="absolute inset-0 bg-[#22d3ee] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></span>
          </div>
          
          <!-- Brand name -->
          <div class="hidden sm:block">
            <span class="text-lg font-bold text-white group-hover:text-[#22d3ee] transition-colors duration-300">Eduardo</span>
          </div>
        </a>
        
        <!-- Enhanced Desktop Navigation -->
        <ul class="hidden xl:flex w-full items-center justify-between gap-2 px-4">
          <li v-for="(item, index) in navItems" :key="item.id">
            <a 
              :href="`#${item.id}`"
              :class="[
                'relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg overflow-hidden group',
                activeSection === item.id 
                  ? 'text-[#0a0a0a]' 
                  : 'text-[#888] hover:text-white'
              ]"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <!-- Background for active state with gradient -->
              <span 
                v-if="activeSection === item.id"
                class="absolute inset-0 bg-[#22d3ee] rounded-lg"
              ></span>
              
              <!-- Hover background with gradient -->
              <span 
                class="absolute inset-0 bg-gradient-to-r from-[#22d3ee]/20 via-[#a855f7]/10 to-[#22d3ee]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></span>
              
              <!-- Glow effect -->
              <span 
                v-if="activeSection === item.id"
                class="absolute inset-0 bg-[#22d3ee] blur-md opacity-40 rounded-lg"
              ></span>
              
              <!-- Icon -->
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:scale-110"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                stroke-width="2"
                :stroke="activeSection === item.id ? 'currentColor' : 'currentColor'"
              >
                <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
              </svg>
              
              <span class="relative z-10">{{ item.label }}</span>
              
              <!-- Decorative line for active state -->
              <span 
                v-if="activeSection === item.id"
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0a0a0a] rounded-full"
              ></span>
            </a>
          </li>
        </ul>

        <!-- Enhanced CTA and Social -->
        <div class="hidden xl:flex items-center gap-4">
          <!-- Social links -->
          <div class="flex items-center gap-2 pr-4 border-r border-[#333]">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 text-[#666] hover:text-[#22d3ee] hover:bg-[#22d3ee]/10 rounded-lg transition-all duration-300 group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="toggleMobileMenu"
          class="xl:hidden relative p-2.5 text-[#888] hover:text-white hover:bg-[#222] rounded-lg transition-all duration-300 group"
        >
          <div class="w-6 h-5 flex flex-col justify-between">
            <span 
              :class="[
                'w-full h-0.5 bg-current transition-all duration-300',
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              ]"
            ></span>
            <span 
              :class="[
                'w-full h-0.5 bg-current transition-all duration-300',
                isMobileMenuOpen ? 'opacity-0' : ''
              ]"
            ></span>
            <span 
              :class="[
                'w-full h-0.5 bg-current transition-all duration-300',
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              ]"
            ></span>
          </div>
        </button>
      </div>

      <!-- Enhanced Mobile menu -->
      <transition
        enter-active-class="transition-all duration-400 ease-out"
        enter-from-class="opacity-0 -translate-y-6"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-6"
      >
        <div 
          v-if="isMobileMenuOpen"
          class="xl:hidden absolute top-full left-0 right-0 mt-3 mx-4 glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-[#22d3ee]/10"
        >
          <!-- Mobile menu header -->
          <div class="px-4 py-3 border-b border-[#22d3ee]/20 bg-gradient-to-r from-[#22d3ee]/10 to-[#a855f7]/10">
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-[#22d3ee] rounded-full animate-pulse"></span>
              <span class="text-sm font-medium text-white">Navigation</span>
            </div>
          </div>
          
          <ul class="py-3 px-2 space-y-1">
            <li v-for="(item, index) in navItems" :key="item.id">
              <a 
                :href="`#${item.id}`"
                @click="isMobileMenuOpen = false"
                :class="[
                  'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300',
                  activeSection === item.id 
                    ? 'bg-[#22d3ee]/20 text-[#22d3ee]' 
                    : 'text-[#888] hover:text-white hover:bg-[#222]'
                ]"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
                </svg>
                <span class="font-medium">{{ item.label }}</span>
                <span 
                  v-if="activeSection === item.id"
                  class="ml-auto w-2 h-2 bg-[#22d3ee] rounded-full animate-pulse"
                ></span>
              </a>
            </li>
          </ul>
          
          <!-- Mobile menu footer with social -->
          <div class="px-4 py-3 border-t border-[#222] bg-[#0a0a0a]/50">
            <div class="flex items-center gap-3">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 text-[#666] hover:text-[#22d3ee] hover:bg-[#22d3ee]/10 rounded-lg transition-all duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="w-4 h-4" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path :d="social.icon" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<style scoped>
/* Smooth transitions */
a, button {
  -webkit-tap-highlight-color: transparent;
}

/* Selection color override */
::selection {
  background: rgba(34, 211, 238, 0.3);
  color: #0a0a0a;
}

/* Glass effect */
.glass-strong {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(34, 211, 238, 0.2);
}

/* Slow spin animation */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}
</style>

