const plus = document.querySelector(".increment");
const minus = document.querySelector(".decrement");

plus.addEventListener("click", () => {
  InputCount = document.querySelector(".number").value;
  if (InputCount >= 1) {
    InputCount++;
    document.querySelector(".number").value = InputCount;
  }
});

minus.addEventListener("click", () => {
  InputCount = document.querySelector(".number").value;
  if (InputCount > 1) {
    InputCount--;
    document.querySelector(".number").value = InputCount;
  }
});
