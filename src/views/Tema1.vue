<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Enfermedades transmitidas por los alimentos 

    .cont_1_1.pb-5
      .p-4(style="background-color:#FEEDDA;" data-aos="zoom-in")
        .row
          .col(style="place-self:center;")
            p.mb-0 Las Enfermedades Transmitidas por los Alimentos (ETA) son un grupo de enfermedades de tipo #[strong gastroentérico] causadas por la ingestión de alimentos o agua contaminados con microorganismos patógenos, toxinas o sustancias químicas. Estas enfermedades se caracterizan por presentar síntomas gastrointestinales y tienen un período de incubación corto, generalmente de 2 a 48 horas después de la ingestión del alimento contaminado.
          .col-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/tema1/1.svg")
      
      br
      .col-xl-10.m-auto.mt-5.justify-content-center
        .row
          .col-lg.mb-5.mb-lg-0.col-md-9.pe-lg-0(data-aos="fade-right")
            .h-100.p-4.p-xl-5.pt-xl-0.pt-0.cont_puntos.cont_puntos__verde(style="background-color:#C1DDC7;border-radius:10px 0px 0px 10px;position:relative;")
              figure
                img(src="@/assets/curso/tema1/2.svg" style="display:inline;max-width:150px;position:relative;margin-top:-30px;")
              h5.mt-3 Infección alimentaria
              p.mb-0 Cuando determinados microorganismos ingeridos por los alimentos se desarrollan en el tracto digestivo del hombre, como, por ejemplo: salmonelosis.
          .col-lg.col-md-9.ps-lg-0(data-aos="fade-left")
            .h-100.p-4.p-xl-5.pt-xl-0.pt-0.cont_puntos.cont_puntos__salmon(style="background-color:#FDDBB4;border-radius:0px 10px 10px 0px;")
              figure
                img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:150px;position:relative;margin-top:-30px;position:relative;")
              h5.mt-3 Intoxicación alimentaria
              p.mb-0 Cuando la enfermedad es causada por toxinas producidas por microorganismos que están en los alimentos, como, por ejemplo: botulismo, estafilococia.
    
    .cont_decorativo.mb-4.mt-3(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 Importancia de las ETA
    
    p(data-aos="fade-right") Es causa de enfermedad e incluso de muerte, sobre todo en niños, ancianos e inmunodeprimidos.

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-3.cont_hover_1.text-center(style="background-color:#FDDBB4;border-radius:20px;")
          figure.m-auto.col-12.col-md-11.col-lg-12
            img(src="@/assets/curso/tema1/5.png")
          p.mt-3.mb-0 Pérdidas económicas por gastos médicos, medicamentos, pérdida de horas de trabajo.
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-3.cont_hover_1.text-center(style="background-color:#FDDBB4;border-radius:20px;")
          figure.m-auto.col-12.col-md-11.col-lg-12
            img(src="@/assets/curso/tema1/6.png")
          p.mt-3.mb-0 Responsabilidad civil de los establecimientos causantes de las toxinfecciones alimentarias.
      .col-lg.col-md-8(data-aos="zoom-in")
        .h-100.p-3.cont_hover_1.text-center(style="background-color:#FDDBB4;border-radius:20px;")
          figure.m-auto.col-12.col-md-11.col-lg-12
            img(src="@/assets/curso/tema1/7.png")
          p.mt-3.mb-0 Pérdida de la reputación y la credibilidad de estos establecimientos.
    
    .row.mt-5
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/8.svg")
      .col(style="place-self:center;" data-aos="fade-left")
        p Los microorganismos actúan como fuente de infección o peligro alimentario. También son denominados #[strong gérmenes o microbios], aunque estos sean tan pequeños, que resultan invisibles a ojo humano; es decir que sin un microscopio, el ser humano no es capaz de verlos.
        p.mb-0 Están en cualquier parte como: #[strong la piel, pelo, aire, suelo, agua, ambiente,] por esta razón es importante conocerlos y saber qué hacer para evitar su aparición en lugares donde no deben estar. Se clasifican en función del daño que puedan causarle al ser humano:
    
    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .text-center.h-100.p-4(style="background-color:#E6F2E9;border-radius:18px;position:relative;")
          img(src="@/assets/curso/tema1/9.svg" style="position:absolute;right:0;top:0;max-width:100px;z-index:0;")
          img(src="@/assets/curso/tema1/10.svg" style="position:absolute;right:0;bottom:0;max-width:fit-content;z-index:0;")
          div(style="position:relative;z-index:1;")
            figure.text-center
              img(src="@/assets/curso/tema1/11.svg" style="max-width:110px;display:inline;")
            h5.m-auto.text-white.p-1.ps-3.pe-3.mt-3(style="max-width:fit-content;background-color:#5F6E62;") Beneficios
            p.mt-4 No todos los microorganismos son malos, puesto que algunos se utilizan para elaborar alimentos como: yogurt, queso, pan, entre otros.
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .text-center.h-100.p-4(style="background-color:#E6F2E9;border-radius:18px;position:relative;")
          img(src="@/assets/curso/tema1/9.svg" style="position:absolute;right:0;top:0;max-width:100px;z-index:0;")
          img(src="@/assets/curso/tema1/10.svg" style="position:absolute;right:0;bottom:0;max-width:fit-content;z-index:0;")
          div(style="position:relative;z-index:1;")
            figure.text-center
              img(src="@/assets/curso/tema1/12.svg" style="max-width:110px;display:inline;")
            h5.m-auto.text-white.p-1.ps-3.pe-3.mt-3(style="max-width:fit-content;background-color:#5F6E62;") Alterantes
            p.mt-4 Estos son responsables de la putrefacción de los alimentos. Son dañinos en el caso de su presencia, debido a que cuando están en un alimento hacen que este cambie de olor, color, sabor y textura normal. Por ello, normalmente, se deben evitar estos alimentos al presentar apariencia anormal. Si algo huele mal o tiene color raro, lo más adecuado es que no se use.
      .col-lg.col-md-9(data-aos="zoom-in")
        .text-center.h-100.p-4(style="background-color:#E6F2E9;border-radius:18px;position:relative;")
          img(src="@/assets/curso/tema1/9.svg" style="position:absolute;right:0;top:0;max-width:100px;z-index:0;")
          img(src="@/assets/curso/tema1/10.svg" style="position:absolute;right:0;bottom:0;max-width:fit-content;z-index:0;")
          div(style="position:relative;z-index:1;")
            figure.text-center
              img(src="@/assets/curso/tema1/13.svg" style="max-width:110px;display:inline;")
            h5.m-auto.text-white.p-1.ps-3.pe-3.mt-3(style="max-width:fit-content;background-color:#5F6E62;") Patógenos
            p.mt-4 Estos son los más peligrosos, porque a simple vista no pueden ser detectados en el alimento. Son los principales responsables de las enfermedades de transmisión alimentaria.
    
    .row.mt-5
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        h4(style="color:#6F6F6F;letter-spacing:4px;") • • • • • • #[br] • • • • • • #[br] • • • • • •
      .col(style="place-self:center;" data-aos="fade-left")
        p Dichos microorganismos necesitan básicamente lo mismo que los seres humanos para vivir: agua, comida y estar en las condiciones ambientales en las que puedan permanecer vivos. En concreto necesitan:
    
    .cont_1_2.mt-4
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          .p-3.cont_gradient_naranja(style="background: rgb(249,165,69);background: linear-gradient(90deg, rgba(249,165,69,1) 10%, rgba(253,219,180,1) 10%);border-radius:15px 15px 0px 0px;")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/15.svg" style="width:50px;height:50px;")
              .col.ps-lg-4(style="place-self:center;")
                p.fw-bold.mb-0 Agua
                p.mb-0 Deben tener humedad o líquido. Si a los alimentos se les retira el agua que contienen, es decir, se deshidratan o se desecan, se logra que se conserven mejor y no se contaminen fácilmente por microorganismos.
          .p-3.cont_gradient_verde(style="background: rgb(193,221,199);background: linear-gradient(90deg, rgba(193,221,199,1) 10%, rgba(230,242,233,1) 10%);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/16.svg" style="width:50px;height:50px;")
              .col.ps-lg-4(style="place-self:center;")
                p.fw-bold.mb-0 Nutrientes
                p.mb-0 Los nutrientes actúan como "comida" para estos organismos y son esenciales para su metabolismo y crecimiento. Carbohidratos, proteínas y grasas, presentes en los alimentos, proporcionan la energía y los componentes necesarios para la reproducción microbiana.
          .p-3.cont_gradient_naranja(style="background: rgb(249,165,69);background: linear-gradient(90deg, rgba(249,165,69,1) 10%, rgba(253,219,180,1) 10%);border-radius:0px 0px 15px 15px;")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/17.svg" style="width:50px;height:50px;")
              .col.ps-lg-4(style="place-self:center;")
                p.fw-bold.mb-0 Calor
                p.mb-0 Estar a una temperatura adecuada para poder multiplicarse. La temperatura de mayor peligro es entre 10 °C y 60 °C, debido a que en ese rango se encuentran en mejores condiciones para poder dividirse.
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/18.png")
      
      .row.mt-4
        .col(style="place-self:center;" data-aos="fade-left")
          p Solo el calor elimina los microorganismos, si se congelan los alimentos a las siguientes temperaturas más frías que -18° C, es decir, -18 °, -19 ° y -20 °, se quedan estables, 'sin moverse' ni multiplicarse; pero si el alimento se pusiera a una temperatura de peligro, las bacterias se multiplicarían.
          p.mb-0 En refrigeración a una temperatura entre 0° y 5 °C, se multiplican pero muy lentamente. Por esta razón es importante mantener las temperaturas de frío adecuadas según el alimento.
        .col-auto.d-none.d-md-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/19.svg")
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/20.png")
      .col-lg-8(data-aos="fade-left")
        .p-3(style="background-color:#F9A545;")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/21.svg")
            .col(style="place-self:center;")
              p.fw-bold.mb-0 Tiempo
              p.mb-0 Si las condiciones son óptimas (tienen agua, comida y calor), cuando más tiempo pase, más se multiplicarán y mayor será el riesgo para el consumidor. Por esta razón es importante mantener los alimentos a una temperatura adecuada para que no se multipliquen y así no transporten agentes agresores.
        .p-3(style="background-color:#C1DDC7;")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/22.svg")
            .col(style="place-self:center;")
              p.fw-bold.mb-0 Acidez
              p.mb-0 Al aumentar la acidez, los alimentos se contaminan menos por bacterias; por ello a algunos alimentos se les añade limón o vinagre.
        .p-3(style="background-color:#F9A545;")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/23.svg")
            .col(style="place-self:center;")
              p.fw-bold.mb-0 Oxígeno
              p.mb-0 Algunas bacterias viven con oxígeno, es decir 'respiran', pero otras crecen también sin oxígeno; algunas de ellas son muy peligrosas como el Clostridium botulinum debido a que puede desarrollarse en el interior de las latas.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/4.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 ¿Qué alimentos pueden ser más peligrosos o susceptibles de poder contaminarse?
    
    p(data-aos="fade-right") Cualquier alimento puede ser susceptible de contaminarse, pero es cierto que hay algunos de mayor riesgo, que por su naturaleza, composición y forma de preparación hacen que sean perfectos para que las bacterias se multipliquen en ellos.

    .cont_1_3.mt-4
      p(data-aos="fade-up") Entre estos alimentos se encuentran:
      .row.mt-4
        .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.color-acento-botones.p-4.text-center(style="background-color:#E0E0E0;")
              .row.justify-content-center.mb-3
                .col-6.col-md-4.col-lg-7
                  img(src='@/assets/curso/tema1/25.svg')
              h5.m-auto.text-white.p-1.ps-3.pe-3.mt-3(style="max-width:fit-content;background-color:#5F6E62;") Alimentos con base de huevo
              p.mt-3.mb-0(style="color:#12263F;") Mayonesas, salsas, pasteles. Se sugiere el uso de ovoproductos pasteurizados en industrias alimenticias.
            .tarjeta.color-acento-botones.p-4.text-center(style="background-color:#E0E0E0;")
              .row.justify-content-center.mb-3
                .col-6.col-md-4.col-lg-7
                  img(src='@/assets/curso/tema1/26.svg')
              h5.m-auto.text-white.p-1.ps-3.pe-3.mt-3(style="max-width:fit-content;background-color:#5F6E62;") Carne molida
              p.mt-3.mb-0(style="color:#12263F;") Hamburguesas, albóndigas. La superficie expuesta al aire es mayor, aumentando el riesgo de contaminación.
            .tarjeta.color-acento-botones.p-4.text-center(style="background-color:#E0E0E0;")
              .row.justify-content-center.mb-3
                .col-6.col-md-4.col-lg-7
                  img(src='@/assets/curso/tema1/27.svg')
              h5.m-auto.text-white.p-1.ps-3.pe-3.mt-3(style="max-width:fit-content;background-color:#5F6E62;") Aves de corral y granja
              p.mt-3.mb-0(style="color:#12263F;") Pollo, gallina, perdiz.
            .tarjeta.color-acento-botones.p-4.text-center(style="background-color:#E0E0E0;")
              .row.justify-content-center.mb-3
                .col-6.col-md-4.col-lg-7
                  img(src='@/assets/curso/tema1/28.svg')
              h5.m-auto.text-white.p-1.ps-3.pe-3.mt-3(style="max-width:fit-content;background-color:#5F6E62;") Pescados frescos, mariscos y moluscos
              p.mt-3.mb-0(style="color:#12263F;") Atún fresco, camarones, ostras.
            .tarjeta.color-acento-botones.p-4.text-center(style="background-color:#E0E0E0;")
              .row.justify-content-center.mb-3
                .col-6.col-md-4.col-lg-7
                  img(src='@/assets/curso/tema1/29.svg')
              h5.m-auto.text-white.p-1.ps-3.pe-3.mt-3(style="max-width:fit-content;background-color:#5F6E62;") Productos crudos
              p.mt-3.mb-0(style="color:#12263F;")   Verduras crudas, sushi.
            .tarjeta.color-acento-botones.p-4.text-center(style="background-color:#E0E0E0;")
              .row.justify-content-center.mb-3
                .col-6.col-md-4.col-lg-7
                  img(src='@/assets/curso/tema1/30.svg')
              h5.m-auto.text-white.p-1.ps-3.pe-3.mt-3(style="max-width:fit-content;background-color:#5F6E62;") Productos de pastelería
              p.mt-3.mb-0(style="color:#12263F;") Tartas, pasteles con crema o nata. Especialmente aquellos que contienen cremas o nata.
        .col-lg-3(data-aos="fade-left")
          figure.m-auto.col-7.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/31.png")
      
      .row.mt-4
        .col-auto.d-none.d-md-block(data-aos="fade-right")
          h4(style="color:#6F6F6F;letter-spacing:4px;") • • • • • • #[br] • • • • • • #[br] • • • • • •
        .col(style="place-self:center;" data-aos="fade-left")
          p A continuación se presenta una tabla que resume los principales microorganismos causantes de enfermedades transmitidas por alimentos, los síntomas que producen, las fuentes de contaminación y las medidas de prevención recomendadas para evitar su proliferación y asegurar la seguridad alimentaria.
    
      .titulo-sexto.color-acento-contenido.mt-3(data-aos="zoom-in-down")
        h5 Tabla 1. 
        span Microorganismos, Enfermedades y Prevención
    
    .tabla-a.color-acento-contenido(data-aos="zoom-in-up") 
      table
        thead
          tr
            th Microorganismo
            th Enfermedad / ¿Qué produce?
            th Contaminación / ¿Ambiente / #[br] Alimento Contaminado?
            th Prevención
        tbody
          tr
            td.p-4 #[em Salmonella]
            td.p-4 Salmonelosis: fiebre alta, dolor abdominal, dolor de cabeza y diarrea.
            td.p-4 Ingestión humana y animal.
            td.p-4 Cocinar adecuadamente los alimentos, mantener higiene y refrigeración de alimentos, lavar manos y utensilios. Evitar el consumo de alimentos crudos.
          tr
            td.p-4 #[em Staphylococcus aureus]
            td.p-4 Intoxicación por #[em staphylococcus]: da alimentos contaminados.
            td.p-4 Nariz, garganta, piel, pelo. Heridas infectadas. Manipuladores.
            td.p-4 Proteger heridas, uso adecuado de guantes y mantener la higiene de los manipuladores. Refrigerar los alimentos preparados rápidamente y evitar mantener alimentos en temperaturas peligrosas.
          tr
            td.p-4 #[em Clostridium Botulinum] 
            td.p-4 Da al irme: vómitos, visión borrosa, parálisis. Muerte. 
            td.p-4 Polvo, tierra. Agua con poca cantidad de oxígeno. 
            td.p-4 Cocinar bien los alimentos enlatados, especialmente aquellos sin oxígeno. No consumir alimentos con latas abolladas o dañadas. 
          tr
            td.p-4 #[em Listeria monocytogenes]
            td.p-4 Listeriosis: diarrea, náuseas, problemas de coordinación, fiebre. Puede llegar a ser mortal. 
            td.p-4 Polvo, tierra. 
            td.p-4 Cocinar los alimentos correctamente. Lavar vegetales. Mantener refrigeración adecuada. Evitar consumo de quesos blandos y productos lácteos sin pasteurizar. 
          tr
            td.p-4 #[em Escherichia Coli]
            td.p-4 Dolor abdominal, diarrea, vómitos. Se elimina por calor. 
            td.p-4 Agua y manipuladores. 
            td.p-4 Lavar frutas y vegetales. Cocinar bien las carnes, especialmente la carne molida. Mantener higiene personal y de utensilios. 






      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: rgb(243,249,244)
  background: linear-gradient(180deg, rgba(243,249,244,0) 0%, rgba(243,249,244,0.48792016806722693) 25%, rgba(243,249,244,0.9248949579831933) 74%, rgba(243,249,244,0) 100%)
.cont_hover_1, .cont_hover_1 *
  transition: all .4s ease-in-out
  cursor: pointer
.cont_hover_1:hover
  background-color: #F9A545 !important
.cont_1_2, .cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 80%
  bottom: 7%
  background: url(../assets/curso/tema1/14.png)
  background-size: 100% 100%
.cont_1_3, .cont_1_3 *
  position: relative
.cont_1_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/24.png)
  background-size: 100% 100%
.slyder-f__btn i
  font-size: 1.4rem
  background-color: #238AA4
  color: #fff
  padding: .7rem 1rem
  border-radius: 100%
@media screen and (max-width: 1200px)
  .cont_gradient_naranja
    background: rgb(249,165,69);background: linear-gradient(90deg, rgba(249,165,69,1) 14%, rgba(253,219,180,1) 14%) !important
  .cont_gradient_verde
    background: rgb(193,221,199);background: linear-gradient(90deg, rgba(193,221,199,1) 14%, rgba(230,242,233,1) 14%) !important
@media screen and (max-width: 992px)
  .cont_1_2:before,.cont_1_3:before
    background-size: cover
  .cont_gradient_naranja
    background: rgb(249,165,69);background: linear-gradient(90deg, rgba(249,165,69,1) 12%, rgba(253,219,180,1) 12%) !important
  .cont_gradient_verde
    background: rgb(193,221,199);background: linear-gradient(90deg, rgba(193,221,199,1) 12%, rgba(230,242,233,1) 12%) !important
@media screen and (max-width: 768px)
  .cont_gradient_naranja
    background: rgb(249,165,69);background: linear-gradient(90deg, rgba(249,165,69,1) 16%, rgba(253,219,180,1) 16%) !important
  .cont_gradient_verde
    background: rgb(193,221,199);background: linear-gradient(90deg, rgba(193,221,199,1) 16%, rgba(230,242,233,1) 16%) !important
@media screen and (max-width: 468px)
  .cont_gradient_naranja
    background: rgb(249,165,69);background: linear-gradient(90deg, rgba(249,165,69,1) 21%, rgba(253,219,180,1) 21%) !important
  .cont_gradient_verde
    background: rgb(193,221,199);background: linear-gradient(90deg, rgba(193,221,199,1) 21%, rgba(230,242,233,1) 21%) !important
</style>
