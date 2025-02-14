// Inicializamos variables (array de amigos y mensajes)
let userAmigos = [];
let msjRecomendacion = "";
let msjErrorVacio = "Intentaste agregar un campo vacío a la lista."
let msjReglasNombre = `El nombre no puede contener: 
    - Caracteres no alfabéticos
    - Espacio/s al inicio, al final o más de uno entre nombres
    - Menos de dos caracteres para el primer nombre`
let msjErrorRepeticion = "Intentaste agregar un nombre que ya está en la lista."
let msjErrorSorteo = "¡Aún no puedes sortear! Tu lista tiene solo uno o ningún amigo."

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

// Funcion que limpia el campo de un input dueño del id
function limpiarCampoPorId(id){
    document.getElementById(id).value = "";
    return;
}

// Función que limpia el contenido de un elemento HTML dueño del id
function limpiarElementoHTML(id){
    document.getElementById(id).innerHTML = "";
    return;
}

// Función que agrega nombres al array, si cumplen con las condiciones
function agregarAmigo() {
    // Obtenemos el valor en el input
    let userInput = document.getElementById('amigo').value;
    // Definimos el mensaje de recomendación según el caso
    msjRecomendacion = (userAmigos.includes(userInput) ? "¡Vuelve a intentarlo con otro nombre!" : "Por favor, ingresa un nombre válido.");
    // Si el input está vacío, o su cadena contiene caracteres no alfabéticos
    // o si el contenido del input ya está en la lista:
    if (userInput === "" || (validarNombre(userInput) === !true) || (userAmigos.includes(userInput))) {
        if (userInput === "") {
            //Si el input está vacío devolvemos el alert correspondiente.
            return alert(`${msjErrorVacio} ${msjRecomendacion}`);
        } else if (validarNombre(userInput) === !true){
            //Si el input es desvalidado devolvemos el alert correspondiente.
            return alert(`${msjRecomendacion} ${msjReglasNombre}`);
        } else{
            //Si el input ya está en la lista devolvemos un alert.
            return alert(`${msjErrorRepeticion} ${msjRecomendacion}`)
        }
    }
    // Si se ha logrado pasar la condición, se agrega el amigo al array.
    // Se limpia el input y el resultado (si es que si hay), se actualiza la UL.
    else {
        userAmigos.push(userInput);
        limpiarCampoPorId('amigo');
        limpiarElementoHTML('resultado');
        actualizarListaHTML(userAmigos);
    }
    return;
}

// Función que actualiza la lista HTML en base al array de amigos.
function actualizarListaHTML(listaAmigos) {
    let listaHTML = document.querySelector('#listaAmigos');
    limpiarElementoHTML('listaAmigos');
    for (let i = 0; i<userAmigos.length; i++){
        let elemento = listaAmigos[i];
        listaHTML.innerHTML += `<l1>${elemento}</li><br>`;
    }
    return;
}

// Función que sortea un amigo en la lista de amigos.
function sortearAmigo(){
    //Si la longitud de la lista de amigos no es 0 y es mayor que 1:
    if (userAmigos.length != 0 && userAmigos.length > 1){
        //Definimos el índice aleatorio a partir de la longitud del array.
        nroIndices = userAmigos.length;
        indiceRandom = (Math.floor(Math.random()*nroIndices));
        console.log(indiceRandom);

        //Accedemos a un índice de la lista de amigos usando el índice aleatorio
        amigoSorteado = userAmigos[indiceRandom];

        //Limpiamos la lista HTML de amigos
        limpiarElementoHTML('listaAmigos');

        //Mostramos al usuario el resultado del sorteo
        document.getElementById('resultado').innerHTML = `- Tu amigo secreto es... ¡${amigoSorteado}! -`;
    
    //Si la longitud de la lista de amigos es 0 o 1 mostramos un alert
    } else {
        alert(msjErrorSorteo);
    }
    return;
}