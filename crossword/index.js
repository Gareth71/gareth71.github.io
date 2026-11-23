import words from "./data/vocabulary-core-words.json" with { type: "json" };

const input = document.querySelector("[data-input]");
const button = document.querySelector("[data-search]");
const output = document.querySelector("[data-output]");

button.addEventListener("click", () => handleSearch());

function handleSearch() {
  const inputString = input.value.toUpperCase();
  const matchesFound = getMatches(inputString);

  if (matchesFound.length === 0) {
    output.innerText = "No matches found";
    return;
  }

  output.innerText = matchesFound.join("\n");
}

function getMatches(inputString) {
  if (inputString.includes("?")) {
    return words.filter((word) => matches(word, inputString));
  }

  const sortedInputUpperCase = sortLetters(inputString);
  return words.filter((word) =>
    matches(sortLetters(word), sortedInputUpperCase),
  );
}

function matches(word, inputString) {
  return (
    word.length === inputString.length &&
    [...inputString].every((letter, i) => letter === "?" || word[i] === letter)
  );
}

function sortLetters(word) {
  return [...word].sort((a, b) => a.localeCompare(b)).join("");
}
