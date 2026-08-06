// ================================
// Premium Invitation Script
// ================================

window.addEventListener("load", () => {

    // Hide Loader
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 600);
        }
    }, 1200);

});

// ================================
// Countdown Timer
// ================================

const eventDate = new Date("August 16, 2026 18:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);

// ================================
// Background Music
// ================================

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

const openInvite = document.getElementById("openInvite");

let musicStarted = false;

function startMusic() {

    if (!musicStarted) {

        music.play().catch(() => {});

        musicStarted = true;

        musicBtn.innerHTML = "🔊";
    }

}

if (openInvite) {

    openInvite.addEventListener("click", startMusic);

}

document.body.addEventListener(
    "click",
    startMusic,
    {
        once: true
    }
);

if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (music.paused) {

            music.play();

            musicBtn.innerHTML = "🔊";

        } else {

            music.pause();

            musicBtn.innerHTML = "🔈";

        }

    });

}

// ================================
// Fade Animation
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},
{
    threshold: 0.15
});

document.querySelectorAll(".fade").forEach(section => {

    observer.observe(section);

});

// ================================
// Scroll To Top Button
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ================================
// Floating Flower Petals
// ================================

const petals = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.top = "-40px";

    petal.style.fontSize =
        (18 + Math.random() * 18) + "px";

    petal.style.opacity = Math.random();

    petal.style.zIndex = "999";

    petal.style.pointerEvents = "none";

    const duration = 6 + Math.random() * 6;

    petal.animate(
        [
            {
                transform: "translateY(0px) rotate(0deg)"
            },
            {
                transform:
                    `translateY(${window.innerHeight + 100}px)
                     translateX(${Math.random() * 200 - 100}px)
                     rotate(${720 + Math.random() * 360}deg)`
            }
        ],
        {
            duration: duration * 1000,

            easing: "linear"
        }
    );

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, duration * 1000);

}

setInterval(createPetal, 350);

// ================================
// Gallery Zoom Effect
// ================================

document.querySelectorAll(".gallery-grid img")
.forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("zoom");

    });

});

// ================================
// Smooth Anchor Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ================================
// Console Message
// ================================

console.log(
    "🌸 Premium Invitation Loaded Successfully 🌸"
);
