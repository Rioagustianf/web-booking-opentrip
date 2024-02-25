const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");


menuBar.addEventListener("click", () => {
    menuNav.classList.toggle("menu-active")
});


const text = 'Rio Agustian Fauzi';
const speed = 200;

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('typing').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(resetTyping, 1000);
    }
}

function resetTyping() {
    document.getElementById('typing').innerHTML = '';
    i = 0;
    typeWriter();
}

document.addEventListener("DOMContentLoaded", function () {
    typeWriter();
});


