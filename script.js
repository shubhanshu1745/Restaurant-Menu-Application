// Provided menu array
const menu = [
    { id: 1, title: "Soup of the day", category: "starters", price: "$5", description: "Freshly made soup with seasonal ingredients", img: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 2, title: "Bruschetta", category: "starters", price: "$7", description: "Grilled bread with garlic, tomatoes, fresh basil, mozzarella", img: "https://www.allrecipes.com/thmb/kt9t899s87rKleitZiaUwWOoNJI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format( webp)/3605381-b506207e5f494e44a7cf5c1bbe488748.jpg" },
    { id: 3, title: "Chicken Parmesan", category: "mains", price: "$12", description: "Crispy chicken with tomato sauce and mozzarella, served with spaghetti", img: "https://media.gettyimages.com/id/1358831517/photo/crispy-chicken-parmesan.jpg?s=612x612&w=0&k=20&c=izCK6IforZt1WU1f467NXB-PPR0TAfEw0aoJ6d8imB0=" },
    { id: 4, title: "Steak Frites", category: "mains", price: "$18", description: "Grilled steak with fries and salad", img: "https://media.gettyimages.com/id/463889403/photo/rib-eye-steak.jpg?s=612x612&w=0&k=20&c=igQuEqd2hEwHnwIcuMbiUnQRm5T9Mwk1ASFanAq6iOk=" },
    { id: 5, title: "Chocolate Lava Cake", category: "desserts", price: "$8", description: "Warm chocolate cake with molten center, served with vanilla ice cream", img: "https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.webp?b=1&s=170667a&w=0&k=20&c=6NPIcP8XUG4WwbJU-qfLOEP07aU79doAIsqZ8wic478=" },
    { id: 6, title: "Apple Pie", category: "desserts", price: "$6", description: "Classic apple pie with a flaky crust, served with whipped cream", img: "https://plus.unsplash.com/premium_photo-1666353535417-c86616951727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBwaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 11, title: "Iced Coffee", category: "beverages", price: "$4", description: "Chilled coffee served with ice and cream", img: "https://media.istockphoto.com/id/170428990/photo/iced-mocha.webp?b=1&s=170667a&w=0&k=20&c=ItUVpbetBvrKaKcJySbepwehwa2JIJjSOqzHulpvJY0=" },
    { id: 12, title: "Mango Lassi", category: "beverages", price: "$5", description: "Refreshing Indian drink with mango and yogurt", img: "https://media.istockphoto.com/id/1217751214/photo/fresh-mango-lassi-and-mango-fruit.webp?b=1&s=170667a&w=0&k=20&c=Jt0J70BwVkGdirVAu78hKb-MiMzN3_GUbCz8SmGUdS8=" }
  ];
  
  // DOM elements
  const menuContainer = document.getElementById('menu-container');
  const filterLinks = document.querySelectorAll('.nav-link');
  const searchInput = document.getElementById('search-input');
  
  // Function to display menu items
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(item => `
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4 menu-item" data-category="${item.category}">
        <div class="card">
          <img src="${item.img}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
          <p class="card-text">${item.description}</p>
          <p class="card-text"><small class="text-muted">Category: ${item.category}</small></p>
        </div>
      </div>
    </div>
  `).join('');
  
  menuContainer.innerHTML = displayMenu;
}

// Initial display of all menu items
displayMenuItems(menu);

// Filter items by category
filterLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const category = e.target.getAttribute('data-filter');
    const filteredMenu = category === 'all' ? menu : menu.filter(item => item.category === category);
    displayMenuItems(filteredMenu);
  });
});

// Search functionality
searchInput.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredMenu = menu.filter(item => item.title.toLowerCase().includes(searchString) || item.description.toLowerCase().includes(searchString));
  displayMenuItems(filteredMenu);
});

  