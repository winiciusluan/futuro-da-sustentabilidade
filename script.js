const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está andando na rua e percebe uma campanha para reduzir o uso de plásticos descartáveis. Qual a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso é importante!",
                afirmacao: "Você imediatamente pensa em formas de reduzir seu próprio uso de plásticos descartáveis."
            },
            {
                texto: "Isso é exagero!",
                afirmacao: "Você acredita que há problemas maiores do que o uso de plásticos descartáveis."
            }
        ]
    },
    {
        enunciado: "Sua escola decide implementar um programa de reciclagem. O que você faz?",
        alternativas: [
            {
                texto: "Participo ativamente, separando e reciclando meus resíduos.",
                afirmacao: "Você se torna um exemplo para seus colegas, ajudando-os a entender a importância da reciclagem."
            },
            {
                texto: "Não vejo necessidade, já que não acredito que faça diferença.",
                afirmacao: "Você não muda seus hábitos, continuando a descartar todos os resíduos juntos."
            }
        ]
    },
    {
        enunciado: "Você descobre que a carne tem um grande impacto ambiental. Como reage a essa informação?",
        alternativas: [
            {
                texto: "Decido reduzir o consumo de carne.",
                afirmacao: "Você começa a explorar alternativas vegetarianas e incentiva outros a fazerem o mesmo."
            },
            {
                texto: "Continuo comendo carne como sempre.",
                afirmacao: "Você não vê necessidade de mudar sua dieta por causa do impacto ambiental."
            }
        ]
    },
    {
        enunciado: "Sua cidade lança um projeto de hortas urbanas comunitárias. Como você se envolve?",
        alternativas: [
            {
                texto: "Participo do projeto e planto minha própria horta.",
                afirmacao: "Você se torna um entusiasta das hortas urbanas e ajuda a promover a ideia na comunidade."
            },
            {
                texto: "Apoio a ideia, mas não me envolvo ativamente.",
                afirmacao: "Você acha o projeto interessante, mas não participa diretamente."
            }
        ]
    },
    {
        enunciado: "Você tem a opção de usar transporte público ou bicicleta para ir à escola, em vez de carro. O que você escolhe?",
        alternativas: [
            {
                texto: "Uso bicicleta ou transporte público para reduzir minha pegada de carbono.",
                afirmacao: "Você adota práticas mais sustentáveis e incentiva seus amigos a fazerem o mesmo."
            },
            {
                texto: "Continuo indo de carro, pois é mais conveniente.",
                afirmacao: "Você prefere o conforto do carro, apesar do impacto ambiental."
            }
        ]
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
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas(perguntaAtual.alternativas);
}

function mostraAlternativas(alternativas) {
    for (const alternativa of alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
