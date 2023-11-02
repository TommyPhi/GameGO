//0         1                   2          3               4            5           6         7       8          9          10           11          12
const genres = ['Action', 'Action-Adventure', 'Puzzle', 'Role-playing', 'Simulation', 'Strategy', 'Sports', 'MMO', 'Fighting', 'Shooter', 'Adventure', 'Survival', 'Horror'];

const database = [
  {
    id: 1,
    name: 'Elden Ring',
    developer: 'FromSoftware',
    publisher: 'Bandai Namco Entertainment',
    price: 59.99,
    releaseDate: 2022,
    image: 'assets/images/game-covers/eldenring-cover.jpeg',
    description: 'Elden Ring is a 2022 action role-playing game developed by FromSoftware. It was directed by Hidetaka Miyazaki with worldbuilding provided by fantasy writer George R. R. Martin.',
    genre: [genres[2], genres[4], genres[10]]
  },
  
  {
    id: 2,
    name: 'God of War: Ragnorok',
    developer: 'Santa Monica Studio',
    publisher: 'Sony Interactive Entertainment Inc.',
    price: 69.99,
    releaseDate: 2022,
    image: 'assets/images/game-covers/godofwar5-cover.jpeg',
    description: "God of War Ragnarök, an action-adventure game by Santa Monica Studio, was released globally on November 9, 2022, marking the first cross-gen release in the God of War series.",
    genre: [genres[1], genres[3], genres[8]]
  },

  {
    id: 3,
    name: 'A Plague Tale: Requiem',
    developer: 'Asobo Studio S.A.R.L.',
    publisher: 'Focus Entertainment, SA',
    price: 49.99,
    releaseDate: 2022,
    image: 'assets/images/game-covers/plaguetale-cover.jpeg',
    description: "A Plague Tale: Requiem is an action-adventure stealth game developed by Asobo Studio and published by Focus Entertainment.",
    genre: [genres[1], genres[2], genres[9]]
  },

  {
    id: 4,
    name: 'Horizon Forbidden West',
    developer: 'Guerrilla B.V.',
    publisher: 'Sony Interactive Entertainment Inc.',
    price: 49.99,
    releaseDate: 2022,
    image: 'assets/images/game-covers/fobiddenwest-cover.jpeg',
    description: "Horizon Forbidden West is a 2022 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The game was released for PlayStation 4 and PlayStation 5 on 18 February 2022.",
    genre: [genres[1], genres[3], genres[8], genres[9]]
  },

  {
    id: 5,
    name: 'Stray',
    developer: 'BlueTwelve Studio Ltd.',
    publisher: 'Annapurna Games, LLC',
    price: 29.99,
    releaseDate: 2022,
    image: 'assets/images/game-covers/stray-cover.jpeg',
    description: "Stray is a 2022 adventure game starring a stray cat who escapes a walled city filled with robots, machines, and mutant bacteria using a drone companion, B-12.",
    genre: [genres[1], genres[2], genres[9]]
  },

  {
    id: 6,
    name: 'Xenoblade Chronicles 3',
    developer: 'Monolith Software, Inc.',
    publisher: 'Nintendo Co., Ltd.',
    price: 59.99,
    releaseDate: 2022,
    image: 'assets/images/game-covers/xenoblade3-cover.jpeg',
    description: "Xenoblade Chronicles 3, a 2022 Nintendo Switch action role-playing game, is part of the Xeno franchise and is an installment in the open-world Xenoblade Chronicles series.",
    genre: [genres[1], genres[3]]
  },

  {
    id: 7,
    name: 'The Legend of Zelda: Tears of the Kingdom',
    developer: 'Nintendo EPD',
    publisher: 'Nintendo Co., Ltd.',
    price: 69.99,
    releaseDate: 2023,
    image: 'assets/images/game-covers/totk-cover.avif',
    description: "The Legend of Zelda: Tears of the Kingdom is a 2023 action-adventure game developed and published by Nintendo for the Nintendo Switch.",
    genre: [genres[1], genres[2], genres[8], genres[9]]
  },

  {
    id: 8,
    name: 'Marvel Spider-Man 2',
    developer: 'Insomniac Games, Inc.',
    publisher: 'Sony Interactive Entertainment Inc.',
    price: 69.99,
    releaseDate: 2023,
    image: 'assets/images/game-covers/marvelspider2-cover.jpeg',
    description: "Marvel's Spider-Man 2 is a 2023 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment.",
    genre: [genres[1], genres[8]]
  },

  {
    id: 9,
    name: 'Final Fantasy XVI',
    developer: 'Square Enix Creative Business Unit III',
    publisher: 'Square Enix Co., Ltd.',
    price: 69.99,
    releaseDate: 2023,
    image: 'assets/images/game-covers/ffxvi-cover.png',
    description: "Final Fantasy XVI is a 2023 action role-playing game developed and published by Square Enix. The sixteenth main installment in the Final Fantasy series, it was released for the PlayStation 5 as a timed exclusive.",
    genre: [genres[1], genres[3], genres[8]]
  },

  {
    id: 10,
    name: "Baldur's Gate 3",
    developer: 'Larian Studios NV',
    publisher: 'Larian Studios NV',
    price: 59.99,
    releaseDate: 2023,
    image: 'assets/images/game-covers/bg3-cover.jpeg',
    description: "Baldur's Gate 3 is a role-playing video game developed and published by Larian Studios. It is the third main installment in the Baldur's Gate series, based on the tabletop role-playing system of Dungeons & Dragons.",
    genre: [genres[3], genres[5], genres[10]]
  },

  {
    id: 11,
    name: "Resident Evil 4: Remake",
    developer: 'Capcom Co., Ltd.',
    publisher: 'Capcom Co., Ltd.',
    price: 59.99,
    releaseDate: 2023,
    image: 'assets/images/game-covers/re4remake-cover.jpeg',
    description: "Resident Evil 4, a 2023 Capcom survival horror game, is a remake of the 2005 game, released on March 24, 2023, with iOS, iPadOS, and macOS versions expected later in 2023.",
    genre: [genres[1], genres[2], genres[9], genres[11], genres[12]]
  },

  {
    id: 12,
    name: "Starfield",
    developer: 'Bethesda Game Studios',
    publisher: 'Bethesda Softworks LLC',
    price: 69.99,
    releaseDate: 2023,
    image: 'assets/images/game-covers/starfield-cover.jpeg',
    description: "Starfield, an action role-playing game developed by Bethesda Game Studios, is Bethesda's first new intellectual property in 25 years, set in a space-themed setting.",
    genre: [genres[0], genres[1], genres[3], genres[9]]
  }
]

let product_num = 0;

function createGameItem(item) {
  const gameItem = document.createElement('div');
  gameItem.classList.add('game-item');

  gameItem.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div class="game-info">
    <div class='main-game-info'>
    <h1>${item.name}</h1>
    <h3>${item.publisher}</h3>
    <p>Release Date: ${item.releaseDate}</p>
    <h2>$${item.price}</h2>
    </div>
    <p>${item.description}</p>
    <div>
    <p>Developer: ${item.developer}</p>
    <p>Genres: ${item.genre.join(', ')}</p>
    <div>
    <div class='buy-btn'>
    <button id="${product_num}" onclick="addToCart(${item.id}); changeCartText('${product_num}')">Buy Now</button>
    </div>
    </div>
  `;

  product_num++;
  return gameItem;
}

function displayGameItems() {
  const gameList = document.getElementById('products');

  database.forEach((item) => {
    const gameItem = createGameItem(item);
    gameList.appendChild(gameItem);
  });
}

let cart = JSON.parse(localStorage.getItem('cart'));
let cartList = [];
if(cart!==null) {
  for(let value of cart) {
    for(let subvalue of value) {
      cartList.push(subvalue);
    }
  }
}

function changeCartText(id) {
  const button = document.getElementById(id);
  button.innerHTML = 'Added to Cart';
  button.style.background = 'rgb(83, 168, 83)';
  setTimeout(function() {
    button.innerHTML = 'Buy Now';
    button.style.background = 'rgb(237, 86, 81)';
  }, 3000)
}

function addToCart(id) {
  const cartItem = (database.filter(item => item.id === id));
  if(localStorage.getItem('cart') == null) {
    localStorage.setItem('cart', '[]');
  }
  var old_cartItem = JSON.parse(localStorage.getItem('cart'));
  old_cartItem.push(cartItem);

  localStorage.setItem('cart', JSON.stringify(old_cartItem));
}

let totalPrice = 0;
function createCartItem(item) {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  totalPrice += item.price;
  cartItem.innerHTML = `
      <div class='cart-image-container'>
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-info">
        <h2>${item.name}</h2>
        <p>${item.publisher}</p>
        <p id="item-price">$${item.price}</p>
      </div>
      </div>
  `;
  document.getElementById('totalPrice').innerHTML = `Total: $${Math.round(totalPrice * 100) / 100}`;
  return cartItem;
}

function displayCartItems() {
  const cartDiv = document.getElementById('cartList');

  cartList.forEach((item) => {
    const cartItem = createCartItem(item);
    cartDiv.appendChild(cartItem);
  });
};

function resetCart() {
  totalPrice = 0;
  localStorage.clear();
  location.reload();
}
window.onload = displayGameItems;
displayCartItems();
document.getElementById('totalPrice').innerHTML = `Total: $${Math.round(totalPrice * 100) / 100}`;