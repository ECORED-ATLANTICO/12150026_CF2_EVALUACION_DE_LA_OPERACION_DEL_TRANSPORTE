<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Calidad en los procesos operativos
    
    img(data-aos="fade-up")(src="@/assets/curso/tema4/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2
      .col-lg-10
        p.banner-text La calidad en los procesos operativos asegura que todas las actividades se realicen con eficiencia, precisión y coherencia, generando valor para el cliente y fortaleciendo la confiabilidad del servicio. Se enfoca en la excelencia desde la planificación hasta la entrega final, promoviendo experiencias satisfactorias y relaciones duraderas con los usuarios.
    
    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1	Concepto 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
      .col-lg-8
        .p-5(data-aos="fade-left")
          .row.align-items-start.mb-3
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Se define como el grado en que los procesos operativos cumplen con los requisitos explícitos e implícitos del cliente, así como con las especificaciones técnicas y la normatividad vigente en cada una de sus etapas. Esto abarca desde la planificación inicial hasta la entrega final y el servicio posventa.
          .cajon.color-secundario.p-4.mb-4.bg-color-4
            p.mb-0(data-aos="fade-left") En el transporte, la calidad se refleja en la eficiencia y confiabilidad de cada etapa del servicio. Garantiza que las entregas sean oportunas, que la carga llegue en perfecto estado, que se cumplan los protocolos de seguridad, que la comunicación con clientes y proveedores sea clara, y que la experiencia final del cliente sea satisfactoria y genere confianza en la empresa.
    
    TabsB.color-acento-contenido.mb-5
      .p-5(titulo="Entregas puntuales y completas (OTIF)" :icono="require('@/assets/bullets/6.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 1. Entregas puntuales y completas (OTIF)
            p Asegura que la mercancía llegue a tiempo y en la cantidad exacta, contribuyendo al desempeño y satisfacción del cliente.
        
          .col-lg-4
            figure
              img(src='@/assets/curso/tema4/4.png', alt='Texto que describa la imagen')
      .p-5(titulo="Integridad de la carga" :icono="require('@/assets/bullets/7.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 2. Integridad de la carga
            p Garantiza que los productos lleguen sin daños ni pérdidas, mediante embalaje adecuado y manejo correcto durante el transporte.
        
          .col-lg-4
            figure
              img(src='@/assets/curso/tema4/5.png', alt='Texto que describa la imagen')
      .p-5(titulo="Seguridad en la operación y cumplimiento legal" :icono="require('@/assets/bullets/8.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 3. Seguridad en la operación y cumplimiento legal
            p Mantiene protocolos de seguridad para el personal, la carga y el entorno, cumpliendo todas las normativas vigentes.
        
          .col-lg-4
            figure
              img(src='@/assets/curso/tema4/6.png', alt='Texto que describa la imagen')
      .p-5(titulo="Comunicación eficiente con clientes y proveedores" :icono="require('@/assets/bullets/9.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 4. Comunicación eficiente con clientes y proveedores
            p Proporciona información clara y oportuna sobre el estado de la carga, cualquier eventualidad y su resolución.
        
          .col-lg-4
            figure
              img(src='@/assets/curso/tema4/7.png', alt='Texto que describa la imagen')
      .p-5(titulo="Satisfacción del cliente final" :icono="require('@/assets/bullets/10.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 5. Satisfacción del cliente final
            p Busca generar experiencias positivas que fortalezcan la lealtad y la reputación de la empresa.
        
          .col-lg-4
            figure
              img(src='@/assets/curso/tema4/8.png', alt='Texto que describa la imagen')
    
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2	Sistemas de gestión 
    
    p.mb-5 Un Sistema de Gestión de la Calidad (SGC) en logística es una estructura organizada de políticas, procesos, procedimientos y recursos que busca planificar, ejecutar, controlar y mejorar continuamente todas las actividades del servicio de transporte. Su implementación estandariza operaciones, reduce errores y optimiza la eficiencia, garantizando la satisfacción del cliente y la confiabilidad del servicio. Entre los principales sistemas aplicables y certificaciones en logística y transporte se encuentran:

    .bg-full-width.bg-fondo-2
      .p-4.p-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 ISO 9001:2015 
                p.text-center Estándar internacional de gestión de calidad que promueve la satisfacción del cliente, enfoque basado en procesos, mejora continua (PDCA) y gestión de riesgos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 ISO 28000
                p.text-center Gestión de la seguridad en la cadena de suministro, controlando riesgos como robos, sabotajes y fraudes, ideal para cargas sensibles o de alto valor. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 BASC 
                p.text-center Certificación voluntaria que fortalece la seguridad en la cadena logística y previene delitos como tráfico ilícito, contrabando o terrorismo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 OEA
                p.text-center Estatus otorgado por aduanas a empresas que cumplen con criterios de seguridad, con beneficios como simplificación aduanera y menores controles.
    
          .col-lg-4.order-1.mb-3.mn-lg-0
            figure
              img(src='@/assets/curso/tema4/9.png', alt='')

        p.mb-5 Un SGC logístico se fundamenta en una estructura organizada de políticas, procedimientos y mecanismos de control que aseguran la planificación, ejecución, monitoreo y mejora continua de los procesos de transporte. Su implementación permite estandarizar operaciones, garantizar consistencia en el servicio y fortalecer la eficiencia y confiabilidad de la organización.

    .row.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/14.png", data-aos="zoom-in")
      .col-lg-8
        .bg-fondo-6
          .p-4.p-md-5
            SlyderA(tipo="b").bg-white.tarjeta.p-4
              .row.align-items-center.justify-content-center
                .col-6.col-md-4.col-lg-2.mb-3.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema4/15.svg")
                .col-lg-10
                  h5 Políticas  y objetivos de calidad
                  p.mb-0 Declaraciones que definen el compromiso de la organización con la calidad y las metas a alcanzar.
              .row.align-items-center
                .col-6.col-md-4.col-lg-2.mb-3.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema4/16.svg")
                .col-lg-10
                  h5 Procedimientos normalizados de operación (SOPs)
                  p.mb-0 Documentos detallados que describen paso a paso cómo se deben realizar las tareas críticas, asegurando consistencia en las operaciones.
              .row.align-items-center
                .col-6.col-md-4.col-lg-2.mb-3.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema4/17.svg")
                .col-lg-10
                  h5 Registros de control
                  p.mb-0 Documentación que evidencia la realización de actividades y el cumplimiento de requisitos, como listas de chequeo de vehículos, registros de entrega y reportes de incidentes.
              .row.align-items-center
                .col-6.col-md-4.col-lg-2.mb-3.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema4/18.svg")
                .col-lg-10
                  h5 Auditorías internas
                  p.mb-0 Revisiones sistemáticas y periódicas de los procesos para verificar el cumplimiento del SGC e identificar áreas de mejora.
              .row.align-items-center
                .col-6.col-md-4.col-lg-2.mb-3.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema4/19.svg")
                .col-lg-10
                  h5 Acciones correctivas y preventivas (AC/AP)
                  p.mb-0 Mecanismos para abordar no conformidades (AC) y prevenir que los problemas ocurran o se repitan (AP).
              .row.align-items-center
                .col-6.col-md-4.col-lg-2.mb-3.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema4/20.svg")
                .col-lg-10
                  h5 Revisión por la dirección
                  p.mb-0 Evaluaciones periódicas del SGC por parte de la alta gerencia para asegurar su eficacia y adecuación.
    
    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3	Aseguramiento de la operación
    
    p.mb-5 El aseguramiento de la operación es un proceso integral que combina control y prevención para garantizar que cada etapa del transporte cumpla con los estándares de calidad, seguridad y eficiencia. Se diferencia del control de calidad en que no solo detecta errores, sino que previene su ocurrencia, promoviendo operaciones confiables y sostenibles.

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0.text-text-center 
        div.bg-color-7.tarjeta.h-100
          figure
            img(src="@/assets/curso/tema4/21.png", data-aos="zoom-in")
          div.p-5
            h4.text-center Control  de calidad
            p Verificación de que los procesos cumplan los estándares; enfoque reactivo para corregir errores:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-8
                p.mb-0 Revisar entregas completas y puntuales.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-8
                p.mb-0 Inspeccionar estado de la carga.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-8
                p.mb-0 Monitorear rutas y tiempos con GPS.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-8
                p.mb-0 Validar condiciones de seguridad.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-8
                p.mb-0 Auditar proveedores.
      .col-lg-6
        div.bg-color-4.tarjeta.h-100
          figure
            img(src="@/assets/curso/tema4/22.png", data-aos="zoom-in")
          div.p-5
            h4.text-center Aseguramiento de la calidad.
            p Prevención de errores mediante sistemas y buenas prácticas; enfoque proactivo:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-8
                p.mb-0 Capacitar continuamente al personal.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-8
                p.mb-0 Implementar protocolos de cargue, despacho y trazabilidad.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-8
                p.mb-0 Usar <em>checklists</em> operativos.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-8
                p.mb-0 Estandarizar embalajes y unitarización.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-8
                p.mb-0 Mantener preventivamente la flota.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-8
                p.mb-0 Seleccionar y evaluar proveedores.
    
    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4	Mejora continua
    
    p La mejora continua es un enfoque sistemático para perfeccionar los procesos de transporte, optimizar recursos, eliminar desperdicios y adaptarse de manera ágil a los cambios del entorno operativo. Este enfoque asegura que los procesos sean eficientes, confiables y sostenibles en el tiempo, incrementando la calidad del servicio y la satisfacción del cliente.
    p Uno de los métodos más utilizados para implementar la mejora continua es el Ciclo PHVA (Planear-Hacer-Verificar-Actuar, o PDCA por sus siglas en inglés), que permite gestionar los cambios de manera estructurada y progresiva.

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            img.d-flex.d-md-none(src='@/assets/curso/tema4/24.svg', alt='', style="max-width: 1106px;").mx-auto
            ImagenInfografica.d-none.d-md-flex.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema4/23.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-9.box-shadow.tarjeta(x="11%" y="108.5%" numero="1")
                .row.align-items-center
                  .col-lg-3
                    figure
                      img.d-none.d-lg-flex(src='@/assets/curso/tema4/25.png', alt='').mx-auto
                  .col-lg-9.p-4.px-lg-4
                    h5 <em>Plan</em> (Planear)
                    p.mb-0   Identificar oportunidades de mejora, definir problemas o áreas críticas y establecer objetivos claros y alcanzables.
                    div.justify-content-end.d-flex
                      h3.bg-color-10 1
              .bg-color-9.box-shadow.tarjeta(x="37%" y="108.5%" numero="2")
                .row.align-items-center
                  .col-lg-3
                    figure
                      img.d-none.d-lg-flex(src='@/assets/curso/tema4/26.png', alt='').mx-auto
                  .col-lg-9.p-4.px-lg-4
                    h5 <em>Do</em> (Hacer)
                    p.mb-0   Implementar el plan de mejora en una escala controlada para evaluar su efectividad.
                    div.justify-content-end.d-flex
                      h3.bg-color-10 2
              .bg-color-9.box-shadow.tarjeta(x="63%" y="108.5%" numero="3")
                .row.align-items-center
                  .col-lg-3
                    figure
                      img.d-none.d-lg-flex(src='@/assets/curso/tema4/27.png', alt='').mx-auto
                  .col-lg-9.p-4.px-lg-4
                    h5 <em>Check</em> (Verificar)
                    p.mb-0   Evaluar los resultados obtenidos mediante indicadores y compararlos con los objetivos definidos en la fase de planificación.
                    div.justify-content-end.d-flex
                      h3.bg-color-10 3
              .bg-color-9.box-shadow.tarjeta(x="89%" y="108.5%" numero="4")
                .row.align-items-center
                  .col-lg-3
                    figure
                      img.d-none.d-lg-flex(src='@/assets/curso/tema4/28.png', alt='').mx-auto
                  .col-lg-9.p-4.px-lg-4
                    h5 <em>Act</em> (Actuar)
                    p.mb-0   Estandarizar las mejoras exitosas, corregir desviaciones y ajustar procesos para asegurar su implementación permanente.
                    div.justify-content-end.d-flex
                      h3.bg-color-10 4
    
    .row.mb-5.align-items-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/29.png", data-aos="zoom-in")
      .col-lg-9
        .p-4(data-aos="fade-left")
          p El ciclo PHVA es fundamental en el transporte, ya que permite planear, ejecutar, verificar y actuar sobre los procesos operativos, asegurando que las rutas, flotas y cargas se gestionen de manera eficiente y confiable. Su importancia radica en que ayuda a identificar fallos logísticos, estandarizar procedimientos, reducir tiempos, errores y costos operativos, y garantizar el cumplimiento de normativas y estándares de calidad, como la ISO 9001. Su aplicación práctica se evidencia en la optimización de rutas, el control de calidad en cargue y descargue, la seguridad vial y la mejora de indicadores como OTIF, contribuyendo directamente a la satisfacción del cliente y a la eficiencia de la operación.
          .cajon.color-secundario.p-4.bg-color-4
            p.mb-0(data-aos="fade-left") Además del ciclo PHVA, existen otras metodologías que complementan la mejora continua en el transporte, enfocándose en eliminar desperdicios, optimizar recursos y fomentar la participación de todo el equipo, como <em>Lean</em> <em>Logistics</em> y <em>Kaizen</em>, que permiten fortalecer la eficiencia operativa y la sostenibilidad del servicio.
    
    .bg-full-width.bg-fondo-2
      .p-4.p-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/30.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-11
                .p-4.text-center
                  h4 <em>Lean  Logistics</em>
                  p Filosofía que busca maximizar el valor para el cliente mediante la eliminación de desperdicios en la cadena de suministro. Permite optimizar rutas, reducir tiempos muertos, minimizar costos logísticos y mejorar la eficiencia de la operación.

          .col-lg-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/31.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-11
                .p-4.text-center
                  h4 <em>Kaizen</em>
                  p Filosofía de mejora continua basada en la participación de todo el equipo. Permite identificar problemas, proponer soluciones y ejecutar cambios constantes, optimizando rutas, consolidando cargas, mejorando la seguridad y fomentando la eficiencia operativa sostenible.

    img(data-aos="fade-up")(src="@/assets/curso/tema4/32.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        p.banner-text La mejora continua aplicada al transporte constituye una estrategia clave para garantizar operaciones ágiles, seguras y competitivas. A través del ciclo PHVA se logra estructurar el perfeccionamiento de los procesos, mientras que metodologías complementarias como <em>Lean Logistics</em> y <em>Kaizen</em> refuerzan la eficiencia al reducir desperdicios y promover la participación del talento humano. De esta manera, las organizaciones del sector transporte no solo optimizan recursos y cumplen con los estándares de calidad, sino que también fortalecen su capacidad de adaptación frente a los retos del entorno, generando valor sostenible para los clientes y para la cadena logística en su conjunto.
    

</template>

<script>
export default {
  name: 'Tema4',
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
