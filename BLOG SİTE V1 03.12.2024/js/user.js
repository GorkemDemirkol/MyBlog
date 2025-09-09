const form = document.getElementById('myForm');
const message = document.getElementById('message');
const deleteBtn = document.getElementById('deleteBtn');
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (name === '' || email === '' || password === '') {
        message.textContent = 'lütfen gerekli alanları doldurun';
    }
    else if (password.length < 6) {
        message.textContent = 'password en az 6 karekterden oluşmalı';
    }
    else {
        message.textContent = 'form başarıyla gönderildi.';
        message.classList.remove('error');
        message.style.color = 'green';
        form.reset();
    }

});

deleteBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value = '';
    const email = document.getElementById('email').value = '';
    const password = document.getElementById('password').value = '';
    message.textContent = 'Form temizlendi.'
    message.classList.remove('error');
    message.style.color = 'black';
});
