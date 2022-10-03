const productPrice = document.getElementsByClassName("productPrice");
const productQuantity = document.getElementsByClassName("productQuantity");
const productTotalCost = document.getElementsByClassName("productTotalCost");
const totalCost = document.getElementById("totalCost");

let productQuantityChange = () => {
  let tempTotalCost = 0;
  for (i = 0; i < productPrice.length; i++) {
    productTotalCost[i].innerHTML = (
      productQuantity[i].value * productPrice[i].innerHTML
    ).toFixed(2);
    tempTotalCost += productQuantity[i].value * productPrice[i].innerHTML;
  }
  totalCost.innerHTML = tempTotalCost.toFixed(2);
};

addEventListener("change", (productQuantity) => {
  productQuantityChange();
});
