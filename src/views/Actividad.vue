<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reconociendo los productos del Sistema Moda y su gestión comercial',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de atributos, tipologías, mezcla de productos, producción de colecciones, medidas, tallaje y lanzamiento mediante preguntas de selección múltiple con única respuesta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Una empresa describe la composición, las costuras y las medidas de una camisa. ¿Qué atributos está presentando?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Simbólicos, asociados con la pertenencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Interiores, propios de la construcción del producto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exteriores, relacionados con el empaque.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comerciales, referidos únicamente al precio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificó los atributos interiores: composición, construcción y medidas son características propias del producto.',
          mensaje_incorrecto:
            'Revise los atributos interiores: describen materiales, construcción, acabados y dimensiones del producto.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento corresponde a los atributos exteriores de una camisa?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El tipo de costura.', esCorrecta: false },
            { id: 'b', texto: 'La composición del tejido.', esCorrecta: false },
            { id: 'c', texto: 'El ajuste de la manga.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La etiqueta con información de cuidados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Reconoció la etiqueta como un elemento que acompaña la identificación y presentación del producto.',
          mensaje_incorrecto:
            'Distinga construcción y presentación: la etiqueta acompaña al producto y comunica información sobre él.',
        },
        {
          id: 3,
          texto:
            'Una persona relaciona una chaqueta con su estilo y sentido de pertenencia. ¿Qué dimensión está valorando?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Los atributos simbólicos.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Los atributos del embalaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las dimensiones de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las operaciones de confección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Relacionó los atributos simbólicos con los significados que la persona asocia al producto.',
          mensaje_incorrecto:
            'Revise los atributos simbólicos: incluyen asociaciones de identidad, estilo o pertenencia, según la persona y su contexto.',
        },
        {
          id: 4,
          texto:
            'En un zapato, la puntera, la pala y los cuartos forman parte de la estructura superior. ¿Cómo se denomina este conjunto?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Piso.', esCorrecta: false },
            { id: 'b', texto: 'Suela.', esCorrecta: false },
            { id: 'c', texto: 'Corte.', esCorrecta: true },
            { id: 'd', texto: 'Tacón.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Identificó el corte como el conjunto que constituye la parte superior del calzado.',
          mensaje_incorrecto:
            'Diferencie corte y piso: el corte conforma la parte superior; el piso comprende la estructura inferior.',
        },
        {
          id: 5,
          texto:
            'Un bolso tiene exterior de cuero y forro textil. ¿Cómo debe informar su composición en el catálogo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Indicando únicamente el material más visible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diferenciando el material exterior y el forro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Describiendo todo el bolso como cuero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituyendo los materiales por el color.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconoció que debe diferenciar la composición de las partes principales del bolso.',
          mensaje_incorrecto:
            'Precise los materiales de cada parte: el exterior de cuero no convierte el forro textil en cuero.',
        },
        {
          id: 6,
          texto:
            'Un overol integra en una sola pieza la cobertura de las partes superior e inferior del cuerpo. ¿Qué tipología representa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Prenda superior.', esCorrecta: false },
            { id: 'b', texto: 'Prenda inferior.', esCorrecta: false },
            { id: 'c', texto: 'Prenda interior.', esCorrecta: false },
            { id: 'd', texto: 'Prenda enteriza.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Clasificó el overol como prenda enteriza porque integra la cobertura superior e inferior en una pieza.',
          mensaje_incorrecto:
            'Revise las prendas enterizas: incluyen productos como vestidos, monos y overoles.',
        },
        {
          id: 7,
          texto:
            'Una empresa vende un collar de acero inoxidable con acabado dorado. ¿Qué descripción comunica con precisión su material?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Collar de acero inoxidable con acabado dorado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Collar de oro, por su apariencia dorada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Collar de metal precioso, sin verificar la composición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Collar de oro macizo, según la fotografía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Diferenció el material del acabado y seleccionó una descripción acorde con la composición informada.',
          mensaje_incorrecto:
            'Distinga composición y apariencia: un acabado dorado no demuestra que el collar esté fabricado en oro.',
        },
        {
          id: 8,
          texto:
            'Una empresa organiza su oferta en camisas, pantalones y chaquetas. ¿Cuál es la amplitud de su portafolio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Seis modelos.', esCorrecta: false },
            { id: 'b', texto: 'Dos variantes.', esCorrecta: false },
            { id: 'c', texto: 'Tres líneas.', esCorrecta: true },
            { id: 'd', texto: 'Una talla.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Identificó tres líneas y las relacionó con la amplitud del portafolio.',
          mensaje_incorrecto:
            'Cuente las líneas: camisas, pantalones y chaquetas conforman una amplitud de tres.',
        },
        {
          id: 9,
          texto:
            'Una empresa ofrece tres modelos de camisas, dos de pantalones y uno de chaquetas. Contando modelos, ¿cuál es la longitud de su portafolio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Seis modelos.', esCorrecta: true },
            { id: 'b', texto: 'Tres modelos.', esCorrecta: false },
            { id: 'c', texto: 'Cinco modelos.', esCorrecta: false },
            { id: 'd', texto: 'Ocho modelos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Sumó correctamente los modelos de las líneas: tres más dos más uno equivalen a seis.',
          mensaje_incorrecto:
            'Sume los modelos de todas las líneas; no confunda su cantidad con el número de líneas.',
        },
        {
          id: 10,
          texto:
            'Una camisa se ofrece en dos colores y tres tallas, con todas las combinaciones disponibles. ¿Cuántas variantes tiene ese modelo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cinco variantes.', esCorrecta: false },
            { id: 'b', texto: 'Seis variantes.', esCorrecta: true },
            { id: 'c', texto: 'Tres variantes.', esCorrecta: false },
            { id: 'd', texto: 'Dos variantes.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Identificó seis variantes al combinar cada uno de los dos colores con las tres tallas.',
          mensaje_incorrecto:
            'Multiplique los dos colores por las tres tallas; cada combinación disponible representa una variante.',
        },
        {
          id: 11,
          texto:
            'Una referencia registra pocas ventas. ¿Qué debe revisar la empresa antes de retirarla del portafolio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el número de seguidores de la marca.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solamente los colores de la próxima colección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo el precio de un producto diferente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Disponibilidad, información publicada y resultados comerciales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Reconoció que necesita revisar las condiciones comerciales antes de atribuir las bajas ventas al producto.',
          mensaje_incorrecto:
            'Compruebe inventario, información y resultados: una cifra de ventas aislada no explica sus causas.',
        },
        {
          id: 12,
          texto:
            'Antes de fabricar una colección, una empresa prueba una chaqueta para revisar su ajuste y funcionamiento. ¿Qué propósito cumple el prototipo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar el registro de especificaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Confirmar ventas antes de ofrecer el producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluar el diseño y detectar ajustes necesarios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Definir el público únicamente mediante fotografías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificó el prototipo como una versión de prueba que permite evaluar y ajustar el producto.',
          mensaje_incorrecto:
            'Revise la función del prototipo: comprobar construcción, dimensiones, ajuste y funcionamiento antes de autorizar la producción.',
        },
        {
          id: 13,
          texto:
            'Una empresa modifica la abertura de un bolsillo después de probar el prototipo. ¿Qué debe hacer antes de producir?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conservar la ficha anterior para evitar registros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actualizar la ficha técnica y verificar el cambio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Comunicar el cambio únicamente en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aplicar versiones distintas sin identificar cuál fue aprobada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconoció la necesidad de actualizar las especificaciones y verificar la modificación antes de producir.',
          mensaje_incorrecto:
            'Registre el ajuste en la ficha técnica y compruebe su resultado para que producción utilice la versión aprobada.',
        },
        {
          id: 14,
          texto:
            'Durante el control de calidad se detectan pantalones cuyo largo difiere de la ficha aprobada. ¿Qué acción corresponde?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Separarlos, evaluar la diferencia y registrar la corrección.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Publicarlos con las medidas de la ficha sin revisarlos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambiar su talla comercial sin comprobar el ajuste.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Entregarlos sin informar al equipo de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Relacionó el control de calidad con la evaluación de diferencias frente a las especificaciones aprobadas.',
          mensaje_incorrecto:
            'Compare el resultado con la ficha, identifique la causa y defina la corrección antes de dar conformidad al producto.',
        },
        {
          id: 15,
          texto:
            '¿Qué disciplina estudia las dimensiones y proporciones del cuerpo mediante procedimientos de medición?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ergonomía.', esCorrecta: false },
            { id: 'b', texto: 'Anatomía.', esCorrecta: false },
            { id: 'c', texto: 'Biomecánica.', esCorrecta: false },
            { id: 'd', texto: 'Antropometría.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Identificó la antropometría como el estudio de las dimensiones y proporciones corporales mediante mediciones.',
          mensaje_incorrecto:
            'Revise la antropometría: sus datos permiten relacionar dimensiones corporales, patrones y sistemas de tallas.',
        },
        {
          id: 16,
          texto:
            'Para obtener una medida, se rodea la cadera con una cinta métrica sin comprimir el cuerpo. ¿Qué tipo de medida se toma?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Largo.', esCorrecta: false },
            { id: 'b', texto: 'Ancho.', esCorrecta: false },
            { id: 'c', texto: 'Contorno.', esCorrecta: true },
            { id: 'd', texto: 'Estatura.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Reconoció el contorno como una medida que rodea la zona corporal.',
          mensaje_incorrecto:
            'Distinga las medidas: el contorno rodea una zona; el largo y el ancho siguen recorridos entre puntos definidos.',
        },
        {
          id: 17,
          texto:
            'Una camisa tiene contorno de pecho de 104 cm para una medida corporal de referencia de 96 cm. ¿Cuál es la holgura del ejemplo?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '8 cm.', esCorrecta: true },
            { id: 'b', texto: '104 cm.', esCorrecta: false },
            { id: 'c', texto: '96 cm.', esCorrecta: false },
            { id: 'd', texto: '200 cm.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Calculó ocho centímetros de diferencia entre prenda y cuerpo. Recuerde que este ejemplo no establece una holgura universal.',
          mensaje_incorrecto:
            'Reste la medida corporal a la de la prenda: 104 menos 96 son ocho centímetros de holgura en este ejemplo.',
        },
        {
          id: 18,
          texto:
            '¿Qué formulación establece una meta verificable para el lanzamiento de una chaqueta?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lograr que la chaqueta tenga mucho éxito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Obtener veinte pedidos confirmados durante las primeras dos semanas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Hacer publicaciones atractivas cuando sea posible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar el interés sin definir cómo medirlo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconoció una meta que define un resultado, una cantidad y un periodo de seguimiento.',
          mensaje_incorrecto:
            'Defina qué resultado medirá, en qué cantidad y durante qué periodo para comprobar el cumplimiento de la meta.',
        },
        {
          id: 19,
          texto:
            'Durante un lanzamiento se agota una talla anunciada. ¿Qué acción mantiene información consistente entre los canales?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener el anuncio sin revisar la disponibilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Confirmar todos los pedidos aunque falte la talla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Actualizar la disponibilidad y comunicarla al equipo de atención.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Cambiar el nombre del modelo sin informar del agotamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Relacionó la coordinación de canales con información actualizada sobre las opciones que el consumidor puede adquirir.',
          mensaje_incorrecto:
            'Actualice la disponibilidad y compártala con atención para evitar ofrecer una talla que no puede entregar.',
        },
        {
          id: 20,
          texto:
            'Disminuyen las ventas de un modelo y la empresa evalúa retirarlo. ¿Qué interpretación distingue su evolución comercial de la utilidad física de las prendas?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Todas las prendas vendidas dejaron de ser utilizables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La disminución demuestra defectos en todas las unidades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El retiro obliga a desechar las prendas adquiridas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La caída de ventas no determina la utilidad de las prendas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Diferenció el comportamiento comercial del modelo de la posibilidad de seguir usando las prendas adquiridas.',
          mensaje_incorrecto:
            'Distinga mercado y uso: una caída de ventas no significa que las prendas hayan perdido su utilidad física.',
        },
      ],
      mensaje_final_aprobado:
        'Alcanzó al menos 14 respuestas correctas de 20. Reconoció conceptos sobre los productos del Sistema Moda. Revise la retroalimentación para fortalecer su comprensión.',
      mensaje_final_reprobado:
        'Revise los temas asociados con sus respuestas incorrectas y vuelva a intentarlo. Puede repetir la actividad para fortalecer su comprensión de los productos del Sistema Moda.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
