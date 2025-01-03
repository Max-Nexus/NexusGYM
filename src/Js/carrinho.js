document.querySelectorAll('.quantidade button').forEach(button => {
    button.addEventListener('click', () => {
        const isIncrement = button.textContent === "+";
        const itemElement = button.closest('.item');
        const quantityInput = itemElement.querySelector('.quantidade input');
        const priceElement = itemElement.querySelector('.preco');
        const totalElement = itemElement.querySelector('.total');
        const subtotalElement = document.querySelector('.resumo-info p span');
        const deliveryElement = document.querySelector('.resumo-info p:nth-child(2) span');
        const totalOrderElement = document.querySelector('.resumo-info .total span');

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
        document.querySelectorAll('.item').forEach(item => {
            const itemTotal = parseFloat(item.querySelector('.total').textContent.replace('R$', '').replace(',', '.'));
            updatedSubtotal += itemTotal;
        });

        subtotalElement.textContent = `R$${updatedSubtotal.toFixed(2).replace('.', ',')}`;

        const totalWithDelivery = updatedSubtotal + delivery;
        totalOrderElement.textContent = `R$${totalWithDelivery.toFixed(2).replace('.', ',')}`;
        deliveryElement.textContent = `R$${delivery.toFixed(2).replace('.', ',')}`;
    });
});