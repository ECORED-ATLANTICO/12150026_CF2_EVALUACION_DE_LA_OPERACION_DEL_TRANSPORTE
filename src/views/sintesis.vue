<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.align-items-center
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/1.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p El componente formativo “Ejecución del plan diagnóstico de procesos operativos de transporte” permite comprender los fundamentos de la gestión operativa, desde su conceptualización hasta su aplicación práctica. Se inicia con el estudio del proceso operativo del transporte, así como sus tipos, características, etapas y diagramas de flujo. Posteriormente, se profundiza en el plan operativo, lo que permite establecer su importancia en la planificación, organización y control de las operaciones. 
        p Asimismo, se analizan las normativas aplicables, proporcionando herramientas para garantizar el cumplimiento legal y regulatorio. Se presentan los sistemas de gestión de calidad que influyen en la eficiencia de la operación, así como estrategias de aseguramiento y mejora continua. La documentación aborda el diagnóstico de procesos operativos, permitiendo identificar fortalezas, debilidades y oportunidades de optimización. Para fortalecer la aplicación de estos conceptos, se detallan los aspectos de la estructura del informe técnico y la presentación de resultados. Finalmente, se analiza la importancia de las conclusiones y recomendaciones como base para la toma de decisiones y la mejora de la gestión en el transporte.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo “Ejecución del plan diagnóstico de procesos operativos de transporte” ofrece una aproximación integral a los conocimientos fundamentales sobre la gestión de los procesos operativos y la planificación de la operación en el transporte. Este módulo analiza detalladamente el proceso operativo, resaltando sus tipos, características y etapas en cuanto a su aplicabilidad y eficiencia, y se desglosan los diagramas de flujo como herramienta clave para la visualización de procedimientos. Asimismo, se estudian los elementos que conforman el plan operativo, su estructura, características y criterios de evaluación. La propuesta profundiza en la normatividad vigente que regula el transporte, así como en los sistemas de gestión de calidad que garantizan el aseguramiento de la operación y la mejora continua. Además, se destacan las metodologías para el diagnóstico de procesos, junto con la elaboración del informe técnico, enfatizando la presentación de resultados y conclusiones como soporte para la toma de decisiones y la optimización de las operaciones de transporte. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
