<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Lanzamiento del producto de moda

    .bg_img_7.mb-3

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src="@/assets/curso/tema6/img_2.png")
        .bloque-texto-t__texto.col-12.col-lg-10.mb-0
          p.mb-0 El lanzamiento presenta un producto al mercado y facilita que el público conozca sus características, consulte sus condiciones y pueda adquirirlo. Su desarrollo requiere coordinar producto, comunicación, disponibilidad y atención al cliente. El seguimiento posterior permite reconocer la respuesta del consumidor y orientar mejoras en la oferta y su presentación comercial.

      Separador

      #t_6_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 6.1 Planeación del lanzamiento
      .mb-0 

      .tarjeta.tarjeta--fondo-img-03.py-4.px-4.px-xl-0.h-100.w-100(data-aos="zoom-in-right")
        .row.align-items-center
          .col-12.col-xl-9.m-2
            p.mb-0 La planeación define a quién se dirige el producto, qué se espera lograr y cómo se ejecutarán las acciones. Incluye la revisión del mercado, las pruebas del producto y la organización de recursos y responsables.
          .col-8.col-xl-2.m-0.p-0.d-none.d-xl-block.mb-0
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10.mb-0
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
            h5 Tabla 7.
            | Decisiones para preparar el lanzamiento
          .tabla-a.mb-0(data-aos="flip-left")
            table
              thead
                tr
                  th.col-auto.col-lg-3 Elemento
                  th.col-auto.col-lg-auto Decisión que se debe precisar
              tbody
                tr.bg-table-01
                  td.text-start Público y necesidad
                  td.text-start A quién se dirige el producto y qué necesidad atiende.
                tr.bg-table-02
                  td.text-start Objetivo y meta
                  td.text-start Qué resultado se espera, en qué cantidad y durante qué periodo.
                tr.bg-table-01
                  td.text-start Propuesta de valor
                  td.text-start Qué beneficios se comunicarán y cómo se respaldan.
                tr.bg-table-02
                  td.text-start Recursos y disponibilidad
                  td.text-start Presupuesto, inventario, personal y capacidad de entrega.
                tr.bg-table-01
                  td.text-start Calendario y responsables
                  td.text-start Actividades, fechas y personas encargadas.

    .bloque-texto-g.color-secundario-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img_4.png')})`}"
        role="img"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las pruebas y conversaciones con posibles usuarios aportan información para ajustar el producto antes de presentarlo. También conviene revisar ofertas comparables e identificar oportunidades de diferenciación.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Una empresa prepara el lanzamiento de una chaqueta para uso cotidiano. Como meta didáctica, propone obtener veinte pedidos confirmados durante las primeras dos semanas. Antes de anunciarla, verifica tallas, colores, precios, información de producto y condiciones de entrega.

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.2 Comunicación y presentación comercial del producto
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema6/img_5.png")
      .bloque-texto-t__texto.color-acento-contenido-5.col-12.col-lg-10.mb-0
        p.mb-0 La comunicación relaciona las características del producto con las necesidades del público. Los mensajes, formatos y canales deben facilitar su comprensión y conducir a una acción concreta: consultar información, solicitar orientación o comprar.
    
    TabsC.color-acento-contenido.mb-5
      .py-3.px-4.py-md-4(titulo="Mostrar el producto")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-8.order-2.order-lg-1.mb-0(data-aos="fade-up") 
            h5.mb-4 Mostrar el producto
            p.mb-0 Las fotografías y los videos presentan forma, detalles, proporciones y posibilidades de uso. Deben corresponder con el producto ofrecido y permitir reconocer sus características.
            p.mb-0 La ficha comercial complementa las imágenes con composición, medidas, ajuste, cuidados, precio y disponibilidad.
          .col-8.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0(data-aos="fade-up")
            figure
              img(src="@/assets/curso/tema6/img_6.png", class="img-fluid")
      .py-3.px-4.py-md-4(titulo="Conectar los canales")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-8.order-2.order-lg-1.mb-0(data-aos="fade-up") 
            h5.mb-4 Conectar los canales
            p.mb-0 Las publicaciones, la tienda digital y la atención al cliente deben comunicar información consistente. El consumidor necesita encontrar una ruta clara entre el contenido que despierta su interés y el lugar donde puede consultar o comprar.
            p.mb-0 Si cambian las existencias o las condiciones de entrega, la información debe actualizarse en los canales correspondientes.
          .col-8.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0(data-aos="fade-up")
            figure
              img(src="@/assets/curso/tema6/img_7.png", class="img-fluid")
      .py-3.px-4.py-md-4(titulo="Coordinar la atención y las colaboraciones")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-8.order-2.order-lg-1.mb-0(data-aos="fade-up") 
            h5.mb-4 Coordinar la atención y las colaboraciones
            p.mb-0 El equipo de atención debe conocer el producto y disponer de información para responder consultas.
            p.mb-0 Cuando participan creadores de contenido, se revisan su afinidad con el público, el mensaje y las condiciones de colaboración. Su participación debe presentarse con claridad y las afirmaciones sobre el producto deben ser comprobables.
          .col-8.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0(data-aos="fade-up")
            figure
              img(src="@/assets/curso/tema6/img_8.png", class="img-fluid")

    .tarjeta.color-adicional-1.p-3.px-5.mb-5
      p.mb-0 El lanzamiento puede organizarse en preparación, presentación y seguimiento. Esta secuencia permite coordinar las acciones antes, durante y después de la llegada del producto al mercado (Pursell, 2025).

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Una empresa publica un video que muestra los bolsillos y el cierre de una chaqueta. El contenido conduce a su ficha digital, donde se consultan medidas, materiales y tallas. El equipo de atención utiliza la misma información para resolver preguntas sobre el ajuste.

    Separador

    #t_6_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.3 Ciclo de vida comercial y seguimiento de resultados
    .mb-0 

    .bloque-texto-g.color-secundario-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img_9.png')})`}"
        role="img"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El ciclo de vida comercial permite analizar la evolución de un producto en el mercado. Sus etapas son referencias para interpretar resultados; no tienen una duración fija ni se presentan de forma idéntica en todos los productos.

    .tarjeta.color-primario-10.p-3.px-5.mb-5
      p.mb-0.text-center La tabla a continuación, describe las diferentes etapas del ciclo de vida comercial.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 8.
          | Etapas del ciclo de vida comercial
        .tabla-a.mb-0(data-aos="flip-left")
          table
            thead
              tr
                th.col-auto.col-lg-3 Etapa
                th.col-auto.col-lg-auto Comportamiento que se observa
                th.col-auto.col-lg-auto Decisión posible
            tbody
              tr.bg-table-01
                td.text-start Introducción
                td.text-start El producto comienza a conocerse y registra sus primeras ventas.
                td.text-start Explicar su propuesta y recoger comentarios iniciales.
              tr.bg-table-02
                td.text-start Crecimiento
                td.text-start Aumentan la demanda y las ventas.
                td.text-start Revisar abastecimiento, capacidad de atención y canales.
              tr.bg-table-01
                td.text-start Madurez
                td.text-start Las ventas muestran mayor estabilidad.
                td.text-start Mantener la pertinencia y evaluar mejoras.
              tr.bg-table-02
                td.text-start Declive
                td.text-start Disminuyen las ventas durante el periodo analizado.
                td.text-start Investigar las causas y valorar ajustes o retiro.

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/tema6/img_10.png", class="img-fluid")     
      .col-12.col-lg-8
        .tarjeta.color-secundario-5.p-3.px-5.mb-3
          p.mb-0 En moda, algunos productos tienen demanda estacional y otros permanecen durante varias colecciones. La disminución de ventas puede relacionarse con cambios de preferencias, competencia, disponibilidad u otras condiciones.
        p.mb-0 La #[strong obsolescencia comercial] se refiere a la pérdida de pertinencia de una oferta en su mercado. No significa que una prenda haya perdido necesariamente su utilidad física. Su cuidado, reparación y reutilización pueden prolongar el uso.

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="flip-left")
      h5 Figura 1.
      |    Indicadores para evaluar el lanzamiento
    figure.mb-5(data-aos="flip-left")
      img(src='@/assets/curso/tema6/img_11.svg', class="img-fluid d-none d-lg-block").mb-5
      img(src='@/assets/curso/tema6/img_12.svg', class="img-fluid d-block d-lg-none").mb-5

    .tarjeta.color-primario-10.p-3.px-5.mb-5
      p.mb-0.text-center Los resultados deben compararse con la meta y analizarse junto con las condiciones del lanzamiento.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Una empresa esperaba veinte pedidos y obtuvo dieciséis. Antes de modificar la campaña, revisa si hubo tallas agotadas, dificultades para comprar o consultas sin resolver. El resultado muestra que la meta no se alcanzó, pero no explica por sí solo la causa.

    .row.justify-content-center.align-items-stretch.mb-4
      .col-12.col-lg-4.mb-5.mb-lg-0
        .tarjeta.color-primario-10.p-3.px-5.mb-0.h-100.w-100
          p.mb-0 Para profundizar en la presentación comercial de los productos, se invita a consultar el pódcast #[strong Del producto al mercado: preparar un lanzamiento], que aborda la coordinación entre comunicación, disponibilidad y atención al cliente, y explica cómo utilizar los resultados para orientar mejoras.
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

    .tarjeta.color-adicional-1.p-3.px-5.mb-0
      p.mb-0 El lanzamiento conecta el desarrollo del producto con su comercialización. Definir objetivos, presentar información clara y coordinar la atención facilita su llegada al público. El seguimiento permite interpretar la respuesta del mercado y tomar decisiones fundamentadas.
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
