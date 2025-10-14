<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        .row
          .col-lg-2.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/2.svg", data-aos="zoom-in")
          .col-lg-10.order-lg-1
            p(data-aos="fade-left") El componente formativo “Ejecución del plan diagnóstico de procesos operativos de transporte” ofrece al aprendiz herramientas técnicas y prácticas para abordar la planificación, evaluación y optimización de procesos operativos en transporte. A partir del conocimiento de los procesos, normatividad, sistemas de gestión de calidad y métodos de diagnóstico, se fortalecen competencias analíticas y estratégicas para tomar decisiones que aseguren eficiencia, seguridad y mejora continua en la operación.
    
        .bg-fondo-1.px-5.py-4(data-aos="fade-left")
          p.mb-0 Este componente también enfatiza la elaboración de informes técnicos y en la aplicación de indicadores de desempeño, con un enfoque en la sistematización y control de actividades logísticas. Además, promueve la interpretación crítica de resultados y la implementación de soluciones basadas en estándares de calidad. Así, se contribuye a la formación de profesionales capaces de optimizar la operación de transporte, garantizando eficacia, cumplimiento normativo y proyección estratégica en entornos laborales complejos.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
