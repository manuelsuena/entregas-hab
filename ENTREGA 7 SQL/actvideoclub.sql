David Losas González
13/02/2020
(editado)
36
ENTREGA 1: HTML

La entrega debe ser compartida en un repositorio personal en la plataforma de GitHub (o GitLab si así lo preferís). El respositorio en cuestión debe llamarse entregas-hab. En dicho repositorio debe existir a su vez una carpeta llamada html. Dentro deberéis incluír el archivo index.html con la solución del ejercicio.

Os comparto un PDF con un diseño de página web que debéis tratar de replicar. Evidentemente aún no se ha visto CSS, por tanto centraos solamente en el HTML. ¡Suerte! 💪

P.D: una vez hayáis terminado la actividad compartidme por mensaje privado el enlace de acceso a vuestro repositorio.

ENTREGA 2: JS I

En el mismo repositorio que habéis creado para la primera entrega deberéis crear la carpeta JS a la misma altura que la carpeta HTML. Dentro de la carpeta creada (JS), debéis crear otra carpeta más llamada entrega-2. Ahí debéis compartir la solución (index.js) con el ejercicio resuelto. La entrega constará de varios ejercicios que se irán entregando según vaya avanzando la semana, comienzo proponiendo el primero de ellos:

Crea una calculadora por medio de if... ...else y switch (de las dos formas) que opere con dos números. Debe ser capaz de sumar, restar, multiplicar, dividir y elevar el número uno a la potencia de número dos. En caso de que el usuario introduzca un tipo de operación no contemplada por el programa deberá mostrarse un mensaje indicando que no se ha seleccionado un tipo de operación correcta.
Calcula la media de puntos en los últimos tres partidos de estos tres equipos y muestra por consola el que tenga una media más alta:
Equipo María: 62, 34, 55.
Equipo Paula: 35, 60, 59.
Equipo Rebeca: 40, 39, 63.
Crea un programa que simule el comportamiento de un dado. El programa debe ir almacenando los valores de cada tirada en una variable, y cuando llegue a 50 puntos o más, debe finalizar su ejecución mostrando un mensaje tal que:
¡Enhorabuena, ha salido un Y! ¡Has ganado con un total de Z puntos!.
A su vez, debe mostrarse el siguiente mensaje tras cada tirada:

Tirada X: ha salido un Y. Tienes un total de Z puntos.
(X: número de la tirada, Y: número aleatorio del 1 al 6, Z: total de puntos acumulados).

P.D: X, Y, Z son nombres que he dado para explicar lo que pido, no quiere decir que debáis llamar de esa manera a las variables correspondientes.

ENTREGA 3: JS I

Dada la función LetterCount(str) toma el parámetro str que se está pasando y devuelve la primera palabra de mayor longitud. Por ejemplo: Hoy es un día estupendo y fantástico. debe devolver fantástico porque es la primera palabra que más letras tiene.

Haz que la función BinaryConverter(str) devuelva la forma decimal del valor binario. Por ejemplo: si se pasa 101 el programa debe retornar un 5, si se pasa 1000 debe retornar un 8, etc. Si no sabes como convertir un número binario a decimal puedes echar un ojo a este vídeo: https://www.youtube.com/watch?v=bBMhiSy1Grc

Haz que la función PalindromeTwo(str) tome el parámetro str que se le pasa y devuelva true si el parámetro es un palíndromo, (la cadena se lee igual hacia adelante que hacia atrás) de lo contrario devuelve false. Por ejemplo: Arriba la birra debería devolver true, se lee igual del derecho que del revés.

ENTREGA 4: JS I

Ejercicio de la cesta de la compra propuesto por Iván en clase.

Accede con fetch a la información de la siguiente API: https://api.exchangerate-api.com/v4/latest/EUR. Dado un valor en euros (EUR), convierte dicha cantidad a dólares (USD). Por último convierte esta cantidad en dólares a yenes (JPY).

ENTREGA 5: CSS

Debéis entregar el ejercicio de html propuesto en la entrega 1 junto a su respectivo CSS.

ENTREGA 6: JS II

Diseñar una página con HTML, CSS y JS que permita convertir un valor en € o $ a cualquier otro tipo de moneda empleando el API: https://api.exchangerate-api.com/v4/latest/EUR

ENTREGA 7: SQL

Diseña una base de datos a partir del siguiente enunciado:

Estamos en 1995 y vamos a diseñar una solución para un videoclub que un amigo va a abrir en nuestro pueblo. Para empezar va a ser un sistema muy básico que le permita principalmente gestionar los alquileres de las películas y mostrar el catálogo de películas en una futura web.

Necesitamos tener la información de las películas, lo básico para poder gestionar los alquileres, y más información para el catálogo web: nombre descripción, PEGI y a mayores una carátula, director y actores o actrices. Sabemos que una película va a tener 1 o más directores y 1 o más actores/actrices.

Para que el videoclub sea rentable, podemos tener 1 o varias copias de la misma película y esas copias pueden estar en 2 formatos: VHS y DVD. Necesitamos poder identificar las películas de manera única y del mismo modo identificar las copias de cada película.

El videoclub también va a disponer de varias tarifas, de inicio van a ser: ESTRENOS, ESTÁNDAR y ANTIGUAS. El precio será el mismo independientemente del formato, es decir, se le cobra lo mismo al cliente si se lleva el VHS o el DVD.

El videoclub va a tener socios, y una persona para poder alquilar una película debe ser socio. Se pueden registrar como socios la primera vez que alquilan una película, con los siguientes datos: un código único, nombre completo, dni, tlf, email y fecha de nacimiento.

Necesitamos llevar un registro de los alquileres de las películas y guardaremos la información cuando un socio alquila una película, que copia de la película es y cuando la devuelve.

Al mismo tiempo, necesitamos saber qué películas tenemos disponibles en cada momento en el videoclub y qué copias de cada una de esas películas.
También vamos a necesitar consultar en un momento qué películas tiene un socio alquiladas y pendiente de pagar, o qué películas alquiló en el pasado.
Los socios podrán alquilar varias películas a la vez, no tienen por qué devolver una películas antes de alquilar otra, pero sí que una determinada copia de una películas sólo puede estar alquilada por un solo socio en un determinado momento.

A modo informativo, nos interesa también tener un listado de proveedores con la siguiente información para cada uno: nombre completo, tlf, dni, email y poder identificarlos de forma única. Llevaremos un registro de las copias de las películas que nos vendió cada uno, por si necesitáramos hacer más pedidos. La parte de contabilidad o gestión de pagos, facturas, albaranes o cuentas del videoclub no está incluída.

Por último, vamos a empezar a recoger datos sobre la valoración de los socios cuando alquilan una película. Nos interesa saber para cada película que alquila un socio, que nos diga cuando la devuelven que nota le dan del 1 al 5 y opcionalmente que dejen un comentario. Esto se usará en el futuro para mostrar la nota media de las películas y/o los comentarios en la web.
