const entraVisible = document.getElementById('id-button-aparece');

function apareceInfeliz()
{
    const apareceForms = document.getElementById('id-form-login-hidden');
    apareceForms.classList.toggle('active');
}

entraVisible.addEventListener('click', apareceInfeliz);