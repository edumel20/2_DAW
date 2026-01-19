<template>
  <div class="experiencia-view">
    <h2 class="view-title">Experiencia Profesional</h2>
    <p class="view-subtitle">Mi trayectoria laboral</p>
    
    <div class="experiencia-content">
      <div class="timeline">
        <div 
          v-for="exp in experiencia" 
          :key="exp.id" 
          class="timeline-item"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3 class="timeline-title">{{ exp.puesto }}</h3>
              <span class="timeline-date">{{ formatearFechas(exp.fechaInicio, exp.fechaFin) }}</span>
            </div>
            <h4 class="timeline-company">{{ exp.empresa }}</h4>
            <p class="timeline-description">{{ exp.descripcion }}</p>
          </div>
        </div>
      </div>
      
      <div class="download-section">
        <Button 
          label="Descargar CV en PDF" 
          icon="pi pi-download" 
          @click="descargarCV"
          class="download-btn"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import cvData from '@/data/cv.json';
import Button from 'primevue/button';

// Interface para mantener la estructura tipada
interface Experiencia {
  id: number;
  empresa: string;
  puesto: string;
  fechaInicio: string;
  fechaFin: string;
  descripcion: string;
}

const experiencia = ref<Experiencia[]>([]);

onMounted(() => {
  experiencia.value = cvData.experiencia;
});

const formatearFechas = (inicio: string, fin: string): string => {
  const meses: { [key: string]: string } = {
    '01': 'Enero', '02': 'Febrero', '03': 'Marzo', '04': 'Abril',
    '05': 'Mayo', '06': 'Junio', '07': 'Julio', '08': 'Agosto',
    '09': 'Septiembre', '10': 'Octubre', '11': 'Noviembre', '12': 'Diciembre'
  };
  
  const formatear = (fecha: string) => {
    if (fecha === 'Presente') return fecha;
    const [year, month] = fecha.split('-');
    return `${meses[month]} ${year}`;
  };
  
  return `${formatear(inicio)} - ${formatear(fin)}`;
};

const descargarCV = () => {
  // Crear contenido del CV en texto plano
  const cvContent = generarContenidoCV();
  
  // Crear blob y descargar
  const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'CV_Eduardo.txt';
  link.click();
  URL.revokeObjectURL(link.href);
};

const generarContenidoCV = (): string => {
  let contenido = `CURRICULUM VITAE - EDUARDO
===========================

SOBRE MÍ
--------
${cvData.sobreMi.titulo}

${cvData.sobreMi.bio}

CONTACTO
--------
Email: ${cvData.contacto.email}
LinkedIn: ${cvData.contacto.linkedin}
GitHub: ${cvData.contacto.github}

EXPERIENCIA PROFESIONAL
-----------------------

`;
  
  experiencia.value.forEach((exp, index) => {
    contenido += `${index + 1}. ${exp.puesto}
   Empresa: ${exp.empresa}
   Período: ${formatearFechas(exp.fechaInicio, exp.fechaFin)}
   Descripción: ${exp.descripcion}

`;
  });
  
  contenido += `
HABILIDADES TÉCNICAS
--------------------

`;
  cvData.habilidades.forEach(h => {
    contenido += `• ${h.nombre} (${h.nivel}%) - ${h.categoria}
  ${h.descripcion}

`;
  });
  
  contenido += `
PROYECTOS DESTACADOS
--------------------

`;
  cvData.proyectos.forEach(p => {
    contenido += `• ${p.titulo}
  ${p.descripcion}
  Enlace: ${p.enlace}

`;
  });
  
  contenido += `
===========================
Generado desde Portfolio Personal
===========================
`;
  
  return contenido;
};
</script>

<style scoped>
.experiencia-view {
  padding: 2rem;
  max-width: 900px;
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

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e0e0e0;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 16px;
  height: 16px;
  background: #42b983;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #42b983;
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.timeline-title {
  margin: 0;
  font-size: 1.25rem;
  color: #2c3e50;
}

.timeline-date {
  color: #42b983;
  font-weight: 600;
  font-size: 0.9rem;
}

.timeline-company {
  margin: 0 0 0.75rem 0;
  color: #666;
  font-size: 1rem;
}

.timeline-description {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.download-section {
  margin-top: 2rem;
  text-align: center;
}

.download-btn {
  background: #2c3e50;
  border-color: #2c3e50;
}

.download-btn:hover {
  background: #1a252f;
  border-color: #1a252f;
}

@media (max-width: 768px) {
  .experiencia-view {
    padding: 1rem;
  }
  
  .view-title {
    font-size: 2rem;
  }
  
  .timeline-header {
    flex-direction: column;
  }
}
</style>

