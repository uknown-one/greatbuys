const products = [
  { id: 1, name: "Wireless Headphones", price: 59.99, image: "https://via.placeholder.com/300x200?text=Headphones", description: "Great sound, wireless freedom.", link: "https://amzn.to/49vFVdG" },
  { id: 2, name: "Smart Watch", price: 129.99, image: "https://via.placeholder.com/300x200?text=Smart+Watch", description: "Track health & fitness easily.",  link: "https://amzn.to/49vFVdG" },
  { id: 3, name: "Bluetooth Speaker", price: 89.99, image: "https://via.placeholder.com/300x200?text=Speaker", description: "Powerful sound, compact size.",  link: "https://amzn.to/49vFVdG" },
  { id: 4, name: "Gaming Mouse", price: 49.99, image: "https://via.placeholder.com/300x200?text=Gaming+Mouse", description: "Precision and speed for gaming.",  link: "https://amzn.to/49vFVdG" },
  { id: 5, name: "Laptop Stand", price: 39.99, image: "https://via.placeholder.com/300x200?text=Laptop+Stand", description: "Ergonomic aluminum stand.",  link: "https://amzn.to/49vFVdG" }
];

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("search");

function renderProducts(filter = "") {
  grid.innerHTML = "";
  const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
products.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
  filtered.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    card/div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>$${product.price.toFixed(2)}</strong></p>
        <a class="buy" href="${p.link}" target="_blank">Buy on Amazon</a>
      </div>
    `;
    grid.appendChild(div);
  });
}

searchInput.addEventListener("input", (e) => {
  renderProducts(e.target.value);
});

renderProducts();
