<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Mezcla de productos de moda

    .bg_img_4.mb-3

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src="@/assets/curso/tema3/img_2.png")
        .bloque-texto-t__texto.col-12.col-lg-10.mb-0
          p.mb-0 Una empresa de moda organiza su oferta mediante productos que responden a necesidades, preferencias y ocasiones de uso. La mezcla de productos permite analizar ese conjunto y decidir qué mantener, ampliar o actualizar, considerando al consumidor y la capacidad de la empresa.

      Separador

      #t_3_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 3.1 Portafolio y líneas de productos
      .mb-0 
      
      .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-right")
        p.mb-0 El #[strong portafolio], también llamado cartera o mezcla de productos, comprende el conjunto de productos que una empresa ofrece al mercado. Para facilitar su gestión, se organiza en líneas que reúnen artículos relacionados por su función, público o características.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.h-100.w-100
          img(src='@/assets/curso/tema3/img_3.png' alt='')
          .tarjeta.color-secundario--borde
            .p-4
              h4.mb-3 Portafolio
              p.mb-3 Es el conjunto completo de la oferta comercial. Puede reunir vestuario, calzado, marroquinería y accesorios, según la actividad de la empresa.
              p.mb-3 #[strong Ejemplo aplicado:] una empresa de moda ofrece camisas, pantalones y chaquetas. Estas tres líneas conforman su portafolio de vestuario.
      .col-12.col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.h-100.w-100
          img(src='@/assets/curso/tema3/img_4.png' alt='')
          .tarjeta.color-secundario--borde
            .p-4
              h4.mb-3 Línea de productos
              p.mb-3 Es una agrupación de productos relacionados entre sí. Su organización puede responder al tipo de artículo, la ocasión de uso, el público o el universo de vestuario.
              p.mb-3 #[strong Ejemplo aplicado:] dentro del portafolio, la línea de camisas incluye modelos de manga corta, manga larga y cuello mao. Todos comparten una función general, aunque presentan diseños diferentes.
      .col-12.col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.h-100.w-100
          img(src='@/assets/curso/tema3/img_5.png' alt='')
          .tarjeta.color-secundario--borde
            .p-4
              h4.mb-3 Modelo y variante
              p.mb-3 El modelo identifica un diseño particular. Las variantes son las opciones en que se ofrece ese modelo, como tallas, colores o materiales.
              p.mb-3 #[strong Ejemplo aplicado:] una camisa de manga larga constituye un modelo. Si se ofrece en blanco y azul, en tallas S, M y L, cuenta con seis combinaciones de color y talla, siempre que todas estén disponibles.

    .tarjeta.color-primario-10.p-3.px-5.mb-5
      p.mb-0 Esta organización también orienta la presentación del catálogo digital. Las categorías y los filtros deben facilitar que el consumidor encuentre los productos y consulte sus opciones.

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2 Amplitud, profundidad y longitud de la mezcla
    .mb-0 

    .bloque-texto-g.color-secundario-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img_6.png')})`}"
        role="img"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 Estas dimensiones permiten describir la estructura del portafolio. Para interpretarlas, es necesario distinguir las líneas, los modelos y sus variantes, evitando contarlos como si fueran equivalentes.
        br
        br
        p.mb-0 En la siguiente tabla comparativa, se presentan las dimensiones de la mezcla de productos.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 2.
          |  Dimensiones de la mezcla de productos
        .tabla-a.mb-0(data-aos="flip-left")
          table
            thead
              tr
                th.col-auto.col-lg-3 Dimensión
                th.col-auto.col-lg-auto ¿Qué identifica?
                th.col-auto.col-lg-auto Ejemplo aplicado
            tbody
              tr.bg-table-01
                td.text-start Amplitud
                td.text-start Cantidad de líneas que ofrece la empresa.
                td.text-start Una empresa comercializa camisas, pantalones y chaquetas: su amplitud es de tres líneas.
              tr.bg-table-02
                td.text-start Longitud
                td.text-start Total de productos que integran las líneas, según la unidad de conteo definida.
                td.text-start Si ofrece tres modelos de camisas, dos de pantalones y uno de chaquetas, su longitud es de seis modelos.
              tr.bg-table-01
                td.text-start Profundidad
                td.text-start Variedad de versiones disponibles de un producto, como tallas, colores o materiales.
                td.text-start Un modelo de camisa disponible en dos colores y tres tallas tiene seis variantes, si se ofrecen todas las combinaciones.

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img_7.png", class="img-fluid")     
      .col-12.col-lg-8
        .tarjeta.color-acento-contenido-5.p-3.mb-3
          p.mb-0 Nota para interpretar el ejemplo: la longitud se cuenta por modelos; la profundidad se observa mediante las variantes de un modelo. Las cantidades corresponden a un caso didáctico.
        p.mb-0 El análisis puede complementarse con la coherencia del portafolio: la relación entre sus líneas, el público y la propuesta de la empresa. Las dimensiones de la mezcla ayudan a comprender cómo se organiza la oferta y qué alternativas pueden ampliarse (Hotmart, 2024).

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Una empresa de vestuario cotidiano incorpora bolsos para transportar objetos personales. Antes de agregarlos al catálogo, revisa si responden a las necesidades de sus compradores, si mantienen relación con su propuesta y si puede garantizar su abastecimiento y atención posventa.

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.3 Estrategias de ampliación y actualización del portafolio
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema3/img_8.png")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 El portafolio requiere revisiones periódicas. Las decisiones pueden incluir nuevas líneas, más opciones de un producto o ajustes en referencias existentes. Para elegir una estrategia conviene considerar ventas, costos, disponibilidad y comentarios de los consumidores.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-6.col-lg-3.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img_9.png", class="img-fluid")    
      .col-12.col-lg-7.mb-0
        AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta color-adicional-2")
          div(titulo="Incorporar nuevas líneas")
            p.mb-3 Consiste en añadir un grupo de productos para atender necesidades identificadas. Esta decisión aumenta la amplitud y requiere evaluar recursos, proveedores y condiciones de comercialización.
            p.mb-3 #[strong Ejemplo aplicado:] una empresa que vende camisas, pantalones y chaquetas incorpora una línea de bolsos. Su portafolio pasa de tres a cuatro líneas.
          div(titulo="Ampliar modelos o variantes")
            p.mb-3 Una empresa puede incorporar diseños dentro de una línea o añadir opciones de un modelo existente. Conviene precisar qué se amplía para organizar correctamente el catálogo y el inventario.
            p.mb-3 #[strong Ejemplo aplicado:] agregar una camisa de cuello diferente aumenta el número de modelos. Ofrecer una camisa existente en otro color amplía sus variantes.
          div(titulo="Extender la oferta hacia otros niveles de precio")
            p.mb-3 Consiste en incorporar productos de mayor o menor precio dentro de la propuesta comercial. La diferencia debe explicarse mediante características, materiales, elaboración o servicios concretos.
            p.mb-3 #[strong Ejemplo aplicado:] una empresa añade una chaqueta con forro y acabados adicionales a una línea existente. También puede desarrollar una alternativa más sencilla, manteniendo claramente informadas sus características.
          div(titulo="Actualizar o retirar productos")
            p.mb-3 La actualización modifica aspectos de un producto para responder a necesidades detectadas. El retiro elimina referencias cuya permanencia deja de resultar conveniente, después de analizar sus resultados.
            p.mb-3 #[strong Ejemplo aplicado:] ante comentarios sobre el acceso a los bolsillos de un bolso, una empresa evalúa ajustar su diseño. Antes de retirar otra referencia por bajas ventas, comprueba si hubo falta de inventario, información insuficiente o poca visibilidad.

    .tarjeta.color-primario-10.p-3.px-5.mb-5
      p.mb-0 El seguimiento permite fundamentar estas decisiones. Una revisión del portafolio puede considerar los aspectos descritos en la tabla, a continuación:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 3.
          | Información para la toma de decisiones sobre el portafolio de productos
        .tabla-a.mb-0(data-aos="flip-left")
          table
            thead
              tr
                th.col-auto.col-lg-4 Información
                th.col-auto.col-lg-auto Utilidad para la decisión
            tbody
              tr.bg-table-01
                td.text-start Ventas por modelo y variante
                td.text-start Reconocer diferencias en la demanda.
              tr.bg-table-02
                td.text-start Inventario y disponibilidad
                td.text-start Identificar faltantes o acumulaciones.
              tr.bg-table-01
                td.text-start Costos y margen
                td.text-start Analizar la contribución económica de los productos.
              tr.bg-table-02
                td.text-start Consultas y devoluciones
                td.text-start Detectar dificultades de información, ajuste o uso.

    .tarjeta.color-secundario-5.p-3.px-5.mb-5
      p.mb-0 Gestionar el portafolio implica seleccionar, desarrollar y revisar productos, procurando que la oferta mantenga relación con los objetivos de la empresa y las necesidades del mercado (Redacción Emprendedores, 2025).

    .row.justify-content-center.align-items-stretch.mb-4
      .col-12.col-lg-4.mb-5.mb-lg-0
        .tarjeta.color-primario-10.p-3.px-5.mb-0.h-100.w-100
          p.mb-0 Para complementar los conocimientos sobre la mezcla de productos, se invita a consultar el pódcast Del producto al portafolio: una oferta coherente, que explica la relación entre líneas, modelos y variantes, y aborda las decisiones que permiten organizar y actualizar la oferta de una empresa de moda.
      .col-12.col-lg-8.mb-0
        .tarjeta.tarjeta--fondo-img-01.py-3.px-5.h-100.w-100(data-aos="zoom-in-right")
          .row.align-items-center
            .col-8.col-lg-5.d-none.d-lg-block.mb-0
            .col-12.col-lg-7
              h3.mb-3 ¿Sabías qué?
              p.mb-5 Lo invitamos a escuchar el siguiente Pódcast:
              TarjetaAudio.color-acento-contenido.p-3.mb-0(
                texto="<span style='font-style: normal !important;'>Del producto al portafolio: una oferta coherente"
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                tiempo
              )

    .tarjeta.color-secundario-5.p-3.px-5.mb-0
      p.mb-0 La mezcla de productos permite comprender cómo se estructura la oferta y qué decisiones requiere su gestión. Diferenciar líneas, modelos y variantes facilita organizar el catálogo, interpretar resultados y orientar el desarrollo de nuevas propuestas.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
