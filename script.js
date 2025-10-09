const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "IA vai roubar todos os empregos humanos no futuro?",
    alternativas: [
      { texto: "( ) Verdadeiro", afirmacao: "Verdadeiro" },
      { texto: "( ) Falso", afirmacao: "Falso" }
    ]
  },
  {
    enunciado: "IAs podem tomar decisões muito mais rápidas que os humanos?",
    alternativas: [
      { texto: "( ) Verdadeiro", afirmacao: "Verdadeiro" },
      { texto: "( ) Falso", afirmacao: "Falso" }
    ]
  },
  {
    enunciado: "A IA é sempre 100% segura e impossível de hackear?",
    alternativas: [
      { texto: "( ) Verdadeiro", afirmacao: "Verdadeiro" },
      { texto: "( ) Falso", afirmacao: "Falso" }
    ]
  },
  {
    enunciado: "Jogos de videogame usam IA para tornar inimigos mais inteligentes?",
    alternativas: [
      { texto: "( ) Verdadeiro", afirmacao: "Verdadeiro" },
      { texto: "( ) Falso", afirmacao: "Falso" }
    ]
  },
  {
    enunciado: "IA pode clonar vozes humanas com alta precisão?",
    alternativas: [
      { texto: "( ) Verdadeiro", afirmacao: "Verdadeiro" },
      { texto: "( ) Falso", afirmacao: "Falso" }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternatives);
    }
}

function respostaSelecionada(opcaoSelecionaada){
    const afirmacoes = opcaoSelecionaada.afirmacoes;
    histiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

function mostratResultado() {
    caixaPerguntas.textContent = "em 2049....";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();