<template>
    <div>
        <p>Soy ButtonAutoCount</p>
        <button @click="count++">Pulsado {{ count }} veces.</button>
        <br>
        <input @onChange="a"></input>
        <br>
        <input @onChange="b"></input>

        <p>Valor de a: {{ a }}</p>
        <p>Valor de b: {{ b }}</p>

    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    let count = ref<number>(0)
    let a = ref<number>(0)
    let b = ref<number>(0)
</script>

<style scoped>
</style>