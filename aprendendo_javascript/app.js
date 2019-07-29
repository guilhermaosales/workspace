const usuario = "anônimo";
const mensagem = "";

const mensagemValida = mensagem.length > 140;
const usuarioValido = usuario.length > 100 || usuario === "anônimo";
const todosOsRequisitosValidos = mensagemValida && usuarioValido;
const mensagemInvalida = !mensagemValida && usuarioValido;
const usuarioInvalido = mensagemValida && !usuarioValido;

if (todosOsRequisitosValidos) {
    console.log("Enviar a mensagem");
} else if (mensagemInvalida) {
    console.log("A mensagem não pode ser enviada, pois possui menos de 140 caracteres.");
} else if (usuarioInvalido){
    console.log("A mensagem não pode ser enviada, pois o nome de usuário é inválido.");
} else {
    console.log("A mensagem não pode ser enviada, pois não atende os requisitos para uso.");
}
    