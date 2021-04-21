function validacao(){    

let caixaUsuario =     document.getElementById (id = "caixaUsuario")
let caixaSenha =       document.getElementById (id = "caixaSenha")
let botao =            document.getElementById (id = "botaoenviar")


if (caixaUsuario.value == 0 || caixaSenha.value == 0){
    alert ("Preencha os campos em brancos");

}else if (caixaUsuario.value !== "Paulo"){
        alert ("Usuário Inválido")

}else if (caixaSenha.value !== "12345"){
    alert ("Senha Inválida")

}else{
    window.alert ("Você será redirecionado")
    window.location="https://www.globo.com."

}
}






