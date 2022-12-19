const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const numberOfProduct = document.querySelector(".numberOfProduct");
const numAcha = document.querySelector(".num-acha");
const addToCart = document.querySelector(".add-to-cart");
const shopBtn = document.querySelector(".shop-img");
const popUp = document.querySelector(".pop-up");
const priceOfProducts = document.querySelector(".price-of-products");
const popImg = document.querySelector(".pop-img");
const desOfsneakers = document.querySelector(".desOfsneakers");
const checkout = document.querySelector(".checkout");
const deleteBtn = document.querySelector(".delete-btn");
const bigImg = document.querySelector(".principal-product-img");
const biggImg = document.querySelector(".bigg-img");
const imPro1 = document.querySelector(".impro1");
const imPro2 = document.querySelector(".impro2");
const imPro3 = document.querySelector(".impro3");
const imPro4 = document.querySelector(".impro4");
const principalProductImg = document.querySelector(".principal-product-img");
const overlay = document.querySelector(".overlay");
const bitPopUp = document.querySelector(".containerr");
const nextClick = document.querySelector(".next-btn");
const previousClick = document.querySelector(".previous-btn");
const impRo1 = document.querySelectorAll(".impro1");
numberOfProduct.textContent = "0";
let numOfPro = 0;
let valid = false;
increaseBtn.addEventListener("click", function () {
  numOfPro++;
  numberOfProduct.textContent = numOfPro;
});
{
  decreaseBtn.addEventListener("click", function () {
    if (numOfPro > 0) {
      numOfPro--;
      numberOfProduct.textContent = numOfPro;
    }
  });
}
let arr = [imPro1, imPro2, imPro3, imPro4];
for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", function () {
    console.log(arr[i]);
    console.log(i);
    bigImg.src = `images/image-product-${i + 1}.jpg`;
    console.log(bigImg.src);
  });
}
//!##################################################################
//* Add to Cart
addToCart.addEventListener("click", function () {
  if (numOfPro > 0) {
    valid = true;
    numAcha.classList.add("sss");
    numAcha.textContent = numOfPro;
  }
});
//!##################################################################
//* Shop Button
shopBtn.addEventListener("click", function () {
  popUp.classList.toggle("gg");
  if (numOfPro != 0 && valid === true) {
    popImg.style.display = "block";
    desOfsneakers.style.display = "block";
    checkout.style.display = "block";
    priceOfProducts.style.marginTop = "4px";
    let priceProduct = 125 * numOfPro;
    console.log(priceProduct);
    priceOfProducts.textContent = `125.00$ * ${numOfPro}  =  ${priceProduct}$`;
  } else {
    popImg.style.display = "none";
    desOfsneakers.style.display = "none";
    checkout.style.display = "none";
    priceOfProducts.textContent = "Your cart is empty";
    priceOfProducts.style.marginTop = "50px";
  }
  //!##################################################################
  //* Remoce
  deleteBtn.addEventListener("click", function () {
    numAcha.textContent = " ";
    numAcha.classList.remove("sss");
    popImg.style.display = "none";
    desOfsneakers.style.display = "none";
    checkout.style.display = "none";
    priceOfProducts.textContent = "Your cart is empty";
    priceOfProducts.style.marginTop = "50px";
  });
});
principalProductImg.addEventListener("click", function () {
  bitPopUp.style.display = "block";
  overlay.classList.toggle("hidden");
});
let j = 4;
previousClick.addEventListener("click", function () {
  biggImg.src = `images/image-product-${j--}.jpg`;
  for (sc of impRo1) {
    console.log(sc);
    console.log(sc.src);
    console.log(j);
    if (sc.src == `http://127.0.0.1:5500/images/image-product-${j}.jpg`) {
      sc.classList.toggle("bor-r");
    }
  }
  if (j == 0) j = 4;
});
nextClick.addEventListener("click", function () {
  if (j == 5) j = 1;
  biggImg.src = `images/image-product-${j++}.jpg`;
});
overlay.addEventListener("click", function () {
  bitPopUp.style.display = "none";
  overlay.classList.toggle("hidden");
});
