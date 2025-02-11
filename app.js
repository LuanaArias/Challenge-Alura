// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayNombres = [];
let listaHTMLDeNombres = document.getElementById('listaAmigos');

function agregarAmigo() {
    let nombreIngresado = document.getElementById('amigo').value.trim();  
    let textoDeNombreVacio = document.querySelector('p');

    if (nombreIngresado !== "") {
        arrayNombres.push(nombreIngresado);
        document.getElementById('amigo').value = "";  
        textoDeNombreVacio.innerHTML = ""; 
        actualizarLista();
    } else {
        textoDeNombreVacio.innerHTML = 'No se ha introducido un nombre';
    }
}

function actualizarLista() {
    listaHTMLDeNombres.innerHTML = ""; 
    arrayNombres.forEach((nombre, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${nombre}`;
        listaHTMLDeNombres.appendChild(li);
    });
}

function sortearAmigo() {
    if (arrayNombres.length > 0) {
        let indiceElemento = Math.floor(Math.random() * arrayNombres.length);
        let nombreElegido = arrayNombres[indiceElemento];
        document.getElementById('resultado').innerHTML = `<li>Amigo secreto: <strong>${nombreElegido}</strong></li>`;
    } else {
        document.getElementById('resultado').innerHTML = '<li>No hay nombres en la lista para sortear</li>';
    }
}
