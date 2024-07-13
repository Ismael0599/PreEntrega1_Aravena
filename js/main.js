
//!  Esta función permite que la computadora elija una opción del juego aleatoria  
function eleccionPC() {
    // Genera un número aleatorio entre 0 y 2
    const numeroAleatorio = Math.floor(Math.random() * 3);
    let eleccion;

    if (numeroAleatorio === 0) {
        eleccion = 'piedra';
    } else if (numeroAleatorio === 1) {
        eleccion = 'papel';
    } else {
        eleccion = 'tijera';
    }

    return eleccion;
}

//! Esta función se encarga de elegir al ganador (usuario o computadora)
function elegirGanador(eleccionUsuario, eleccionCompu) {
    if (eleccionUsuario === eleccionCompu) {
        return 'empate';
    } else if (
        (eleccionUsuario === 'piedra' && eleccionCompu === 'tijera') ||
        (eleccionUsuario === 'papel' && eleccionCompu === 'piedra') ||
        (eleccionUsuario === 'tijera' && eleccionCompu === 'papel')
    ) {
        return 'usuario';
    } else {
        return 'computadora';
    }
}

//! Función principal
function jugar() {
    let jugarDeNuevo = true;

    // Este ciclo seguirá hasta que la variable 'jugarDeNuevo' sea False
    while (jugarDeNuevo) {
        const eleccionUsuario = prompt('Elige piedra, papel o tijera: ').toLowerCase();
        // Invoca la función 'eleccionPC' y la guarda en la variable 'eleccionCompu'
        const eleccionCompu = eleccionPC();

        if (eleccionUsuario !== 'piedra' && eleccionUsuario !== 'tijera' && eleccionUsuario !== 'papel') {
            alert('Recuerda, solo puedes ingresar piedra, papel o tijera');
            continue;
        }

        alert('La computadora eligió: ' + eleccionCompu);

        // Invoca la funcion 'elegirGanador' con las elecciones del usuario y el computador, guardando el resultado en la variable 'ganador'
        const ganador = elegirGanador(eleccionUsuario, eleccionCompu);

        if (ganador === 'usuario') {
            alert('¡Felicidades!, ganaste');
        } else if (ganador === 'computadora') {
            alert('La computadora ganó esta vez');
        } else {
            alert('Ha habido un empate');
        }


        jugarDeNuevo = confirm('¿Quieres jugar de nuevo?');

        if (jugarDeNuevo === false) {
            alert('Gracias por jugar, hasta luego!');
        } else {
            alert('Buena suerte!');
        }
    }
}

//! Inicializa el juego
jugar();
