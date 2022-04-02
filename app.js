const hamburger = document.querySelector(".hamburger");
const products = document.querySelector(".products-menu");
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const wrapper = document.querySelector(".wrapper");
const first = document.querySelector(".hamburger span:nth-child(1)");
const second = document.querySelector(".hamburger span:nth-child(2)");
const third = document.querySelector(".hamburger span:nth-child(3)");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  products.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
  main.classList.toggle("active");
  wrapper.classList.toggle("active");
  first.classList.toggle("active");
  second.classList.toggle("active");
  third.classList.toggle("active");
});
