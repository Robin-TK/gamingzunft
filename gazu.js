document.addEventListener('mousemove', function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Hier definieren wir, wie stark sich der Container bewegen soll
    const parallaxAmount = 20; // Der Wert bestimmt, wie stark sich die Elemente bewegen

    // Berechnen, wie viel der Container basierend auf der Mausbewegung verschoben werden soll
    const moveX = (mouseX / window.innerWidth) * parallaxAmount - parallaxAmount / 2;
    const moveY = (mouseY / window.innerHeight) * parallaxAmount - parallaxAmount / 2;

    // Die Bewegung des Containers anpassen
    const container = document.querySelector('.container');
    container.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Partikel-Effekt
const particleContainer = document.createElement('div');
particleContainer.classList.add('particle-container');
document.body.appendChild(particleContainer);

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Zufällige Positionen und Bewegungen
    const size = Math.random() * 5 + 3; // Größe zwischen 3px und 8px
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const speedX = (Math.random() - 0.5) * 2;
    const speedY = (Math.random() - 0.5) * 2;
    
    // Initialisieren der Partikel
    particle.style.position = 'absolute';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = 'white';
    particle.style.borderRadius = '50%';
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    particle.style.opacity = Math.random();
    particle.style.pointerEvents = 'none'; // Damit die Partikel keine Interaktion blockieren
    
    particleContainer.appendChild(particle);
    
    // Bewegung der Partikel
    function moveParticle() {
        const rect = particle.getBoundingClientRect();
        
        // Die Partikel bewegen sich
        particle.style.left = `${rect.left + speedX}px`;
        particle.style.top = `${rect.top + speedY}px`;
        
        // Wenn die Partikel aus dem Bildschirm verschwinden, neu generieren
        if (rect.left < -size || rect.left > window.innerWidth || rect.top < -size || rect.top > window.innerHeight) {
            particle.remove();
            createParticle();
        }
    }

    // Kontinuierlich die Partikel bewegen
    setInterval(moveParticle, 20);
}

// Initiale Anzahl an Partikeln
for (let i = 0; i < 100; i++) {
    createParticle();
}


