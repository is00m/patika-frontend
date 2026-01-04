const menu = [
  {
    id: 1,
    title: "Seoul Bibimbap",
    category: "Korea",
    price: 12.5,
    img: "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=900&q=80",
    desc: "Warm rice bowl with gochujang, sauteed vegetables, and a runny egg.",
  },
  {
    id: 2,
    title: "Kimchi Pancake",
    category: "Korea",
    price: 9.25,
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
    desc: "Crisp kimchi jeon with scallion bite and toasted sesame oil.",
  },
  {
    id: 3,
    title: "Tokyo Ramen",
    category: "Japan",
    price: 14.75,
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80",
    desc: "Silky shoyu broth, pork belly, ajitama egg, and spring onion.",
  },
  {
    id: 4,
    title: "Salmon Nigiri",
    category: "Japan",
    price: 13.0,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    desc: "Hand pressed rice with brushed tamari and fresh wasabi.",
  },
  {
    id: 5,
    title: "Shanghai Dumplings",
    category: "China",
    price: 10.5,
    img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=80",
    desc: "Soup filled dumplings with ginger black vinegar dip.",
  },
  {
    id: 6,
    title: "Tea Smoked Duck",
    category: "China",
    price: 18.5,
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    desc: "Aromatic duck with jasmine tea smoke, pickled cucumber, and hoisin.",
  },
  {
    id: 7,
    title: "Bangkok Pad Thai",
    category: "Thailand",
    price: 11.75,
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    desc: "Rice noodles tossed with tamarind glaze, peanuts, and lime.",
  },
  {
    id: 8,
    title: "Green Curry",
    category: "Thailand",
    price: 13.25,
    img: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=80",
    desc: "Creamy coconut curry with basil, eggplant, and jasmine rice.",
  },
];

const menuContainer = document.querySelector("#menu");
const buttonContainer = document.querySelector("#buttons");

const renderMenu = (items) => {
  menuContainer.innerHTML = items
    .map((item, index) => {
      return `
        <article class="menu-item" style="animation-delay: ${index * 0.06}s">
          <img src="${item.img}" alt="${item.title}" loading="lazy" />
          <div class="menu-body">
            <div class="menu-header">
              <h2 class="menu-title">${item.title}</h2>
              <span class="menu-price">$${item.price.toFixed(2)}</span>
            </div>
            <span class="menu-category">${item.category}</span>
            <p class="menu-desc">${item.desc}</p>
          </div>
        </article>
      `;
    })
    .join("");
};

const setActiveButton = (category) => {
  const buttons = buttonContainer.querySelectorAll(".filter-btn");
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === category);
  });
};

const renderButtons = () => {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );

  buttonContainer.innerHTML = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-category="${category}">${category}</button>`;
    })
    .join("");
};

buttonContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-btn");
  if (!button) {
    return;
  }

  const category = button.dataset.category;
  const filteredMenu =
    category === "All" ? menu : menu.filter((item) => item.category === category);

  renderMenu(filteredMenu);
  setActiveButton(category);
});

document.addEventListener("DOMContentLoaded", () => {
  renderButtons();
  renderMenu(menu);
  setActiveButton("All");
});
