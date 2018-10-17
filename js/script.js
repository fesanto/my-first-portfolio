//focando o local do input
const inputName = document.getElementById("input1");
const inputEmail = document.getElementById("input2");
const inputSub = document.getElementById("input3");
const inputMsg = document.getElementById("textarea");

//focando o botao do formulario
const formButton = document.getElementById("btn__contact");

//fazendo o botao funcionar
formButton.addEventListener("click", function (event) {
    event.preventDefault();

    //validando para não aceitar input vazio ou nulo ou iniciar com números ou espaços
    if (inputName.value === undefined || inputName.value === null || inputName.value === "" || inputName.value === " ") {
        inputName.focus();
        return false;
    }
    if (inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " ") {
        inputEmail.focus();
        return false;
    }
    if (inputSub.value === undefined || inputSub.value === null || inputSub.value === "" || inputSub.value === " ") {
        inputSub.focus();
        return false;
    }
    if (inputMsg.value === undefined || inputMsg.value === null || inputMsg.value === "" || inputMsg.value === " ") {
        inputMsg.focus();
        return false;
    }

    //limpando o input após o click do botão
    inputName.value = null;
    inputEmail.value = null;
    inputSub.value = null;
    inputMsg.value = null; 
})