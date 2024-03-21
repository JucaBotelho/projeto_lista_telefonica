const form = document.getElementById("form-contato")
let linhas = ""
const nomeContato = []
const numeroContato = []

form.addEventListener("submit", function(e) {
    e.preventDefault() 

    const inputNomeContato = document.getElementById("nome-contato")
    const inputNumeroContato = document.getElementById("numero-contato")
    const inputDDDcontato = document.getElementById("ddd-contato")

    const dddFormatado = `(${inputDDDcontato.value})`

    const numeroCompleto = dddFormatado + inputNumeroContato.value

    if (inputNumeroContato.value.length > 9) {
        document.querySelector(".error-message").style.display = "block"
        document.getElementById("numero-contato").style.border = "2px solid red"
    } else {

        if (nomeContato.includes(inputNomeContato.value)) {
            window.alert(`O contato ${inputNomeContato.value} já está salvo na sua agenda`)
        } else {
            if (numeroContato.includes(inputDDDcontato.value.toString() + inputNumeroContato.value.toString())) {
                window.alert(`O número (${inputDDDcontato.value})${inputNumeroContato.value} já está salvo na sua agenda`)
            } else {
                nomeContato.push(inputNomeContato.value)
                numeroContato.push(inputDDDcontato.value.toString() + inputNumeroContato.value.toString())
                adicionarContato()
    
                let linha = '<tr>' /* Cria uma linha na tabela*/
                linha += `<td>${inputNomeContato.value}</td>` /* usando o sinal de concatenação "+=" irá criar uma linha e jogar o conteúdo do input desejado*/
                linha += `<td>${numeroCompleto}</td>`
                linha += `</tr>`
            
                linhas += linha
            
                const corpoTabela = document.querySelector("tbody")
                corpoTabela.innerHTML = linhas /* o innerhtml insere o conteúdo ao HTML */
            
                inputNomeContato.value = ""
                inputNumeroContato.value = ""
                inputDDDcontato.value = ""
                document.querySelector(".error-message").style.display = "none"
                document.getElementById("numero-contato").style.border = ""    
            }
            }
    }

    function adicionarContato(){
        console.log(nomeContato)
        console.log(numeroContato)
    }

})

