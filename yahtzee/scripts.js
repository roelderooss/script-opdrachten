function Gooi() {
  let dice = [];

  for (var i = 0; i < 5; ++i) {
    dice[i] = Math.floor(Math.random() * 6) + 1;
  }
  console.log(dice);
  return dice;
}
