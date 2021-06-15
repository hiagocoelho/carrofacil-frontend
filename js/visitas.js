$(document).ready(function () {
    fetch('http://localhost:8080/api/visitas')
    .then((response) => {
        console.log(response.status)
        response.json().then((visitas) => {
            visitas.forEach((visita) => {
                $('#visitasBody').append(`
                <div class="visita">
                    <div>
                        <p>Nome do visitante:</p>
                        <p>${visita.nome}</p>
                    </div>
                    <div>
                        <p>CPF do visitante:</p>
                        <p>${visita.cpf}</p>
                    </div>
                    <div>
                        <p>E-mail do visitante:</p>
                        <p>${visita.email}</p>
                    </div>
                    <div>
                        <p>Data marcada para a visita:</p>
                        <p>${visita.data}</p>
                    </div>
                    <div>
                        <p>Carro escolhido:</p>
                        <p>${visita.carro}</p>
                    </div>
                </div>
                `);
            })
        })
    })
    .catch(function(err) {
        console.error(err);
    });
});