export default {
  global: {
    Name: 'Productos del Sistema Moda',
    Description:
      'Este componente aborda los atributos, las tipologías y la organización de los productos del Sistema Moda. Relaciona la producción de colecciones, las medidas corporales y el lanzamiento comercial con la información necesaria para comunicar una oferta de manera clara, pertinente y responsable en entornos digitales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
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
        titulo: 'Atributos y características de los productos de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Atributos interiores, exteriores y simbólicos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Criterios de clasificación de los productos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Niveles del producto y propuesta de valor',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipologías de productos de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Calzado: componentes, materiales y procesos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Marroquinería: productos, materiales y elaboración',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Vestuario: características y tipologías de prendas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Accesorios de moda: características y usos',
            hash: 't_2_4',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mezcla de productos de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Portafolio y líneas de productos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Amplitud, profundidad y longitud de la mezcla',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estrategias de ampliación y actualización del portafolio',
            hash: 't_3_3',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Proceso de producción de colecciones de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Análisis del mercado y planeación de la colección',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Diseño, prototipos y fichas técnicas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Producción, validación y control de calidad',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Preparación comercial y seguimiento del producto',
            hash: 't_4_4',
          },
        ],
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estructura del cuerpo, medidas y tallaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Estructura corporal y su relación con el vestuario',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Análisis, clasificación y toma de medidas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Cuadros de tallas, ajuste e información para la compra digital',
            hash: 't_5_3',
          },
        ],
      },

      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Lanzamiento del producto de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Planeación del lanzamiento',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Comunicación y presentación comercial del producto',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Ciclo de vida comercial y seguimiento de resultados',
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
  glosario: [
    {
      termino: 'Amplitud',
      significado:
        'Cantidad de líneas que conforman la mezcla de productos de una empresa.',
    },
    {
      termino: 'Antropometría',
      significado:
        'Estudio de las dimensiones y proporciones del cuerpo humano mediante procedimientos de medición.',
    },
    {
      termino: 'Aparado',
      significado:
        'Operación de unión de las piezas que conforman el corte o parte superior del calzado.',
    },
    {
      termino: 'Atributo',
      significado:
        'Característica física, de presentación o simbólica que permite identificar y diferenciar un producto.',
    },
    {
      termino: 'Ciclo de vida comercial',
      significado:
        'Modelo que permite analizar la evolución de un producto en el mercado mediante etapas como introducción, crecimiento, madurez y declive.',
    },
    {
      termino: 'Colección',
      significado:
        'Conjunto de productos relacionados por una propuesta de diseño, un público y determinadas ocasiones de uso.',
    },
    {
      termino: 'Control de calidad',
      significado:
        'Conjunto de verificaciones que permite comprobar la correspondencia entre el producto y las especificaciones establecidas.',
    },
    {
      termino: 'Cuadro de tallas',
      significado:
        'Tabla que relaciona denominaciones de talla con medidas o rangos, indicando si corresponden al cuerpo o a la prenda.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'Documento que reúne las especificaciones de materiales, medidas, construcción y calidad necesarias para desarrollar y producir un modelo.',
    },
    {
      termino: 'Holgura',
      significado:
        'Diferencia prevista entre las medidas de una prenda y las del cuerpo, según el diseño, el material y el uso.',
    },
    {
      termino: 'Lanzamiento',
      significado:
        'Proceso de presentación de un producto al mercado que coordina comunicación, disponibilidad, comercialización y seguimiento.',
    },
    {
      termino: 'Línea de productos',
      significado:
        'Grupo de productos relacionados por su función, público, características u otros criterios definidos por la empresa.',
    },
    {
      termino: 'Longitud',
      significado:
        'Total de productos que integran una mezcla, calculado según una unidad de conteo definida, como modelos o referencias.',
    },
    {
      termino: 'Marroquinería',
      significado:
        'Actividad de elaboración de artículos como bolsos, billeteras y cinturones, tradicionalmente vinculada con el trabajo del cuero.',
    },
    {
      termino: 'Mezcla de productos',
      significado:
        'Conjunto de líneas y productos que una empresa ofrece al mercado; también se denomina portafolio o cartera.',
    },
    {
      termino: 'Patronaje',
      significado:
        'Proceso de elaboración de patrones que definen las piezas y dimensiones necesarias para construir una prenda.',
    },
    {
      termino: 'Profundidad',
      significado:
        'Variedad de versiones disponibles de un producto, como opciones de talla, color o material.',
    },
    {
      termino: 'Propuesta de valor',
      significado:
        'Expresión de lo que ofrece un producto, a quién resulta útil y qué beneficios puede aportar mediante características y servicios comprobables.',
    },
    {
      termino: 'Prototipo',
      significado:
        'Versión de prueba de un producto utilizada para evaluar su construcción, dimensiones, ajuste y funcionamiento.',
    },
    {
      termino: 'Variante',
      significado:
        'Opción específica de un modelo que se diferencia por características como talla, color o material.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arnolfo, M. F., Valletta, F. B., Zárate, L. C., Ferraro, L. M., Urdiró, V., & Acosta Seró, O. (2026). Indumentaria del mercado <em>online</em> argentino durante 2025: Relación con la Ley de Talles de la Ciudad de Buenos Aires y medidas antropométricas nacionales. SALUD pública: Revista del Ministerio de Salud de la Provincia de Buenos Aires, 5.',
      link: 'https://saludpublica.ms.gba.gov.ar/index.php/revista/article/view/546',
    },
    {
      referencia:
        'Campines Barría, F. J. (2024). El producto y sus atributos como factores fundamentales de las estrategias de <em>marketing</em>. Ciencia Latina Revista Científica Multidisciplinar, 8(1), 1239-1252.',
      link: 'https://doi.org/10.37811/cl_rcm.v8i1.9511',
    },
    {
      referencia:
        'Hotmart. (2024, 15 de marzo). Mezcla de productos: cómo sacarle partido a esta estrategia.',
      link: 'https://hotmart.com/es/blog/que-es-mezcla-de-productos-ejemplos',
    },
    {
      referencia:
        'INESCOP. (2024). Informe del estado del arte sobre ensamblado y formas de reciclaje de calzado [Entregable E.2.1 del proyecto DIS4REC].',
      link: 'https://www.inescop.es/images/Proyectos/Regionales/2024/DIS4REC/E2.1_Estado_del_arte_sobre_desensamblado_y_reciclaje_de_calzado.pdf',
    },
    {
      referencia:
        'Observatorio del Sector Textil y Moda. (2024). Informe 2023–24 de circularidad textil y moda.',
      link: 'https://observatoriotextilymoda.es/wp-content/uploads/2024/10/Informe_Observatorio-Textil-y-Moda-2024.pdf',
    },
    {
      referencia:
        'Pursell, S. (2025, 14 de noviembre). 10 estrategias para un lanzamiento de producto exitoso. HubSpot.',
      link: 'https://blog.hubspot.es/marketing/lanzamiento-de-producto',
    },
    {
      referencia:
        'Redacción Emprendedores. (2025, 4 de junio). ¿Qué es una cartera de productos? Ventajas, ejemplos y cómo definirlas. Emprendedores.',
      link: 'https://emprendedores.es/gestion/que-es-cartera-de-productos/',
    },
    {
      referencia:
        'Shopify. (2024, 26 de noviembre). Ciclo de vida del producto: Definición, etapas y ejemplos.',
      link: 'https://www.shopify.com/es/blog/ciclo-de-vida-del-producto',
    },
    {
      referencia:
        'Valero Zorraquino, J., Nacher Fernández, B., Alemany Mut, S., Gil Mora, S., & González García, J. C. (2024). Aplicación de <em>Big Data</em> antropométrico para la mejora del proceso de diseño y venta de indumentaria. Revista de Biomecánica, (71).',
      link: 'https://www.ibv.org/actualidad/aplicacion-de-big-data-antropometrico-para-la-mejora-del-proceso-de-diseno-y-venta-de-indumentaria/',
    },
    {
      referencia:
        'Vásquez Velásquez, L. M. (2026). Cartilla de montaje colección de vestuario. Servicio Nacional de Aprendizaje, Centro de Formación en Diseño, Confección y Moda.',
      link: 'https://repositorio.sena.edu.co/handle/11404/8775',
    },
    {
      referencia:
        'Velásquez Restrepo, S. M., Giraldo Vásquez, D. H., & Gaviria Londoño, F. A. (2024). Diseño, confección y moda en Colombia: Una compilación de retos y oportunidades derivados de la clasificación única de ocupaciones. Servicio Nacional de Aprendizaje; Universidad de Antioquia.',
      link: 'https://repositorio.sena.edu.co/handle/11404/8428',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
