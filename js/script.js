
/* Seção de operações */
var operacoes = {
    "soma": "Soma",
    "subtracao": "Subtração",
    "multiplicacao": "Multiplicação",
    "divisao": "Divisão"
}

function calcular() {
    const type = document.getElementById("operation").value;
    const result = document.getElementById("res");
    const num1Field = document.getElementById("num1").value
    const num2Field = document.getElementById("num2").value
    
    if(num1Field === "" || isNaN(num1Field) || num2Field === "" || isNaN(num2Field)){
        result.innerText = "Por favor, insira um números válidos!";
        return;
    }
    
    let num1 = Number(num1Field);
    let num2 = Number(num2Field);

    let answer = 0;

    switch (type) {
        case "soma":
            answer = num1 + num2;
            break;
        case "subtracao":
            answer = num1 - num2;
            break;

        case "multiplicacao":
            answer = num1 * num2;
            break;

        case "divisao":
            answer = num1 / num2;
            break;

        default:
            result.innerText = "Escolha uma operação válida!";
            return;
    }

    result.innerText = "Analizando a entrada...";

    setTimeout(function () {
        result.innerText = `Você selecionou a operação ${operacoes[type]}, certo?`;
    }, 1000);

    setTimeout(function () {
        result.innerText = "Calculando o resultado...";
    }, 3000);

    setTimeout(function () {
        result.innerText = `Pronto! O resultado é ${answer}`;
    }, 5000);
}


/* Seção de dados */
var elemBornDate = document.getElementById("bornDate");
elemBornDate.max = new Date().toISOString().split("T")[0]; 
elemBornDate.min = new Date(new Date().setFullYear(new Date().getFullYear() - 150)).toISOString().split("T")[0];
const form = document.getElementById("formData").addEventListener("submit", function (event) {
    event.preventDefault();
    if (!window.confirm("Tem certeza que os dados do formulário estão corretos?")) {
        window.alert("Preenche direito então!");
        return;
    }

    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const bornDate = document.getElementById("bornDate").value;
    const salario = Number(document.getElementById("salario").value);
    const cargo = document.getElementById("cargo").value;
    const empresa = document.getElementById("empresa").value;
    const cidade = document.getElementById("cidade").value;

    const idade = new Date().getFullYear() - new Date(bornDate).getFullYear();

    const resultField = document.getElementById("formMessage");

    resultField.innerText = "Processando os dados...";

    setTimeout(function () {
    resultField.innerText = `
        Afirmo que o funcionário ${nome} da empresa ${empresa} nascido em ${new Date(bornDate).toLocaleDateString('pt-BR')} (${idade} anos) 
        residente da cidade de ${cidade} deve ser contatado via email ${email} ou telefone ${phone} 
        para que possa ser avisado que já recebe ${salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no cargo de ${cargo}.
    `;
    }, 2000);
})


/* Configurações */

for (let section of document.querySelectorAll("body > section")){
    if(section.id === "configSection") continue;
    let texto = section.querySelector("h2").innerText;
    document.querySelector(`input[data-title-for-section="${section.id}"]`).value = texto;
}

function changeBgColor(section, inputId) {
    const sectionElement = document.querySelector(section);
    const color = document.getElementById(inputId).value;
    sectionElement.style.backgroundColor = color;
}

function changeColor(section, inputId) {
    const sectionElement = document.querySelector(section);
    const color = document.getElementById(inputId).value;
    sectionElement.style.color = color;
}

function changeTitle(section, inputId) {
    const sectionElement = document.querySelector(section);
    const title = document.getElementById(inputId).value;
    sectionElement.querySelector("h2").innerText = title;
}


/* Seção de mouse */
const mouseSection = document.getElementById("mouseSection");
const mouseCoordinates = document.getElementById("mouseCoordinates");

mouseSection.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    mouseCoordinates.innerText = `Coordenadas do mouse: X: ${x}, Y: ${y}`;
});

mouseSection.querySelector(".square").addEventListener("mouseenter", function(event) {
    event.target.style.animation = "jump 0.5s";
});

mouseSection.querySelector(".square").addEventListener("mouseenter", function(event) {
    event.target.style.animation = "jump 0.5s reverse";
});
