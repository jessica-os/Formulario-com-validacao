const formulario = document.getElementById("form");
const camposObrigatorios = document.querySelectorAll("input, textarea");

formulario.addEventListener("submit", function (event) {
	event.preventDefault();
	validarCampoVazio(camposObrigatorios);
});

function validarCampoVazio(camposObrigatorios) {
	camposObrigatorios.forEach(item => {
		const controle = item.parentElement;
		const mensagemErro = controle.querySelector(".small");
		if (item.value === "") {
			mensagemErro.classList.add("small-visivel");

			item.classList.add("campo-vazio");
			item.classList.remove("campo-preenchido");
		} else {
			item.classList.add("campo-preenchido");
			item.classList.remove("campo-vazio");
			mensagemErro.classList.remove("small-visivel");
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
