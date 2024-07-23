<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Conociendo las ETA',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar las enfermedades transmitidas por los alimentos (ETA), su prevención y los métodos de conservación de alimentos.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué caracteriza a las enfermedades transmitidas por los alimentos (ETA)?',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Largos períodos de incubación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cortos períodos de incubación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ausencia de síntomas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recuperación en 24 horas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de microorganismos se desarrollan en el tracto digestivo causando infecciones alimentarias?',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Toxinas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hongos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Microorganismos patógenos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Bacterias beneficiosas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una característica de los microorganismos patógenos?',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Son visibles a simple vista.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Son beneficiosos para la salud.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No pueden ser detectados en los alimentos a simple vista.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se utilizan en la elaboración de yogurt.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes alimentos es más susceptible de contaminarse?',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Pan.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Carne molida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Frutas secas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aceite de oliva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el principal microorganismo responsable del botulismo?',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Salmonella.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escherichia Coli.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Staphylococcus aureus.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clostridium botulinum.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué método de conservación de alimentos utiliza temperaturas cercanas a 80 °C para destruir microorganismos?',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Esterilización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pasteurización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Congelación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desecación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la temperatura de mayor peligro para la multiplicación de microorganismos en los alimentos?',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Menos de 0 °C.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entre 0 °C y 5 °C.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entre 10 °C y 60 °C.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Más de 70 °C.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué enfermedad causa la Salmonella?',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Botulismo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Listeriosis.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Salmonelosis.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estafilococia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué bacteria es conocida por causar infecciones nosocomiales?',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Escherichia Coli.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Staphylococcus aureus.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Salmonella.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Listeria monocytogenes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué práctica es importante para evitar la proliferación de bacterias en los alimentos?',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener alimentos crudos a temperatura ambiente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recalentar alimentos varias veces.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Descongelar alimentos en el frigorífico o microondas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Utilizar las mismas herramientas para alimentos crudos y cocidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Te felicito, has superado la actividad.',
      mensaje_final_reprobado:
        'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
