var form = document.querySelector('form');
document.querySelector('#pass').addEventListener('input', function () {
    console.log('erqwerq');
    if (this.value.length < 10) {
        this.style.border = '1px solid red';
    }
    else {
        this.style.border = 'none';
    }
});
var validatePassword = function () {
    var field = document.querySelector('#pass');
    if (field.value.length < 10) {
        alert('stop!!!!!');
        return;
    }
    if (!field.value.match(/\d/)) {
        alert('digit needed for password');
    }
};
var eventSubmit = function (event) {
    event.preventDefault();
    validatePassword();
};
form.addEventListener('submit', eventSubmit);
