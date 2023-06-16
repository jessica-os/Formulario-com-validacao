const formulario = document.getElementById("form");
const camposObrigatorios = document.querySelectorAll(".campo-obrigatorio");

camposObrigatorios.forEach(function (item) {
	if (item.value == "") {
		item.classList.add("campo-vazio");
	} else {
		item.classList.add("campo-preenchido");
	}
});
