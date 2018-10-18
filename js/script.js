// //focando o local do input
// const inputName = document.getElementById("input1");
// const inputEmail = document.getElementById("input2");
// const inputSub = document.getElementById("input3");
// const inputMsg = document.getElementById("textarea");

// //focando o botao do formulario
// const formButton = document.getElementById("btn__contact");

// //fazendo o botao funcionar
// formButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     //validando para não aceitar input vazio ou nulo ou iniciar com números ou espaços
//     if (inputName.value === undefined || inputName.value === null || inputName.value === "" || inputName.value === " ") {
//         inputName.focus();
//         return false;
//     }
//     if (inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " ") {
//         inputEmail.focus();
//         return false;
//     }
//     if (inputSub.value === undefined || inputSub.value === null || inputSub.value === "" || inputSub.value === " ") {
//         inputSub.focus();
//         return false;
//     }
//     if (inputMsg.value === undefined || inputMsg.value === null || inputMsg.value === "" || inputMsg.value === " ") {
//         inputMsg.focus();
//         return false;
//     }

//     //limpando o input após o click do botão
//     inputName.value = null;
//     inputEmail.value = null;
//     inputSub.value = null;
//     inputMsg.value = null; 
// })


//validando campos do formulario
let form = $('.contact__form');

form.validate({
    errorElement: "span",
    //definindo as regras que serão aplicadas ao formulario
    rules: {
        //o campo com valor name deve ser preenchido obrigatoriamente
        name: "required",
        //o campo com valor email tem mais de um requisito, entao vira um objeto com {}
        email: {
            required: true,
            email: true,
        },
        subject: "required",
        text: "required",
    },
    //definindos as mensagens que aparecerão em caso de não cumprimento das regras estipuladas acima
    messages: {
        name: "Por favor, digite seu nome!",
        email: {
            required: "Por favor, digite seu e-mail!",
            email: "Por favor, digite um e-mail válido!"
        },
        subject: "Por favor, digite o assunto!",
        text: "Por favor, digite sua mensagem!"
    },
    
})

// corrigir o alert e o reset

function alertmsg() {
    alert("Mensagem enviada com sucesso!");   
}

$('contact__form').each(function () {
    this.reset();
});

