# Proyecto Final Common Core
## Preámbulo
El registro de visitantes en una empresa en América Latina es un proceso tedioso y manual. Lo común es que una persona esté en la recepción tomando nota - a veces con papel y lápiz - de cada visitante. Por razones de seguridad, usualmente piden a cada visitante dejar una identificación. Si vivimos en la era digital, ¿por qué seguimos registrando visitantes como si fuera 1985? ¿Qué tal si sustituimos a la persona en recepción por una tablet? ¿Qué tal si en lugar de pedir una identificación, tomamos una foto?

### Diseño:
Entregables de diseño :
  * Haber realizado y documentado (con fotos, videos, aprendizajes, etc.)  al menos 3 entrevistas con usuarios diferentes.
  * Haber probado de “cliente incógnito” el registro de visitas en WeWork y compararla con tu solución y con la referencia que te brindaron ([Envoy](https://envoy.com/)).
  * Entregar un prototipo clickeable de alta fidelidad hecho en [Figma](https://www.figma.com/) u otro editor gráfico como Illustrator, Photoshop, PowerPoint, Keynote, etc. linkeado con [Marvel](https://marvelapp.com/) / [Invision](https://www.invisionapp.com/).
  * Haber hecho y documentado (con fotos, videos, aprendizajes, lista de cambios realizados, etc.) sesiones de testing del prototipo con usuarios.

----------------------------------------------------------
Para este proyecto se tomó como proceso a desarrollar el Registro de Visitantes a Comunal Coworking.
El control que lleva la empresa consta de 2 filtros:

1. Por parte de la seguridad del local se pide el DNI de la persona visitante, luego esta persona es dirigida a la recepción de Comunal.
2. En la recepción de Comunal se le pregunta a qué entidad o individuo desea visitar, una vez brindado el nombre de la empresa o persona, la recepcionista se comunica mediante Whatsapp o llamadas al trabajador que el visitante desea ver.

Cuando el trabajador acepta la visita, se comunica con la recepción de Comunal para que dejen pasar al visitante a las instalaciones o el trabajador se acerca a la recepción a hablar con el visitante. Sin embargo, cuando un trabajador no puede atender la visita, se le comunica a la recepción de Comunal que por el momento la persona a la que busca no lo puede atender.

Se entrevistó a [Diego e Ivanna](https://drive.google.com/open?id=1rplyFnKtUEJGoIp_Su7YqVXgqV-YcnWO), trabajadores de Comunal Coworking, se le hicieron preguntas como:
* ¿Qué datos registran de los visitantes? La respuesta fue que en la entrada se le pida el DNI por parte de la seguridad del edificio y en recepción le piden el nombre de la entidad o individuo que desean visitar.

* ¿Cómo controlaban qué persona entraba? La respuesta fue que seguridad llevaba un control con nombres y DNI, pero en recepción de Comunal no era necesario porque había un trato directo con el visitante.

* ¿Si se implementara un sistema que facilite el control de registros de visitantes lo utilizarían? La respuesta fue que lo ideal sería que la misma información que registra la parte de seguridad de comunal la tenga la parte de recepción, de esa manera se ahorrarían el molestar al visitante pidiendo muchos datos que ya se habían dado anteriormente y lo que se buscaba era ahorrar trabajo y tiempo.

* ¿Qué otros datos les gustaría que tenga la aplicación? La respuesta fue que les gustaría sacar estádisticas como qué oficiona o empresa tiene más visitas, hacer comparaciones de ello y llevar con conteo detallado de los visitantes.

La entrevista al personal de Comunal fue grabada [link](https://drive.google.com/open?id=179uRJoy1jdZ6xAkUBLC0uaiWYMfoiRT2) . Por otra parte, los entrevistados presentaron el caso en que vienen visitantes a ver las instalaciones para pedir una oficina y trabajar ahí, por lo que a Comunal le gustaría que se sumen empresas o personas que quieran tener un espacio de trabajo dentro de las instalaciones de Comunal.

El equipo de Laboratoria planteó como solución sustituír a la persona de recepción por una tablet y que una aplicación se encargue de tomar los datos a los visitantes, que se reemplace el requerimiento de dar el DNI en recepción por una foto que será tomada en el transcurso del registro de visita. Como solución del equipo se creó la aplicación Visitor.

Link de prototipo de alta fidelidad: [Visitor Figma](https://www.figma.com/proto/Ts23UKlg9DL0nJ4ISTIzinYi/visitor?node-id=3%3A2&scaling=scale-down)

Link de la aplicación en gh-pages: [Visitor Gh-Pages](https://anaflaviadiaz.github.io/wework/src/)

Link de la aplicación con hosting: [Visitor Hosting](wework-731bf.firebaseapp.com)

El equipo trabajó bajo las historias de usuario:

1. Yo como "visitante" quiero registrarme con mis datos personales incluyendo mi foto.
  * Para este paso, se tuvo que configurar una interfaz que solicite los datos personales como nombre, número de DNI y su celular en caso quieran comunicarse personalmente con el visitante. Una vez completados estos requerimientos, se procede a tomar la foto con la cámara que tiene el dispositivo que se esté utlizando en el registro (celular, tablet, laptop o computadora).

2. Yo como "visitante" quiero seleccionar a la persona que quiero visitar.
  * Para esta historia se tomó en consideración una lista donde aparezca el nombre completo de los trabajadores y seleccionar al que se quiera visitar, una vez seleccionado el trabajador es que aparece la opción de enviar correo por lo que se usó Mandrill como servicio de correos. En el caso de Diego e Ivanna, trabajadores de Comunal Coworking, nos comentaron que no debería mostrarse los nombres de los trabajadores por temas de seguridad.

3. Yo como "trabajadora" quiero que me llegue un correo con la información de la persona que me quiere visitar.
  * Para esta historia, le llega un correo a la persona que se seleccionó para la visita, diciendo el nombre del visitante. Como un proceso interno es que el trabajador le confirme al personal de seguridad si el visitante puede ingresar, puede esperar en recepción o no lo pueden atender ese día. En el caso de Comunal, el medio de comunicación es Whatsapp.

4. Yo como "administrador" quiero visualizar a los visitantes incluyendo la fecha y hora que se registraron.
  * Para esta historia, se tomó en consideración que el administrador es quien llevará el control de la información de la visitas y es quién guiará al visitante en el proceso de registro. El administrador podrá ser el único usuario que iniciará sesión con el correo y contraseña que le asignó Comunal o el equipo desarrollador de Visitor. Cuando haya iniciado sesión podrá visualizar el nombre de los visitantes, la fecha y hora en que se registraron.

El equipo de Comunal comentó que le resulta más factible y cómodo el uso de Whatsapp porque muchos trabajadores no están al pendiente de los correos y muchos de ellos ni siquiera revisan su bandeja de entrada por lo que obtaron la mensajería rápido de dicha aplicación. Por otra parte, como solución a una comunicación más rápida es que sea una notificación por SMS.