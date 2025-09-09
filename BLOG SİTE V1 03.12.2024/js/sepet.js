const form = document.getElementById('productForm');
const message = document.getElementById('message');
const cart= document.getElementById('cart');
const addToChartBtn = document.getElementById('addToChartBtn');

addToChartBtn.addEventListener('click', () => {
    const productName = document.getElementById('productName').value;
    const productQuantity = document.getElementById('productQuantity').value;    

    if (productName === '' || productQuantity === '') {
        message.textContent = 'lütfen gerekli alanları doldurun';
        message.className='error';
    }
    else{
        const listItem = document.createElement('li');
        listItem.textContent = productName + ' ' + productQuantity;
        cart.appendChild(listItem);

        message.textContent='Ürün sepete eklendi';
        message.className='success';
        productForm.reset();
    }
});