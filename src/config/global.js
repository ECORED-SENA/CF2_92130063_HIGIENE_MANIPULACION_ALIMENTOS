export default {
  global: {
    componenteFormativo:
      'Enfermedades Transmitidas por los Alimentos (ETA) y conservación de alimentos',
    descripcionCurso:
      'Las enfermedades transmitidas por alimentos (ETA) son causadas por microorganismos patógenos que se desarrollan en los alimentos. Los síntomas incluyen vómito, diarrea y dolor abdominal. Los alimentos de mayor riesgo son los de base de huevo, carne molida y productos crudos. La prevención incluye higiene adecuada, cocción apropiada y mantenimiento de temperaturas seguras para evitar la proliferación de bacterias.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Enfermedades Transmitidas por los Alimentos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La manipulación de alimentos ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Conservación de alimentos ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/92130063_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Enfermedades Transmitidas por los Alimentos. ',
      referencia:
        'González Flores, T. (2006). Enfermedades transmitidas por alimentos y PCR: prevención y diagnóstico: ( ed.). Red Salud Pública de México.  ',
      tipo: 'Artículo',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/22197  ',
    },
    {
      tema: 'Enfermedades Transmitidas por los Alimentos. ',
      referencia:
        'U.S. Food and Drug Administration  (2023). Cómo la FDA rastrea brotes de enfermedades. [Archivo de video] Youtube. transmitidas por alimentos.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=nacue2_hNTw&ab_channel=U.S.FoodandDrugAdministration ',
    },
    {
      tema: 'La manipulación de alimentos. ',
      referencia:
        'Alimentos Cloud (s.f.). Manipulación segura de alimentos. Curso de Manipulador de Alimentos. [Podcast]. YouTube. ',
      tipo: 'Podcast',
      link: 'https://music.youtube.com/watch?v=6FFMBqzVw30&feature=shared ',
    },
    {
      tema: 'La manipulación de alimentos. ',
      referencia:
        'ESHE (2020). Módulo sobre manipulación de alimentos básica común. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/rk9DvIn8zVs?feature=shared  ',
    },
    {
      tema: 'Conservación de alimentos. ',
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). <em>Guía de inocuidad de alimentos en establecimientos de almacenamiento</em>.',
      tipo: 'Guía',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SNA/Guia-inocuidad-alimentos-establecimientos-almacenamiento.pdf ',
    },
    {
      tema: 'Conservación de alimentos. ',
      referencia:
        'TEDx Talks (2021). ¿Cómo conservar los alimentos y no morir en el intento? | Maitane Alonso | TEDxUDeusto ',
      tipo: 'Video',
      link: 'https://youtu.be/KrehpvFVNic?feature=shared  ',
    },
  ],
  glosario: [
    {
      termino: 'Bacteria',
      significado:
        'microorganismo unicelular, sin núcleo definido por una membrana. Interviene en procesos como la fermentación y puede ser la causa de enfermedades como salmonelosis. ',
    },
    {
      termino: 'Calidad',
      significado:
        'propiedad o conjunto de propiedades inherentes a una persona o cosa que permiten apreciarla con respecto a las restantes de su especie. ',
    },
    {
      termino: '<em>Clostridium botulinum</em>',
      significado:
        'bacteria que se encuentra en el suelo y en algunos alimentos no tratados. ',
    },
    {
      termino: '<em>Escherichia Coli</em>',
      significado:
        'bacteria que integra parte de la flora intestinal del hombre y los animales. ',
    },
    {
      termino: 'Frigorífico',
      significado:
        'cámara o mueble que se enfría artificialmente para conservar alimentos u otros productos. ',
    },
    {
      termino: 'Gastroenteritis',
      significado:
        'inflamación de las mucosas del estómago y de los intestinos debida a una infección. ',
    },
    {
      termino: 'Inocuidad',
      significado:
        'alimentos libres de contaminación incapaces de hacer daño. ',
    },
    {
      termino: 'Incubación',
      significado:
        'fase inicial de una enfermedad en la que aún no se aparecen los síntomas externos. ',
    },
    {
      termino: 'Inmunodeprimido',
      significado: 'depresión inmunológica. ',
    },
    {
      termino: 'Irreversible',
      significado: 'que no es reversible. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Bravo, F. (2004). Manejo higiénico de los alimentos. México. Limusa. ',
      link: '',
    },
    {
      referencia:
        'Clayton, K. (s.f.).  Métodos para la conservación de alimentos. Revista "Emprendimientos alimentarios". University Purdue.',
      link: 'https://www.extension.purdue.edu/extmedia/FS/FS-15-S-W.pdf ',
    },
    {
      referencia:
        'Díaz Torres, R. (2009). <em>Conservación de los alimentos:</em> ( ed.). Editorial Félix Varela.',
    },
    {
      referencia:
        'Editorial Eidec. (2020). <em>La inocuidad de los alimentos y su aporte a la seguridad alimentaria</em>.',
      link:
        'https://www.editorialeidec.com/wp-content/uploads/2020/11/Libro-la-inocuidad-de-alimentos-y-su-aporte-a-la-seguridad-alimentaria.pdf ',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (2002). <em>Estrategia global de la OMS para la inocuidad de los alimentos: alimentos más sanos para una salud mejor</em>. Ginebra: Departamento de Inocuidad de los Alimentos.',
      link:
        'https://cdn.who.int/media/docs/default-source/food-safety/campaign-guide-es.pdf ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Beatriz Elena Marín Rodríguez',
          cargo: 'Experta tematática',
          centro: 'Centro de Industria - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
