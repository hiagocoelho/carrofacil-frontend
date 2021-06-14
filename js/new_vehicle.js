$(document).ready(function () {
    fetch('http://localhost:8080/api/marcas')
    .then((response) => {
        console.log(response.status)
        response.json().then((marcas) => {
            marcas.forEach((marca) => {
                $('#marca').append(`<option value=${marca.id}>${marca.nome}</option>`);
            })
        })
    })
    .catch(function(err) {
        console.error(err);
    });
});

$('#marca').change(function() {
    fetch(`http://localhost:8080/api/modelos/por_marca/${$(this).val()}`)
    .then((response) => {
        $("#modelo").empty();
        $("#modelo").append("<option value='' selected='true' disabled>Selecione o modelo:</option>");
        response.json().then((modelos) => {
            modelos.forEach((modelo) => {
                $('#modelo').append(`<option value=${modelo.id}>${modelo.nome}</option>`);
            })
        })
    })
    .catch(function(err) {
        console.error(err);
    });
});

document.querySelector('form.meu_form').addEventListener('submit', (e) => {
    e.preventDefault();

    const body = {
        ano: parseInt(document.getElementById('ano').value),
        preco: parseInt(document.getElementById('preco').value),
        descricao: document.getElementById('descricao').value,
        modelo: {
            id: parseInt(document.getElementById('modelo').value),
        }
    }

    fetch('http://localhost:8080/api/carros/create', { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body) 
    })
    .then((response) => {
        if (response.status === 200) {
            alert('Carro adicionado com sucesso!');
            window.location.reload();
        }
    })
    .catch(function(err) {
        console.log(err);
    }) 
})