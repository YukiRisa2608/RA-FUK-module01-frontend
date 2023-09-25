let score = document.querySelectorAll('.score label').value;
let text = document.getElementById('input').value;
let send = document.getElementById('send').value;
    send.addEventListener('click', getValueFuntion());
let result = document.getElementById('textArea').value;

function getValueFuntion() {
    result.insertAdjacentHTML('beforeend', `<p>${score}, ${text}</p>`);
}