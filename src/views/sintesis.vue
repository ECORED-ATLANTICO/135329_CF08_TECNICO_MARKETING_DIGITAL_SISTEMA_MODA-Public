<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-3 El componente formativo Productos del Sistema Moda aborda los atributos físicos, de presentación y simbólicos que permiten comprender el valor de los productos para el consumidor. A partir de las características del calzado, la marroquinería, el vestuario y los accesorios, orienta su descripción y organización en un portafolio coherente.
    p.mb-3 Sobre esta base, el desarrollo de colecciones articula investigación, planeación, diseño, prototipos, fichas técnicas y control de calidad. Este proceso se complementa con el conocimiento de la estructura corporal, las medidas y el tallaje para evaluar el ajuste de las prendas y ofrecer información que facilite su elección.
    p.mb-3 La preparación del producto culmina con su lanzamiento al mercado, que integra comunicación, disponibilidad y atención al cliente. El seguimiento de los resultados y de su evolución comercial permite identificar oportunidades de mejora y orientar decisiones que respondan a las necesidades del consumidor.


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente Productos del Sistema Moda aborda atributos, tipologías y portafolio, desarrollo de colecciones, medidas y tallaje, lanzamiento y seguimiento para comunicar el valor del producto y orientar mejoras según las necesidades del consumidor.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
