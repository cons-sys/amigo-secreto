let userAmigos = [];
let msjRecomendacion = "Por favor, ingresa un nombre válido.";

// Hola, supervisor/a! Tengo una función adicional que quise agregar personalmente a este challenge.
// La misma valida el nombre ingresado según si la cadena no contiene
// caracteres no alfabéticos ni espacios en lugares indebidos.
// Explicación de la estructura:
/*
    Utilizo una expresión regular (ER). Dentro de sus barras incluye el patrón
que se debe buscar coincidir:
- Un ^ detrás de un rango de caracteres alfabéticos que debe coincidir 
dos o más veces (debe haber uno o más caracteres alfabéticos), y "^" delimita 
el comienzo del patrón con un caracter perteneciente al rango), a ello le sigue:
- Una sumatoria opcional de un grupo de caracteres, que puede aparecer 0 o más 
veces, compuesto de: un espacio y otro rango de caracteres alfabéticos que debe
coincidir una o más veces (es decir, debe haber uno o más caracteres alfabéticos). 
Después de este grupo (opcional), le sigue:
- La suma de un "$", delimitando el final del patrón con un caracter del rango 
alfabetico. 
    Al cerrar las barras, se usa un modificador (i) para indeferenciar
    el uso de mayúsculas y minúsculas, así evitamos alargar el patrón.
    
    Una expresión regular es un objeto, y puedo acceder a su método "test" que
permite verificar si el patrón coincide con la cadena o no. Regresa un booleano
y determina el return de la función. Para que el patrón que usamos coincida
con la cadena, se valide el usuario y devuelva True, deben cumplirse estas 
condiciones, según la estructura del patrón:
- Ausencia de caracteres no alfabético.
- Ausencia de espacio/s al inicio o al final de la cadena.
- Para nombres compuestos, usar un solo espacio seguido de los caracteres 
alfabeticos correspondientes.
- El primer nombre debe tener mínimo 2 caracteres, a partir del
segundo el mínimo es de 1 (en caso de querer emplear un alias o abreviación).

*/
function validarNombre(cadena) {
    return ((/^[A-ZÑÁÉÍÓÚ]{2,}(\s[A-ZÑÁÉÍÓÚ]+)*$/i.test(cadena)));
}

function agregarAmigo() {
    //Obtenemos el valor en el input
    let userInput = document.getElementById('amigo').value;
    console.log(validarNombre(userInput));
    //Si el input está vacío o su cadena contiene caracteres no alfabéticos...
    if (userInput === "" || (validarNombre(userInput) === !true)) {
        if (userInput === "") {
            //Si el input está vacío devolvemos el alert correspondiente.
            return alert(`Intentaste agregar un campo vacío a la lista. ${msjRecomendacion}`);
        } else {
            //Si el input contiene un dígito devolvemos el alert correspondiente.
            return alert(`El nombre no puede contener caracteres no alfabéticos ni doble espacio. ${msjRecomendacion}`);
        }
    }
    //Si se ha logrado pasar la condición, se agrega el amigo a la lista.
    else {
        userAmigos.push(userInput);
        console.log(userAmigos);
        document.getElementById('amigo').value = "";
    }
}