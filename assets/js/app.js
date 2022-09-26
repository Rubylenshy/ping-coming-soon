

const notify_me = document.querySelector('#btn');

notify_me.addEventListener('click', (e)=>{
    e.preventDefault();

    const input_value = document.querySelector('#email').value;
    const input = document.querySelector('#email');
    const emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)(\.[a-z]+)(\.[a-z]+)?$/;
    const error = document.querySelector('.error');
    if (emailRegex.test(input_value)) {
        input.classList.remove('error-code');
        error.style.display = 'none';
        alert('Your email address has been received! 🎉')
        location.reload();
    }
    else{
        input.classList.add('error-code');
        error.style.display = 'block';
    }
})
