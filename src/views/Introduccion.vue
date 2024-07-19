<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cont_intro.pb-4
      .row
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          p Las enfermedades transmitidas por los alimentos (ETA) representan un problema significativo de salud pública, afectando tanto a individuos como a comunidades enteras. Este documento aborda las características, causas y métodos de prevención de las ETA, destacando la importancia de la higiene y la manipulación adecuada de los alimentos. Además, se describen los microorganismos más comunes involucrados en estas enfermedades y las técnicas de conservación que ayudan a prevenir su proliferación.
          figure.m-auto.col-8.col-md-7.col-lg-12.mt-4
            img(src="@/assets/curso/intro2.png")
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/intro3.png")
      
      p.mt-4(data-aos="fade-right") Aspectos principales tratados en el componente:

      .row.mt-4.justify-content-center(style="position:relative;z-index:1;")
        .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
          .p-3.h-100(style="background-color:background: rgb(253,219,180);background: linear-gradient(90deg, rgba(253,219,180,1) 20%, rgba(249,165,69,1) 20%);")
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/intro4.svg")
              .col.ps-0(style="place-self:center;")
                p.fw-bold.mb-1 Características de las ETA
                p.mb-0.text-small Períodos de incubación, síntomas y recuperación.
        .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
          .p-3.h-100(style="background-color:background: rgb(253,219,180);background: linear-gradient(90deg, rgba(253,219,180,1) 20%, rgba(249,165,69,1) 20%);")
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/intro5.svg")
              .col.ps-0(style="place-self:center;")
                p.fw-bold.mb-1 Tipos de infecciones e intoxicaciones alimentarias
                p.mb-0.text-small Causas y ejemplos.
        .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
          .p-3.h-100(style="background-color:background: rgb(253,219,180);background: linear-gradient(90deg, rgba(253,219,180,1) 20%, rgba(249,165,69,1) 20%);")
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/intro6.svg")
              .col.ps-0(style="place-self:center;")
                p.fw-bold.mb-1 Microorganismos patógenos
                p.mb-0.text-small Clasificación y necesidades para su desarrollo.
        .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
          .p-3.h-100(style="background-color:background: rgb(253,219,180);background: linear-gradient(90deg, rgba(253,219,180,1) 20%, rgba(249,165,69,1) 20%);")
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/intro7.svg")
              .col.ps-0(style="place-self:center;")
                p.fw-bold.mb-1 Alimentos de mayor riesgo
                p.mb-0.text-small Características y ejemplos.
        .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
          .p-3.h-100(style="background-color:background: rgb(253,219,180);background: linear-gradient(90deg, rgba(253,219,180,1) 20%, rgba(249,165,69,1) 20%);")
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/intro8.svg")
              .col.ps-0(style="place-self:center;")
                p.fw-bold.mb-1 Métodos de conservación de alimentos
                p.mb-0.text-small Refrigeración, congelación, pasteurización, esterilización y otros.
        .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
          .p-3.h-100(style="background-color:background: rgb(253,219,180);background: linear-gradient(90deg, rgba(253,219,180,1) 20%, rgba(249,165,69,1) 20%);")
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/intro9.svg")
              .col.ps-0(style="place-self:center;")
                p.fw-bold.mb-1 Prácticas de higiene y prevención
                p.mb-0.text-small Medidas para evitar la contaminación y proliferación de bacterias.

    



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro, .cont_intro *
  position: relative
.cont_intro:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 80%
  top: 0
  background: url(../assets/curso/intro1.png)
  background-size: 100% 100%
.cont_intro:after
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 30%
  top: 70%
  z-index: 0
  background-color: #FEF5EB
@media screen and (max-width: 992px)
  .cont_intro:before
    background-size: cover
</style>
