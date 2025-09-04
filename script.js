const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [ 
{
enunciado: 
" IAs podem tomar decisões muito mais rápidas que os humanos?",
"verdadeiro",
"falso"

    }
]

[
{
enunciado: 
" IA é sempre 100% segura e impossível de hackear?",
"verdadeiro",
"falso"

    }
]

[
{
enunciado: 
" Jogos de videogame usam IA para tornar inimigos mais inteligentes?",
"verdadeiro",
"falso"

    }
]

    [
{
enunciado: 
" IA pode clonar vozes humanas com alta precisão?",
"verdadeiro",
"falso"

    }
]

[
    {
enunciado: 
" IA vai roubar todos os empregos humanos no futuro?",
"verdadeiro",
"falso"

    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta() { 
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa();
}

function mostraAlternativa(){ 
    for (const alternativa of perguntaAtual.alternativas){ 
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);

        
    }
}
