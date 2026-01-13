<template>
    <div>
        <h1>Componente 2</h1>
        <p>Valor del contador desde el hijo: {{ counter.count }}</p>
        <button @click="counter.increment">Incrementar desde el hijo</button>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore()
</script>