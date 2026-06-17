function enviarDados(event){
    event.preventDefault();
    
    let nome = document.getElementById("ipnome").value.trim();
    let email = document.getElementById("ipemail").value.trim();
    let assunto = document.getElementById("ipassunto") ? document.getElementById("ipassunto").value : "";
    let data = document.getElementById("ipdata") ? document.getElementById("ipdata").value : "";
    let hora = document.getElementById("iphora") ? document.getElementById("iphora").value : "";
    let gostaria = document.getElementById("ipgostaria") ? document.getElementById("ipgostaria").checked : false;
    let mensagem = document.getElementById("ipmensagem").value.trim();

    if (!nome) {
        alert("Por favor, preencha o campo Nome.");
        return;
    }
    if (!email) {
        alert("Por favor, preencha o campo Email.");
        return;
    }
    if (!assunto) {
        alert("Por favor, selecione um Serviço.");
        return;
    }
    if (!data) {
        alert("Por favor, selecione uma Data.");
        return;
    }
    if (!hora) {
        alert("Por favor, selecione um Horário.");
        return;
    }
    if (!mensagem) {
        alert("Por favor, escreva uma Mensagem.");
        return;
    }

    let dataObj = new Date(data);
    let dataFormatada = dataObj.toLocaleDateString('pt-BR');

    let resposta = document.getElementById("resposta");
    if (resposta) {
        resposta.style.display = "block";
        
        resposta.innerHTML = `
            <h2>✓ Formulário Enviado com Sucesso!</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 15px;">
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Serviço:</strong> ${assunto.charAt(0).toUpperCase() + assunto.slice(1)}</p>
                <p><strong>Data Solicitada:</strong> ${dataFormatada}</p>
                <p><strong>Horário:</strong> ${hora}</p>
                <p><strong>Novidades por email:</strong> ${gostaria ? 'Sim' : 'Não'}</p>
                <p><strong>Mensagem:</strong> ${mensagem}</p>
                <p style="margin-top: 20px; color: #666; font-style: italic;">Obrigado pelo contato! Entraremos em contato em breve.</p>
            </div>
        `;
    }

}