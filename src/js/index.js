const camposObrigatorios = document.querySelectorAll(".input");
const btnEnviar = document.querySelector("#btn-enviar");

btnEnviar.addEventListener("click", e => {
	e.preventDefault();
	validaCampo();
});
function validaCampo() {
	camposObrigatorios.forEach(input => {
		if (input.value) {
			input.nextElementSibling.classList.remove("small-visivel");
			input.classList.add("campo-preenchido");
		} else {
			input.nextElementSibling.classList.add("small-visivel");
			input.classList.remove("campo-preenchido");
			input.classList.add("campo-vazio");
			
		}
	});
}
