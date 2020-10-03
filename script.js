console.log("Entrei!") // no navegador em console, recebemos a informação entrei!

//criando um dom, cria uma variavel e atribua um valor que em um elemento(document),receber o h1 com o querySelector e mostre esssa variavel com console.
var titulo = document.querySelector('h1')
console.log(titulo);

// crie uma variavel para o titulo
var subtitulo = document.querySelector('h2')
console.log(subtitulo);

//crie uma variavel para o botao
var button = document.querySelector('button')
console.log(button);

//crie uma variavel para o input
var input = document.querySelector('input')
console.log(input);

//crie uma função chamda clicar que acessa o event

function clicar() {
    event.preventDefault()
    subtitulo.innerHTML = input.value
}