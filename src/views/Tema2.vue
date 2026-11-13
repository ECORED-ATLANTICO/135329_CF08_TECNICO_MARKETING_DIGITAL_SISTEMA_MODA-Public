<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipologías de productos de moda

    .bg_img_3.mb-3

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src="@/assets/curso/tema2/img_2.png")
        .bloque-texto-t__texto.col-12.col-lg-10.mb-0
          p.mb-0 Las tipologías permiten agrupar los productos según sus características, estructura y función. En el Sistema Moda se encuentran prendas de vestir, calzado, artículos de marroquinería y accesorios. Reconocer sus diferencias facilita organizar el catálogo y comunicar información útil para la compra.

      Separador

      #t_2_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.1 Calzado: componentes, materiales y procesos
      .mb-0 
      
      .bloque-texto-g.color-secundario-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/img_12.png')})`}"
          role="img"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El calzado protege y cubre los pies, acompaña el movimiento y complementa el vestuario. Su diseño combina componentes y materiales según el uso previsto. Entre sus tipologías se encuentran zapatos, botas, sandalias, alpargatas y zapatillas. 
          p.mb-0 A continuación, se presenta una tabla comparativa que incluye las características generales del calzado.

      .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-right")
        

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10.mb-0
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
            h5 Tabla 1.
            |  Características generales del calzado
          .tabla-a.mb-0(data-aos="flip-left")
            table
              thead
                tr
                  th.col-auto.col-lg-3 Aspecto
                  th.col-auto.col-lg-auto Elementos principales
                  th.col-auto.col-lg-auto ¿Qué permiten reconocer?
              tbody
                tr.bg-table-01
                  td.text-start.h5 Parte superior o corte
                  td.text-start Puntera, pala y cuartos. Puede incorporar lengüeta, ojales y cordones.
                  td.text-start La forma, la cobertura y el sistema de ajuste.
                tr.bg-table-02
                  td.text-start.h5 Interior
                  td.text-start Forro y plantilla interior.
                  td.text-start Los materiales y superficies en contacto con el pie.
                tr.bg-table-01
                  td.text-start.h5 Parte inferior o piso
                  td.text-start Suela y, según el diseño, entresuela y tacón.
                  td.text-start La estructura de apoyo y contacto con el suelo.
                tr.bg-table-02
                  td.text-start.h5 Materiales
                  td.text-start Cuero, textiles y sintéticos en el corte; caucho, poliuretano o EVA en el piso, entre otros.
                  td.text-start La composición de cada parte y sus cuidados.
                tr.bg-table-01
                  td.text-start.h5 Procesos
                  td.text-start Corte de piezas, aparado, montado, unión del piso y acabado.
                  td.text-start Las operaciones generales de elaboración.

      .tarjeta.color-terciario-10.p-3.px-5.mb-3
        p.mb-0 El #[strong aparado] consiste en unir las piezas del corte; el #[strong montado] les da forma sobre una horma. La secuencia y las técnicas de fabricación dependen del modelo (INESCOP, 2024).

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Una empresa de moda describe unas zapatillas indicando exterior textil, forro textil, suela de caucho y ajuste con cordones. Acompaña esta información con fotografías y una guía de tallas para facilitar la elección.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2 Marroquinería: productos, materiales y elaboración
    .mb-0 

    .tarjeta.color-terciario-10.p-3.px-5.mb-5
      p.mb-0 La marroquinería comprende la elaboración de artículos como bolsos, billeteras, cinturones y maletines, tradicionalmente asociados con el trabajo del cuero. En la oferta comercial también se encuentran productos de funciones semejantes elaborados con textiles, materiales sintéticos y combinaciones de componentes.

    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-md-10.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            img(src='@/assets/curso/tema2/img_3.png', class="img-fluid")
          p.mb-0
            b Productos y funciones
          p.mb-0 Los bolsos y maletines permiten transportar objetos; las billeteras organizan documentos y medios de pago; los cinturones contribuyen al ajuste de las prendas y complementan el vestuario.
          p.mb-3 Su clasificación puede considerar el tamaño, la capacidad, la forma de apertura, los compartimientos y la manera de llevarlos: de mano, al hombro, cruzados o sobre la espalda.
      .col-12.col-md-10.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            img(src='@/assets/curso/tema2/img_4.png', class="img-fluid")
          p.mb-0 
            b Materiales y componentes
          p.mb-0 Estos artículos pueden integrar material exterior, forro, refuerzos, hilos, adhesivos y herrajes. Los herrajes incluyen elementos como hebillas, argollas, remaches y mosquetones.
          p.mb-3 La información comercial debe precisar la composición de las partes principales. Si se emplean materiales recubiertos o mezclas, su descripción debe corresponder con la información técnica disponible.
      .col-12.col-md-10.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            img(src='@/assets/curso/tema2/img_5.png', class="img-fluid")
          p.mb-0 
            b Elaboración y herramientas
          p.mb-0 Según el producto, la elaboración comprende corte, preparación de piezas, unión, incorporación de forros y herrajes, y acabados.
          p.mb-3 Pueden utilizarse cuchillas, troqueles, máquinas de coser, equipos para reducir el espesor del cuero y herramientas para instalar herrajes. Las operaciones manuales y mecanizadas se combinan de acuerdo con el diseño y la capacidad de producción.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Una empresa comercializa un bolso con exterior de cuero y forro textil. Su descripción diferencia ambos materiales e informa dimensiones, compartimientos, tipo de cierre y longitud de la correa. Las fotografías muestran el interior y las formas de llevarlo.

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.3 Vestuario: características y tipologías de prendas
    .mb-0 

    .tarjeta.color-terciario-10.p-3.px-5.mb-5
      p.mb-0 El vestuario reúne prendas destinadas a cubrir el cuerpo y responder a necesidades de protección, comodidad y expresión personal. Sus tipologías pueden organizarse según la parte del cuerpo que cubren y su relación con otras prendas.


    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-5.mb-lg-0(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema2/img_6.png", class="img-fluid")
      .col-12.col-lg-8.mb-4.mb-lg-0
        TabsA.color-acento-botones.uno(data-aos="zoom-in-right")
          .tarjeta.color-secundario-10.p-4.h-100.d-flex.flex-column.justify-content-center(titulo="Prendas superiores")
            h4.mb-0 Prendas superiores
            p.mb-3 Cubren principalmente la parte superior del cuerpo. Incluyen camisas, blusas, camisetas, chalecos y chaquetas.
            p.mb-0 Para diferenciarlas se observan elementos como cuello, mangas, abertura, cierre, bolsillos y largo. Estas características permiten describir el diseño con mayor precisión que una denominación general.
          .tarjeta.color-secundario-10.p-4.h-100.d-flex.flex-column.justify-content-center(titulo="Prendas inferiores")
            h4.mb-0 Prendas inferiores
            p.mb-3 Cubren principalmente la parte inferior del cuerpo. Comprenden pantalones, faldas, bermudas y pantalones cortos.
            p.mb-0 Su descripción puede considerar cintura, tiro, largo, amplitud, cierre y bolsillos. La talla debe acompañarse de una guía que permita interpretar las medidas correspondientes.
          .tarjeta.color-secundario-10.p-4.h-100.d-flex.flex-column.justify-content-center(titulo="Prendas enterizas")
            h4.mb-0 Prendas enterizas
            p.mb-3 Integran en una sola pieza la cobertura de las partes superior e inferior del cuerpo. Entre ellas se encuentran vestidos, monos y overoles.
            p.mb-0 Para presentarlas conviene informar el largo total, la forma de acceso, los puntos de ajuste y las características del corte.
          .tarjeta.color-secundario-10.p-4.h-100.d-flex.flex-column.justify-content-center(titulo="Prendas interiores")
            h4.mb-0 Prendas interiores
            p.mb-3 Se utilizan habitualmente debajo de otras prendas o en contacto directo con el cuerpo. Incluyen prendas íntimas y algunas prendas de soporte.
            p.mb-0 Su descripción requiere información sobre composición, construcción, talla, ajuste y cuidados. Las propiedades específicas deben respaldarse con información del producto.
    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema2/img_7.png")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 Las prendas también pueden agruparse por ocasión de uso: cotidiano, laboral, deportivo, descanso o celebración. Esta clasificación complementa la tipología y ayuda a organizar la navegación del catálogo.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Una empresa identifica una referencia como #[strong pantalón de corte recto para uso cotidiano]. En la ficha informa composición, tiro, cintura, largo y cuidados. Las fotografías muestran la prenda de frente, de espalda y en detalle, mientras la guía de tallas facilita consultar las medidas.

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.4 Accesorios de moda: características y usos
    .mb-0 

    .tarjeta.color-terciario-10.p-3.px-5.mb-5
      p.mb-0 Los accesorios complementan el vestuario y pueden cumplir funciones ornamentales, prácticas y simbólicas. Su elección se relaciona con preferencias personales, ocasiones de uso y significados culturales.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.h-100.w-100
          img(src='@/assets/curso/tema2/img_8.png' alt='')
          .tarjeta.color-secundario--borde
            .p-4
              h4.mb-3 Joyería y bisutería
              p.mb-0 Incluyen anillos, collares, pulseras, pendientes y otras piezas de adorno. Para describirlas se consideran materiales, recubrimientos, dimensiones, peso, cierres y cuidados.
              p.mb-0 La apariencia dorada o plateada no demuestra la composición del artículo; esta debe informarse con precisión.
      .col-12.col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.h-100.w-100
          img(src='@/assets/curso/tema2/img_9.png' alt='')
          .tarjeta.color-secundario--borde
            .p-4
              h4.mb-3 Sombreros y complementos para la cabeza
              p.mb-0 Comprenden sombreros, gorras, boinas, diademas y otros complementos. Pueden aportar cobertura, ajuste o un efecto estético.
              p.mb-0 Su presentación debe indicar materiales, medidas, sistema de ajuste y cuidados, según corresponda.
      .col-12.col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.h-100.w-100
          img(src='@/assets/curso/tema2/img_10.png' alt='')
          .tarjeta.color-secundario--borde
            .p-4
              h4.mb-3 Guantes
              p.mb-0 Cubren las manos y pueden utilizarse como complemento del vestuario o para una función específica.
              p.mb-0 La descripción incluye material, talla, largo y uso previsto. Cuando se anuncien propiedades de protección, estas deben contar con el respaldo correspondiente.
      .col-12.col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.h-100.w-100
          img(src='@/assets/curso/tema2/img_11.png' alt='')
          .tarjeta.color-secundario--borde
            .p-4
              h4.mb-3 Gafas
              p.mb-0 Pueden incorporar funciones visuales, de protección o estéticas, según sus características.
              p.mb-0 La información debe distinguir la montura de los lentes e indicar medidas y especificaciones verificadas. El color oscuro de un lente no demuestra por sí solo protección frente a la radiación ultravioleta.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Una empresa presenta un collar elaborado en acero inoxidable con acabado dorado. Informa la longitud, el sistema de cierre y los cuidados. Las fotografías muestran el tamaño de la pieza y su apariencia sobre el cuerpo para facilitar la elección.

    .tarjeta.color-terciario-10.p-3.px-5.mb-0
      p.mb-0 Identificar las tipologías permite reconocer qué información necesita cada producto. La composición, los componentes, las dimensiones, el ajuste y los cuidados ayudan a construir descripciones claras y a organizar una oferta que facilite la elección del consumidor.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
