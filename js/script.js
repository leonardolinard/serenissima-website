// ************************Função Load Site******
function loading() {
    $("#load").css("display", "none");
}

// ************************Função Máscaras******
$(document).ready(function () {
    $('#cadastro_cpf').mask('000.000.000-00');
    $('#cadastro_tel').mask('(00) 00000-0000');
    // $('#cadastro_senha').mask('000000000000');
});

// ************************Função Valida Nome******
$("#cadastro_nome").blur(function () {
    var nome = document.querySelector("#cadastro_nome").value;

    if (isNaN(nome)) {
        $("#cadastro_nome").css("background", "#fffedf");
        return true;
    } else {
        $("#cadastro_nome").css("background", "#fcdbcc");
        return false;
    }
});

// ************************Função Valida Sobrenome******
$("#cadastro_ultimo_nome").blur(function () {
    var sobrenome = document.querySelector("#cadastro_ultimo_nome").value;

    if (isNaN(sobrenome)) {
        $("#cadastro_ultimo_nome").css("background", "#fffedf");
        return true;
    } else {
        $("#cadastro_ultimo_nome").css("background", "#fcdbcc");
        return false;
    }
});

// ************************Função Valida E-mail******
function valida_email(field) {
    var usuario = field.value.substring(0, field.value.indexOf("@"));
    var dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
        field.style.backgroundColor = "#fffedf"
        return true;
    } else {
        field.style.backgroundColor = "#fcdbcc"
        return false;
    }
}

// ************************Função Calcula Idade******
function calculaIdade(dataNasc) {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split('-');
    var anoNasc = anoNascParts[0];
    var mesNasc = anoNascParts[1];
    var diaNasc = anoNascParts[2];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1;
    //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
    if (mesAtual < mesNasc) {
        idade--;
    } else {
        //Se estiver no mes do nascimento, verificar o dia
        if (mesAtual == mesNasc) {
            if (new Date().getDate() < diaNasc) {
                //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                idade--;
            }
        }
    }
    return idade;
}

// ************************Função Valida Idade******
$("#cadastro_nascimento").blur(function () {
    var idade = calculaIdade(document.querySelector("#cadastro_nascimento").value);
    if (idade > 130 || idade == " " || idade <= 0) {
        $("#cadastro_nascimento").css("backgroundColor", "#fcdbcc");
        return false;
    } else {
        $("#cadastro_nascimento").css("backgroundColor", "#fffedf");
        return true;
    }
});

// ************************Função Valida CPF******
$("#cadastro_cpf").blur(function () {
    var cpf_valor = document.querySelector("#cadastro_cpf").value;

    if (cpf_valor.length == 14) {
        $("#cadastro_cpf").css("backgroundColor", "#fffedf");
        return true;
    } else {
        $("#cadastro_cpf").css("backgroundColor", "#fcdbcc");
        return false;
    }
});


// ************************Função Valida Telefone******
$("#cadastro_tel").blur(function () {
    var tel_valor = document.querySelector("#cadastro_tel").value;

    if (tel_valor.length == 15) {
        $("#cadastro_tel").css("backgroundColor", "#fffedf");
        return true;
    } else {
        $("#cadastro_tel").css("backgroundColor", "#fcdbcc");
        return false;
    }
});

// ************************Função Valida Senha Cadastro******
$("#cadastro_senha").blur(function () {
    var senha_valor = document.querySelector("#cadastro_senha").value;

    if (senha_valor.length >= 6) {
        $("#cadastro_senha").css("backgroundColor", "#fffedf");
        $("#senha_minima").hide();
        return true;
    } else {
        $("#cadastro_senha").css("backgroundColor", "#fcdbcc");
        $("#senha_minima").show();
        return false;
    }
});

// ************************Função Valida Formulário Cadastro******
$(document).ready(function () {
    $("#botao_cadastro_enviar").click(function () {
        var cont = 0;
        $(".formulario_cadastro input").each(function () {
            if ($(this).val() == "") {
                $("#span_preencha").show();
                cont++;
            }
        });

        if (cont == 0) {
            window.open("cadastro_realizado.html");
        }
    });
});

// ************************Função Valida Senha Login******
$("#login_senha").blur(function () {
    var senha_valor = document.querySelector("#login_senha").value;

    if (senha_valor.length >= 6) {
        $("#login_senha").css("backgroundColor", "#fffedf");
        $("#senha_minima").hide();
        return true;
    } else {
        $("#login_senha").css("backgroundColor", "#fcdbcc");
        $("#senha_minima").show();
        return false;
    }
});

// ************************Função Valida Formulário Login******
$(document).ready(function () {
    $("#botao_enviar_login").click(function () {
        var cont = 0;
        $(".formulario_login input").each(function () {
            if ($(this).val() == "" || $(this).val() != "") {
                $("#span_preencha").show();
                cont++;
            }
        });
    });
});

// ************************Função Evento Scroll******
$(window).scroll(function () {
    var altura = $(window).scrollTop();
    if (altura > 400) {
        $(".botao_topo").show();
    } else {
        $(".botao_topo").hide();
    }
});