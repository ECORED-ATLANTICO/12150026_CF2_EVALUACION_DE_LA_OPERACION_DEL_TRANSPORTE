<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> aplicar metodologías diagnósticas para analizar procesos operativos de transporte e identificar oportunidades de mejora.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'El proceso operativo del transporte incluye solo la fase de ejecución del servicio',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 2,
          texto:
            'Las etapas del proceso operativo del transporte son: planificación, ejecución, monitoreo y cierre.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 3,
          texto:
            'La gestión de flota hace parte de los procesos operativos del transporte terrestre.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 4,
          texto:
            'La trazabilidad en el transporte permite conocer la ubicación de la carga en tiempo real.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 5,
          texto:
            ' Un sistema de monitoreo puede incluir GPS y sensores de temperatura.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 6,
          texto:
            ' La planificación de rutas es una tarea exclusiva del transporte marítimo.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 7,
          texto:
            'En transporte fluvial, las operaciones en terminales no hacen parte del proceso operativo.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 8,
          texto:
            'La calidad en los procesos operativos busca únicamente reducir costos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 9,
          texto:
            'El plan operativo no contempla el tipo de vehículo a utilizar.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 10,
          texto:
            'El ciclo PHVA es una herramienta útil para la mejora continua en logística.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 11,
          texto:
            'Un sistema de gestión de calidad puede ayudar a prevenir errores operativos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 12,
          texto:
            'El plan operativo debe estar alineado con los objetivos estratégicos de la empresa.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 13,
          texto:
            'El control y aseguramiento de la calidad no son necesarios si se cumplen los tiempos de entrega.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 14,
          texto:
            'La flexibilidad operativa implica adaptarse a cambios inesperados en la operación.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 15,
          texto:
            'La mejora continua en transporte se logra repitiendo siempre el mismo proceso.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 16,
          texto:
            'El nivel de satisfacción del cliente es un indicador clave en la calidad del transporte.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 17,
          texto:
            ' El plan operativo es estático y no debe ajustarse durante la operación.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 18,
          texto:
            'La seguridad vial solo aplica a transporte de carga peligrosa.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 19,
          texto:
            'El uso de tecnología en transporte mejora la trazabilidad y el control de operaciones.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
        {
          id: 20,
          texto:
            'La sostenibilidad es un aspecto considerado dentro de la calidad de procesos operativos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, tiene conocimientos de los procesos en transporte.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
