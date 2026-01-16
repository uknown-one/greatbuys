const products = [
    {
    id: 1,
    name: "KOSPECT Pulse Smart Watch",
    price: 89.99,
    image: "assets/watch.jpg",
    description: "The sport smart watches for men support automatic recognition of six common sports like walking, running, cycling, and elliptical-no manual selection needed. With 170+ sports modes including running, cycling, skateboarding, and climbing, it's ideal for runners, fitness lovers, and active lifestyles.",
    link: "https://amzn.to/3LAdIub",
  },
  {
    id: 2,
    name: "Technics Premium Hi-Fi True Wireless Bluetooth Earbuds",
    price: 197.9,
    image: "assets/earbuds.jpg",
    description: "Advanced Noise Cancelling, 3 Device Multipoint Connectivity, Hi-Res Audio + Enhanced Calling",
    link: "https://amzn.to/4qlBQzS",
  },
  {
    id: 3,
    name: "Marshall Emberton III Portable Bluetooth Speaker",
    price: 179.99,
    image: "assets/images/btspeaker.jpg",
    description: "Rugged Waterproof IP67 Design | Loud Stereo Sound, Deep Bass with 32+ Hr Playtime | Compact and Wireless for Travel and Outdoors - Black & Brass",
    link: "https://amzn.to/3LtbfSu",
  },
  {
    id: 4,
    name: "16 Inch AMD Gaming Laptop",
    price: 587.39,
    image: "assets/laptop.jpg",
    description: "FHD Screen Laptop with Ryzen 7 7735HS Processor up to 4.75GHz, 16GB RAM 512GB ROM Windows 11 Laptop Compute, HDMI, WiFi, Bluetooth, Type-C, Webcam, Backlit Keyboard",
    link: "https://amzn.to/4aZN6NQ",
  },
  {
    id: 5,
    name: "Lamicall Adjustable Laptop Stand",
    price: 35.99,
    image: "assets/stand.jpg",
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
    title: "5 Must-Have Gadgets for 2026 That You Can’t Live Without",
    image: "assets/img/blog1.jpg",
    excerpt:"Technology is evolving faster than ever, and 2026 promises gadgets that feel like they’re straight out of a sci-fi movie. Whether you’re a tech enthusiast or just someone who wants to simplify everyday life, these five devices are set to redefine convenience, productivity, and fun.",
    fullText:"1. AI-Powered Personal Assistant Devices\n2026’s AI assistants are no longer limited to just answering questions or setting reminders. These smart devices can anticipate your needs, manage your home, optimize your schedule, and even suggest lifestyle improvements based on your habits. Think of it as having a personal life coach that’s awake 24/7.\n\n2. Foldable and Rollable Screens\nSay goodbye to rigid screens. The latest foldable and rollable devices allow you to expand your smartphone or tablet into a full-sized screen when needed and fold it back into pocket-sized portability. This tech isn’t just about cool factor—it’s perfect for mobile gamers, designers, and multitaskers.\n\n3. Next-Gen Wearable Health Monitors\nWearables in 2026 go beyond step counters. Expect devices capable of monitoring blood pressure, hydration levels, sleep quality, and even stress hormones. Some wearables can now detect early signs of illnesses, giving you health insights before symptoms appear. It’s health management with a futuristic twist.\n\n4. Smart Home Robots\nHome automation is getting physical. The latest smart robots can clean, cook, and even assist in elderly care. These robots combine AI with mobility, recognizing family members, adjusting to your preferences, and handling mundane chores while you focus on more important tasks—or relax.\n\n5. Augmented Reality (AR) Glasses\nAR glasses are finally mainstream. They overlay digital information seamlessly onto the real world—directions, notifications, or even virtual workspaces. For professionals, travelers, and gamers alike, AR glasses bring convenience and immersive experiences directly into your field of view.\n\nConclusion\n2026 is shaping up to be a year where the line between science fiction and reality continues to blur. These gadgets aren’t just about novelty—they promise to enhance productivity, improve health, and make everyday life more enjoyable. Keeping an eye on these tech trends ensures you stay ahead in a world that’s moving faster than ever.",
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
  card.innerHTML = `<img src="${post.image}" alt="${post.image}"><h3>${post.title}</h3><p class="excerpt">${post.excerpt}</p><p class="fullText" style="display:none;white-space:pre-line;">${post.fullText}</p><button>Read More</button>`;
  const btn=card.querySelector('button');
const fullText=card.querySelector('.fullText');
btn.addEventListener('click',()=>{
if(fullText.style.display==='none'){ fullText.style.display='block'; btn.textContent='Read Less'; } else { fullText.style.display='none'; btn.textContent='Read More'; }
});
  blogContainer.appendChild(card);
});
