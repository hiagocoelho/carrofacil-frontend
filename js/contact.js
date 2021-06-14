document.querySelector('form.meu_form').addEventListener('submit', (e) => {
    e.preventDefault();

    const body = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('emailid').value,
        telefone: document.getElementById('telefone').value,
        mensagem: document.getElementById('mensagem').value,
    }

    console.log(body);
})