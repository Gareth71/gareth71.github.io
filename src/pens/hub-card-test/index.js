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

// function handleCardClick(element) {
//   console.log("click");
//   //   const link = element.querySelector("a");
//   //   link.click();
// }

// const cards = document.querySelectorAll(".card");
// Array.prototype.forEach.call(cards, (card) => {
//   let down,
//     up,
//     link = card.querySelector("h3 a");
//   card.onmousedown = () => (down = +new Date());
//   card.onmouseup = () => {
//     up = +new Date();
//     if (up - down < 200) {
//       link.click();
//     }
//   };
// });
