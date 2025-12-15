<script setup lang="ts">
import ButtonAutoCount from './components/ButtonAutoCount.vue';
import Menubar from 'primevue/menubar';
import { ref } from "vue";
import { PrimeIcons } from '@primevue/core/api';
import { useRouter } from 'vue-router';

const route = useRouter();

const items = ref([
    {
        label: 'Sobre mí',
        icon: 'pi pi-face-smile',
        route: '/AboutMe'
    },
    {
        label: 'Habilidades',
        icon: 'pi pi-asterisk',
        route: '/Skills'
    },
  
]);
</script>

<template>
     <div class="card">
        <Menubar :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span>{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
                </a>
            </template>
        </Menubar>
    </div>
    <RouterView/>

  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <ButtonAutoCount/>
</template>

<style scoped></style>
