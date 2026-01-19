<template>
  <div class="contacto-view">
    <h2 class="view-title">Contacto</h2>
    <p class="view-subtitle">¿Tienes alguna pregunta o quieres trabajar juntos?</p>
    
    <div class="contacto-content">
      <div class="contacto-info">
        <div class="info-card">
          <i class="pi pi-envelope info-icon"></i>
          <h3>Email</h3>
          <a :href="'mailto:' + contacto.email">{{ contacto.email }}</a>
        </div>
        
        <div class="info-card">
          <i class="pi pi-github info-icon"></i>
          <h3>GitHub</h3>
          <a :href="contacto.github" target="_blank">github.com/eduardo</a>
        </div>
        
        <div class="info-card">
          <i class="pi pi-linkedin info-icon"></i>
          <h3>LinkedIn</h3>
          <a :href="contacto.linkedin" target="_blank">linkedin.com/in/eduardo</a>
        </div>
      </div>
      
      <div class="contacto-form-container">
        <h3>Envíame un mensaje</h3>
        <form @submit.prevent="enviarMensaje" class="contacto-form">
          <div class="form-field">
            <label for="nombre">Nombre</label>
            <InputText 
              id="nombre" 
              v-model="formulario.nombre" 
              placeholder="Tu nombre"
              class="form-input"
              required
            />
          </div>
          
          <div class="form-field">
            <label for="email">Email</label>
            <InputText 
              id="email" 
              v-model="formulario.email" 
              type="email"
              placeholder="tu@email.com"
              class="form-input"
              required
            />
          </div>
          
          <div class="form-field">
            <label for="asunto">Asunto</label>
            <InputText 
              id="asunto" 
              v-model="formulario.asunto" 
              placeholder="Asunto del mensaje"
              class="form-input"
              required
            />
          </div>
          
          <div class="form-field">
            <label for="mensaje">Mensaje</label>
            <Textarea 
              id="mensaje" 
              v-model="formulario.mensaje" 
              rows="5"
              placeholder="Tu mensaje..."
              class="form-input"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            label="Enviar Mensaje" 
            icon="pi pi-send"
            class="submit-btn"
            :loading="enviando"
          />
        </form>
        
        <Message 
          v-if="mensajeEnviado" 
          severity="success" 
          :closable="false"
          class="mensaje-feedback"
        >
          ¡Mensaje enviado! Gracias por contactar conmigo.
        </Message>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import cvData from '@/data/cv.json';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import Message from 'primevue/message';

// Interface para datos de contacto
interface Contacto {
  email: string;
  linkedin: string;
  github: string;
}

const contacto = ref<Contacto>({
  email: '',
  linkedin: '',
  github: ''
});

const formulario = ref({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: ''
});

const enviando = ref(false);
const mensajeEnviado = ref(false);

onMounted(() => {
  contacto.value = cvData.contacto;
});

const enviarMensaje = async () => {
  enviando.value = true;
  
  // Simular envío de mensaje
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mostrar mensaje de éxito
  mensajeEnviado.value = true;
  
  // Resetear formulario
  formulario.value = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };
  
  enviando.value = false;
  
  // Ocultar mensaje después de 5 segundos
  setTimeout(() => {
    mensajeEnviado.value = false;
  }, 5000);
};
</script>

<style scoped>
.contacto-view {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.view-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  text-align: center;
}

.view-subtitle {
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.contacto-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
}

.contacto-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-3px);
}

.info-icon {
  font-size: 2.5rem;
  color: #42b983;
  margin-bottom: 0.75rem;
}

.info-card h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.info-card a {
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
}

.info-card a:hover {
  text-decoration: underline;
}

.contacto-form-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.contacto-form-container h3 {
  margin: 0 0 1.5rem 0;
  color: #2c3e50;
}

.form-field {
  margin-bottom: 1.25rem;
}

.form-field label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 500;
}

.form-input {
  width: 100%;
}

.submit-btn {
  width: 100%;
  background: #42b983;
  border-color: #42b983;
  margin-top: 0.5rem;
}

.submit-btn:hover {
  background: #3aa876;
  border-color: #3aa876;
}

.mensaje-feedback {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .contacto-view {
    padding: 1rem;
  }
  
  .view-title {
    font-size: 2rem;
  }
  
  .contacto-content {
    grid-template-columns: 1fr;
  }
}
</style>

