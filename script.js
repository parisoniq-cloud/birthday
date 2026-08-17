function playMusic() {
    document.getElementById("birthdayMusic").play();
}

function nextPage(pageNumber) {

    // Sabhi pages ko hide karo
    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    // Sirf selected page show karo
    const next = document.getElementById("page" + pageNumber);

    next.classList.add("active");
    // page 8 hmesha first sai start hoga 
    if (pageNumber === 8) {
    currentPhoto = 1;
    document.getElementById("memoryPhoto").src = "picture/1.jpg";
    document.getElementById("photoNumber").textContent = "01";
}

    // Page ko top par le jao
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Hearts animation
    createHearts();
}


// ❤️ Floating hearts
function createHearts() {

    for (let i = 0; i < 15; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 6000);
    }
}


// 🎉 Final celebration
function celebrate() {

    document.getElementById("finalMessage").innerHTML =
        "✨ Your wish is on its way... ❤️<br><br>" +
        "Happy Birthday once again, Vivek! 🎂💕";

    createHearts();

    createConfetti();
}


// 🎊 Confetti
function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.innerHTML = "✦";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.fontSize =
            (10 + Math.random() * 18) + "px";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(piece);

        setTimeout(function() {
            piece.remove();
        }, 5000);
    }
}
let currentPhoto = 1;

function showPhoto() {
    const photo = document.getElementById("memoryPhoto");
    const number = document.getElementById("photoNumber");

    photo.style.opacity = "0";

    setTimeout(function () {
        photo.src = "picture/" + currentPhoto + ".jpg";
        number.textContent = currentPhoto.toString().padStart(2, "0");
        photo.style.opacity = "1";
    }, 800);
}

function nextPhoto() {
    currentPhoto++;

    if (currentPhoto > 10) {
        currentPhoto = 1;
    }

    showPhoto();
}

setInterval(nextPhoto, 3000);