document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
    this.style.display = "none";
});

// Animación de corazones flotando
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.getElementById("hearts-container").appendChild(heart);

    const size = Math.random() * 20 + 10 + "px";
    heart.style.fontSize = size;
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Si elige "No", cambia el texto de forma divertida
document.querySelector(".no").addEventListener("click", function() {
    this.innerText = "¿Segura? 😢";
    setTimeout(() => {
        this.innerText = "No 😢";
    }, 2000);
});

// Función para cargar la API de YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Variable del reproductor
var player;

// Función de la API de YouTube cuando esté lista
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0', // Ocultar el video
        width: '0',
        videoId: 'RPHYuXph25U', // 🔹 Reemplaza VIDEO_ID con el ID del video de YouTube
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: 'RPHYuXph25U', // 🔹 Agrega el mismo ID para hacer loop
            controls: 0,
            showinfo: 0,
            modestbranding: 1
        },
        events: {
            'onReady': function(event) {
                event.target.setVolume(10); // Ajustar volumen (0 a 100)
            }
        }
    });
}

// Activar música cuando el usuario interactúe con la página
document.addEventListener("click", function() {
    if (player && typeof player.playVideo === "function") {
        player.playVideo();
    }
}, { once: true }); // Se ejecuta solo una vez

document.querySelector(".yes").addEventListener("click", function() {
    // Número de WhatsApp (sin el "+" y con código de país, por ejemplo, 52 para México)
    let numero = "528116957215";  
    let mensaje = "¡Sí! 💕 ¡Acepto ser tu Valentín! 😍";
    let url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;

    // Redirigir a WhatsApp
    window.open(url, "_blank");
});

