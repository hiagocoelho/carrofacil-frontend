$(document).ready(function () {
    fetch('http://localhost:8080/api/carros')
    .then((response) => {
        console.log(response.status)
        response.json().then((carros) => {
            carros.forEach((carro) => {
                $('#vehiclesContainer').append(`
                <div class="vehicle">
                    <div class="vehicleImage">
                        <img src="./assets/golf-gti-2015.png" alt="golf-gti-2015" />
                    </div>

                    <div class="vehicleDescription">
                        <p class="vehicleTitle">${carro.modelo.marca.nome} ${carro.modelo.nome} ${carro.ano}</p>
                        <p>Descrição</p>
                        <p>${carro.descricao}</p>
                        <p class="vehiclePrice">R$${carro.preco}</p>
                    </div>

                    <div class="scheduleVisit">
                        <button data-toggle="modal" data-target="#exampleModal">Agendar visita</button>
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