<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-start
      .col-10.col-lg-4
        figure
          img(src="@/assets//curso/introduccion/img_1.png", class="img-fluid")      
      .col-12.col-lg-8
        p.mb-3 Los productos del Sistema Moda responden a necesidades de uso, protección y expresión personal. Prendas, calzado, artículos de marroquinería y accesorios reúnen materiales, formas y significados que influyen en su elección.
        .tarjeta.color-adicional-1.p-3.mb-3
          p.mb-0 Conocer sus características permite organizar una oferta y comunicarla con precisión. La composición, los acabados, las medidas, el ajuste y los cuidados aportan información útil para orientar al consumidor, especialmente cuando compra a través de canales digitales.
        p.mb-0 En este componente se abordarán los atributos y las tipologías de producto, la mezcla comercial, la producción de colecciones, las medidas corporales y el lanzamiento. Los ejemplos aplicados permitirán relacionar estos conocimientos con situaciones de una empresa de moda.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
