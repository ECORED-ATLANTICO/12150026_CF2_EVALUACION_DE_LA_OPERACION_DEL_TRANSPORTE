export default {
  global: {
    Name:
      'Ejecución del plan diagnóstico de procesos operativos de transporte.',
    Description:
      'Este componente formativo aborda fundamentos teóricos y prácticos de la ejecución de planes de diagnóstico en procesos operativos de transporte. Explora procesos operativos, normatividad, calidad y evaluación logística. Permite al aprendiz analizar, planificar y presentar informes técnicos que optimicen la operación y aseguren la mejora continua.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Proceso operativo del transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos  ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características  ',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Etapas  ',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Diagramas de flujo  ',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plan operativo del transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características  ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estructura  ',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Evaluación  ',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normatividad de los procesos operativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de normativas   ',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Calidad en los procesos operativos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto ',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Sistemas de gestión ',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Aseguramiento de la operación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Mejora continua',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Diagnóstico de procesos operativos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Estructura ',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Conclusiones y recomendaciones ',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Informe técnico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto ',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Estructura del informe ',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Presentación de resultados ',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Proceso operativo del transporte',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, 11 de julio). Procedimientos operativos de tránsito y transporte [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=H3MbZ3Q7fsU',
    },
    {
      tema: 'Diagnóstico de procesos operativos',
      referencia:
        'Evaluación de procesos operativos (Taller Mapa de Procesos) [Video]. (s. f.). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=f8MQ1yD-lj4',
    },
  ],
  glosario: [
    {
      termino: 'Calidad operativa',
      significado:
        'Grado en que un proceso de transporte cumple con los requisitos establecidos, enfocado en satisfacción del cliente, reducción de errores y mejora continua.',
    },
    {
      termino: 'Diagnóstico operativo',
      significado:
        'Evaluación sistemática de los procesos logísticos de transporte para identificar fortalezas, debilidades, oportunidades de mejora y puntos críticos.',
    },
    {
      termino: 'Planificación del transporte',
      significado:
        'Fase inicial en la que se definen rutas, recursos, horarios y condiciones para cumplir eficientemente con las entregas o desplazamientos.',
    },
    {
      termino: 'Diagramas de flujo',
      significado:
        'Representaciones gráficas que muestran la secuencia de actividades y decisiones en los procesos de transporte.',
    },
    {
      termino: 'Etapas del proceso',
      significado:
        'Fases del transporte: planificación, ejecución, monitoreo y cierre, que aseguran trazabilidad y cumplimiento del servicio.',
    },
    {
      termino: 'Indicadores de desempeño (KPIs)',
      significado:
        'Métricas cuantificables para evaluar el rendimiento del transporte, como puntualidad, costos, utilización de flota y seguridad.',
    },
    {
      termino: 'Informe técnico',
      significado:
        'Documento formal que presenta hallazgos, análisis y recomendaciones derivados de un diagnóstico de procesos operativos.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Estrategia para optimizar procesos de transporte mediante ajustes constantes, reducción de desperdicios y aplicación de metodologías como PHVA.',
    },
    {
      termino: 'Normatividad',
      significado:
        'Conjunto de leyes, reglamentos y estándares que regulan el transporte y garantizan seguridad, legalidad y sostenibilidad.',
    },
    {
      termino: 'Planificación del transporte',
      significado:
        'Fase inicial en la que se definen rutas, recursos, horarios y condiciones para cumplir eficientemente con las entregas o desplazamientos.',
    },
    {
      termino: 'Proceso operativo',
      significado:
        'Conjunto de actividades planificadas y estructuradas que se ejecutan para transportar bienes o personas de un punto a otro, garantizando eficiencia, seguridad y cumplimiento.',
    },
    {
      termino: 'Productividad',
      significado:
        'Medida que indica cuánto valor genera un recurso en la operación, por ejemplo: cantidad de entregas por vehículo o por conductor en un período.',
    },
    {
      termino: 'Seguridad vial',
      significado:
        'Medidas preventivas y correctivas aplicadas en el transporte terrestre para proteger la vida, la carga y la infraestructura.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Enfoque que integra prácticas ambientales y sociales en los procesos de transporte para reducir impactos negativos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cámara de Comercio Internacional. (2020). Incoterms® 2020: Reglas para el uso de los términos comerciales en contratos internacionales.',
      link:
        'https://iccwbo.org/resources-for-business/incoterms-rules/incoterms-2020/',
    },
    {
      referencia:
        'Cartagena, M. P. (2009). Manual de calidad para la empresa de transporte especial Expreso Costa Sur Ltda. [Tesis de pregrado, Universidad de Nariño]. Universidad de Nariño, Repositorio Institucional.',
      link: 'https://sired.udenar.edu.co/11530/1/80539.pdf',
    },
    {
      referencia:
        'Colombia. Ministerio de Transporte. (2001). Decreto 173 de 2001: Por el cual se reglamenta el Servicio Público de Transporte Terrestre Automotor de Carga.',
      link: 'https://mintransporte.gov.co/descargar.php?idFile=130',
    },
    {
      referencia:
        'Colombia. Ministerio de Transporte. (2002). Decreto 1609 de 2002: Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6101',
    },
    {
      referencia:
        'Díaz de Santos, M. M. T. (2013). Transporte, operadores, redes. Editorial Díaz de Santos.',
      link: 'https://www.editdiazdesantos.com/wwwdat/pdf/9788499696379.pdf',
    },
    {
      referencia:
        'International Maritime Organization (IMO). (2016). SOLAS: International Convention for the Safety of Life at Sea, 1974 (enmienda VGM).',
      link:
        'https://www.imo.org/en/About/Conventions/Pages/International-Convention-for-the-Safety-of-Life-at-Sea-(SOLAS),-1974.aspx',
    },
    {
      referencia:
        'Instituto Interamericano de Desarrollo (IDB). (2015). Guía logística: Aspectos conceptuales y prácticos de la logística de cargas. Banco Interamericano de Desarrollo.',
      link:
        'https://publications.iadb.org/publications/spanish/document/Gu%C3%ADa-log%C3%ADstica-aspectos-conceptuales-y-pr%C3%A1cticos-de-la-log%C3%ADstica-de-cargas-%282015%29.pdf',
    },
    {
      referencia:
        'Ministerio de Transporte de Colombia. (2012). Norma Técnica NTC 2880: Transporte y manejo terrestre de cilindros con mercancías peligrosas [PDF]. ICONTEC.',
      link:
        'https://mintransporte.gov.co/asuntosambientales/descargar.php?id=2924',
    },
    {
      referencia:
        'Ministerio de Transporte de Colombia. (2015a). Instructivo: Normas de transporte terrestre de pasajeros y carga [PDF].',
      link: 'https://www.appaura.com.co/repository/PR-2025-006-0009.pdf',
    },
    {
      referencia:
        'Ministerio de Transporte de Colombia. (2015b). Decreto 1079 de 2015. Reglamento Único del Sector Transporte. Diario Oficial No. 49.403 de 26 de mayo de 2015.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
