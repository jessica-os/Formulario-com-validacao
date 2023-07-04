const camposObrigatorios = document.querySelectorAll(".input");
const btnEnviar = document.querySelector("#btn-enviar");

btnEnviar.addEventListener("click", e => {
	e.preventDefault();
	validaCampo();
});
function validaCampo() {
	camposObrigatorios.forEach(input => {
		if (input.value) {
			input.classList.add("campo-preenchido");
			input.nextElementSibling.classList.remove("small-visivel");
			input.classList.remove("campo-vazio");
		} else {
			input.nextElementSibling.classList.add("small-visivel");
			input.classList.remove("campo-preenchido");
			input.classList.add("campo-vazio");
		}
	});
}

function validarNumeros(input) {
	input.value = input.value.replace(/[^0-9]/g, "");
	input.value = input.value.replace(/,/g, "");
}
