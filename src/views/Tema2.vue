<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 La manipulación de alimentos 
    
    p(data-aos="fade-up") La adecuada manipulación de los alimentos, desde que se producen hasta que se consumen, incide directamente en la salud de la población. El manipulador de alimentos tiene la responsabilidad de respetar y proteger la salud de los consumidores, por medio de una manipulación cuidadosa. Para conseguir este objetivo, el manipulador debe:

    .cont_2_1.mt-4.pb-5
      .col-xl-10.m-auto
        .row.mt-4.justify-content-center
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
            .h-100.p-3.cont_hover_1.text-center(style="background-color:#FDDBB4;border-radius:20px;")
              figure.m-auto.col-12.col-md-11.col-lg-12
                img(src="@/assets/curso/tema2/1.png")
              p.mt-3.mb-0 Desarrollar actitudes de conducta personal que beneficien su función.
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
            .h-100.p-3.cont_hover_1.text-center(style="background-color:#FDDBB4;border-radius:20px;")
              figure.m-auto.col-12.col-md-11.col-lg-12
                img(src="@/assets/curso/tema2/2.png")
              p.mt-3.mb-0 Incrementar el sentido de responsabilidad hacia los demás, por la trascendencia del servicio que prestan.

      p.mt-4(data-aos="fade-up") Una  de las prácticas higiénicas más importantes es:  

      .row.mt-4(data-aos="zoom-in")
        .col-auto.pe-lg-0.d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema2/3.png" style="right:-2px; position:relative;")
        .col.ps-lg-0
          .h-100.p-3.d-flex.align-content-center(style="background-color:#F9A545;position:relative;")
            .p-4.d-flex.align-content-center.flex-wrap.cont_puntos.cont_puntos__salmon.cont_puntos_bottom(style="background-color:#FDDBB4;border-radius:10px;position:relative;")
              p.fw-bold.mb-0 Lavado de manos, muñecas y uñas, cada vez que el manipulador cambie de actividad y manipule nuevamente un alimento o algún equipo que esté en contacto con él.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 Intoxicaciones alimentarias
    
    p(data-aos="fade-left") Las intoxicaciones alimentarias son producto de la ingestión de alimentos que contienen ciertas toxinas formadas por algunos microorganismos, los cuales se encuentran en determinado número de alimentos.

    .row.mt-4(data-aos="zoom-in")
      img.d-none.d-lg-block(src="@/assets/curso/tema2/5.svg" style="max-width:120px;position:absolute;left:190px;top:40px;z-index:99;")
      .col-auto.pe-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema2/4.png" style="right:-2px; position:relative;z-index:2;")
      .col.ps-lg-0
        .h-100.p-3.d-flex.align-content-center(style="background-color:#C1DDC7;position:relative;")
          .p-4.d-flex.align-content-center.flex-wrap.cont_puntos.cont_puntos__verde.cont_puntos_bottom.cont_figura1(style="background-color:#E6F2E9;border-radius:10px;position:relative;left:-20px;z-index:1;")
            .ps-lg-5
              p.fw-bold.mb-0 Algunos ejemplos de estas enfermedades son: el botulismo, la estafilococia, enfermedades por ingestión de micotoxinas (metabolitos tóxicos producidos por hongos).
    
    p.mt-5(data-aos="fade-right") Los errores más comunes en la preparación de alimentos que luego llevan a contraer las ETA son:

    .cont_2_2.mt-4.pb-4
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          .p-3(style="background-color:#E6F2E9;border-radius:15px 15px 0px 0px;border-bottom:1px #869A8A dashed;")
            .d-flex
              i.fas.fa-check-circle(style="color:#869A8A;place-self:center;")
              p.mb-0.ps-3 Preparación de los alimentos con demasiada antelación a su consumo.
          .p-3(style="background-color:#FEEDDA;border-bottom:1px #869A8A dashed;")
            .d-flex
              i.fas.fa-check-circle(style="color:#869A8A;place-self:center;")
              p.mb-0.ps-3 Alimentos preparados que se dejan mucho tiempo a temperaturas que permiten la proliferación de bacterias (los alimentos se deben refrigerar a fin de evitar su multiplicación).
          .p-3(style="background-color:#E6F2E9;border-bottom:1px #869A8A dashed;")
            .d-flex
              i.fas.fa-check-circle(style="color:#869A8A;place-self:center;")
              p.mb-0.ps-3 Cocción insuficiente de los alimentos, allí es donde se da la contaminación cruzada (contacto entre alimentos crudos y cocidos).
          .p-3(style="background-color:#FEEDDA;border-bottom:1px #869A8A dashed;")
            .d-flex
              i.fas.fa-check-circle(style="color:#869A8A;place-self:center;")
              p.mb-0.ps-3 Personas infectadas o colonizadas que preparan alimentos (asegurar la higiene personal).
          .p-3(style="background-color:#E6F2E9;border-bottom:1px #869A8A dashed;")
            .d-flex
              i.fas.fa-check-circle(style="color:#869A8A;place-self:center;")
              p.mb-0.ps-3 Limpieza insuficiente de frutas y verduras (hay que lavarlas con agua potable), para eliminar bacterias, parásitos y/o residuos tóxicos como plaguicidas.
          .p-3(style="background-color:#FEEDDA;border-bottom:1px #869A8A dashed;")
            .d-flex
              i.fas.fa-check-circle(style="color:#869A8A;place-self:center;")
              p.mb-0.ps-3 Utilización de las sobras.
          .p-3(style="background-color:#E6F2E9;border-radius:0px 0px 15px 15px;")
            .d-flex
              i.fas.fa-check-circle(style="color:#869A8A;place-self:center;")
              p.mb-0.ps-3 Descongelación incorrecta y posterior almacenamiento, entre otros.
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/6.png")

      .col-xl-10.m-auto.mt-5
        .p-4(style="background-color:#F9A545;border-radius:15px;" data-aos="fade-up")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/7.svg")
            .col(style="place-self:center;")
              p.mb-0 Por esta razón, hay que tratar de mantener la calidad e inocuidad de los alimentos que se consumen, recuerde que además de atractivo y agradable, un alimento debe ser sano; por lo general, no es necesario que el alimento se encuentre alterado para ser vehículo de una enfermedad.
    
    .cont_decorativo.mb-4.mt-4(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 Prácticas importantes para evitar la aparición de estas enfermedades:
    
    p(data-aos="fade-left") Para evitar la aparición de enfermedades transmitidas por alimentos, es fundamental adoptar una serie de prácticas higiénicas y de manipulación adecuadas. Entre las más importantes se encuentran: 

    .row.mt-4.justify-content-center(style="position:relative;z-index:1;")
      .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
        .p-3.h-100.d-flex.align-content-center.flex-wrap.d-flex.align-content-center.flex-wrap(style="background-color:background: rgb(253,219,180);background: linear-gradient(90deg, rgba(253,219,180,1) 20%, rgba(249,165,69,1) 20%);")
          .row(style="align-items:center;")
            .col-auto
              figure
                img(src="@/assets/curso/tema2/8.svg")
            .col.ps-0
              p.mb-0 Descongelar los alimentos en el frigorífico (en refrigeración) o en el microondas, pero no a temperatura ambiente.
      .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
        .p-3.h-100.d-flex.align-content-center.flex-wrap(style="background-color:background: rgb(253,219,180);background: linear-gradient(90deg, rgba(253,219,180,1) 20%, rgba(249,165,69,1) 20%);")
          .row(style="align-items:center;")
            .col-auto
              figure
                img(src="@/assets/curso/tema2/9.svg")
            .col.ps-0
              p.mb-0 No congelar alimentos descongelados.
      .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
        .p-3.h-100.d-flex.align-content-center.flex-wrap(style="background-color:background: rgb(253,219,180);background: linear-gradient(90deg, rgba(253,219,180,1) 20%, rgba(249,165,69,1) 20%);")
          .row(style="align-items:center;")
            .col-auto
              figure
                img(src="@/assets/curso/tema2/10.svg")
            .col.ps-0
              p.mb-0 Mantener los alimentos cocinados para su consumo inmediato, sometidos a una acción del calor, asegurando una temperatura superior a los 70°C en el centro del alimento, hasta el momento de servicios.
      .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
        .p-3.h-100.d-flex.align-content-center.flex-wrap(style="background-color:background: rgb(253,219,180);background: linear-gradient(90deg, rgba(253,219,180,1) 20%, rgba(249,165,69,1) 20%);")
          .row(style="align-items:center;")
            .col-auto
              figure
                img(src="@/assets/curso/tema2/11.svg")
            .col.ps-0
              p.mb-0 No recalentar en más de una ocasión, ni almacenar alimentos recalentados (ni en refrigeración).
      .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
        .p-3.h-100.d-flex.align-content-center.flex-wrap(style="background-color:background: rgb(253,219,180);background: linear-gradient(90deg, rgba(253,219,180,1) 20%, rgba(249,165,69,1) 20%);")
          .row(style="align-items:center;")
            .col-auto
              figure
                img(src="@/assets/curso/tema2/12.svg")
            .col.ps-0
              p.mb-0 No usar los mismos utensilios para alimentos crudos o alimentos cocinados.
      .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
        .p-3.h-100.d-flex.align-content-center.flex-wrap(style="background-color:background: rgb(253,219,180);background: linear-gradient(90deg, rgba(253,219,180,1) 20%, rgba(249,165,69,1) 20%);")
          .row(style="align-items:center;")
            .col-auto
              figure
                img(src="@/assets/curso/tema2/13.svg")
            .col.ps-0
              p.mb-0 Lavar bien las frutas, ya que en su superficie pueden quedar residuos de plaguicidas que si se ingieren pueden ocasionar trastornos.
      








</template>

<script>
export default {
  name: 'Tema2',
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
<style lang="sass">
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: rgb(230,242,233)
  background: linear-gradient(180deg, rgba(230,242,233,0.050945378151260545) 0%, rgba(199,234,208,0.5691526610644257) 100%)
.cont_hover_1, .cont_hover_1 *
  transition: all .4s ease-in-out
  cursor: pointer
.cont_hover_1:hover
  background-color: #F9A545 !important
.cont_puntos_bottom:before
  top: 55% !important
.cont_2_2, .cont_2_2 *
  position: relative
.cont_2_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 70%
  bottom: 0
  background: url(../assets/curso/tema2/14.png)
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .cont_figura1
    left: 0 !important
  .cont_2_2:before
    background-size: cover
</style>
