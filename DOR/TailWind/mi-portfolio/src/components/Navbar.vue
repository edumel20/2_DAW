<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('home')
const isScrolled = ref(false)

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
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
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#222]' : 'bg-transparent'
    ]"
  >
    <nav class="max-w-4xl mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <a href="#home" class="text-xl font-bold text-white hover:text-[#22d3ee] transition-colors">
          Eduardo<span class="text-[#22d3ee]">.</span>
        </a>
        
        <ul class="hidden md:flex gap-8 text-sm">
          <li v-for="item in navItems" :key="item.id">
            <a 
              :href="`#${item.id}`"
              :class="[
                'transition-all duration-200 hover:text-[#22d3ee]',
                activeSection === item.id 
                  ? 'text-[#22d3ee]' 
                  : 'text-[#888]'
              ]"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <!-- Mobile menu button -->
        <button class="md:hidden p-2 text-[#888] hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

