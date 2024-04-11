function descontoAplicado(codigoPromocional, valorProduto) {
    let desconto = 0;

    switch (codigoPromocional) {
        case 'DESC1':
            desconto = 0.05;
            break;
        case 'DESC2':
            desconto = 0.1;
            break;
        case 'DESC3':
            desconto = 0.15;
            break;
        case 'DESC4':
            desconto = 0.2;
            break;
        case 'DESC5':
            desconto = 0.25;
            break;
        default:
            console.log("O código não é válido.");
            return;
    }

    const valorComDesconto = valorProduto * (1 - desconto);
    console.log(`${desconto * 100}% de desconto`);
    console.log(`Valor do produto: R$ ${valorProduto}`);
    console.log(`Valor com desconto: R$ ${valorComDesconto}`);
}

const codigoPromocional = prompt("Por favor, informe um código promocional (DESC1, DESC2, DESC3, DESC4 ou DESC5): ");
const valorProduto = parseFloat(prompt("Informe o valor do produto: R$"));

descontoAplicado(codigoPromocional, valorProduto);
