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

  const searchInput = document.getElementById("search");

 let index = 0;

 const img = document.querySelector("#product-image img");
 const nameEl = document.getElementById("product-name");
 const priceEl = document.getElementById("price");
 const linkEl = document.getElementById("link");
 const productLink = document.getElementById("product-image");

 function showProduct(i) {
   const p = products[i];
   img.src = p.image;
   nameEl.innerHTML = p.name;
   priceEl.innerHTML = `$${p.price.toFixed(2)} <span class="highlight" id="link">Buy</span>`;
   linkEl.textContent = "Buy";
   productLink.href = p.link;
 }

 // initial load
 showProduct(index);

 // click card to cycle products
 const card = document.getElementById("card");
 card.addEventListener("click", () => {
   index = (index + 1) % products.length;
   showProduct(index);
 });

 // tilt effect
 const container = document.querySelector(".container");
 container.addEventListener("mousemove", e => {
   const rect = container.getBoundingClientRect();
   const x = e.clientX - rect.left;
   const y = e.clientY - rect.top;
   const cx = rect.width / 2,
     cy = rect.height / 2;
   const rotateY = ((x - cx) / cx) * 12;
   const rotateX = -((y - cy) / cy) * 12;
   card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
 });

 container.addEventListener("mouseleave", () => {
   card.style.transform = "rotateX(0deg) rotateY(0deg)";
 });

 // glare follow mouse
 card.addEventListener("mousemove", e => {
   const r = card.getBoundingClientRect();
   const x = ((e.clientX - r.left) / r.width) * 100;
   const y = ((e.clientY - r.top) / r.height) * 100;
   glare.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,.15), transparent 60%)`;
   glare.style.opacity = 1;
 });

 card.addEventListener("mouseleave", () => glare.style.opacity = 0);