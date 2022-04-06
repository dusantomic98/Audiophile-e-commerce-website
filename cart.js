let productsInCart = JSON.parse(localStorage.getItem("AddedItems"));
if (!productsInCart) {
  productsInCart = [];
}
const itemsList = document.querySelector(".shopping-cart");
const cartSumPrice = "";
const items = document.querySelectorAll(".product-info");
const cartCount = document.querySelector(".head h6");
const total = document.querySelector(".total span");
const totalh6 = document.querySelector(".total h6");
const remove = document.querySelector(".remove");
const finalCarts = document.querySelector(".final-carts");
const grandTotal = document.querySelector(".grand-total span");
const confirmContent = document.querySelector(".confirm-content");

const countTheSumPrice = function () {
  let sum = 0;
  productsInCart.forEach((item) => {
    sum += item.price;
  });
  return sum;
};

const numCount = function () {
  let count = 0;
  productsInCart.forEach((item) => {
    if (item.id != productsInCart.id) {
      count += 1;
    }
  });
  return count;
};

const updateShoppingCartHTML = function () {
  // 3
  localStorage.setItem("AddedItems", JSON.stringify(productsInCart));
  if (productsInCart.length > 0) {
    let result = productsInCart.map((product) => {
      return `
                
                <ul class = "shopping-carts">
                  <li class="buyItem">
                      
                    <div class="content">
                      <img src="${product.image}">
                      <div>
                        <h5>${product.name}</h5>
                        <h6>$${product.price}</h6>
                    </div>
                    <div class = "cart-btn">
                      <button class="button-minus" data-id=${product.id}>-</button>
                      <div class="countOfProduct">${product.count}</div>
                      <button class="button-plus" data-id=${product.id}>+</button>
                  </li>
                </ul>
                
                
                    `;
    });
    itemsList.innerHTML = result.join("");
    cartSumPrice.innerHTML = "$" + countTheSumPrice();
    cartCount.innerHTML = "Cart" + "(" + numCount() + ")";
    total.innerHTML = "$" + countTheSumPrice();
  } else {
    totalh6.innerHTML = "";
  }
};

const updateBoughtHTML = function () {
  // 3
  localStorage.setItem("boughtItems", JSON.stringify(productsInCart));
  if (productsInCart.length > 0) {
    let final = productsInCart.map((product) => {
      return `
                
                  <li class="finalItem">
                      
                    <div class="final-content">
                      <img src="${product.image}">
                      <div>
                        <h5>${product.name}</h5>
                        <h6>$${product.price}</h6>
                    </div>
              
                    <div class="finalCount">x${product.count}</div>
                  </li>
                
                
                
                    `;
    });
    finalCarts.innerHTML = final.join("");
    cartSumPrice.innerHTML = "$" + countTheSumPrice();
    cartCount.innerHTML = "Cart" + "(" + numCount() + ")";
    grandTotal.innerHTML = "$" + countTheSumPrice();
  } else {
    totalh6.innerHTML = "";
  }
};

function removeItem() {
  productsInCart = [];
  localStorage.removeItem("AddedItems");
  localStorage.removeItem("boughtItems");
  $(".shopping-carts").remove();
  $(".final-carts").remove();
  total.innerHTML = "$" + 0;
  cartCount.innerHTML = "Cart" + "(" + 0 + ")";
  grandTotal.innerHTML = "$" + 0;
}

remove.addEventListener("click", removeItem);

function updateProductsInCart(product) {
  // 2
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == product.id) {
      productsInCart[i].count += product.count;
      productsInCart[i].price =
        productsInCart[i].basePrice * productsInCart[i].count;
      return;
    }
    numCount();
  }
  productsInCart.push(product);
}

items.forEach((item) => {
  // 1
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("addToCart")) {
      const productID = item.getAttribute("data-product-id");
      const productName = item.querySelector(
        ".product-info-content h2"
      ).innerHTML;
      const productPrice = Number(
        item.querySelector(".price-value").innerHTML.replace(",", "")
      );
      const productImage = item.querySelector("img").src;
      const productCount = Number(item.querySelector(".number").value);
      let product = {
        name: productName,
        image: productImage,
        id: productID,
        count: productCount,
        price: productPrice * productCount,
        basePrice: productPrice,
      };
      updateProductsInCart(product);
      updateShoppingCartHTML();
      updateBoughtHTML();
    }
  });
});

itemsList.addEventListener("click", (e) => {
  // Last
  const isPlusButton = e.target.classList.contains("button-plus");
  const isMinusButton = e.target.classList.contains("button-minus");
  if (isPlusButton || isMinusButton) {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id == e.target.dataset.id) {
        if (isPlusButton) {
          productsInCart[i].count += 1;
        } else if (isMinusButton) {
          productsInCart[i].count -= 1;
        }
        productsInCart[i].price =
          productsInCart[i].basePrice * productsInCart[i].count;
      }
      if (productsInCart[i].count <= 0) {
        productsInCart.splice(i, 1);
      }
    }
    updateShoppingCartHTML();
    updateBoughtHTML();
  }
});

updateShoppingCartHTML();
updateBoughtHTML();
