
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", function (event) {
      // Don’t interfere if clicked directly on checkbox
      if (event.target.classList.contains("card-checkbox")) return;

      // Unselect all cards and uncheck all checkboxes
      cards.forEach((c) => {
        c.classList.remove("selected");
        c.querySelector(".card-checkbox").checked = false;
      });

      // Select the clicked card and its checkbox
      card.classList.add("selected");
      const checkbox = card.querySelector(".card-checkbox");
      if (checkbox) checkbox.checked = true;
    });
  });
});

