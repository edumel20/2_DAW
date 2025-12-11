<template>
    <div class="flex flex-column" style="width: 50%; text-align: center;">
        <h3>Soy ButtonAutoCount</h3>
        <Button @click="count++">Pulsado {{ count }} veces.</Button>
        <br>
        <br>
        <InputNumber v-model.number="a"></InputNumber>
        <br>
        <InputNumber v-model.number="b"></InputNumber>

        <p>El resultado de sumar {{ a }} y {{ b }} es {{ result }}</p>
        
        <h3>Suma usando objetos</h3>
        <InputNumber v-model.number="suma.a"></InputNumber>
        <br>
        <InputNumber v-model.number="suma.b"></InputNumber>
        <p>El resultado de sumar {{ suma.a }} y {{ suma.b }} es {{ suma.result }}</p>

    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import { computed, ref, reactive} from 'vue'
    
function sumar() {
    return a.value + b.value
}

const count = ref<number>(0)
const a = ref<number>(0)
let b = ref<number>(0)
const result = computed<number>(sumar)
const suma = reactive ({
    a:0,
    b:0,
    get result (){
        return this.a + this.b
    }
})
</script>

<style scoped>
</style>