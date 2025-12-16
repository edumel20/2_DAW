<script setup lang="ts">
import { ref } from 'vue'
//import { useRouter } from 'vue-router'
import Menubar from 'primevue/menubar'

const items = ref([
  {
    label: 'Sobre mi',
    icon: 'pi pi-warehouse',
    route: '/AboutMe',
  },
  {
    label: 'Habilidades',
    icon: 'pi pi-pen-to-square',
    route: '/Skills',
  },
])
</script>

<template>
  <div class="card">
    <Menubar :model="items">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menubar>
  </div>
  <RouterView />
</template>

<style scoped></style>
