<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const cardRef = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e) => {
  if (!cardRef.value) return
  
  const rect = cardRef.value.getBoundingClientRect()
  mouseX.value = ((e.clientX - rect.left) / rect.width) * 100
  mouseY.value = ((e.clientY - rect.top) / rect.height) * 100
}

const handleMouseLeave = () => {
  mouseX.value = 50
  mouseY.value = 50
}

const rotateStyle = computed(() => {
  const rotateX = (50 - mouseY.value) * 0.1
  const rotateY = (mouseX.value - 50) * 0.1
  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }
})
</script>

<template>
  <article 
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    class="group relative perspective-1000 preserve-3d"
    :style="rotateStyle"
  >
    <!-- Spotlight effect -->
    <div 
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
      :style="{
        background: `radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)`
      }"
    ></div>
    
    <!-- Main card -->
    <div 
      class="relative bg-[#111] border border-[#222] rounded-xl p-6 transition-all duration-500 group-hover:border-[#22d3ee]/30 group-hover:bg-[#0a0a0a] overflow-hidden"
    >
      <!-- Animated border gradient -->
      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div class="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#22d3ee]" style="background-size: 200% 100%;"></div>
      </div>
      
      <!-- Glow effect behind card -->
      <div class="absolute -inset-4 bg-gradient-to-r from-[#22d3ee]/20 via-[#a855f7]/20 to-[#22d3ee]/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
      
      <!-- Corner decorations -->
      <div class="absolute top-4 right-4 w-16 h-16 overflow-hidden">
        <div class="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#22d3ee]/30 rounded-tr-xl transition-all duration-300 group-hover:border-[#22d3ee]"></div>
      </div>
      <div class="absolute bottom-4 left-4 w-16 h-16 overflow-hidden">
        <div class="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#a855f7]/30 rounded-bl-xl transition-all duration-300 group-hover:border-[#a855f7]"></div>
      </div>

      <!-- Card content -->
      <div class="relative z-10">
        <div class="flex justify-between items-start gap-4 mb-4">
          <h3 class="font-semibold text-white text-lg group-hover:text-[#22d3ee] transition-colors duration-200">
            {{ project.title }}
          </h3>
          <div class="flex gap-2 flex-shrink-0">
            <a 
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="relative p-2 text-[#666] hover:text-[#22d3ee] hover:bg-[#22d3ee]/10 rounded-lg transition-all duration-200 group/link"
              aria-label="View demo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span class="absolute inset-0 bg-[#22d3ee] blur-lg opacity-0 group-hover/link:opacity-30 transition-opacity rounded-lg"></span>
            </a>
            <a 
              v-if="project.codeUrl"
              :href="project.codeUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="relative p-2 text-[#666] hover:text-white hover:bg-[#222] rounded-lg transition-all duration-200 group/link"
              aria-label="View code"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span class="absolute inset-0 bg-white blur-lg opacity-0 group-hover/link:opacity-10 transition-opacity rounded-lg"></span>
            </a>
          </div>
        </div>

        <p class="text-[#888] text-sm leading-relaxed mb-4 group-hover:text-[#aaa] transition-colors duration-200">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tag in project.tags" 
            :key="tag"
            class="relative px-2.5 py-1 text-xs font-medium bg-[#0a0a0a] text-[#666] border border-[#222] rounded-md group-hover:border-[#22d3ee]/30 group-hover:text-[#22d3ee] group-hover:bg-[#22d3ee]/5 transition-all duration-200"
          >
            {{ tag }}
          </span>
        </div>
      </div>
      
      <!-- Decorative elements -->
      <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#22d3ee] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl" style="background-size: 200% 100%;"></div>
    </div>
  </article>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

/* Smooth transitions */
a {
  -webkit-tap-highlight-color: transparent;
}
</style>

