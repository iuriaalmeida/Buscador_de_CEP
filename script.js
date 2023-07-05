const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const cep = form.CEP.value
    console.log(cep)

    $.ajax({
        url: `http://viacep.com.br/ws/${cep}/json/`, success: function (result) {

            const end = document.createElement('p')
            const bairro = document.createElement('p')
            const cidade = document.createElement('p')
            const estado = document.createElement('p')
            form.append(end)
            end.innerHTML = (`Endereço: ${result.logradouro}`)
            form.append(bairro)
            bairro.innerHTML = (`Bairro: ${result.bairro}`)
            form.append(cidade)
            cidade.innerHTML = (`Cidade: ${result.localidade}`)
            form.append(estado)
            estado.innerHTML = (`Estado: ${result.uf}`)
        }
    });
})