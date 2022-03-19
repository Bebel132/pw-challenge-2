let frutas = [
    "uva",
    "maçã",
    "melancia",
    "acerola",
    "goiaba",
    "maracujá"
];

let estado;

let textarea = document.querySelector("textarea");
textarea.addEventListener('keyup', () => {
    for(let i=0; i<=frutas.length; i++){
        if(textarea.value == frutas[i]){
            let texto = document.createTextNode(frutas[i]);
            let botao = document.createElement('button');
            botao.appendChild(texto);
            document.body.appendChild(botao);
        } else {
            estado = "errado";
        }
    }
    if(estado == "errado"){
        let texto = document.createTextNode("voce digitou erradokk");
        let quote = document.createElement('blockquote');
        quote.appendChild(texto);
        document.body.appendChild(quote);
    }
});