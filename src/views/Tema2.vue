<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Plan operativo del transporte 
    
    img(data-aos="fade-up")(src="@/assets/curso/tema2/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2
      .col-lg-10
        p.banner-text El plan operativo del transporte es la hoja de ruta que organiza y orienta la ejecución de los servicios de transporte. Define de manera detallada cómo se deben gestionar los recursos, los procedimientos y las actividades para cumplir con los objetivos establecidos. Su función principal es garantizar que la operación sea eficiente, segura, confiable y sostenible, constituyéndose en una herramienta esencial para la gestión logística.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") El plan operativo es un documento integral que convierte los objetivos estratégicos del transporte en acciones concretas y medibles. Establece los pasos a seguir, los responsables, los tiempos y los recursos necesarios para la operación diaria. Su propósito es optimizar el movimiento de personas o mercancías, reduciendo costos y efectos ambientales, al mismo tiempo que asegura altos niveles de calidad, seguridad y cumplimiento. En otras palabras, es el manual práctico que guía las actividades diarias y permite mantener la trazabilidad y el control del sistema de transporte.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2	Características
    
    p.mb-5 El plan operativo del transporte se distingue por ser un instrumento técnico y práctico que orienta la gestión diaria de la operación. Sus características permiten que sea un documento confiable, flexible y enfocado en la seguridad y satisfacción del cliente, garantizando eficiencia y continuidad en el servicio de transporte.

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8
        .bg-fondo-6
          .p-4.p-md-5
            SlyderA(tipo="b").bg-white.tarjeta.p-4
              .row.align-items-center
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema2/4.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Detalle
                  p.mb-0 No se limita a lineamientos generales; define con precisión quién ejecuta cada tarea, en qué momento y con qué recursos. 
              .row.align-items-center
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema2/5.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Adaptabilidad
                  p.mb-0 Es dinámico, se ajusta a cambios en la demanda, innovaciones tecnológicas o nuevas regulaciones.
              .row.align-items-center
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema2/6.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Enfoque holístico
                  p.mb-0 Considera todos los elementos de la operación: infraestructura, flota vehicular, personal, tecnología y recursos financieros.
              .row.align-items-center
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema2/7.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Orientación a la seguridad
                  p.mb-0 La seguridad es eje central, con protocolos claros para la gestión de riesgos y la atención de emergencias.
              .row.align-items-center
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema2/8.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Enfoque al cliente
                  p.mb-0 Para pasajeros, busca mejorar la experiencia y accesibilidad; para mercancías, prioriza entregas seguras y oportunas.
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3	Estructura
    
    p.mb-5 La estructura del plan operativo de transporte se organiza en dos bloques fundamentales. El primero ofrece una visión general que orienta la operación, mientras que el segundo detalla las estrategias específicas para ejecutar y controlar cada aspecto del servicio logístico.

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0.text-text-center 
        div.bg-color-5.tarjeta.h-100
          figure
            img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
          div.text-center.p-5
            h4 Resumen  ejecutivo
            p.text-bold.mb-0 Presenta los objetivos principales y un análisis de la situación actual del transporte. Define metas claras y medibles que orientan la operación, sirviendo como guía estratégica para la toma de decisiones y la mejora continua
      .col-lg-6
        div.bg-color-6.tarjeta.h-100
          figure
            img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
          div.text-center.p-5
            h4 Estrategias operativas
            p.text-bold.mb-0 Detalla cómo se ejecutará el plan: gestión de flota, rutas y personal, incorporación de tecnología, planes de contingencia, asignación de recursos y control con indicadores de desempeño para asegurar eficiencia, seguridad y cumplimiento de objetivos.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4	Evaluación
    
    p.mb-5 La evaluación del plan operativo de transporte es un proceso permanente que permite medir su efectividad y garantizar la mejora continua. A través del análisis de resultados y la retroalimentación de los actores involucrados, se asegura que el plan se mantenga actualizado, eficiente y alineado con los objetivos estratégicos.

    TabsB.color-acento-contenido.mb-5
      .p-5(titulo="Seguimiento  de KPIs" :icono="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 Seguimiento  de KPIs
            p Consiste en monitorear periódicamente los indicadores clave de desempeño para verificar el cumplimiento de metas como puntualidad, costos operativos o satisfacción del usuario.
        
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/11.png', alt='Texto que describa la imagen')
      .p-5(titulo="Análisis de rendimiento" :icono="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 Análisis de rendimiento
            p Examina los resultados obtenidos frente a lo planificado, detectando desviaciones, causas raíz y oportunidades de mejora en el proceso.
        
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/12.png', alt='Texto que describa la imagen')
      .p-5(titulo="Auditorías" :icono="require('@/assets/bullets/3.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 Auditorías
            p Son revisiones formales que garantizan el cumplimiento de protocolos, normativas de seguridad y estándares de calidad establecidos en la operación.
        
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/13.png', alt='Texto que describa la imagen')
      .p-5(titulo="Mecanismos de retroalimentación" :icono="require('@/assets/bullets/4.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 Mecanismos de retroalimentación
            p Recogen la opinión del personal y de los usuarios, integrando su experiencia para optimizar la eficiencia y el servicio.
        
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/14.png', alt='Texto que describa la imagen')
      .p-5(titulo="Revisión y actualización" :icono="require('@/assets/bullets/5.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 Revisión y actualización
            p Ajusta el plan con base en los hallazgos de la evaluación, manteniéndolo vigente y adaptado a cambios normativos, tecnológicos o de mercado.
        
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/15.png', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
