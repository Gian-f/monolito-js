import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap";

import { fetchProducts } from "./produto.service";

async function displayProducts() {
    const products = await fetchProducts();

    const container = document.getElementById("card-container");
    const cardsContainer = container.querySelector(".overflow-auto.mt-3");

    for (const product of products) {
        const card = createCard(product);
        cardsContainer.appendChild(card);
    }
}

function createCard(product) {
    const card = document.createElement("div");
    card.className = "card m-2";
    card.style.maxWidth = "540px";

    card.innerHTML = `
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp" alt="" class="img-fluid rounded-start" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${product.nome}</h5>
          <p class="card-text">${product.descricao}</p>
          <p class="card-text">Preço: ${product.preco}</p>
        </div>
      </div>
    </div>`;
    return card;
}

export { displayProducts };