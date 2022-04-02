const productsInCart = [];
const itemsList = document.querySelector(".shopping-cart");
const cartSumPrice = document.querySelector(".sum-prices");
const items = document.querySelectorAll(".product-info");
const itemsNumber = document.querySelector(".Item-number");

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
      const cartCount = (itemsNumber.innerHTML =
        "Cart" + "(" + numCount() + ")");
      return `
  				<div class="buyItem">
                    <div class = "head">
                    <h6 class = "cartCount">${cartCount}</h6>
                    <div class = "remove">Remove all</div>
                  </div>
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
  						</div>

  					</div>
  				</div>`;
    });
    itemsList.innerHTML = result.join("");
    cartSumPrice.innerHTML = "$" + countTheSumPrice();
  } else {
    itemsList.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
    cartSumPrice.innerHTML = "";
  }
};

function updateProductsInCart(product) {
  // 2
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == product.id) {
      productsInCart[i].count += product.count;
      productsInCart[i].price =
        productsInCart[i].basePrice * productsInCart[i].count;
      return;
    }
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
  }
});

updateShoppingCartHTML();
