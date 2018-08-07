# Proyecto Final Common Core
## Preámbulo
El registro de visitantes en una empresa en América Latina es un proceso tedioso y manual. Lo común es que una persona esté en la recepción tomando nota - a veces con papel y lápiz - de cada visitante. Por razones de seguridad, usualmente piden a cada visitante dejar una identificación. Si vivimos en la era digital, ¿por qué seguimos registrando visitantes como si fuera 1985? ¿Qué tal si sustituimos a la persona en recepción por una tablet? ¿Qué tal si en lugar de pedir una identificación, tomamos una foto? 

## Introducción
En este proyecto la empresa de coworking donde opera Laboratoria en tu ciudad ha decidido contratarte a ti y a dos compañeras para reinventar su proceso de registro de visitantes. Con la entrada de [WeWork](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwilrK_T5KjcAhWCj7MKHexzAEgYABAAGgJxbg&ohost=www.google.cl&cid=CAASE-RoAxXTp1Cd0ErxEHpPSGuF4Hk&sig=AOD64_38ykNPf0QRtI9n4CFtpQpth-MrNQ&q=&ved=0ahUKEwjswKvT5KjcAhVkU98KHUcYCeMQ0QwIJA&adurl=) al mercado latinoamericano, tienen mucha más competencia y necesitan invertir en tecnología para mejorar su servicio; el registro de visitantes es un primer acercamiento. Te dan la referencia de [Envoy](https://envoy.com/) en EEUU (un servicio que ofrece un sistema digital de registro de visitantes) y ustedes tienen que desarrollar una versión mínima viable (ver anexo I). 

## Objetivos de aprendizaje
El objetivo principal de este proyecto es que pongas en práctica todo lo aprendido durante el common core, con foco en la calidad, trabajando en un equipo multifuncional y presentando tu solución a una audiencia.
### Consideraciones generales
Para completar este proyecto deberás trabajar en un equipo de tres y seguir las siguientes consideraciones:
   * Planificación y organización
   * Roles, squad multifuncional
   
Cada integrante del equipo debe asumir alguno de los siguientes “roles” (*) liderando las siguientes áreas de trabajo:
   * Diseñadora UX
      Diseñar la experiencia de la aplicación (flujo, interacción, etc.).
      Identificar, documentar y priorizar las historias de usuario.
      Crear el diseño visual de la interfaz.
   * Desarrolladoras Front-end
      Implementar la interfaz de usuario diseñada (HTML/CSS/JS).
      Deben dividirse las funcionalidades entre las dos desarrolladoras.
      Todas los desarrollos deben incluir pruebas unitarias.

*Al no haber rol de Product Manager, las responsabilidades de gestión son compartidas entre todas las integrantes.*

## Planificación inicial
Es muy importante que al dividirse/distribuir/repartir el trabajo, lo hagan pensando de manera ágil y no en cascada. Es decir, si una de ustedes está esperando a que otra termine “su parte” para empezar a trabajar, algo anda mal, [¡eso se parece a la organización del trabajo industrial!](https://media.giphy.com/media/OQ872dEsRi8cU/source.gif). Todas son responsables del producto final y todas pueden (y deben) colaborar en el diseño, el desarrollo y la planificación.

### TIPS:

   * Recuerda a nuestras nuevas BFFs, [las historias de usuario](http://jmbeas.es/guias/historias-de-usuario/)
   * Ten siempre en mente evitar el desperdicio. Por ejemplo: ¿de qué sirve que tengas el prototipo del 100% de un proyecto en              Figma (alta definición) si solamente implementas el 50% del proyecto? El otro 50% del prototipo se podría considerar como desperdicio.
   * Limitar el trabajo en progreso. Si son 3 personas, procuren no tener más de 3 tareas a la vez en “doing”.
   * ¿Estás segura de que quieren seguir invirtiendo más minutos de tu vida (que no volverán) en discutir los colores del logotipo? [Aquí hay algo que te puede ayudar a decidir](https://play.google.com/store/apps/details?id=com.flip.war_daddy.flip_coin).

## Detalles sobre la implementación
  * La lógica del proyecto debe estar implementada completamente en JavaScript (ES6), HTML y CSS. 
  * Está permitido usar librerías o frameworks tanto de CSS como de JS, pero no es obligatorio. Elige bien las batallas que quieres luchar.
  * En este proyecto, no contamos con un boilerplate, por lo que deberás definir la estructura de carpetas y archivos que consideres necesaria, puedes guiarte de los proyectos anteriores. 
  * Los tests y el setup necesario para ejecutarlos serán hechos enteramente por ti. 
  * Para armar las interfaces visuales utiliza como base alguna de estas guías de componentes:
    * [Guía Desktop 1](https://www.figma.com/file/F3aUqpHWOfZsEQifTPIleXo6/material-kit-free)
    * [Guía Desktop 2](https://www.figma.com/file/S39H0B1LOnaVICIUiApFTfoP/_Style-Guide---Desktop---Style-Guide)
    * [Guía Mobile 1](https://www.figma.com/file/00VTwmTNvLVaBLkxrMFbT8/Google-Material-Design)
    * [Guía Mobile 2](https://www.figma.com/file/O2Xraz3mraQHvevNsicMl91V/ejemplos-2)
  * Guardar la data de los visitantes de forma remota usando [Firebase](https://firebase.google.com/). 
  * A nivel de arquitectura:
    * El uso de Firebase implica que debes trabajar bajo una arquitectura serverless. 
    * Te sugerimos que desacoples el proyecto en componentes y manejo de estados para que trabajes de forma ordenada y facilite la implementación de tus tests. Revisa la [charla](https://www.youtube.com/watch?v=g_BxnUJTUSk) y el [blog post](https://medium.com/laboratoria-developers/arquitectura-de-interfaces-web-parte-1-a41053c2a1f2) de Lupo sobre este tema ;)

## Tiempo
Tendrán 3 días para trabajar en este proyecto. Este tiempo es un poco corto para iterar y hacer las ceremonias que usualmente hacemos. Puedes elegir hacer tus sprints o simplemente correr un único sprint con “hitos”. Es decisión del equipo. Lo que sí les recomendamos es asegurar que usan bien los dailys, esto les permitirá hacer “mini” iteraciones cada 24 horas.

## Entregables obligatorios
Los criterios mínimos de aceptación para considerar que has completado este proyecto son:

### Diseño:
Entregables de diseño :
  * Haber realizado y documentado (con fotos, videos, aprendizajes, etc.)  al menos 3 entrevistas con usuarios diferentes.
  * Haber probado de “cliente incógnito” el registro de visitas en WeWork y compararla con tu solución y con la referencia que te brindaron ([Envoy](https://envoy.com/)).
  * Entregar un prototipo clickeable de alta fidelidad hecho en [Figma](https://www.figma.com/) u otro editor gráfico como Illustrator, Photoshop, PowerPoint, Keynote, etc. linkeado con [Marvel](https://marvelapp.com/) / [Invision](https://www.invisionapp.com/).
  * Haber hecho y documentado (con fotos, videos, aprendizajes, lista de cambios realizados, etc.) sesiones de testing del prototipo con usuarios.

### Implementación:
  * Tu producto final debe estar desplegado en la web y, como mínimo, debe:
  * Permitir al usuario visitante registrarse con sus datos personales, incluyendo su foto.
  * Permitir al usuario visitante seleccionar a la persona a quien viene a visitar.
  * Notificar a la persona a quien vienen a visitar. Para esto te recomendamos revisar:
    * Los servicios de [Sendgrid](https://sendgrid.com/ )
    * El API de [Mandrill](https://mandrillapp.com/docs/) para mandar correos de forma automática
    * El [API de notificaciones de HTML 5](https://developer.mozilla.org/en-US/docs/Web/API/notification)
  * Permitir al usuario administrador visualizar la data de los visitantes, incluyendo la fecha y hora de registro de cada uno
  * Los tests unitarios deben cubrir un mínimo del 70% de statements, functions y lines, y un mínimo del 50% de branches. 

### Presentación:
Deberás hacer dos presentaciones ante un jurado que te dará feedback inmediatamente. La primera será a mitad de semana para compartir tu avance y la segunda será al final de la semana para compartir tu producto final.
#### Las reglas para las dos presentaciones son:
  * Tendrás 3 minutos de presentación, ni un segundo más.
  * Habrán 2 minutos para preguntas del jurado.
  * Te recomendamos que la mayoría del tiempo lo enfoque en demostrar cómo se utiliza tu producto, el cual debe estar desplegado en la web. 
  * NO se permite presentar cosas en tu local ni videos previamente grabados.
  * NO inviertas tiempo presentándote, ni listando al equipo, ni dando una introducción que ya el jurado conoce. Como al hacer el producto, en la presentación también debes priorizar qué decir.
  * NO utilices slides de powerpoint, enfócate en presentar tu DEMO.
  * Durante el DEMO, enfócate en narrar y explicar el valor que tu producto le brinda al usuario.
  * Cuida tu lenguaje no verbal; recuerda mirar al público y tener un tono de voz adecuado para que toda la audiencia te pueda escuchar.
  * Idealmente debe presentar una sola integrante del equipo. Si deciden que presenta más de una persona, asegúrense de haber coordinado bien el flujo de la presentación.

### Hacker edition
Features/características extra sugeridas:
  * Como el WiFi a veces es nuestro peor enemigo, ¿es posible que tu aplicación pueda, sin Internet, registrar los datos del visitante, guardar los datos localmente y cuando tenga Internet mandarlos a la base de datos? Si te animas a hacer esto dale una revisada a los siguientes recursos:
    * [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)
    * [Offline first manifesto](http://offlinefirst.org/)
    * También sería ideal poder registrar la firma del visitante en el registro.
  * Sería genial también permitir generar un “pase” para el visitante, así fácilmente a la vista se sabe quién está de visita.
  * Al administrador le interesa tener un dashboard de “analíticas” de los visitantes: # de visitantes por día, horarios frecuentes de visita, a quién vienen a visitar, etc.

## Anexo I: Construyendo un MVP
Una modelo mental común para representar el desarrollo de productos es visualizarlo como una pirámide: el producto que construyes consiste en una serie de funcionalidades que le dan beneficios al usuario, los cuales le generan valor. El detalles está en que no todas las funcionalidades que creas le agregan la misma cantidad de valor al usuario. Es más, muchas funcionalidades le agregan cero valor. Son cosas que creemos que generan valor, pero que no terminan haciéndolo (recuerda que vivimos en un mundo incierto, donde no podemos predecir). Por lo tanto, al definir tu producto mínimo viable (MVP), tu misión es crear las mínimas funcionalidades que maximicen el valor que entregas. Menos es más ;)
![image](https://user-images.githubusercontent.com/7809496/43321432-d253abe8-9179-11e8-8d08-44a44db6ed0a.png)

## Anexo II: Envío de emails
Para poder hacer envíos de email necesitas un servicio. Aquí te dejamos un acceso a una cuenta de Mandrill de Laboratoria para que la puedas utilizar en tu proyecto.

Host: smtp.mandrillapp.com Port: 587 SMTP Username: Laboratoria.La SMTP Password: Te lo pasamos por Slack


----------------------------
Para este proyecto se tomó como proceso a desarrollar el Registro de Visitantes a Comunal Coworking.
El control que lleva la empresa consta de 2 filtros:

1. Por parte de la seguridad del local se pide el DNI de la persona visitante, luego esta persona es dirigida a la recepción de Comunal.
2. En la recepción de Comunal se le pregunta a qué entidad o individuo desea visitar, una vez brindado el nombre de la empresa o persona, la recepcionista se comunica mediante Whatsapp o llamadas al trabajador que el visitante desea ver.

Cuando el trabajador acepta la visita, se comunica con la recepción de Comunal para que dejen pasar al visitante a las instalaciones o el trabajador se acerca a la recepción a hablar con el visitante. Sin embargo, cuando un trabajador no puede atender la visita, se le comunica a la recepción de Comunal que por el momento la persona a la que busca no lo puede atender.

Se entrevistó a Diego e Ivanna, trabajadores de Comunal Coworking, se le hicieron preguntas como:
* ¿Qué datos registran de los visitantes? La respuesta fue que en la entrada se le pida el DNI por parte de la seguridad del edificio y en recepción le piden el nombre de la entidad o individuo que desean visitar.

* ¿Cómo controlaban qué persona entraba? La respuesta fue que seguridad llevaba un control con nombres y DNI, pero en recepción de Comunal no era necesario porque había un trato directo con el visitante.

* ¿Si se implementara un sistema que facilite el control de registros de visitantes lo utilizarían? La respuesta fue que lo ideal sería que la misma información que registra la parte de seguridad de comunal la tenga la parte de recepción, de esa manera se ahorrarían el molestar al visitante pidiendo muchos datos que ya se habían dado anteriormente y lo que se buscaba era ahorrar trabajo y tiempo.

* ¿Qué otros datos les gustaría que tenga la aplicación? La respuesta fue que les gustaría sacar estádisticas como qué oficiona o empresa tiene más visitas, hacer comparaciones de ello y llevar con conteo detallado de los visitantes.

Por otra parte, los entrevistados presentaron el caso en que vienen visitantes a ver las instalaciones para pedir una oficina y trabajar ahí, por lo que a Comunal le gustaría que se sumen empresas o personas que quieran tener un espacio de trabajo dentro de las instalaciones de Comunal.

El equipo de Laboratoria planteó como solución sustituír a la persona de recepción por una tablet y que una aplicación se encargue de tomar los datos a los visitantes, que se reemplace el requerimiento de dar el DNI en recepción por una foto que será tomada en el transcurso del registro de visita. Como solución del equipo se creó la aplicación Visitor.

Link de prototipo de alta fidelidad: [Visitor Figma](https://www.figma.com/proto/Ts23UKlg9DL0nJ4ISTIzinYi/visitor?node-id=3%3A2&scaling=scale-down)

Link de la aplicación en gh-pages: [Visitor Gh-Pages](https://anaflaviadiaz.github.io/wework/src/)

Link de la aplicación con hosting: [Visitor Hosting](https://anaflaviadiaz.github.io/wework/src/)

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