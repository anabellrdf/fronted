// audio
var audio = document.getElementById('musica')

document.getElementById('btnAudio').addEventListener('click', function() {
    if (audio.paused) {
            audio.play();              // inicia la música
            this.textContent = "Pausar música";
        } else {
            audio.pause();             // pausa la música
            this.textContent = "Reproducir música";
        }
    });

// contador
var fechaConcierto = new Date('2026-10-17')

function actualizarContador() {
    var hoy = new Date()
    var diff = fechaConcierto - hoy
    var dias = Math.ceil(diff / (1000 * 60 * 60 *24))

    var texto

    if (dias > 0) {
        texto = 'faltan ' +dias+ ' dias para el encuentro'
    } else {
        texto = 'hoy es el concierto!'
    }

    document.getElementById('contador').innerHTML = texto
}

actualizarContador()
setInterval(actualizarContador, 1000 * 60)