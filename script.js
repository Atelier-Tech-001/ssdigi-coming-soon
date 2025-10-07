const phrases = [...new Set([
    "El tiempo se agota...",
    "No todos están listos...",
    "LSSDIGI está cerca...",
    "Vas a querer estar ahí...",
    "El reloj no se detiene...",
    "La cuenta atrás ha comenzado...",
    "Prepárate para lo inesperado...",
    "La revelación está cerca...",
    "La verdad saldrá a la luz...",
    "La espera está por terminar...",
    "La tensión aumenta...",
    "El caos se desata...",
    "La locura se apodera de todo...",
    "La realidad se distorsiona...",
    "La verdad se oculta en las sombras...",
    "La desesperación se apodera de todo...",
    "La realidad se desmorona...",
    "Quizás anheles lo que no puedes tener...",
    "Quizás antes de lo que imaginas..."
])];

// NUEVO CÓDIGO DEL LOGO
const logoPhrases = [
    "> Initializing digital wardrobe...",
    "> Compilando estilo v1.0...",
    "> SSDigital: Error 404 - Basic not found.",
    "> Run 'fit.exe' to deploy tu look.",
    "> Booting streetwear system...",
    "> Update disponible: Nuevo drop detectado."
];

const logo = document.querySelector(".logo"); // Usamos la clase para seleccionar
const logoPhrase = document.getElementById("logo-phrase");

logo.addEventListener("mouseenter", () => {
    const random = logoPhrases[Math.floor(Math.random() * logoPhrases.length)];
    logoPhrase.textContent = random;
    // Agregamos la clase 'active' para forzar la visibilidad por CSS
    logoPhrase.classList.add("active");
});

logo.addEventListener("mouseleave", () => {
    logoPhrase.classList.remove("active");
    // Puedes restablecer el texto original si lo deseas, o dejarlo en el último random
    // logoPhrase.textContent = "> Loading streetwear protocol...";
});

// FIN NUEVO CÓDIGO DEL LOGO

let lastPhraseIndex = -1;
let phraseInterval;
let glitchInterval;

function getRandomPhrase() {
    let index;
    do {
        index = Math.floor(Math.random() * phrases.length);
    } while (index === lastPhraseIndex);
    lastPhraseIndex = index;
    return phrases[index];
}

// Inicia el ciclo de frases
const phraseElement = document.getElementById("phrase");
phraseInterval = setInterval(() => {
    phraseElement.textContent = getRandomPhrase();
}, 4000);

phraseElement.textContent = getRandomPhrase();

// Fecha objetivo: 01/01/2026 00:00:00 UTC
const targetDate = new Date(Date.UTC(2026, 0, 1, 0, 0, 0));
let glitchActive = false;

function startGlitchFinal() {
    if (glitchActive) return;
    glitchActive = true;
    clearInterval(phraseInterval);
    document.body.classList.add("flash");
    const countdownElement = document.getElementById("countdown");
    countdownElement.classList.add("glitch-final");

    setTimeout(() => {
        document.getElementById("hidden-message").style.display = "block";
    }, 2000);

    glitchInterval = setInterval(() => {
        countdownElement.textContent = Array.from({ length: 12 }, () =>
            "▒▓█░#%∆@¿?Ξø¤"[Math.floor(Math.random() * 12)]
        ).join('');
    }, 50);
}

function updateCountdown() {
    if (glitchActive) return;
    const countdownElement = document.getElementById("countdown");
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        startGlitchFinal();
        return;
    }

    const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
    countdownElement.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// === MODAL SUSCRIPCIÓN ===
const modal = document.getElementById("subscribe-modal");
const openBtn = document.getElementById("notify-btn");
const closeBtn = document.getElementById("close-modal");
const notifyForm = document.getElementById("notify-form");
const formMessage = document.getElementById("form-message");

// abrir modal
openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// cerrar modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// cerrar al hacer clic fuera
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

// enviar formulario con Formspree
notifyForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    if (!email) return;

    try {
        formMessage.textContent = "Enviando...";
        const response = await fetch(notifyForm.action, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            formMessage.textContent = "¡Listo! Te avisaremos cuando llegue el drop.";
            notifyForm.reset();
            setTimeout(() => { modal.style.display = "none"; formMessage.textContent = ""; }, 3000);
        } else {
            formMessage.textContent = "Error al enviar. Intenta nuevamente.";
        }
    } catch (error) {
        formMessage.textContent = "Conexión fallida. Intenta más tarde.";
    }
});