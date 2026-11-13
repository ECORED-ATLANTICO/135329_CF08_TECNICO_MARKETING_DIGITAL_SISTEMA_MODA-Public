<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Estructura del cuerpo, medidas y tallaje

    .bg_img_6.mb-3

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src="@/assets/curso/tema5/img_2.png")
        .bloque-texto-t__texto.col-12.col-lg-10.mb-0
          p.mb-0 El vestuario se relaciona con la forma, las dimensiones y el movimiento del cuerpo. Comprender esta relación permite interpretar las características de una prenda y comunicar información útil sobre su talla y ajuste.

      .tarjeta.color-acento-contenido-5.p-3.px-5.mb-0
        p.mb-0 Las personas presentan diferentes proporciones corporales. Por ello, la elección de una talla requiere consultar medidas y características del producto, además de su denominación comercial.

      Separador

      #t_5_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 5.1 Estructura corporal y su relación con el vestuario
      .mb-0 

      .bloque-texto-g.color-secundario-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema5/img_15.png')})`}"
          role="img"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Para desarrollar y describir prendas es necesario reconocer zonas del cuerpo y puntos de referencia, como hombros, pecho, cintura y cadera. También se debe considerar cómo cambia la relación entre cuerpo y vestuario al caminar, sentarse o levantar los brazos.

      .tarjeta.tarjeta--fondo-img-02.py-4.px-4.px-xl-0.h-100.w-100(data-aos="zoom-in-right")
        .row.align-items-center
          .col-12.col-xl-10.m-2.py-0.py-lg-3
            
          .col-8.col-xl-1.m-0.p-0.d-none.d-xl-block.mb-0

    .row.justify-content-center.cursor-pointer.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-lg-3(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img_4.png", class="img-fluid")
          .crd_hover_txt--body_2
            h4.mb-3 Anatomía y morfología
            p.mb-0 La anatomía estudia las estructuras del cuerpo y sus relaciones. La morfología corporal permite reconocer formas y proporciones.
            p.mb-3 En vestuario, estos conocimientos ayudan a identificar zonas que la prenda cubre, rodea o utiliza como apoyo. Dos personas de igual estatura pueden tener diferentes largos de torso, brazos o piernas.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-lg-3(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img_5.png", class="img-fluid")
          .crd_hover_txt--body_2
            h4.mb-3 Biomecánica y ergonomía
            p.mb-0 La biomecánica estudia el movimiento y el comportamiento mecánico del cuerpo. La ergonomía considera la relación entre las personas, sus actividades y los productos que utilizan.
            p.mb-3 Su aplicación al vestuario permite analizar si una prenda facilita los movimientos previstos y si sus cierres, bolsillos o ajustes resultan accesibles durante el uso.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-lg-3(data-aos="zoom-in-right")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img_6.png", class="img-fluid")
          .crd_hover_txt--body_2
            h4.mb-3 Antropometría
            p.mb-0 La antropometría estudia las dimensiones y proporciones del cuerpo mediante procedimientos de medición.
            p.mb-3 Sus datos orientan el desarrollo de patrones y sistemas de tallas. Para que las medidas puedan compararse, deben obtenerse con puntos de referencia y procedimientos definidos.

    p.mb-4 El análisis de datos antropométricos y las pruebas de ajuste permiten evaluar la correspondencia entre las prendas y las características del público al que se dirigen (Valero Zorraquino et al., 2024).

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Una empresa de moda desarrolla una chaqueta para personas que realizan desplazamientos cotidianos. Durante las pruebas observa su comportamiento al sentarse y levantar los brazos. Los resultados permiten revisar mangas, espalda y cierres antes de preparar la información comercial.

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.2 Análisis, clasificación y toma de medidas
    .mb-0 

    .tarjeta.color-adicional-1.p-3.px-5.mb-3
      p.mb-0 Las medidas representan dimensiones del cuerpo mediante valores numéricos. Su selección depende de la prenda y del propósito: desarrollar un patrón, comprobar el ajuste o consultar una guía de tallas.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 6.
          | Clasificación general de las medidas corporales
        .tabla-a.mb-0(data-aos="flip-left")
          table
            thead
              tr
                th.col-auto.col-lg-3 Tipo de medida
                th.col-auto.col-lg-auto ¿Cómo se obtiene?
                th.col-auto.col-lg-auto Ejemplos
            tbody
              tr.bg-table-01
                td.text-start Contornos
                td.text-start Rodeando la zona corporal con la cinta métrica.
                td.text-start Pecho o busto, cintura, cadera y brazo.
              tr.bg-table-02
                td.text-start Largos
                td.text-start Siguiendo un recorrido entre puntos de referencia definidos.
                td.text-start Largo de brazo, talle delantero y largo exterior de pierna.
              tr.bg-table-01
                td.text-start Anchos
                td.text-start Midiendo la distancia entre puntos de referencia de una zona.
                td.text-start Ancho de espalda y ancho de hombros, según el método empleado.

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/tema5/img_7.png", class="img-fluid")     
      .col-12.col-lg-8
        .tarjeta.color-primario-5.p-3.px-5.mb-3
          p.mb-0 La estatura corresponde a una dimensión vertical del cuerpo. En este contexto, debe distinguirse de la talla comercial, que identifica una opción de tamaño del producto.
        p.mb-0 Es así como, resulta de vital importancia, respetar y seguir el procedimiento adecuado para una medición consistente.

    TabsC.color-acento-contenido.mb-5
      .py-3.px-4.py-md-4(titulo="Preparar")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-8.order-2.order-lg-1.mb-0(data-aos="fade-up") 
            h5.mb-4 Preparar
            p.mb-0 Utilizar una cinta métrica flexible, legible y sin deformaciones. Confirmar qué medidas se necesitan y qué unidad se empleará.
          .col-8.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0(data-aos="fade-up")
            figure
              img(src="@/assets/curso/tema5/img_8.png", class="img-fluid")
      .py-3.px-4.py-md-4(titulo="Identificar referencias")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-8.order-2.order-lg-1.mb-0(data-aos="fade-up") 
            h5.mb-4 Identificar referencias
            p.mb-0 Localizar los puntos que indica el procedimiento. La cintura, la cadera o el inicio de una manga deben medirse siguiendo las instrucciones correspondientes.
          .col-8.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0(data-aos="fade-up")
            figure
              img(src="@/assets/curso/tema5/img_9.png", class="img-fluid")
      .py-3.px-4.py-md-4(titulo="Medir")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-8.order-2.order-lg-1.mb-0(data-aos="fade-up") 
            h5.mb-4 Medir
            p.mb-0 Mantener una postura natural. En los contornos, colocar la cinta sin comprimir el cuerpo y comprobar su posición. Evitar prendas voluminosas que alteren la lectura.
          .col-8.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0(data-aos="fade-up")
            figure
              img(src="@/assets/curso/tema5/img_10.png", class="img-fluid")
      .py-3.px-4.py-md-4(titulo="Registrar y comprobar")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-8.order-2.order-lg-1.mb-0(data-aos="fade-up") 
            h5.mb-4 Registrar y comprobar
            p.mb-0 Anotar nombre de la medida, valor y unidad. Repetir la medición cuando haya dudas y revisar que se haya utilizado el mismo recorrido.
          .col-8.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0(data-aos="fade-up")
            figure
              img(src="@/assets/curso/tema5/img_11.png", class="img-fluid")

    .tarjeta.color-adicional-1.p-3.px-5.mb-3
      p.mb-0 Las medidas pueden registrarse en centímetros o pulgadas, pero deben identificarse claramente. La información publicada y el cuadro de tallas deben utilizar unidades consistentes.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Una empresa recibe una consulta sobre la talla de un pantalón. Su guía indica cómo obtener los contornos de cintura y cadera. La persona comunica sus medidas en centímetros y el equipo las compara con el cuadro específico del producto, sin asumir que la talla utilizada en otra marca será equivalente.
    
    Separador

    #t_5_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.3 Cuadros de tallas, ajuste e información para la compra digital
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema5/img_12.png")
      .bloque-texto-t__texto.color-acento-contenido-5.col-12.col-lg-10.mb-0
        p.mb-0 Los cuadros de tallas relacionan denominaciones comerciales con medidas o rangos definidos. Su interpretación exige saber si describen el cuerpo del usuario o la prenda terminada. Un estudio sobre indumentaria comercializada en línea en Argentina identificó diferencias entre las tablas de las marcas analizadas y las medidas antropométricas de la población estudiada. Esto muestra la importancia de revisar a quién representa un sistema de tallas y cómo se comunica (Arnolfo et al., 2026).

    .row.justify-content-center.align-items-stretch.mb-5
      .col-6.col-lg-3.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img_13.png", class="img-fluid")    
      .col-12.col-lg-7.mb-0
        AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta color-adicional-2")
          div(titulo="Medidas corporales")
            p.mb-3 Describen las dimensiones del cuerpo para las que se propone una talla. Pueden presentarse como valores de referencia o rangos.
            p.mb-0 La tabla debe indicar qué zona se mide, cómo hacerlo y en qué unidad. Las medidas principales dependen del tipo de prenda.
          div(titulo="Medidas de la prenda")
            p.mb-3 Se obtienen sobre el producto terminado. Pueden incluir ancho de pecho, largo total, manga o cintura.
            p.mb-0 Debe aclararse si el dato corresponde a un contorno completo o a un ancho medido con la prenda extendida. Un ancho de pecho no equivale directamente al contorno corporal.
          div(titulo="Ajuste y holgura")
            p.mb-3 El ajuste describe la relación entre prenda y cuerpo. La holgura es la diferencia prevista entre sus medidas y depende del diseño, el material y el uso.
            p.mb-0 Una prenda amplia y una ceñida pueden tener medidas distintas aunque compartan la misma denominación de talla. La elasticidad también influye en su comportamiento.
          div(titulo="Información para elegir")
            p.mb-3 La ficha digital debe presentar una guía vinculada con el producto, instrucciones de medición y una descripción del ajuste.
            p.mb-0 Si se incluyen medidas y talla de la persona fotografiada, deben identificarse como referencia. Las imágenes y los recomendadores digitales complementan la información, pero no garantizan por sí solos el ajuste.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-0 Ejemplo aplicado
          p.mb-0 Una empresa presenta una camisa con un contorno de pecho de la prenda de 104 cm, diseñada para una medida corporal de referencia de 96 cm. En este ejemplo, la diferencia es de 8 cm de holgura.

    .row.justify-content-center.align-items-center.mb-0
      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/tema5/img_14.png", class="img-fluid")     
      .col-12.col-lg-8
        p.mb-4 La ficha distingue ambos datos y describe el corte. Esta diferencia es ilustrativa: no constituye una recomendación universal ni permite determinar el ajuste completo sin considerar otras medidas, el material y el diseño.
        .tarjeta.color-secundario-5.p-3.px-5.mb-3
          p.mb-0 Para facilitar la consulta, la empresa también informa el largo de la camisa y de las mangas. Si una persona encuentra sus medidas entre distintas tallas, puede solicitar orientación sobre el producto específico.
        p.mb-0 Comprender la estructura corporal y las medidas permite interpretar el tallaje con mayor precisión. Diferenciar las dimensiones del cuerpo, las de la prenda y el ajuste ayuda a comunicar información clara y a orientar la elección durante la compra digital.
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
