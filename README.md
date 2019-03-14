# Markdown Links

## ¿Qué hace esta librería?

Md-links es una librería cuya finalidad es mostrar información de los enlaces existentes en archivo MD de una ruta dada (bien sea realativa o absoluta)

## Modo de uso

Existen dos modos de utilizar esta librería:
1. API: En esta opción podrá instalar la librería e invocar a la función mdLinks().
Esta función recibe como parametros: path (ruta que desea revisar) y options (un objeto con dos propiedades de tipo booliano, ejemplo: {validate: true, stats: false}).
IMPORTANTE: En API sólo se ofrece la opción de validar links.

2. CLI: En esta opción podrá instalar la librería y usarla a través de líneas de comando.
Debo colocar md-links seguido de: path (ruta que desea revisar) y seguido de --validate (si desea el retorno de links validados y/o --stats (si desea estadisticas de total de links encontrados, linksúnicos y (en caso de haber seleccionado --validade) el número de links rotos)

## Instalación

Para instalar esta librería debe seguir los siguientes pasos:
~~~
npm install --global <github-heidygerbi>/<github-md-links>
~~~
1. En caso de querer utilizarla como API:
~~~
import mdLinks from 'github-md-links';
~~~
~~~
mdLinks('path',{validate:true}));
~~~
2. En caso de querer utilizarla como CLI:
~~~
md-links --validate --stats
~~~

## ¿Cómo surgió esta librería?

Para el diseño de este librería se realizó un análisis previo, a continuación se muestran los pasos:

### Diagrama de flujo

Se planteó el siguiente flujo para la función mdLinks

![DFD](https://i.ibb.co/LpjtjLS/DFD.jpg)


### Pseudocodigo

1.1. evaluatePath 
- Ingresa: Ruta (string)
- Proceso: Utilizar método path.isAbsolute para reconocer si la ruta es absoluta
- Salida: true/false (booleano)

1.2. transformToAbsPath
- Ingresa: Ruta (string)
- Proceso: Utilizar método path.resolve para convertir ruta relativa a absoluta
- Salida: Ruta absoluta (string)

1.3. recognizeIfIsFile
- Ingresa: Ruta absoluta (string)
- Proceso: Utilizar método fs.lstat.isFile para reconocer si es archivo
- Salida: true/false (booleano)

1.4. validateExtMD
- Ingresa: archivo (string)
- proceso: si metodo path.extName() es '.md'
- salida: true/false (booleano)

1.5. getMDContent
- Ingresa: Ruta absoluta MD (string)
- Proceso: Obtener el contenido del archivo markdown utilizando la libreria fs.readFile (con UTF)
- Salida: Contenido(string)

1.6. convertMDToHtml
- Ingresa: Contenido (string)
- Proceso: Usar librería Marked para convertir contenido a HTML
- Salida: Contenido HTML(string)

1.7. extractATagAttr
- Ingresa: HTML (string)
- Proceso: Utilizar librería JSDOM para: obtener href y contenido de los link y meter la información dentro de un objeto.
- Salida: Información de los link(objeto)

1.8. createArrLinkObj
- Ingresa: Informacion de los link(objeto)
- Proceso: Crear array, meter objeto a array
- Salida: Array con informacion de links dentro de objeto(array)

1.9. getFiles
- Ingresa: Ruta absoluta (string)
- Proceso: Obtener todos los archivos
- Salida: Array con las rutas de todos los archivos(array)

2.1. extractHref
- Ingresa: Array con informacion de links dentro de objeto(array)
- Proceso: Extraer href de cada objeto que esta dentro del array y guardarlo en un nuevo array
- Salida: Array con href de cada link(array)

2.2. verifyLink
- Ingresa: Array con href de cada link(array)
- Proceso: Utilizar método http para verificar si href es valido o no, guardar cada ok o fail dentro de un array.
- Salida: Array con status de cada link(array)

2.3. addVerification
- Ingresa: Array con status de cada link(array)
- Proceso: Meter status de cada link dentro de array con informacion de links dentro de objeto(array)
- Salida: Array con informacion de links y status dentro de objeto (array)

3.1. calculateStats
- Ingresa: Array con informacion de links dentro de objeto o Array con informacion de links y status dentro de objeto (array)
- Proceso: Calcular total de links, cuantos son unicos, y en caso a que se ingrese array con status de los links entonces calcular tambien los links que están rotos.
- Salida: Array con estadisticas de total, unique y broken (array)