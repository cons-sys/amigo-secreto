let userAmigos = [];
let msjRecomendacion = "Por favor, ingresa un nombre válido.";
let msjErrorVacío = "Intentaste agregar un campo vacío a la lista."
let msjReglasNombre = `El nombre no puede contener: 
    - Caracteres no alfabéticos
    - Espacio al inicio, al final o más de uno entre nombres. 
    - Menos de dos caracteres para el primer nombre.`

// Función validadora de nombres
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

function limpiarCampoPorId(id){
    document.getElementById(id).value = "";
}

function agregarAmigo() {
    //Obtenemos el valor en el input
    let userInput = document.getElementById('amigo').value;
    //Si el input está vacío o su cadena contiene caracteres no alfabéticos...
    if (userInput === "" || (validarNombre(userInput) === !true)) {
        if (userInput === "") {
            //Si el input está vacío devolvemos el alert correspondiente.
            return alert(`${msjErrorVacío} ${msjRecomendacion}`);
        } else {
            //Si el input contiene un dígito devolvemos el alert correspondiente.
            return alert(`${msjRecomendacion} ${msjReglasNombre}`
);
        }
    }
    // Si se ha logrado pasar la condición, se agrega el amigo a la lista,
    // se limpia el input y se actualiza la lista desordenada 
    else {
        userAmigos.push(userInput);
        limpiarCampoPorId('amigo');
        actualizarListaHTML(userAmigos);
    }
}

function actualizarListaHTML(listaAmigos) {
    let listaHTML = document.querySelector('#listaAmigos')
    listaHTML.innerHTML = ""
    for (let i = 0; i<userAmigos.length; i++){
        let elemento = listaAmigos[i]
        listaHTML.innerHTML += `<l1>${elemento}</li><br>`
    }
}