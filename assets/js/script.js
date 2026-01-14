  const products = [{
      id: 1,
      name: "KOSPECT Pulse Smart Watch",
      price: 89.99,
      image: "assets/img/watch.jpg",
      description: " The sport smart watches for men support automatic recognition of six common sports like walking, running, cycling, and elliptical-no manual selection needed. With 170+ sports modes including running, cycling, skateboarding, and climbing, it's ideal for runners, fitness lovers, and active lifestyles..",
      link: "https://amzn.to/3LAdIub"
    },
    {
      id: 2,
      name: "Technics Premium Hi-Fi True Wireless Bluetooth Earbuds",
      price: 197.90,
      image: "assets/img/earbuds.jpg",
      description: "dvanced Noise Cancelling, 3 Device Multipoint Connectivity, Hi-Res Audio + Enhanced Calling",
      link: "https://amzn.to/4qlBQzS"
    },
    {
      id: 3,
      name: "Marshall Emberton III Portable Bluetooth Speaker ",
      price: 179.99,
      image: "assets/img/btspeaker.jpg",
      description: "Rugged Waterproof IP67 Design | Loud Stereo Sound, Deep Bass with 32+ Hr Playtime | Compact and Wireless for Travel and Outdoors - Black & Brass",
      link: "https://amzn.to/3LtbfSu"
    },
    {
      id: 4,
      name: "16 Inch AMD Gaming Laptop,",
      price: 587.39,
      image: "assets/img/laptop.jpg",
      description: "FHD Screen Laptop with Ryzen 7 7735HS Processor up to 4.75GHz, 16GB RAM 512GB ROM Windows 11 Laptop Compute, HDMI, WiFi, Bluetooth, Type-C, Webcam, Backlit Keyboard",
      link: "https://amzn.to/4aZN6NQ"
    },
    {
      id: 5,
      name: "Lamicall Adjustable Laptop Stand",
      price: 35.99,
      image: "assets/img/stand.jpg",
      description: "Portable Laptop Riser, Aluminum Laptop Stand for Desk Foldable, Ergonomic Computer Notebook Stand Holder for MacBook Air Pro, Dell XPS, HP (10-17.3'') - Silver",
      link: "https://amzn.to/3NknsJN"
    }
  ];

  const grid = document.getElementById("productGrid");
  const searchInput = document.getElementById("search");

  function renderProducts(filter = "") {
    grid.innerHTML = "";
    const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
    products.forEach(_product => {

        filtered.forEach(product => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-details">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>$${product.price.toFixed(2)}</strong></p>
        <a class="buy" href="${product.link}" target="link">Buy on Amazon</a>
        </div>
        `;
          grid.appendChild(card);
        });
      },

      searchInput.addEventListener("input", (e) => {
        renderProducts(e.target.value);
      }));

    renderProducts()
  };