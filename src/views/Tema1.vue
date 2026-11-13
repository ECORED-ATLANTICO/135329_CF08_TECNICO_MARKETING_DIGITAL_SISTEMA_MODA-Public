<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Atributos y características de los productos de moda

    .bg_img_1.mb-3

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src="@/assets/curso/tema1/img_2.png")
        .bloque-texto-t__texto.col-12.col-lg-10.mb-0
          p.mb-0 Un producto de moda puede reconocerse por sus materiales, su construcción y su apariencia. También adquiere valor por los servicios que lo acompañan y por los significados que las personas relacionan con él. Comprender estas características permite describirlo y comunicar sus beneficios con claridad.

      Separador

      #t_1_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 1.1 Atributos interiores, exteriores y simbólicos
      .mb-0 
      
      .bloque-texto-g.color-secundario-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/img_14.png')})`}"
          role="img"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los atributos son características que permiten identificar y diferenciar un producto. Su análisis comprende tanto los elementos físicos como su presentación y las asociaciones que genera en el consumidor. A continuación, se describen las tres dimensiones del producto de moda:
     
    .row.justify-content-center.cursor-pointer.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-lg-4(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img_3.png", class="img-fluid")
          .crd_hover_txt--body_2
            h4.mb-3 1. Atributos interiores
            p.mb-3 Son las características propias del producto: composición, materiales, construcción, diseño, acabados, dimensiones y ajuste. Permiten explicar cómo está elaborado y qué condiciones ofrece para su utilización.
            p.mb-3 #[strong Ejemplo aplicado:] una empresa de moda describe una camisa mediante la composición del tejido, el tipo de cuello, la manga, las costuras y las medidas. Estos datos ayudan al consumidor a conocer la prenda antes de comprarla.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-lg-4(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img_4.png", class="img-fluid")
          .crd_hover_txt--body_2
            h4.mb-3 2. Atributos exteriores
            p.mb-3 Son los elementos que acompañan la presentación, identificación y entrega del producto, como las etiquetas, el empaque y el embalaje. Además de protegerlo o identificarlo, pueden comunicar información necesaria para su uso y cuidado.
            p.mb-3 #[strong Ejemplo aplicado:] una camisa incorpora una etiqueta con su composición y recomendaciones de lavado. El empaque permite entregarla protegida, mientras que la referencia facilita identificarla dentro del catálogo de la empresa.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-lg-(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img_5.png", class="img-fluid")
          .crd_hover_txt--body_2
            h4.mb-3 3. Atributos simbólicos
            p.mb-3 Son los significados que las personas asocian con el producto y la marca. Se relacionan con experiencias, preferencias, identidad y pertenencia. Su interpretación puede variar entre consumidores y contextos.
            p.mb-3 #[strong Ejemplo aplicado:] una persona puede elegir una chaqueta porque relaciona su diseño con un estilo sobrio. Otra puede seleccionar la misma prenda por la confianza que le generan sus experiencias anteriores con la empresa.

    p.mb-0 La marca, el empaque y la etiqueta intervienen en la identificación y diferenciación del producto. Por ello, su presentación debe mantener correspondencia con las características que se comunican al consumidor (Campines Barría, 2024).

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2 Criterios de clasificación de los productos
    .mb-0 

    .tarjeta.color-acento-contenido-5.p-3.mb-3
      p.mb-0 Los productos pueden organizarse mediante distintos criterios. Esta clasificación facilita construir catálogos, agrupar referencias y presentar alternativas de compra. Un mismo artículo puede pertenecer simultáneamente a varias clasificaciones.

    br
    br
    br

    .bg_img_2.mb-0

      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-5.mb-0
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h4.mb-3 Precio y exclusividad
            p.mb-3 Este criterio considera el posicionamiento comercial, el grado de exclusividad y las condiciones de elaboración de la oferta. Permite diferenciar productos de amplia distribución, propuestas especializadas o artículos realizados por encargo. El precio debe analizarse junto con las características del producto.
            p.mb-3 #[strong Ejemplo aplicado:] una empresa ofrece una línea de camisas de producción regular y otra confeccionada por encargo. Cada línea requiere una descripción que explique sus materiales, opciones de personalización y condiciones de entrega.
          .col-12.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img_7.png", class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h4.mb-3 Público destinatario
            p.mb-3 Agrupa los productos según las necesidades y características de quienes los utilizarán. Puede considerar la edad, las preferencias, las medidas corporales y los requerimientos de uso.
            p.mb-3 #[strong Ejemplo aplicado:] una empresa organiza su vestuario infantil por rangos de talla y características de las prendas. Incluye medidas y tipos de cierre para facilitar la elección de quienes realizan la compra.
          .col-12.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img_8.png", class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h4.mb-3 Ocasión de uso
            p.mb-3 Relaciona los productos con las actividades y situaciones para las cuales se proponen: trabajo, descanso, actividad física, celebraciones o uso cotidiano. Esta clasificación orienta la búsqueda, aunque una prenda puede utilizarse en distintos contextos.
            p.mb-3 #[strong Ejemplo aplicado:] una empresa presenta un pantalón para uso laboral y describe su corte, bolsillos y cuidados. También muestra combinaciones que permiten utilizarlo en situaciones cotidianas.
          .col-12.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img_9.png", class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h4.mb-3 Materiales y construcción
            p.mb-3 Distingue los productos según su composición y forma de elaboración. Incluye fibras, tejidos, cuero, otros materiales, uniones y acabados. Esta información ayuda a explicar diferencias de apariencia, comportamiento y mantenimiento.
            p.mb-3 #[strong Ejemplo aplicado:] una empresa diferencia un bolso de cuero de otro elaborado en material textil. En cada descripción especifica la composición de sus partes y las recomendaciones de cuidado correspondientes.
          .col-12.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img_10.png", class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h4.mb-3 Tipo de producto y función
            p.mb-3 Organiza la oferta en grupos como vestuario, calzado, marroquinería y accesorios. Dentro de cada grupo pueden establecerse divisiones según la parte del cuerpo que cubren o la función que cumplen.
            p.mb-3 #[strong Ejemplo aplicado:] una tienda digital agrupa su oferta en prendas superiores, prendas inferiores, calzado y accesorios. Cada categoría permite acceder a referencias con información sobre características, tallas y disponibilidad.
          .col-12.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img_11.png", class="img-fluid")

    br
    br
    br

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.3 Niveles del producto y propuesta de valor
    .mb-0 

    .tarjeta.color-acento-contenido-5.p-3.mb-5
      p.mb-0 El análisis de un producto también considera lo que el consumidor espera recibir, los servicios adicionales y las posibilidades de mejora. Estas dimensiones ayudan a construir una propuesta de valor relacionada con necesidades concretas.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-6.col-lg-3.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img_12.png", class="img-fluid")   
      .col-12.col-lg-7.mb-0
        AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta color-adicional-2")
          div(titulo="Producto genérico")
            p.mb-3 Corresponde a la solución básica que se ofrece mediante el artículo. Permite reconocer qué es y cuál es su función principal.
            p.mb-3 #[strong Ejemplo aplicado:] una empresa ofrece una chaqueta como prenda exterior. El consumidor reconoce su forma, material y características generales de uso.
          div(titulo="Producto esperado")
            p.mb-3 Comprende las condiciones que el consumidor espera encontrar de acuerdo con la descripción, el precio y las condiciones informadas.
            p.mb-3 #[strong Ejemplo aplicado:] al comprar la chaqueta, la persona espera recibir la referencia, el color y la talla seleccionados, con acabados adecuados y correspondencia con la información publicada.
          div(titulo="Producto aumentado")
            p.mb-3 Incluye beneficios o servicios adicionales que complementan la oferta. Para aportar valor, deben resultar útiles y estar disponibles en las condiciones anunciadas.
            p.mb-3 #[strong Ejemplo aplicado:] una empresa incluye un servicio de ajuste de mangas en determinadas chaquetas. Antes de la compra, informa su alcance, los tiempos y las condiciones de acceso.
          div(titulo="Producto potencial")
            p.mb-3 Reúne las mejoras que podrían incorporarse para responder a necesidades identificadas. Se relaciona con la innovación y la evolución de la oferta.
            p.mb-3 #[strong Ejemplo aplicado:] después de revisar comentarios de compradores, una empresa evalúa incorporar distintos largos de manga. Antes de ofrecerlos, desarrolla y valida las nuevas opciones.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Una empresa comercializa una chaqueta con capucha desmontable y bolsillos con cierre. Su propuesta puede destacar las posibilidades de adaptación del diseño y la organización de objetos personales. Las fotografías muestran estos elementos y la descripción explica su funcionamiento.

    .row.justify-content-center.align-items-center
      .col-8.col-lg-4.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img_13.png", class="img-fluid")     
      .col-12.col-lg-8
        .tarjeta.color-adicional-1.p-3.mb-3
          p.mb-0 Si la empresa también ofrece reparación, debe precisar qué intervenciones realiza y en qué condiciones. La durabilidad y la reparación son aspectos relevantes para aprovechar los productos durante más tiempo, pero requieren acciones concretas que respalden su comunicación (Observatorio del Sector Textil y Moda, 2024).
        p.mb-0 Reconocer los atributos, las clasificaciones y los niveles del producto permite organizar información útil para el consumidor. Este conocimiento facilita describir la oferta con precisión y comunicar una propuesta de valor coherente con sus características.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
