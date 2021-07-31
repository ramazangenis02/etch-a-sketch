const squaresContainer = document.querySelector(".squares-container");
const resetBtn = document.querySelector(".reset");

createSquare = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    squaresContainer.appendChild(div);
  }
};

const squares = document.querySelector("div");

squares.addEventListener("mouseover", e => {
  e.target.classList.replace("square", "color");
});

updateGrid = num => {
  squaresContainer.style.setProperty(
    "grid-template-columns",
    `repeat(${num}, 2fr)`
  );
  squaresContainer.style.setProperty(
    "grid-template-rows",
    `repeat(${num}, 2fr)`
  );

  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    squaresContainer.appendChild(div);
  }
  console.log(num);
};

resetBtn.addEventListener("click", () => {
  squaresContainer.innerHTML = "";
  squaresContainer.style.setProperty(
    "grid-template-columns",
    `repeat(16, 2fr)`
  );
  squaresContainer.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  let child = squaresContainer.children;
  for (let k = 0; k < child.length; k++) {
    child[k].classList.replace("color", "square");
  }

  let quest = prompt("How much squares per side for new grid? (max: 100)");
  if (Number(quest) > 100) {
    quest = 100;
  }
  updateGrid(quest);
});

createSquare();
