/* ========== relogio ============================== */



// Define a função que fará todo o trabalho de exibir o horário atual
function atualizarRelogio() {
  // Cria um objeto de data que captura o ano, mês, dia, hora, minuto e segundo exatos do sistema.
  const agora = new Date();
  
  // agora.getHours() pega a hora (0-23), String() transforma em texto e padStart(2, '0') garante os dois dígitos (ex: 9 vira 09)
  const horas = String(agora.getHours()).padStart(2, '0');
  
  // Funciona guardando os textos formatados dos minutos e segundos atuais.
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  
  // Funcionam exatamente igual à constante das horas, guardando os textos formatados dos minutos e segundos atuais.
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  
  // Junta as três variáveis usando Template Literals (as crases ``) para criar o texto final no formato HH:MM:SS
  const horarioFormatado = `${horas}:${minutos}:${segundos}`;
  
  // Procura o elemento HTML com id="clock" e substitui o texto dele pelo horário atualizado
  document.getElementById('clock').textContent = horarioFormatado;
}

// Executa a função pela primeira vez assim que o arquivo é lido para o relógio não começar zerado ou em branco
atualizarRelogio();

// Cria um temporizador que vai chamar a função 'atualizarRelogio' repetidamente a cada 1000 milissegundos (1 segundo)
setInterval(atualizarRelogio, 1000);





/*======= campo entrada de evento ====================================================== */




// Localiza o botão no HTML.
let botaoVerificar = document.getElementById("botaoVerificar");

// Executa a função quando o botão é clicado.
botaoVerificar.addEventListener("click", function () {

    // Localiza o campo de idade e a área da mensagem.
    let campoIdade = document.getElementById("idade");
    let resultado = document.getElementById("resultado");

    // Verifica se o campo está vazio.
    if (campoIdade.value === "") {
        resultado.textContent = "Digite sua idade.";
        return;
    }

    // Converte o valor digitado em número.
    let idade = Number(campoIdade.value);

    // Verifica se a idade é um número inteiro e não negativo.
    if (!Number.isInteger(idade) || idade < 0) {
        resultado.textContent = "Digite uma idade válida em anos completos.";
        return;
    }

    // Verifica se a pessoa pode entrar.
    if (idade >= 18) {
        resultado.textContent = "Entrada permitida. Bom evento!";
    } else {
        resultado.textContent = "Entrada não permitida para menores de 18 anos.";
    }
});




/* ============= campo mundança de tema =========== */




let Tema = document.getElementById("botaoTema");
let corpo = document.body;

// Verifica se o usuário já tinha salvo o tema escuro antes
if (localStorage.getItem('botaoTema') === 'dark') {
  corpo.classList.add('dark');
}

Tema.addEventListener('click', () => {
  //tipo um interruptor, se tem remove, e nao tem adiciona
  corpo.classList.toggle('dark');
  
  // Salva no navegador o estado atual
  if (corpo.classList.contains('dark')) {
    localStorage.setItem('botaoTema', 'dark');
  } else {
    localStorage.setItem('botaoTema', 'light');
  }
});