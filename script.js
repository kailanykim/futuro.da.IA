const caixaEnunciado = document.querySelector(".caixa-enunciado");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A inteligência artificial consegue aprender com grandes quantidades de dados e melhorar seu desempenho com o tempo.",
        alternativas: ["Verdadeiro", "Falso"]
    },
    {
        enunciado: "A inteligência artificial pode pensar e sentir emoções exatamente como os seres humanos.",
        alternativas: ["Verdadeiro", "Falso"]
    },
    {
        enunciado: "Sistemas de reconhecimento facial utilizam técnicas de inteligência artificial para identificar rostos.",
        alternativas: ["Verdadeiro", "Falso"]
    },
    {
        enunciado: "Toda IA precisa de conexão com a internet para funcionar.",
        alternativas: ["Verdadeiro", "Falso"]
    },
    {
        enunciado: "A inteligência artificial é usada em recomendações de filmes e músicas em plataformas como Netflix e Spotify.",
        alternativas: ["Verdadeiro", "Falso"]
    },
    {
        enunciado: "A IA pode ser usada para criar textos, imagens e até músicas originais.",
        alternativas: ["Verdadeiro", "Falso"]
    },
    {
        enunciado: "A inteligência artificial sempre toma decisões corretas e imparciais, sem erro humano.",
        alternativas: ["Verdadeiro", "Falso"]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];
    caixaEnunciado.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // limpa alternativas anteriores

    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += `Você respondeu "${opcaoSelecionada}" para a pergunta ${atual + 1}. `;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaEnunciado.textContent = "Parabens você chegou ao final do quizz, obrigada por participar!!!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta();