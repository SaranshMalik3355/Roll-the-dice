const btnEven = document.querySelector(".btn-even");
const btnOdd = document.querySelector(".btn-odd");
const btnThrow = document.querySelector(".dice-throw");
btnThrow.disabled = true;
const image = document.querySelector(".dice-image");
const result = document.querySelector(".result");

let userSelection = "";

btnEven.addEventListener("click", () => {
  userSelection = "even";
  btnThrow.disabled = false;
  btnEven.classList.add("btn-even-odd-select");
  btnOdd.classList.remove("btn-even-odd-select");

  //remove animation
  image.classList.remove("dice-spin");

  // Reset cover image
  image.src = `images/dice-question.png`;
});

btnOdd.addEventListener("click", () => {
  userSelection = "odd";
  btnThrow.disabled = false;
  btnOdd.classList.add("btn-even-odd-select");
  btnEven.classList.remove("btn-even-odd-select");

  //remove animation
  image.classList.remove("dice-spin");

  // Reset cover image
  image.src = `images/dice-question.png`;
});

btnThrow.addEventListener("click", () => {
  console.log(userSelection);

  // Disabled itself
  btnThrow.disabled = true;
  //Random number
  let rndDice = Math.ceil(Math.random() * 6);

  //Adding animation
  image.classList.add("dice-spin");

  //SetTimeout
  setTimeout(() => {
    //apply dice image
    image.src = `images/dice${rndDice}.png`;

    // adding logic
    if (rndDice % 2 == 0 && userSelection == "even") {
      result.innerHTML = "You win you selected even";
    } else if (rndDice % 2 != 0 && userSelection == "odd") {
      result.innerHTML = "You win you selected odd";
    } else if (rndDice % 2 == 0 && userSelection == "odd") {
      result.innerHTML = "Haha loser ria sharma!! you cannot even select odd";
      // result.innerHTML = "You lose!! you selected odd";
    } else if (rndDice % 2 != 0 && userSelection == "even") {
      result.innerHTML = "Haha loser ria sharma!! you cannot even select even";
      // result.innerHTML = "You lose!! you selected even";
    }
  }, 4000);
});
