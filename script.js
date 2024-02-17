document.addEventListener("DOMContentLoaded", function () {
  const decreaseButtons = document.querySelectorAll(".decrease");
  const increaseButtons = document.querySelectorAll(".increase");
  const deleteButtons = document.querySelectorAll(".delete");
  const likeButtons = document.querySelectorAll(".like");

  // Fonction pour diminuer la quantité
  function decreaseQuantity(event) {
    const item = event.target.parentElement.parentElement;
    const quantityElement = item.querySelector(".quantity");
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
      quantity--;
      quantityElement.innerText = quantity;
    }
    updateTotal();
  }

  // Fonction pour augmenter la quantité
  function increaseQuantity(event) {
    const item = event.target.parentElement.parentElement;
    const quantityElement = item.querySelector(".quantity");
    let quantity = parseInt(quantityElement.innerText);
    quantity++;
    quantityElement.innerText = quantity;
    updateTotal();
  }

  // Fonction pour supprimer un article du panier
  function deleteItem(event) {
    const item = event.target.parentElement.parentElement;
    item.remove();
    updateTotal();
  }

  // Fonction pour changer l'état "aimé" d'un article
  function toggleLike(event) {
    const likeButton = event.target;
    likeButton.classList.toggle("liked");
  }

  function updateTotal() {
    let total = 0;
    const items = document.querySelectorAll(".cart-row");
    items.forEach((item) => {
      const price = parseFloat(
        item.querySelector(".cart-price").innerText.replace("$", "")
      );
      const quantity = parseInt(
        item.querySelector(".cart-quantity-input").innerText
      );
      total += price * quantity;
    });
    document.querySelector("#total span").innerText = "$" + total.toFixed(2);
  }

  // Ajout des écouteurs d'événements pour les boutons de diminution
  decreaseButtons.forEach((button) => {
    button.addEventListener("click", decreaseQuantity);
  });

  // Ajout des écouteurs d'événements pour les boutons d'augmentation
  increaseButtons.forEach((button) => {
    button.addEventListener("click", increaseQuantity);
  });

  // Ajout des écouteurs d'événements pour les boutons de suppression
  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteItem);
  });

  // Ajout des écouteurs d'événements pour les boutons "like"
  likeButtons.forEach((button) => {
    button.addEventListener("click", toggleLike);
  });

  // Mise à jour du total initial
  updateTotal();
});

// heart//
const heartIcons = document.querySelectorAll(".heartIcon");

heartIcons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    if (icon.style.color !== "red") {
      icon.style.color = "red"; /* Changement de la couleur du cœur en rouge */
    } else {
      icon.style.color = "black"; /* Changement de la couleur du cœur en noir */
    }
  });
});

// button add to cart
function addToCart() {
  // Redirection vers la page du panier
  window.location.href = "cart.html";
}

// Fonction pour diminuer la quantité d'un article
function decreaseQuantity() {
  const quantityElement = document.querySelector(".quantity span");
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updateTotalPrice(quantity);
  }
}

// Fonction pour augmenter la quantité d'un article
function increaseQuantity() {
  const quantityElement = document.querySelector(".quantity span");
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
  updateTotalPrice(quantity);
}

// Fonction pour supprimer un article du panier
function deleteItem() {
  const cartItem = document.querySelector(".cart-item");
  cartItem.remove();
  updateTotalPrice(0);
}

// Fonction pour changer la couleur du bouton "Like"
function toggleLike() {
  const likeButton = document.querySelector(".btn-like");
  likeButton.classList.toggle("liked");
}

// Fonction pour mettre à jour le prix total en fonction de la quantité
function updateTotalPrice(quantity) {
  const priceElement = document.querySelector(".item-details p");
  const price = parseFloat(priceElement.textContent.split("$")[1]);
  const totalPrice = price * quantity;
  const totalPriceElement = document.querySelector(".total-price p");
  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

// add to cart 2

// button add to cart
function addToCart2() {
  // Redirection vers la page du panier
  window.location.href = "cart2.html";
}

// Fonction pour diminuer la quantité d'un article
function decreaseQuantity() {
  const quantityElement = document.querySelector(".quantity span");
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updateTotalPrice(quantity);
  }
}

// Fonction pour augmenter la quantité d'un article
function increaseQuantity() {
  const quantityElement = document.querySelector(".quantity span");
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
  updateTotalPrice(quantity);
}

// Fonction pour supprimer un article du panier
function deleteItem() {
  const cartItem = document.querySelector(".cart-item");
  cartItem.remove();
  updateTotalPrice(0);
}

// Fonction pour changer la couleur du bouton "Like"
function toggleLike() {
  const likeButton = document.querySelector(".btn-like");
  likeButton.classList.toggle("liked");
}

// Fonction pour mettre à jour le prix total en fonction de la quantité
function updateTotalPrice(quantity) {
  const priceElement = document.querySelector(".item-details p");
  const price = parseFloat(priceElement.textContent.split("$")[1]);
  const totalPrice = price * quantity;
  const totalPriceElement = document.querySelector(".total-price p");
  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

// add to cart 3

// button add to cart
function addToCart3() {
  // Redirection vers la page du panier
  window.location.href = "cart3.html";
}

// Fonction pour diminuer la quantité d'un article
function decreaseQuantity() {
  const quantityElement = document.querySelector(".quantity span");
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updateTotalPrice(quantity);
  }
}

// Fonction pour augmenter la quantité d'un article
function increaseQuantity() {
  const quantityElement = document.querySelector(".quantity span");
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
  updateTotalPrice(quantity);
}

// Fonction pour supprimer un article du panier
function deleteItem() {
  const cartItem = document.querySelector(".cart-item");
  cartItem.remove();
  updateTotalPrice(0);
}

// Fonction pour changer la couleur du bouton "Like"
function toggleLike() {
  const likeButton = document.querySelector(".btn-like");
  likeButton.classList.toggle("liked");
}

// Fonction pour mettre à jour le prix total en fonction de la quantité
function updateTotalPrice(quantity) {
  const priceElement = document.querySelector(".item-details p");
  const price = parseFloat(priceElement.textContent.split("$")[1]);
  const totalPrice = price * quantity;
  const totalPriceElement = document.querySelector(".total-price p");
  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

//add to cart 4

// button add to cart
function addToCart4() {
  // Redirection vers la page du panier
  window.location.href = "cart4.html";
}

// Fonction pour diminuer la quantité d'un article
function decreaseQuantity() {
  const quantityElement = document.querySelector(".quantity span");
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updateTotalPrice(quantity);
  }
}

// Fonction pour augmenter la quantité d'un article
function increaseQuantity() {
  const quantityElement = document.querySelector(".quantity span");
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
  updateTotalPrice(quantity);
}

// Fonction pour supprimer un article du panier
function deleteItem() {
  const cartItem = document.querySelector(".cart-item");
  cartItem.remove();
  updateTotalPrice(0);
}

// Fonction pour changer la couleur du bouton "Like"
function toggleLike() {
  const likeButton = document.querySelector(".btn-like");
  likeButton.classList.toggle("liked");
}

// Fonction pour mettre à jour le prix total en fonction de la quantité
function updateTotalPrice(quantity) {
  const priceElement = document.querySelector(".item-details p");
  const price = parseFloat(priceElement.textContent.split("$")[1]);
  const totalPrice = price * quantity;
  const totalPriceElement = document.querySelector(".total-price p");
  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

//add to cart 5

// button add to cart
function addToCart5() {
  // Redirection vers la page du panier
  window.location.href = "cart5.html";
}

// Fonction pour diminuer la quantité d'un article
function decreaseQuantity() {
  const quantityElement = document.querySelector(".quantity span");
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updateTotalPrice(quantity);
  }
}

// Fonction pour augmenter la quantité d'un article
function increaseQuantity() {
  const quantityElement = document.querySelector(".quantity span");
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
  updateTotalPrice(quantity);
}

// Fonction pour supprimer un article du panier
function deleteItem() {
  const cartItem = document.querySelector(".cart-item");
  cartItem.remove();
  updateTotalPrice(0);
}

// Fonction pour changer la couleur du bouton "Like"
function toggleLike() {
  const likeButton = document.querySelector(".btn-like");
  likeButton.classList.toggle("liked");
}

// Fonction pour mettre à jour le prix total en fonction de la quantité
function updateTotalPrice(quantity) {
  const priceElement = document.querySelector(".item-details p");
  const price = parseFloat(priceElement.textContent.split("$")[1]);
  const totalPrice = price * quantity;
  const totalPriceElement = document.querySelector(".total-price p");
  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

//add to cart 6

// button add to cart
function addToCart6() {
  // Redirection vers la page du panier
  window.location.href = "cart6.html";
}

// Fonction pour diminuer la quantité d'un article
function decreaseQuantity() {
  const quantityElement = document.querySelector(".quantity span");
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updateTotalPrice(quantity);
  }
}

// Fonction pour augmenter la quantité d'un article
function increaseQuantity() {
  const quantityElement = document.querySelector(".quantity span");
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
  updateTotalPrice(quantity);
}

// Fonction pour supprimer un article du panier
function deleteItem() {
  const cartItem = document.querySelector(".cart-item");
  cartItem.remove();
  updateTotalPrice(0);
}

// Fonction pour changer la couleur du bouton "Like"
function toggleLike() {
  const likeButton = document.querySelector(".btn-like");
  likeButton.classList.toggle("liked");
}

// Fonction pour mettre à jour le prix total en fonction de la quantité
function updateTotalPrice(quantity) {
  const priceElement = document.querySelector(".item-details p");
  const price = parseFloat(priceElement.textContent.split("$")[1]);
  const totalPrice = price * quantity;
  const totalPriceElement = document.querySelector(".total-price p");
  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}
