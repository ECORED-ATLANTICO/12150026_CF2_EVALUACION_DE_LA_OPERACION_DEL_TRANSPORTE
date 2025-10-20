<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Diagnóstico de procesos operativos
    
    img(data-aos="fade-up")(src="@/assets/curso/tema5/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2
      .col-lg-10
        p.banner-text El diagnóstico de procesos operativos en el transporte constituye un paso esencial para garantizar que las actividades logísticas se desarrollen con eficiencia, seguridad y calidad. A través de este análisis, las empresas pueden revisar de manera integral cómo se llevan a cabo los procesos de planeación, ejecución y control, identificando las debilidades que limitan el desempeño y reconociendo al mismo tiempo las oportunidades de mejora. Este enfoque permite tomar decisiones fundamentadas que contribuyen a optimizar recursos, fortalecer el cumplimiento normativo y elevar la satisfacción del cliente.

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Concepto
    
    p.mb-5 El diagnóstico de procesos operativos en el transporte es un análisis sistemático de las actividades de movimiento, almacenamiento y gestión de la información de la carga, cuyo propósito es evaluar la eficiencia, seguridad, calidad y rentabilidad de cada fase, desde la planificación hasta la entrega final.

    .row.align-items-start
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/2.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="Identificar  ineficiencias")
            p Revelar dónde se pierden recursos como tiempo, dinero o esfuerzo debido a procesos redundantes, desorganizados o lentos.
    
          .div(titulo="Detectar cuellos de botella")
            p Localizar los puntos críticos que ralentizan el flujo de la cadena de suministro, como áreas congestionadas, trámites aduaneros o problemas de coordinación.
    
          .div(titulo="Evaluar cumplimiento normativo y de seguridad")
            p Verificar que las operaciones cumplan con las leyes, regulaciones y estándares de seguridad para evitar sanciones, accidentes o afectación de la reputación.
    
          .div(titulo="Medir la calidad del servicio")
            p Determinar si se cumplen las expectativas del cliente en puntualidad, integridad de la carga y comunicación efectiva.
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .div(titulo="Descubrir oportunidades de mejora")
        p Identificar áreas donde la innovación, la tecnología o cambios en la metodología puedan generar ahorros o mejorar el servicio.

      .div(titulo="Fundamentar la toma de decisiones")
        p Aportar información objetiva y basada en datos para orientar inversiones y priorizar acciones de mejora.
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Estructura 
    
    p.mb-5 La estructura de un diagnóstico de procesos operativos se compone de fases claramente definidas que permiten organizar el trabajo de manera lógica y ordenada. Cada una de estas fases cumple una función específica y se complementa con la siguiente, garantizando así la fiabilidad de los resultados y la utilidad de los hallazgos para la mejora de la operación de transporte.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg-color-6.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema5/3.svg', alt='Texto que describa la imagen')
          
        h2.text-center 1. Recolección de datos
        p Se define el alcance del diagnóstico, se identifican las fuentes de información, se diseñan instrumentos como entrevistas o encuestas y se ejecuta la recolección activa en documentos, sistemas y observaciones en campo.
      .col-md.tarjeta.bg-color-7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema5/4.svg', alt='Texto que describa la imagen')
          
        h2.text-center 2. Análisis de datos
        p Se consolida y valida la información obtenida, aplicando análisis cualitativo y cuantitativo. Además, se realiza el mapeo de procesos As-Is para describir cómo funcionan actualmente y ubicar los problemas más relevantes.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.bg-color-6.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema5/5.svg', alt='Texto que describa la imagen')
          
        h2.text-center 3. Interpretación de datos
        p Se identifican causas raíz de los problemas, se generan hallazgos clave (insights) y se cuantifica el impacto de las ineficiencias, convirtiendo los datos en evidencia para la toma de decisiones.
    
    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Conclusiones y recomendaciones 
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/6.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") La etapa final del diagnóstico consiste en sintetizar los hallazgos y transformarlos en propuestas útiles y accionables que orienten la toma de decisiones.
        p Las conclusiones corresponden al resumen de los hallazgos más importantes del diagnóstico. Deben:
        ul.lista-ul--color
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-8
            p.mb-0 Ser concisas y objetivas.
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-8
            p.mb-0 Relacionarse directamente con los objetivos iniciales.
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-8
            p.mb-0 Enfocarse en el qué y el porqué de los problemas detectados.
    
    p.mb-5 Las recomendaciones son propuestas concretas para superar las brechas y cuellos de botella identificados. Deben cumplir con los siguientes criterios:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-7.p-4.tarjeta(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Accionables
              p.mb-0 Definidas con pasos claros y ejecutables.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-7.p-4.tarjeta(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Medibles
              p.mb-0 Permitan dar seguimiento a su implementación y evaluar los resultados.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4.tarjeta(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Realistas
              p.mb-0 Alineadas con los recursos disponibles: presupuesto, personal y tecnología.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4.tarjeta(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Orientadas a resultados
              p.mb-0 Dirigidas al logro de objetivos de mejora como eficiencia, reducción de costos o incremento de seguridad.



</template>

<script>
export default {
  name: 'Tema5',
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
