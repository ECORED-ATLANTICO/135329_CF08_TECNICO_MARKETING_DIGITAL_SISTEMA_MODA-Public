<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Proceso de producción de colecciones de moda

    .bg_img_5.mb-3

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src="@/assets/curso/tema4/img_2.png")
        .bloque-texto-t__texto.col-12.col-lg-10.mb-0
          p.mb-0 Una colección reúne productos relacionados por una propuesta de diseño, un público y determinadas ocasiones de uso. Su desarrollo requiere coordinar investigación, diseño, producción y comercialización para transformar una idea en una oferta realizable.

      .tarjeta.color-primario-10.p-3.px-5.mb-0
        p.mb-0 El proceso incluye revisiones y ajustes. Una prueba puede llevar a modificar un diseño, cambiar un material o reorganizar las cantidades previstas antes de iniciar la producción.

      Separador

      #t_4_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 4.1 Análisis del mercado y planeación de la colección
      .mb-0 

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-4
          figure
            img(src="@/assets/curso/tema4/img_3.png", class="img-fluid")     
        .col-12.col-lg-8
          .tarjeta.color-adicional-1.p-3.px-5.mb-3
            p.mb-0 La planeación establece qué se desarrollará, para quién y con qué recursos. Parte de información comercial y del reconocimiento de necesidades del consumidor, alternativas del mercado y tendencias pertinentes.
          p.mb-0 En la tabla que se comparte a continuación, se describe la información necesaria para planear una colección de vestuario.

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10.mb-0
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
            h5 Tabla 4.
            | Información para planear una colección
          .tabla-a.mb-0(data-aos="flip-left")
            table
              thead
                tr
                  th.col-auto.col-lg-3 Aspecto
                  th.col-auto.col-lg-auto ¿Qué se analiza?
                  th.col-auto.col-lg-auto ¿Qué decisión orienta?
              tbody
                tr.bg-table-01
                  td.text-start Resultados comerciales y financieros
                  td.text-start Ventas, inventario, costos, márgenes y devoluciones de productos anteriores.
                  td.text-start Modelos que conviene mantener, ajustar o reemplazar.
                tr.bg-table-02
                  td.text-start Competencia
                  td.text-start Productos, precios, materiales, canales y servicios de ofertas comparables.
                  td.text-start Posibilidades de diferenciación.
                tr.bg-table-01
                  td.text-start Tendencias y necesidades
                  td.text-start Cambios en usos, preferencias, colores, materiales y formas.
                  td.text-start Propuestas pertinentes para el público.
                tr.bg-table-02
                  td.text-start Capacidad de la empresa
                  td.text-start Presupuesto, proveedores, personal, equipos y tiempos.
                  td.text-start Alcance y viabilidad de la colección.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1.mb-0
        .tarjeta.color-adicional-1.p-3.px-5.mb-3
          p.mb-3 Con esta información se construye el plan de colección. Este precisa público, ocasión de uso, concepto, tipos de producto, cantidades previstas, materiales, presupuesto, responsables y calendario.
          p.mb-0 La relación entre público, ocasión de uso, siluetas, materiales y detalles contribuye a dar coherencia a los productos de una colección (Vásquez Velásquez, 2026).
      .col-8.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img_4.png", class="img-fluid") 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Una empresa de moda proyecta una colección de vestuario para actividades laborales cotidianas. Revisa sus resultados anteriores y encuentra consultas sobre prendas fáciles de combinar. Con esta información propone camisas, pantalones y chaquetas, y comprueba si puede desarrollarlos dentro del presupuesto y los tiempos disponibles.

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2 Diseño, prototipos y fichas técnicas
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src="@/assets/curso/tema4/img_5.png")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 El diseño convierte los objetivos de la colección en propuestas concretas. Los bocetos, las muestras y la documentación técnica permiten revisar cómo se elaborarán los productos y qué ajustes necesitan.

    AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta color-adicional-2")
      div(titulo="Diseño y bocetación")
        p.mb-3 Los bocetos representan formas, proporciones y detalles. Se complementan con la selección de materiales, colores, acabados y componentes.
        p.mb-0 La colección mantiene una relación visual y funcional entre sus productos, aunque cada modelo tenga características particulares. Las herramientas digitales pueden apoyar la representación y comparación de propuestas.
      div(titulo="Prototipos y pruebas")
        p.mb-3 El prototipo es una versión de prueba que permite evaluar construcción, dimensiones, ajuste y funcionamiento.
        p.mb-0 Durante su revisión se observa cómo se comporta el producto y qué modificaciones requiere. Los cambios deben registrarse y comprobarse antes de autorizar la fabricación.
      div(titulo="Ficha técnica")
        p.mb-3 La ficha técnica reúne las especificaciones necesarias para desarrollar y producir un modelo. Su contenido depende del producto y puede incluir:
        ul.lista-ul.color-secundario.mb-3
          li.mb-0
            i.lista-ul__vineta.mb-0 
            | Identificación, referencia y versión.
          li.mb-0
            i.lista-ul__vineta.mb-0 
            | Dibujo técnico y detalles constructivos.
          li.mb-0
            i.lista-ul__vineta.mb-0 
            | Materiales, insumos y colores.
          li.mb-0
            i.lista-ul__vineta.mb-0 
            | Medidas, tallas y tolerancias.
          li.mb-0
            i.lista-ul__vineta.mb-0 
            | Operaciones, acabados y criterios de calidad.
        p.mb-0 La versión aprobada debe estar disponible para las áreas que intervienen en la producción.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Una empresa desarrolla una chaqueta con bolsillos delanteros. En la prueba detecta que su abertura dificulta introducir la mano. El equipo modifica el diseño, actualiza la ficha técnica y verifica el cambio en una nueva muestra antes de producir las unidades previstas.

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3 Producción, validación y control de calidad
    .mb-0 

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img_6.png')})`}"
        role="img"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 La producción transforma las especificaciones aprobadas en unidades terminadas. Su organización depende del tipo de producto, los materiales y la capacidad de la empresa. El control de calidad acompaña las operaciones para detectar y corregir dificultades durante el proceso.

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-6.col-xl-4.mb-3(data-aos="fade-up")
        figure
          img.img-fluid(src="@/assets/curso/tema4/img_7.png", class="img-fluid")
      .col-12.col-lg-12.col-xl-8.mb-3
        SlyderF.circl-arrow.mb-0(columnas="col-lg-6")
          .tarjeta.tarjeta--blanca.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema4/img_8.png", class="img-fluid")
            h4.text-center.fondo-color_color-acento-contenido-5 Preparación
            p.text-center Confirmar materiales, insumos, cantidades, documentos y programación. Revisar que lo recibido corresponda con las especificaciones antes de utilizarlo.
          .tarjeta.tarjeta--blanca.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema4/img_8.png", class="img-fluid")
            h4.text-center.fondo-color_color-acento-contenido-5 Elaboración
            p.text-center Realizar las operaciones previstas: corte, preparación, unión, confección o ensamblaje, según el producto. Mantener identificadas las referencias y sus variantes durante el proceso.
          .tarjeta.tarjeta--blanca.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema4/img_8.png", class="img-fluid")
            h4.text-center.fondo-color_color-acento-contenido-5 Acabados y revisión
            p.text-center Comprobar medidas, uniones, cierres, apariencia, limpieza y etiquetado. Comparar los resultados con la muestra aprobada y los criterios establecidos en la ficha técnica
          .tarjeta.tarjeta--blanca.border.shadow.p-4.mb-0
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/tema4/img_8.png", class="img-fluid")
            h4.text-center.fondo-color_color-acento-contenido-5 Validación
            p.text-center Revisar el producto terminado y registrar ajustes o correcciones. Las pruebas de uso y la retroalimentación de usuarios permiten complementar la evaluación técnica antes de su presentación comercial.

    .tarjeta.color-secundario-5.p-3.px-5.mb-5
      p.mb-0 El control debe distinguir entre la #[strong calidad prevista] definida mediante especificaciones, y el resultado obtenido. Si se detectan diferencias, es necesario identificar su causa y decidir cómo corregirlas.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Durante la revisión de unos pantalones, una empresa encuentra diferencias de largo frente a la ficha aprobada. Separa las unidades para evaluarlas, revisa el proceso y registra la corrección. La información permite comprobar las siguientes unidades y actualizar los controles de producción.

    Separador

    #t_4_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.4 Preparación comercial y seguimiento del producto
    .mb-0 

    .bloque-texto-g.color-secundario-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img_9.png')})`}"
        role="img"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cuando los productos están definidos y validados, se prepara la información necesaria para presentarlos y comercializarlos. Esta etapa relaciona producción, inventario, comunicación y atención al cliente.

    .tarjeta.color-secundario-5.p-3.px-5.mb-5
      p.mb-0.text-center La siguiente tabla ilustra la preparación necesaria que requiere el producto para su comercialización.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 5.
          | Preparación del producto para su comercialización
        .tabla-a.mb-0(data-aos="flip-left")
          table
            thead
              tr
                th.col-auto.col-lg-3 Elemento
                th.col-auto.col-lg-auto Información que se debe coordinar
            tbody
              tr.bg-table-02
                td.text-start Identificación y disponibilidad
                td.text-start Referencias, modelos, colores, tallas y unidades disponibles.
              tr.bg-table-01
                td.text-start Presentación digital
                td.text-start Fotografías, descripciones, composición, medidas, ajuste y cuidados.
              tr.bg-table-02
                td.text-start Condiciones comerciales
                td.text-start Precios, canales, fechas, formas de entrega y servicios ofrecidos.
              tr.bg-table-01
                td.text-start Atención y seguimiento
                td.text-start Canales de contacto y registro de consultas, devoluciones y solicitudes de garantía.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1.mb-0
        .tarjeta.color-adicional-1.p-3.px-5.mb-3
          p.mb-0 La presentación de muestras en encuentros comerciales, exhibiciones o espacios de prueba puede aportar comentarios sobre la colección. Estos resultados deben interpretarse junto con información técnica y comercial.
        p.mb-0 Después de iniciar las ventas, el seguimiento permite reconocer diferencias entre lo planeado y lo observado: referencias solicitadas, variantes agotadas, consultas frecuentes o dificultades de uso.
      .col-8.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img_10.png", class="img-fluid") 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-contenido.p-4.px-5.mb-0(data-aos="zoom-in-right")
          h4.mb-3 Ejemplo aplicado
          p.mb-0 Una empresa prepara las fotografías de una camisa y verifica que correspondan con el producto aprobado. Antes de publicar, confirma composición, tallas y disponibilidad. Posteriormente recibe consultas sobre el largo de las mangas, por lo que complementa la guía de medidas y comparte la observación con el equipo de desarrollo.

    .tarjeta.color-acento-contenido-5.p-3.px-5.mb-0
      p.mb-0 Producir una colección requiere coordinar decisiones desde la investigación hasta el seguimiento comercial. La planeación, los prototipos y las fichas técnicas permiten definir los productos; la validación y el control de calidad ayudan a comprobar sus resultados y a comunicar una oferta consistente.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
