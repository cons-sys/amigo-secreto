
# Mini-App: Amigo secreto

Aplicación simple que ingresa nombres de personas y escoge a una de ellas aleatoriamente como el amigo secreto.

Construida en el marco del challenge de lógica de programación del Programa ONE (Alura LATAM x Oracle)




![Logo](https://github.com/cons-sys/amigo-secreto/blob/097e85fc909d742512286fa087d44085837dccd8/assets/logo-proyecto.png)


## 🖥️ Lenguajes utilizados

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)


## 🛠️ Funcionalidades de la aplicación
- `Adición del nombre de un amigo`: Se escribe un string válido (correspondiente a un nombre) en el campo de entrada y luego se presiona el botón de "Añadir". Internamente, se agrega la cadena como nuevo elemento de un array. Al completar la adición se llama a la siguiente función.


- `Actualización del listado no ordenado HTML`: Se refresca el listado que muestra los amigos agregados en pantalla. Internamente, se borra el contenido del elemento y luego se itera sobre cada elemento del array para incluirlo en un elemento de lista (`<li>`) de la `<ul>`. Si hay un resultado de un sorteo anterior, se limpia para solo mostrar el listado.

- `Sorteo del próximo amigo secreto`: Se realiza una selección aleatoria de uno de los amigos en el array. Internamente, se utiliza la longitud del array y las funciones `Math.random()` y `Math.floor()` para generar un número pseudo-aleatorio entre 0 y el índice final del array. Finalmente, se accede a un índice del array utilizando el índice aleatorio, se limpia la lista HTML y se muestra el resultado con un mensaje en el elemento HTML debajo del que se utiliza para el listado de amigos.

## 🖼️ Imagenes de la aplicación

- Aplicación en el estado inicial -

![captura-app](https://github.com/cons-sys/amigo-secreto/blob/main/assets/captura-principal-proyecto.PNG)

- Aplicación con un listado de amigos y un nombre válido en el campo de entrada -

![captura-app](https://github.com/cons-sys/amigo-secreto/blob/main/assets/captura-lista-amigos-proyecto.PNG)

- Aplicación con un sorteo realizado -

![captura-app](https://github.com/cons-sys/amigo-secreto/blob/main/assets/captura-sorteo-proyecto.PNG)

## 👍 Condiciones de ingreso de nombres al listado
Al ingresar una cadena, se aplica una serie de condiciones y validaciones para evitar cadenas que no representen realmente un nombre. La cadena:

- ✔️`no debe contener caracteres que no pertenezcan al alfabeto español-inglés;`

- ✔️`no debe contener espacio/s al inicio ni al final. Para nombres compuestos, solo está permitido un solo espacio;`

- ✔️`debe tener mínimo dos caracteres para el primer nombre, y uno solo para el resto de nombres (si es compuesto); esto abre la posibilidad de colocar un alias o una abreviación solo tras el primer nombre.`

## Estado del proyecto

![img](https://img.shields.io/badge/PROYECTO-Finalizado-green?style=for-the-badge
)
