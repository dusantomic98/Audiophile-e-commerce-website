const hamburger = document.querySelector(".hamburger");
const products = document.querySelector(".products-menu");
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const wrapper = document.querySelector(".wrapper");
const first = document.querySelector(".hamburger span:nth-child(1)");
const second = document.querySelector(".hamburger span:nth-child(2)");
const third = document.querySelector(".hamburger span:nth-child(3)");
const pay = document.querySelector(".pay");
const purchased = document.querySelector(".purchase-confirm");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  products.classList.toggle("active");
  body.classList.toggle("active");
  main.classList.toggle("active");
  wrapper.classList.toggle("active");
  first.classList.toggle("active");
  second.classList.toggle("active");
  third.classList.toggle("active");
});

const shopCart = document.querySelector(".shopping-cart");
const cartSymbol = document.querySelector(".cart");
const cartInterior = document.querySelector(".cart-interior");

cartSymbol.addEventListener("click", () => {
  cartSymbol.classList.toggle("active");
  body.classList.toggle("active");
  main.classList.toggle("active");
  wrapper.classList.toggle("active");
  shopCart.classList.toggle("active");
  cartInterior.classList.toggle("active");
});

pay.addEventListener("click", () => {
  body.classList.toggle("active");
  main.classList.toggle("active");
  wrapper.classList.toggle("active");
  purchased.classList.toggle("active");
  removeItem();
});
