document.addEventListener("DOMContentLoaded", function () {
	const cards = document.querySelectorAll(".card");

	cards.forEach((card) => {
		card.addEventListener("click", function (event) {

			if (event.target.classList.contains("card-checkbox")) return;

			cards.forEach((c) => {
				c.classList.remove("selected");
				c.querySelector(".card-checkbox").checked = false;
			});

			card.classList.add("selected");
			const checkbox = card.querySelector(".card-checkbox");
			if (checkbox) checkbox.checked = true;
		});
	});
});

