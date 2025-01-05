const cupons = ['NEXUS10', 'MIRANDA10', 'GABRIEL10', 'MATHEUS10'];

document.querySelectorAll('.quantidade-loja button').forEach(button => {
    button.addEventListener('click', () => {
        const isIncrement = button.textContent === "+";
        const itemElement = button.closest('.item-loja');
        const quantityInput = itemElement.querySelector('.quantidade-loja input');
        const priceElement = itemElement.querySelector('.preco-loja');
        const totalElement = itemElement.querySelector('.total-loja');
        const subtotalElement = document.querySelector('.resumo-info-loja p span');
        const deliveryElement = document.querySelector('.resumo-info-loja p:nth-child(2) span');
        const totalOrderElement = document.querySelector('.resumo-info-loja .total-loja span');

        let quantity = parseInt(quantityInput.value, 10);
        const price = parseFloat(priceElement.textContent.replace('R$', '').replace(',', '.'));
        let subtotal = parseFloat(subtotalElement.textContent.replace('R$', '').replace(',', '.'));
        const delivery = 15; 

        if (isIncrement) {
            quantity += 1;
        } else if (quantity > 1) {
            quantity -= 1;
        }

        quantityInput.value = quantity;
        const total = (price * quantity).toFixed(2);
        totalElement.textContent = `R$${total.replace('.', ',')}`;

        let updatedSubtotal = 0;
        document.querySelectorAll('.item-loja').forEach(item => {
            const itemTotal = parseFloat(item.querySelector('.total-loja').textContent.replace('R$', '').replace(',', '.'));
            updatedSubtotal += itemTotal;
        });

        subtotalElement.textContent = `R$${updatedSubtotal.toFixed(2).replace('.', ',')}`;

        const totalWithDelivery = updatedSubtotal + delivery;
        totalOrderElement.textContent = `R$${totalWithDelivery.toFixed(2).replace('.', ',')}`;
        deliveryElement.textContent = `R$${delivery.toFixed(2).replace('.', ',')}`;
    });
});

document.querySelector('.aplicar-cupom').addEventListener('click', () => {
    const inputCupom = document.querySelector('#cupom');

    console.log(inputCupom.value);

    if (cupons.includes(inputCupom.value)) {
        const totalElement = document.querySelector('.total-loja span');
        let calcular_total = parseFloat(totalElement.textContent.replace('R$', '').replace(',', '.'));

        let desconto = calcular_total * 0.10;

        totalElement.textContent = `R$${(calcular_total - desconto).toFixed(2).replace('.', ',')}`;

        const totalDesconto = document.querySelector('.desconto span');

        totalDesconto.textContent = `R$${desconto.toFixed(2).replace('.', ',')}`;

        alert('Cupom válido!');
    } else {
        alert('Cupom inválido!');
    }
});