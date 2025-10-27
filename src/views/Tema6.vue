<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Informe técnico
    
    img(data-aos="fade-up")(src="@/assets/curso/tema6/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2
      .col-lg-10
        p.banner-text El informe técnico constituye una herramienta clave en la gestión y evaluación de los procesos operativos, ya que permite transformar datos y análisis en información clara y útil para la organización. Su elaboración garantiza que los hallazgos obtenidos durante un diagnóstico se presenten de manera ordenada y comprensible, facilitando la toma de decisiones estratégicas y operativas.
    
    separador
    
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Concepto
    
    p.mb-5 El informe técnico es un documento formal y estructurado que presenta de manera clara, objetiva y precisa los hallazgos de un análisis o diagnóstico de procesos operativos. Su propósito principal es comunicar información técnica compleja a una audiencia específica, como gerencia, equipos operativos, clientes o inversionistas, de forma que pueda ser comprendida, evaluada y utilizada como base para la toma de decisiones:

    .bg-full-width.bg-fondo-2
      .p-4.p-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Fundamentar  decisiones 
                p.text-center Provee datos y análisis para justificar inversiones, cambios de procesos, capacitaciones o reestructuraciones.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Documentar hallazgos
                p.text-center Sirve como registro oficial de metodologías, resultados y conclusiones de un análisis. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Impulsar la mejora continua 
                p.text-center Al identificar problemas y oportunidades, se convierte en hoja de ruta para acciones correctivas y preventivas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Evaluar el desempeño
                p.text-center Permite comparar la situación actual con metas o estándares, mostrando avances o necesidades de ajuste.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Rendición de cuentas
                p.text-center Evidencia el cumplimiento de proyectos, auditorías o iniciativas de mejora.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Transparencia y comunicación
                p.text-center Facilita el entendimiento entre diferentes áreas sobre el estado de las operaciones de transporte.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Generación de conocimiento
                p.text-center Aporta al acervo de la organización, fortaleciendo el aprendizaje sobre sus propios procesos.
    
          .col-lg-4.order-1.mb-3.mn-lg-0
            figure
              img(src='@/assets/curso/tema6/2.png', alt='')
    
    separador
    
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2	Estructura del informe
    
    p.mb-5 La estructura de un informe técnico debe responder a un orden lógico y estandarizado que facilite la comprensión y permita a los lectores acceder rápidamente a la información relevante. Para lograrlo, el contenido se organiza en secciones diferenciadas, cada una con un propósito específico, que en conjunto garantizan claridad, validez metodológica y aplicabilidad de los resultados.

    .row
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/10.png", data-aos="zoom-in")
      .col-lg-8
        TabsA.color-primario
          .tarjeta.bg-fondo-5.px-4.py-5(titulo="Introducción")
            h4 1. Introducción
            p Contextualiza el propósito y alcance del informe. Incluye página de título, tabla de contenido, resumen ejecutivo con objetivos y hallazgos clave, además de una introducción general que explica la justificación y el contexto del estudio.
          .tarjeta.bg-fondo-5.px-4.py-5(titulo="Desarrollo")
            h4 2. Desarrollo
            p.mb-0 Presenta el cuerpo del informe. Contiene antecedentes del problema, objetivos específicos, alcance del estudio y la metodología utilizada, detallando herramientas, fuentes de información, técnicas de muestreo y <em>software</em> que validan la confiabilidad del diagnóstico.
          .tarjeta.bg-fondo-5.px-4.py-5(titulo="Resultados y análisis")
            h4 3. Resultados y análisis
            p.mb-0 Expone datos obtenidos y su interpretación. Incluye hallazgos organizados, análisis de resultados con métodos cualitativos o cuantitativos y una discusión sobre el significado de los datos, implicaciones operativas y comparación con estándares del sector.
          .tarjeta.bg-fondo-5.px-4.py-5(titulo="Conclusiones y recomendaciones")
            h4 4. Conclusiones y recomendaciones
            p.mb-0 Resume los hallazgos principales y propone acciones de mejora. Las conclusiones responden a los objetivos iniciales, mientras que las recomendaciones son propuestas claras, accionables, realistas y orientadas a resultados, con posibilidad de priorización y cronograma de aplicación.
          .tarjeta.bg-fondo-5.px-4.py-5(titulo="Anexos y bibliografía")
            h4 5. Anexos y bibliografía
            p.mb-0 Aporta material complementario y referencias. Los anexos incluyen documentos de apoyo, bases de datos o entrevistas. La bibliografía recoge las fuentes consultadas o citadas, fortaleciendo la validez y transparencia del informe técnico.
    
    separador
    
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3	Presentación de resultados 
    
    p.mb-5 La presentación de resultados en un informe técnico de transporte debe ser clara, visual y enfocada en la toma de decisiones. Para ello, se emplean diferentes recursos gráficos y métricas que facilitan la comprensión de datos, tendencias y hallazgos de manera efectiva.

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/12.png", data-aos="zoom-in")
      .col-lg-8
        .bg-fondo-6
          .p-4.p-md-5
            SlyderA(tipo="b").bg-white.tarjeta.p-4
              .row.align-items-center
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema6/13.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Gráficos  de barras
                  p.mb-0 Comparan categorías como desempeño por modo de transporte o carga mensual.
              .row.align-items-center
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema6/14.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Gráficos de líneas
                  p.mb-0 Muestran tendencias a lo largo del tiempo, como entregas o consumo.
              .row.align-items-center
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema6/15.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Gráficos circulares
                  p.mb-0 Representan proporciones, como costos por tipo o incidencias por causa.
              .row.align-items-center
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema6/16.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Diagramas de flujo
                  p.mb-0 Visualizan procesos, pasos y responsables, detectando ineficiencias.
              .row.align-items-center
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema6/17.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Mapas de calor o geoespaciales
                  p.mb-0 Revelan patrones geográficos como congestión, riesgos o puntos de entrega.
              .row.align-items-center
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema6/18.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Tablas
                  p.mb-0 Organizan datos detallados y comparativos como KPI, costos o rutas.

    .bg-color-4.mb-5.tarjeta
      .px-4.px-md-5.py-4.text-center
        p.mb-0 La presentación de resultados en los informes técnicos de transporte constituye la fase final donde los datos se transforman en información clara y accionable. A través de gráficos, tablas, mapas e indicadores, se facilita la comprensión de hallazgos y se orienta la toma de decisiones hacia la mejora continua y la eficiencia operativa.
    
    

</template>

<script>
export default {
  name: 'Tema6',
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
