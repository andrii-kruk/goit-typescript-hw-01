import greeting from "./greeting";
import generateMarkup from "./generateMarkup";

const button = document.querySelector("button");
const input = document.querySelector("input");
const container = document.querySelector("#container");

if (button && input) {
  button.addEventListener("click", () => {
    if (input.value === "") return alert("Name must be exist.");
    const result = greeting("Hello", input.value);
    const markup = generateMarkup(result);

    container?.insertAdjacentHTML("beforeend", markup);
  });
}
