import data from "./data.json" with { type: "json" };

const output = document.querySelector("output");

output.innerText = JSON.stringify(data);
