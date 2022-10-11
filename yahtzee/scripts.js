function Gooi() {
  let dice = [];

  for (var i = 0; i < 5; ++i) {
    dice[i] = Math.floor(Math.random() * 6) + 1;
  }

  let count = {
    amountOfOnes: f(dice, 1),
    amountOfTwos: f(dice, 2),
    amountOfThrees: f(dice, 3),
    amountOfFours: f(dice, 4),
    amountOfFives: f(dice, 5),
    amountOfSixs: f(dice, 6),
  };

  const diceHTML = document.getElementsByClassName("dice");
  const x = dice;
  for (let i = 0; i < x.length; i++) {
    for (let i = 0; i < diceHTML.length; i++) {
      diceHTML[i].innerHTML = x[i];
    }
  }

  return dice;
}

function f(array, value) {
  var n = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] == value) {
      n++;
    }
  }
  return n;
}
