const options = [
  "Apple",
  "Banana",
  "Orange",
  "Pear",
  "Strawberry",
  "Blueberry",
  "Grape",
  "Kiwi",
];

const input = document.getElementById("comboInput");
const list = document.getElementById("comboList");

function render(filter = "") {
  list.innerHTML = "";

  const filtered = options.filter((option) =>
    option.toLowerCase().includes(filter.toLowerCase()),
  );

  filtered.forEach((option) => {
    const li = document.createElement("li");
    li.textContent = option;

    li.addEventListener("click", () => {
      input.value = option;
      list.classList.remove("show");
    });

    list.appendChild(li);
  });
}

input.addEventListener("focus", () => {
  render(input.value);
  list.classList.add("show");
});

input.addEventListener("input", () => {
  render(input.value);
  list.classList.add("show");
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".combo")) {
    list.classList.remove("show");
  }
});

render();
