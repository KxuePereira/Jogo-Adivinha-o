// Jogo em JavaScript de adivinhação
let numeroSorteado = 5;
let tentativas = 0;
let acertou = false;

while (!acertou) {
  const palpite = prompt('Digite um número de 0 a 10:');

  if (palpite === null) break;

  const palpiteInteiro = parseInt(palpite, 10);

  if (palpiteInteiro === numeroSorteado) {
    acertou = true;
    alert('Parabéns, você acertou!');
  } else {
    alert('Tente novamente.');
    tentativas++;
  }
}

if (!acertou) {
  alert(`O número sorteado era ${numeroSorteado}. Tente novamente mais tarde.`);
} else {
  alert(`Você acertou em ${tentativas + 1} tentativas.`);
}
