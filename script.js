AOS.init();

function enviarParaWhatsApp(event) {
    event.preventDefault(); // 🔥 Impede o envio padrão do formulário

    // 🔹 Capturar os valores preenchidos
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    // 🔹 Criar a mensagem formatada
    let textoMensagem = `Olá, meu nome é *${nome}*.%0A`;
    textoMensagem += `Meu e-mail é *${email}*.%0A`;
    textoMensagem += `Mensagem: ${mensagem}`;

    // 🔹 Substituir pelo seu número do WhatsApp
    let numeroWhatsApp = "5561994497474"; 

    // 🔹 Criar o link do WhatsApp com a mensagem formatada
    let linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;

    // 🔹 Redirecionar para o WhatsApp
    window.open(linkWhatsApp, "_blank");
}
