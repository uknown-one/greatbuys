const products = [{
    id: 1,
    name: "KOSPECT Pulse Smart Watch",
    price: 89.99,
    image: "assets/img/watch.jpg",
    description: "The sport smart watches for men support automatic recognition of six common sports like walking, running, cycling, and elliptical-no manual selection needed. With 170+ sports modes including running, cycling, skateboarding, and climbing, it's ideal for runners, fitness lovers, and active lifestyles.",
    link: "https://amzn.to/3LAdIub",
  },
  {
    id: 2,
    name: "Technics Premium Hi-Fi True Wireless Bluetooth Earbuds",
    price: 197.9,
    image: "assets/img/earbuds.jpg",
    description: "Advanced Noise Cancelling, 3 Device Multipoint Connectivity, Hi-Res Audio + Enhanced Calling",
    link: "https://amzn.to/4qlBQzS",
  },
  {
    id: 3,
    name: "Marshall Emberton III Portable Bluetooth Speaker",
    price: 179.99,
    image: "assets/img/btspeaker.jpg",
    description: "Rugged Waterproof IP67 Design | Loud Stereo Sound, Deep Bass with 32+ Hr Playtime | Compact and Wireless for Travel and Outdoors - Black & Brass",
    link: "https://amzn.to/3LtbfSu",
  },
  {
    id: 4,
    name: "16 Inch AMD Gaming Laptop",
    price: 587.39,
    image: "assets/img/laptop.jpg",
    description: "FHD Screen Laptop with Ryzen 7 7735HS Processor up to 4.75GHz, 16GB RAM 512GB ROM Windows 11 Laptop Compute, HDMI, WiFi, Bluetooth, Type-C, Webcam, Backlit Keyboard",
    link: "https://amzn.to/4aZN6NQ",
  },
  {
    id: 5,
    name: "Lamicall Adjustable Laptop Stand",
    price: 35.99,
    image: "assets/img/stand.jpg",
    description: "Portable Laptop Riser, Aluminum Laptop Stand for Desk Foldable, Ergonomic Computer Notebook Stand Holder for MacBook Air Pro, Dell XPS, HP (10-17.3'') - Silver",
    link: "https://amzn.to/3NknsJN",
  },
];

const track = document.getElementById("track");
const searchInput = document.getElementById("search");
let index = 0;

function build(filter = "") {
  track.innerHTML = "";
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );
  filtered.forEach((product, i) => {
    const card = document.createElement("div");
    card.className = "card" + (i === index ? "" : " inactive");
    card.innerHTML = `<img src="${product.img}" alt="${product.name}">
    <div><h2>${product.name}</h2>
    <p><strong>$${product.price}</strong></p>
    <p>${product.description}</p></div>
    <a class="btn3d" href="${product.link}" target="_blank">Buy</a>`;

    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const rx = -(e.clientY - r.top - r.height / 2) / 10;
      const ry = (e.clientX - r.left - r.width / 2) / 10;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.05)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform =
        i === index ? "rotateY(0deg) scale(1)" : "rotateY(30deg) scale(.85)";
    });
    track.appendChild(card);
  });
  positionTrack();
}

function positionTrack() {
  const cards = document.querySelectorAll(".card");
  if (!cards.length) return;
  const cardWidth = cards[0].offsetWidth;
  const gap = 32;
  const centerOffset = window.innerWidth / 2 - cardWidth / 2;
  const x = centerOffset - index * (cardWidth + gap);
  track.style.transform = `translateX(${x}px)`;
  cards.forEach((c, i) => c.classList.toggle("inactive", i !== index));
}
searchInput.addEventListener("input", () => {
  index = 0;
  build(searchInput.value);
});
document.getElementById("next").onclick = () => {
  index = (index + 1) % products.length;
  positionTrack();
};
document.getElementById("prev").onclick = () => {
  index = (index - 1 + products.length) % products.length;
  positionTrack();
};
setInterval(() => {
  index = (index + 1) % products.length;
  positionTrack();
}, 3000);
window.addEventListener("resize", positionTrack);

function subscribe() {
  const email = document.getElementById("email").value;
  const msg = document.getElementById("newsletter-msg");
  if (email.includes("@")) {
    msg.textContent = `Subscribed with ${email}!`;
    msg.style.color = "rgb(1, 94, 81)";
  } else {
    msg.textContent = "Please enter a valid email.";
    msg.style.color = "rgb(4, 7, 155)";
  }
}
build();

// Blog posts
const blogPosts = [{
    title: "5 Must-Have Gadgets for 2024",
    image: "assets/img/blog1.jpg",
    excerpt: "Discover the top 5 gadgets you need this year to boost your productivity and lifestyle.",
  },
  {
    title: "How to Choose the Perfect Laptop Stand",
    image: "assets/img/blog2.jpg",
    excerpt: "Tips and tricks to pick an ergonomic and durable laptop stand for your workspace.",
  },
  {
    title: "Top Wireless Earbuds Compared",
    image: "assets/img/blog3.jpg",
    excerpt: "We compare the best wireless earbuds on the market for sound, battery life, and comfort.",
  },
];

const blogContainer = document.getElementById("blog-cards");
blogPosts.forEach((post) => {
  const card = document.createElement("div");
  card.className = "blog-card";
  card.innerHTML = `<img src="${post.image}" alt="${post.title}"><h3>${post.title}</h3><p>${post.excerpt}</p>`;
  blogContainer.appendChild(card);
});