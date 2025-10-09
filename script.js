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
  caixaAlternativas.innerHTML = ""; // Limpa as alternativas anteriores
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao; // Corrigido o erro de digitação
  historiaFinal += afirmacoes + " "; // Adiciona a resposta à história
  if (atual < perguntas.length - 1) {
    atual++; // Avança para a próxima pergunta
    mostraPergunta();
  } else {
    mostrarResultado(); // Chama a função para mostrar o resultado quando todas as perguntas forem respondidas
  }
}

function mostrarResultado() {
  caixaPerguntas.textContent = "Resposta final 1)Falso, 2)Falso, 3)Verdadeiro, 4)Verdadeiro, 5)Falso"; // Pode modificar a mensagem conforme desejar
  textoResultado.textContent = historiaFinal; // Exibe a história final
  caixaAlternativas.innerHTML = ""; // Limpa as alternativas após a conclusão
  caixaResultado.style.display = "block"; // Exibe o resultado
}

mostraPergunta(); // Inicia o processo mostrando a primeira pergunta