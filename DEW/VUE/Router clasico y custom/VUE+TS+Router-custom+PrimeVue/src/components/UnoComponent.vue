<template>
    <div>
        <h1>Uno Componente</h1>
        <p>Contador actual: {{ counter.count }}</p>
        <p>Doble del contador: {{ counter.doubleCount }}</p>
        <button @click="counter.increment">Incrementar</button>
        <DosComponent />
    </div>
</template>

<script setup lang="ts">
    import DosComponent from "./Doscomponent.vue"
    import { useCounterStore } from "@/stores/counter";

    const counter = useCounterStore()
</script>

