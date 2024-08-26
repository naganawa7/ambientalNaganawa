const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "voce esta na rua e precisa jogar ao lixo o seu pacote de oreo, mas nao tem nenhuma licheira por perto. O que voce faria irmao ?",
        alternativas: [
            {
                texto: "esperaria para jogar no lixo",
                afirmacao: "afirmação"
            },
            {
                texto: "jogaria no chao, deixaria em qualquer lugar",
                afirmacao: "afirmaca"
            }
        ]
    },
    {
        enunciado: "Poluição visual, contaminação do solo e da água, e danos à flora local são apenas alguns dos efeitos negativos diretos do lixo jogado no chão sem conar a falta de educaçao.",
        alternativas: [
            {
                texto: "temos que cuidadar com o lixo no chao",
                afirmacao: "afirmação"
            },
            {
                texto: "nao é relevante",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O descarte irregular de lixo traz inúmeros malefícios a todos, como doenças, inundações, erosão, desmoronamentos, chorume e a poluição propriamente dita. Oque  voce acha sobre isso?",
        alternativas: [
            {
                texto: "desnecesario, o meio ambiente nao precisa de cuidados",
                afirmacao: "afirmação"
            },
            {
                texto: "o desccate do lixo realmente e muito importante",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "moscas, baratas, mosquitos e ratos podem transmitir doenças como a febre tifoide, cólera, amebíase, disenteria, giardíase, ascaridíase, leishmaniose, febre amarela, dengue, malária, leptospirose, sao alguns problemas que o descarte irregular do lixo poe nos causar",
        alternativas: [
            {
                texto: "",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você é levado para o juri por contaminaçao do ambiente em maça, voce devera pagar uma muta de 3000 reais por contaminar , solo, agua, e os animais . O que você faz? ",
        alternativas: [
            {
                texto: "Pagar a multa, nao ser preso, nao responder pelos crimes acima, nao responder por proceços  ",
                afirmacao: "afirmação"
            },
            {
                texto: "estes crimes sao muito graves e ainda pode comprometer sua carreira , sem contar a falta de respeito com o nosso planeta , devemos cuidar do nosso planeta com todo amor.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2040...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
