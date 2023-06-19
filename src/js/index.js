const formulario = document.getElementById("form");
const camposObrigatorios = document.querySelectorAll(".campo-obrigatorio");
const enviar = document.querySelectorAll(".botao-enviar");

formulario.addEventListener("submit", function (event) {
	event.preventDefault();
	validarCampoVazio(camposObrigatorios);
});

function validarCampoVazio(camposObrigatorios) {
	camposObrigatorios.forEach(item => {
		if (item.value === "") {
			const controle = item.parentElement;
			const mensagemErro = controle.querySelector(".span");
			mensagemErro.classList.add("span-visivel");

			item.classList.add("campo-vazio");
			item.classList.remove("campo-preenchido");
		} else {
			item.classList.add("campo-preenchido");
			item.classList.remove("campo-vazio");
		}
	});
}
function somenteNumeros(e) {
	var code = e.which || e.keyCode;

	if (code < 48 || code > 57) {
		e.preventDefault();
		return false;
	}
}
