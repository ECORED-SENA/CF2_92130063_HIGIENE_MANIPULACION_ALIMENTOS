<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Conservación de alimentos

    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p El tiempo máximo en el que un alimento puede ser conservado, manteniendo todas sus propiedades organolépticas, nutricionales y sanitarias, se denomina #[strong VIDA ÚTIL]. La conservación tiene como objetivo aumentar la vida útil de los alimentos utilizando uno o varios métodos.
        .p-4.mt-4(style="background-color:#FDDBB4;border-radius:10px;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/1.svg")
            .col(style="place-self:center;")
              p.mb-0.fw-bold Una vez aplicado el sistema de conservación elegido, es importante que el alimento se almacene según sus características, como mantenerlo a baja temperatura y en un lugar fresco y seco, para conservar sus propiedades organolépticas.
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-10.col-md-8.col-lg-12
          img(src="@/assets/curso/tema3/2.png")
    
    .cont_3_1.mt-4.pt-4.pb-5
      .row
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema3/4.svg")
        .col(style="place-self:center;" data-aos="fade-left")
          p Los principales métodos de conservación se aplican mediante frío o calor sobre el alimento, aunque también hay otros métodos conocidos que actúan disminuyendo la cantidad de agua en el alimento, impidiendo que los microorganismos se multipliquen fácilmente.
          p.mb-0 A continuación, se describen los sistemas de conservación más frecuentes y tradicionales que se utilizan.
      
      .row.mt-4
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          .cont_decorativo.mb-4
            .row
              .col-auto.pe-0(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/4.svg")
              .col.ps-2(style="place-self:center;")
                h3.mb-0.pe-5 Mediante frío
          p La refrigeración consiste en someter a los alimentos a temperaturas entre 0 ° y 5 °C. A esta temperatura los microorganismos se multiplicarán muy lentamente. De esta manera la vida útil de los alimentos será mayor que si no estuvieran en refrigeración.
          h5.p-2.ps-3.pe-3.mt-4(style="background-color:#F1E7C2;border-radius:50px;max-width:fit-content;") Congelación
          p En la congelación, los alimentos se someten a temperaturas menores a -18 °C. Aunque los microorganismos no crecen a estas temperaturas, tampoco se mueren, permitiendo que los alimentos puedan conservarse durante meses, dependiendo de sus características. Es crucial mantener la cadena de frío para asegurar la calidad y seguridad de los alimentos. 
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-10.col-md-8.col-lg-12
            img(src="@/assets/curso/tema3/5.png")
    
    .cont_decorativo.mb-4.mt-0(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 Mediante calor
    
    p(data-aos="fade-left") Mediante el calor, los microorganismos se destruyen en varios procesos térmicos. Algunos ejemplos incluyen: 

    .cont_3_2.mt-4.pt-4.pb-4
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row
            .col-lg-7.mb-4.mb-lg-0
              h5 Pasteurización
              p Consiste en someter el alimento a temperaturas cercanas a 80 °C. Así se destruyen muchos de los microorganismos, pero no todos. Por ello, es importante que después de pasteurizar se conserven estos alimentos en refrigeración, para mantener a los microorganismos que puedan quedar 'a raya'. La vida útil del alimento es baja, como es el caso de la leche pasteurizada.
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/6.png')
          .row
            .col-lg-7.mb-4.mb-lg-0
              h5 Cocción
              p Consiste en hacer que un alimento llegue al punto de ebullición o cocción, el cual debe estar a unos 100 °C. Con este método se eliminan gran parte de los microorganismos, pero no sus esporas. Cuando se cuece un alimento, no sólo se hace con el fin de eliminar las bacterias, sino que a su vez se modifican sus propiedades, haciendo que el alimento sea más digestible y más llamativo al consumidor.
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/7.png')
          .row
            .col-lg-7.mb-4.mb-lg-0
              h5 Esterilización
              p Se somete al alimento a temperaturas cercanas a 120 °C. Así se destruyen todos los microorganismos que hay en el alimento, incluso sus esporas.
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/8.png')
          .row
            .col-lg-7.mb-4.mb-lg-0
              h5 UHT (Ultra Pasteurización)
              p Es un sistema donde se aplica una alta temperatura por muy poco tiempo, pero el suficiente para eliminar todos los microorganismos y sus esporas, con el fin de hacer que el alimento se mantenga en buen estado por mucho más tiempo posible al pasar por un tratamiento térmico. Un ejemplo es la leche UHT, que se puede guardar fuera del frigorífico.
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/9.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 Eliminando parte del agua del alimento
    
    p(data-aos="fade-left") Eliminar parte del agua del alimento no solo le proporciona un sabor, olor y color especial, es decir, cambia sus propiedades organolépticas, sino que también reduce la cantidad de agua disponible, lo que dificulta la multiplicación de microorganismos y mejora su conservación.

    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-5.col-md-4.col-lg-12
          img(src="@/assets/curso/tema3/10.png")
      .col-lg-9(data-aos="fade-left")
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Desecación")
            .row
              .col-lg-9.mb-4.mb-md-0.col-md-6
                p Consiste en la eliminación de la humedad del alimento.
              .col-lg-3.col-md-6
                figure.m-auto.col-9.col-md-12
                  img(src="@/assets/curso/tema3/11.png")
          div(numero="2" titulo="Salazón")
            .row
              .col-lg-9.mb-4.mb-md-0.col-md-6
                p Consiste en tratar los alimentos con sal comestible y a veces con otros condimentos, para concentrarlos y que de esta manera se elimine la mayor cantidad de agua. Puede hacerse salazón seco como bacalao salado o en salmuera (con líquido).
              .col-lg-3.col-md-6
                figure.m-auto.col-9.col-md-12
                  img(src="@/assets/curso/tema3/12.png")
          div(numero="3" titulo="Curado")
            .row
              .col-lg-9.mb-4.mb-md-0.col-md-6
                p Se someten los alimentos a sal y nitritos/nitratos logrando que disminuya el agua y que el alimento cambie su composición, como por ejemplo lo que sucede con el jamón.
              .col-lg-3.col-md-6
                figure.m-auto.col-9.col-md-12
                  img(src="@/assets/curso/tema3/13.png")
          div(numero="4" titulo="Azucarado")
            .row
              .col-lg-9.mb-4.mb-md-0.col-md-6
                p Con este método se hace de azúcar al alimento, haciendo que concentre más y no tenga tanta agua disponible, como es el caso de las mermeladas.
              .col-lg-3.col-md-6
                figure.m-auto.col-9.col-md-12
                  img(src="@/assets/curso/tema3/14.png")
          div(numero="5" titulo="Ahumado")
            .row
              .col-lg-9.mb-4.mb-md-0.col-md-6
                p Se somete a los alimentos a humo autorizado, como por ejemplo: el salmón ahumado.
              .col-lg-3.col-md-6
                figure.m-auto.col-9.col-md-12
                  img(src="@/assets/curso/tema3/15.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 Otros
    
    p(data-aos="fade-left") Además de los métodos tradicionales de conservación, existen otros enfoques:

    .col-xl-10.m-auto.mt-4
      .row.mt-4.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
          .h-100.p-3.cont_hover_1.text-center(style="background-color:#FDDBB4;border-radius:20px;")
            figure.m-auto.col-12.col-md-11.col-lg-12
              img(src="@/assets/curso/tema3/16.png")
            p.mt-3.mb-0 #[strong Aderezado:] Consiste en someter a los alimentos a la acción de vinagre, puede añadirse también sal y otros condimentos. Con este sistema el alimento se vuelve más ácido, siendo un medio poco apropiado para la multiplicación de bacterias.
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
          .h-100.p-3.cont_hover_1.text-center(style="background-color:#FDDBB4;border-radius:20px;")
            figure.m-auto.col-12.col-md-11.col-lg-12
              img(src="@/assets/curso/tema3/17.png")
            p.mt-3.mb-0 #[strong Añadir conservantes:] Se puede añadir conservantes para conseguir aumentar la vida útil del alimento. Siempre y cuando, se cumpla con los requerimientos exigidos por la normatividad.




</template>

<script>
export default {
  name: 'Tema3',
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
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema3/3.png)
  background-size: 100% 100%
.cont_3_2, .cont_3_2 *
  position: relative
.cont_3_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: rgb(253,219,180)
  background: linear-gradient(180deg, rgba(253,219,180,1) 0%, rgba(199,234,208,1) 100%)
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #238AA4
  background-image: url(../assets/curso/tema3/18.svg)
  border: 1px solid #238AA4
  opacity: 1
.slyder-a__tipo-b .slyder-a__btn--sigt
  transform: rotate(0deg)
.slyder-a__tipo-b .slyder-a__btn--atrs
  transform: rotate(180deg)
.slyder-a__bullets__item
  background-color: #F3EACA
  border: 1px solid #F3EACA
.slyder-a__bullets__item--active
  background-color: #DCC366 !important
  border-color: #DCC366 !important
.linea-tiempo-d__item__number,.linea-tiempo-d__item__content
  background-color: #E6F2E9
.linea-tiempo-d__item--selected .linea-tiempo-d__item__number, .linea-tiempo-d__item--selected .linea-tiempo-d__item__content
  background-color: #F1E7C2 !important
.cont_hover_1, .cont_hover_1 *
  transition: all .4s ease-in-out
  cursor: pointer
.cont_hover_1:hover
  background-color: #F9A545 !important
@media screen and (max-width: 992px)
  .cont_3_1:before
    background-size: cover
</style>
