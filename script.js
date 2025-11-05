// Frases de amor de Jesús para Michel
const lovePhrases = [
    "Eres mi razón para sonreír 💕",
    "Cuando pienso en ti, todo se vuelve más bonito 🌙",
    "No hay distancia cuando hay amor 💌",
    "Tú eres mi lugar favorito del mundo ✨",
    "Te amo más de lo que puedo explicar 💖",
    "Cada vez que hablas, mi corazón late más rápido ❤️",
    "Espero que hoy tengas un día tan hermoso como tu sonrisa 💫"
];

// Mensajes mágicos cortos
const magicMessages = [
    "✨ Abracadabra... ¡Aparece un beso para ti! 💋",
    "🌟 Polvos mágicos de amor enviados directamente a tu corazón 💖",
    "🔮 La magia dice: eres increíble y mereces todo lo bueno ✨",
    "🌙 Hechizo nocturno: que los sueños más dulces te acompañen 💤",
    "⭐ Estrella fugaz detectada... ¡Pide un deseo de amor! 🌠",
    "🦋 Mariposas mágicas llevan mi cariño hasta ti 💕",
    "🌈 Arcoíris de felicidad creado especialmente para ti ✨"
];

// Recordatorios de amor diarios
const loveReminders = [
    "🌅 Recordatorio matutino: Eres amada profundamente 💖",
    "☀️ No olvides que iluminas mi mundo cada día ✨",
    "🌸 Pequeño recordatorio: Eres perfecta tal como eres 💕",
    "🌺 Tu sonrisa es mi flor favorita en el jardín de la vida 🌷",
    "🌟 Recordatorio estelar: Brillas más que todas las estrellas ⭐",
    "🍃 Como las hojas al viento, mi amor por ti nunca para 💚",
    "🌊 Recordatorio oceánico: Mi amor por ti es infinito como el mar 💙"
];

// Función para mostrar la pantalla principal
function showMainScreen() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainScreen = document.getElementById('main-screen');
    
    welcomeScreen.classList.remove('active');
    setTimeout(() => {
        mainScreen.classList.add('active');
    }, 500);
}

// Función para agregar mensaje al chat
function addMessage(text, isBot = true) {
    const messagesContainer = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isBot ? 'bot-message' : 'user-message'}`;
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'message-bubble';
    bubbleDiv.textContent = text;
    
    messageDiv.appendChild(bubbleDiv);
    messagesContainer.appendChild(messageDiv);
    
    // Scroll al último mensaje
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Función para obtener frase aleatoria de un array
function getRandomPhrase(phrasesArray) {
    const randomIndex = Math.floor(Math.random() * phrasesArray.length);
    return phrasesArray[randomIndex];
}

// Función para mostrar frase de amor
function showLovePhrase() {
    const phrase = getRandomPhrase(lovePhrases);
    
    // Simular que el usuario presionó el botón
    setTimeout(() => {
        addMessage("💌 Quiero una frase de amor", false);
    }, 100);
    
    // Respuesta del bot después de un pequeño delay
    setTimeout(() => {
        addMessage(phrase, true);
    }, 800);
}

// Función para mostrar mensaje mágico
function showMagicMessage() {
    const message = getRandomPhrase(magicMessages);
    
    // Simular que el usuario presionó el botón
    setTimeout(() => {
        addMessage("✨ Dame un mensaje mágico", false);
    }, 100);
    
    // Respuesta del bot después de un pequeño delay
    setTimeout(() => {
        addMessage(message, true);
    }, 800);
}

// Función para mostrar recordatorio de amor
function showLoveReminder() {
    const reminder = getRandomPhrase(loveReminders);
    
    // Simular que el usuario presionó el botón
    setTimeout(() => {
        addMessage("🌙 Necesito un recordatorio de amor", false);
    }, 100);
    
    // Respuesta del bot después de un pequeño delay
    setTimeout(() => {
        addMessage(reminder, true);
    }, 800);
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Agregar efectos de sonido suaves (opcional)
    console.log('MiCielo App cargada con amor 💖');
    
    // Precargar algunas animaciones
    setTimeout(() => {
        const heart = document.querySelector('.heart');
        if (heart) {
            heart.style.animation = 'heartbeat 2s ease-in-out infinite';
        }
    }, 1000);
});

// Función para agregar efectos de partículas (opcional)
function createHeartParticles() {
    const hearts = ['💖', '💕', '💗', '💓', '💝'];
    const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
    
    const particle = document.createElement('div');
    particle.textContent = randomHeart;
    particle.style.position = 'fixed';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.fontSize = '1.5rem';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1000';
    particle.style.animation = 'floatUp 3s ease-out forwards';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

// CSS para la animación de partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Crear partículas ocasionalmente
setInterval(createHeartParticles, 5000);