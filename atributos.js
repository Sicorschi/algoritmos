/*
Practica Ejemplo #2:
  practica descompuesta en 4 partes:
    ##1 Condicional,
    ##2 Ciclo while,
    ##3 Ciclo do while,
    ##4 Ciclo for.
  Se ha omitido el ultimo atributo basico Breakpoint.
*/
///////////////////////// ##1 Condicional //////////////////////////////////
/*
  proceso que bifurca el flujo en funcion del valor de la entrada.
  El proceso es muy sencillo, inicializamos una variable,
  evaluamos dicha variable mediante una condicion,
  ejecutamos la pila de instrucciones en funcion del valor de la variable y la condicion.
*/

//Inicializar una variable cualquiera:
var variable = 1;

//Evaluamos la variable mediante la condicion:
if (variable == 10) { // Condicional
  variable = 10; // Instruccion a realizar si la condicion impuesta se cumple
  print(variable); // Resultado #1 dentro del condicional
}

variable = variable + 3;
//Resultado #2 fuera del condicional:
print(variable)

// Evidentemente el resultado de este codigo es variable = 4, es decir Resultado #2

//////////////////////////////// ##2 Ciclo while //////////////////////////////
/*
  proceso que evalua una variable mediante una condicion y ejecuta las instrucciones contenidas dentro del ciclo.
  El proceso es muy sencillo, inicializamos una variable,
  evaluamos dicha variable mediante una condicion,
  ejecutamos la pila de instrucciones en funcion del valor de la variable y la condicion,
  mientras la variable cumpla la condicion, se van a ejecutar todas las instrucciones una y otra vez
  hasta que la variable no cumpla la condicion impuesta.
*/

//Inicializar una variable cualquiera:
var variable = 1;

//Aplicamos la estructura del ciclo:
while (variable < 10) { // Ciclo + Condicion
  variable += 1; // Instruccion a realizar si la condicion impuesta se cumple
  print(variable); // Resultado #1 dentro del ciclo
}
// El resultado de este codigo es una lista de valores que van desde 2 hasta 10.

/////////////////////////////// ##3 Ciclo do while /////////////////////////////
/*
  proceso que difiere del anterior (while), donde primero ejecuta la instruccion y despues evalua la variable resultado.
  El proceso es muy sencillo, inicializamos una variable,
  ejecutamos la instruccion que procesa esa variable,
  evaluamos el resultado mediante una condicion,
  si la variable cumple con la condicion se vuelve a ejecutar la instruccion y volvemos al paso 2.
*/

//Inicializar una variable cualquiera:
var variable = 1;

//Aplicamos la estructura del ciclo:
do { variable += 1; print(variable); } while (variable < 10); // Ciclo + Instruccion + Condicion
// El resultado de este codigo es una lista de valores que van desde 2 hasta 10

////////////////////////////// ##4 Ciclo for /////////////////////////////
/*
  proceso de naturaleza de cotrol, un ciclo que sirve para recorrer una entidad,
  un vector, una matriz, basicamente cualquier variable, con el fin de ejecutar una o mas instrucciones sobre estos elementos.
*/

//Inicializar una variable cualquiera:
var variable;

//Aplicamos la estructura del ciclo:
for ( variable = 0; variable < 5; variable++ ) { // Inicializar la variable + Condicion + ExpresionIncremento
  print(variable); // Instruccion a realizar
}

/*
  El ciclo for es un bucle cuya repetividad se fija por el programador.
  En este caso concreto la operacion de incremento se va a realizar 5 veces.
*/
