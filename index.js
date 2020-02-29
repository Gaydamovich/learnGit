var form = document.querySelector('form');
var validatePassword = function () {
    var field = document.querySelector('#pass');
    if (field.value.length < 10) {
        alert('stop!!!!!');
    }
};
var eventSubmit = function (event) {
    validatePassword();
};
form.addEventListener('submit', eventSubmit);
