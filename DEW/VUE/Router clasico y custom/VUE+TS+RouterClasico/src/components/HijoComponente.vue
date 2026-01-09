<template>
    <div>
      <h2>Componente Hijo</h2>
      <p>{{ alumno?.nombre }} {{ alumno?.curso }}</p>
      <button @click="mandarMensaje">Enviar mensaje</button>
    </div>
  </template>
  
  <script setup lang="ts">
    import { ComponentTypeEmits } from 'vue'
    defineProps({
        alumno: Object,
    })

    const emit = defineEmits([])

    const mandarMensaje = () => {
        emit('envia-mensaje', "Hola desde el hijo")
    }
  </script>