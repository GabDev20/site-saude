AOS.init();

function enviarParaWhatsApp(event) {
    event.preventDefault(); 

    
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    
    let textoMensagem = `Olá, meu nome é *${nome}*.%0A`;
    textoMensagem += `Meu e-mail é *${email}*.%0A`;
    textoMensagem += `Mensagem: ${mensagem}`;


    let numeroWhatsApp = "5561994497474"; 


    let linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;

    window.open(linkWhatsApp, "_blank");
}


const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');


menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    const isClickInside = sidebar.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInside) {
        sidebar.classList.remove('active');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    const container = document.querySelector(".carousel-container");
    let index = 0;

    function updateSlide() {
        container.style.transform = `translateX(-${index * 100}%)`;
    }

    document.getElementById("next").addEventListener("click", () => {
        index++;
        if (index >= slides.length) index = 0;
        updateSlide();
    });

    document.getElementById("prev").addEventListener("click", () => {
        index--;
        if (index < 0) index = slides.length - 1;
        updateSlide();
    });
});
  


