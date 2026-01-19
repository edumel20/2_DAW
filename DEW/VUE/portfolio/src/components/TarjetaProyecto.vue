<template>
  <div class="tarjeta-proyecto">
    <img :src="proyecto.imagen" :alt="proyecto.titulo" class="proyecto-imagen" />
    <div class="proyecto-contenido">
      <h3 class="proyecto-titulo">{{ proyecto.titulo }}</h3>
      <p class="proyecto-descripcion">{{ proyecto.descripcion }}</p>
      <a :href="proyecto.enlace" target="_blank" class="proyecto-enlace">
        <i class="pi pi-github"></i>
        Ver Proyecto
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  enlace: string;
  imagen: string;
}

interface Props {
  proyecto: Proyecto;
}

defineProps<Props>();
</script>

<style scoped>
.tarjeta-proyecto {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.tarjeta-proyecto:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.proyecto-imagen {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.proyecto-contenido {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.proyecto-titulo {
  margin: 0 0 0.75rem 0;
  font-size: 1.25rem;
  color: #2c3e50;
  font-weight: 600;
}

.proyecto-descripcion {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 1rem;
}

.proyecto-enlace {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: #f0f9f4;
  border-radius: 6px;
  align-self: flex-start;
  transition: background 0.2s ease;
}

.proyecto-enlace:hover {
  background: #e0f0e8;
}
</style>

