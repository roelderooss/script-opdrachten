function Gooi() {
  let dice = [];

  for (var i = 0; i < 5; ++i) {
    dice[i] = Math.floor(Math.random() * 6) + 1;
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
  let count = {
    amountOfOnes: f(dice, 1),
    amountOfTwos: f(dice, 2),
    amountOfThrees: f(dice, 3),
    amountOfFours: f(dice, 4),
    amountOfFives: f(dice, 5),
    amountOfSixs: f(dice, 6),
  };
  return dice;
}
