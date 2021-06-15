$(document).ready(function () {
    fetch('http://localhost:8080/api/carros')
    .then((response) => {
        console.log(response.status)
        response.json().then((carros) => {
            carros.forEach((carro) => {
                $('#vehiclesContainer').append(`
                <div class="vehicle">
                    

                    <div class="vehicleDescription">
                        <p class="vehicleTitle">${carro.modelo.marca.nome} ${carro.modelo.nome} ${carro.ano}</p>
                        <p>Descrição</p>
                        <p>${carro.descricao}</p>
                        <p class="vehiclePrice">R$${carro.preco},00</p>
                    </div>

                    <div class="scheduleVisit">
                        <button 
                        data-toggle="modal" 
                        data-target="#exampleModal"
                        >Agendar visita</button>
                        <button value=${carro.id} onclick="removeCar(${carro.id})">Remover carro</button>
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

const setInput = (marca) => {  
    console.log(marca);
}

const removeCar = (id) => {
    console.log(id);

    fetch(`http://localhost:8080/api/carros/delete/${id}`, { 
        method: 'DELETE',
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(body) 
    })
    .then((response) => {
        if (response.status === 200) {
            alert('Carro removido com sucesso!');
            window.location.reload();
        }
    })
    .catch(function(err) {
        console.log(err);
    }) 
}

document.querySelector('form.formVisita').addEventListener('submit', (e) => {
    e.preventDefault();

    const body = {
        nome: document.getElementById('nomeVisita').value,
        email: document.getElementById('emailVisita').value,
        cpf: document.getElementById('cpfVisita').value,
        data: document.getElementById('dataVisita').value,
        carro: document.getElementById('carroVisita').value
    }

    console.log(body);

    fetch('http://localhost:8080/api/visitas/create', { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body) 
    })
    .then((response) => {
        if (response.status === 200) {
            alert('Visita agendada com sucesso!');
            window.location.reload();
        }
    })
    .catch(function(err) {
        console.log(err);
    }) 
})