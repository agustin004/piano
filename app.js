// Asignar un evento a un elemento
//event listener
// Seleccionamos mediante queryselectorall , todos los elementos que tengan como atributo la palabra button. Y lo declaramos en la variable buttons

const buttons = document.querySelectorAll('button');

// Usamos la funcion forEach para iterar entre cada elemento button

buttons.forEach(
    button => button.addEventListener('click', reproducirSonido)
    );
    // A cada boton le agregamos una funcion eventlistener de click
    
    // Cuando hacemos click en los botones ejecutamos la funcion reproducirSonido


// Esta funcion tiene informacion del evento del click
function reproducirSonido(event){
    // Con event.target sabemos sobre que boton se hizo click
    const button = event.target;
    // Accedemos mediante datase.note al valor de la nota
    const note = button.dataset.note;


    // Guardamos en la variable audio la referencia que tenemos del elemento audio
    const audio = document.getElementById('audio'+note)
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}


