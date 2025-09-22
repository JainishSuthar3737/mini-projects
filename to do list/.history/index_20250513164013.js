const outer = document.querySelector(".outer");
const Btn = document.querySelector(".button");
let input = document.getElementById("text");

let count = 1;

const submitHandler = () => {
  Btn.style.border = "2px solid white";
  setTimeout(() => {
    Btn.style.border = "none";
  }, 200);

  let finalOutput = document.createElement("div");

  finalOutput.innerHTML = `<div class="task-data">Task-${count++}: ${
    input.value
  }</div>`;
  console.log((finalOutput.classList.value = "display"));
  outer.appendChild(finalOutput);

  let bellowbutton = document.createElement("button");
  bellowbutton.innerText = "Delete";
  console.log((bellowbutton.classList.value = "bellowbutton"));
  finalOutput.append(bellowbutton);

  bellowbutton.addEventListener("click", () => {
    outer.removeChild(finalOutput);
  });
  input.value = "";
};

const enterHandler = (event) => {
  if (event.key === "Enter") {
    submitHandler();
  }
};
output.addEventListener("keydown", enterHandler);

Btn.addEventListener("click", submitHandler);
