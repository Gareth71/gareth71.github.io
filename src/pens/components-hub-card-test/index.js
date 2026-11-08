// document.querySelector(".card").addEventListener("click", handleCardClick);

document.addEventListener("click", function (event) {
  // Check if the clicked element or any of its parents has the data attribute
  const disclosureButton = event.target.closest("[data-disclosure-button]");
  const card = event.target.closest("[data-card]");

  event.stopPropagation();

  if (disclosureButton) {
    // The element with the data attribute or its child was clicked
    handleDisclosureButtonClick(disclosureButton);
    return;
  }
  if (card) {
    // The element with the data attribute or its child was clicked
    handleCardClick(card);
    return;
  }
});

function handleDisclosureButtonClick(element) {
  const isOpen =
    element.getAttribute("aria-expanded") === "true" ? "false" : "true";
  element.setAttribute("aria-expanded", isOpen);
}

const allCards = [...document.querySelectorAll(".card")];

allCards.forEach((card) => {
  const disapearingButton = card.querySelector("[data-disappearing-button]");
  const disapearingButtonInList = card.querySelector(
    "li > [data-disappearing-button]"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          disapearingButtonInList.classList.remove("hideMe");
        } else {
          disapearingButtonInList.classList.add("hideMe");
        }
      });
    },
    {
      root: card.querySelector(".button-limit"),
      threshold: 0,
    }
  );

  observer.observe(disapearingButton);
});
