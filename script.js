let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let renderNumbers = document.querySelector("#app #render");

function gerarNumeros(){
    let numeros = [];
    // cria um array vazio para armazenar os numeros gerados.

    const qtdaNumbers = Number(inputElement.value);
    // pega o numero que foi digitado dentro do input em string e transforma em inteiro.


    if (qtdaNumbers < 6 || qtdaNumbers > 9){
        console.warn("Não é possivel usar esse número.");
        // console.warn() Exibe um aviso de que algo pode não estar funcionando como esperado, sem interromper o código.

        renderNumbers.textContent = `${numeros} Não é possível usar esse número.`; // exibe a mensagem na tela para o usuario.
        return []; // retorna o array vazio pois o número digitado é invalido.
    }
    // verifica se o número que foi digitado dentro do input está nas regras fornecidas
    
    while (numeros.length < qtdaNumbers){
        // while é um loop.
        // gera um número aleatorio de 1 a 60.
        let numerosAleatorios = Math.floor(Math.random() * 60) + 1;

        // O Math.random() ira fazer o número aleatorio.
        // O Math.floor() irá devolver apenas numeros inteiros, ele converte de real para int.

        // verifica se o número aleatorio já foi gerado antes.
        if (!numeros.includes(numerosAleatorios)){
            // o includes verifica se tem um numero dentro da variavel (numeroAleatorios),
            // porem se adicionar uma exclamação '!' ele está negando, ou seja, está verificado se não existe.
            // se o número não estiver no array adiciona o número dentro do array.
            numeros.push(numerosAleatorios);
        }
    }

    renderNumbers.textContent = `Números Gerados: ${numeros.join(",")}`;// exibe para o usuario os números gerados.
    return numeros; // retorna o array de números gerados.
}

buttonElement.addEventListener("click", gerarNumeros);
// assim que o 'buttonElement' é clicado chama a função gerarNumeros.