const input = document.getElementById('name');
const error = document.getElementById('error');

input.addEventListener('input', () => {
    let value = input.value;

    value = value.replace(/[0-9]/g, '');
    value = value.replace(/[!@#]/g, '');

    input.value = value;

    if (value.length < 3 || value.length > 20) {
        error.textContent = 'Імʼя має бути від 3 до 20 символів';
    } else {
        error.textContent = '';
    }
});