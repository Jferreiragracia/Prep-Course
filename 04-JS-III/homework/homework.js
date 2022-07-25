// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  //array = [1,2,3,4]
  return array[0]
}
devolverPrimerElemento([1,2,3,4])


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  //array = [1,2,3,4]
  return array[array.length-1]
}
devolverUltimoElemento([1,2,3,4])

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  //array = [1,2,3,4]
  return array.length
}
obtenerLargoDelArray([1,2,3,4])

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  //array = [1,2,3,4]
  for (i=0;i < (array.length);i++)
  array[i] = array[i] + 1
  return array
}
incrementarPorUno([1,2,3,4])

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  // array = [1,2,3,4]
  array.push(elemento)
  return array
}
agregarItemAlFinalDelArray([1,2,3,4],5)


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}
agregarItemAlComienzoDelArray([1,2,3,4],0)

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  //palabras = []
  var frase = ''
  for (i=0;i < (palabras.length);i++){
  
    if  (i>0) {
      frase = frase+' '+palabras[i]
      }
    else {
    frase = palabras[i]
    }
    }
  return frase 
}
dePalabrasAFrase(['hello','world'])

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (i=0;i < (array.length);i++)
  if  (array[i] == elemento) { 
      return true
    }
  return false
}
arrayContiene(['hello','world'],'hh')

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var total = 0
  for (i=0;i < (numeros.length);i++){
  total = total+numeros[i]
  }
  return total
}
agregarNumeros([1,2,3,4])

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var total = 0
  for (i=0;i < (resultadosTest.length);i++){
  total = total+resultadosTest[i]
  }  
  promedio = total/(resultadosTest.length)
  return  promedio 
}
promedioResultadosTest([1,2,3,4,5])

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var nmayor = 0
  for (i=0;i < (numeros.length);i++){
  if  (numeros[i] > nmayor) { 
      nmayor = numeros[i]
    }
  }  
   return nmayor

}
numeroMasGrande([1,2,3,4,5])

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  //console.log((arguments.length));
  var producto = 1
  if (arguments.length == 0){return 0}
  if (arguments.length == 1){return arguments[0]}
  for (i=0;i < (arguments.length);i++){
  producto = producto * (arguments[i]);
  }
  return producto 
}
multiplicarArgumentos(2,2,2)

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cuenta = 0
  for (i=0;i < (arreglo.length);i++){
  if  (arreglo[i] > 18) { 
      cuenta = cuenta + 1
    }
  }
    return cuenta
}
cuentoElementos([1,2,3,4,18,19,20,21,22])

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  //var respuesta = ''
  //for (i=0;i < (arreglo.length);i++)
  if  (numeroDeDia >= 2 && numeroDeDia <= 6) { 
    return 'Es dia Laboral'
    }
  return 'Es fin de semana'  
} 
diaDeLaSemana(1)

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numstring = Array.from(String(n)); 
  if  (numstring[0] == '9') {
    return true
  }
  return false
  
}
 empiezaConNueve(9)


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var igual = arreglo[0]
  for (i=1;i < (arreglo.length);i++){
  if  (arreglo[i] !== igual) { 
      return false
    }
  } 
  return true
} 
todosIguales([1,1,1,1,1])

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var arreglonuevo = []
  var mes = ''
  for (i=0;i < (array.length);i++)
  if  ((array[i] == "Enero" )|| (array[i] == "Marzo") || (array[i] ==  "Noviembre")) { 
    mes = array[i]
    arreglonuevo.push(mes)
    }
  //console.log(arreglonuevo.length)  
  if   (arreglonuevo.length < 3 ) {
        return 'No se encontraron los meses pedidos'
  }

  return arreglonuevo
 } 
 mesesDelAño(["Enero", "Marzo" , "Noviembre"])


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arreglonuevo = []
  for (i=0;i < (array.length);i++) {
  if  (array[i] > 100) { 
    arreglonuevo.push(array[i])
    }
  }
  return arreglonuevo
 } 
 mayorACien([1, 101 ,102])


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arreglonuevo = []
  var nuevovalor = numero
  var contador = 0
  for (i=0;i < 10;i++) {
    contador = i
    if (nuevovalor == i){
      return 'Se interrumpió la ejecución'
      break 
    } 
    nuevovalor = nuevovalor + 2
    arreglonuevo.push(nuevovalor)
  }
  if  (contador==9) {
    return arreglonuevo
  }
}
breakStatement(1)

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arreglonuevo = []
  var nuevovalor = numero
  for (i=0;i < 10;i++) {
    if (i == 5){
      continue
    } 
    nuevovalor = nuevovalor + 2
    arreglonuevo.push(nuevovalor)
  }
  return arreglonuevo
}
continueStatement(50)

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
