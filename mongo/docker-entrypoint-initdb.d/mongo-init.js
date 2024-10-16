// initial product/user data for mongo

db = new Mongo().getDB("moonbeans");
db.createCollection("users");
db.createCollection('products');

db.products.insertMany([
  { 
    productID: UUID(),
    name: "Moon Bean T-Shirt", 
    discontinued: false, 
    category: "apparel", 
    description: "Show your Moon Bean pride!", 
    longDescription: "", 
    price: 25.99, 
    stock: 0 
  },
  { 
    productID: UUID(),
    name: "Celestial Roast", 
    discontinued: false, 
    category: "coffee", 
    description: "It's out of this world.", 
    longDescription: "", 
    price: 32.99, 
    stock: 17 
  },
  { 
    productID: UUID(),
    name: "Jupiter Bold", 
    discontinued: false,
    category: "coffee", 
    description: "Strong & Rich", 
    longDescription: "A dark roast with hints of cheese.", 
    price: 21.99, 
    stock: 4
  },
  { 
    productID: UUID(),
    name: "Astral Keychain", 
    discontinued: false, 
    category: "accessories", 
    description: "The official Moon Beans keychain", 
    longDescription: "Show your Moon Bean pride with this beautiful keychain!", 
    price: 12.99, 
    stock: 13
  },
  { 
    productID: UUID(),
    name: "Classic Crater Roast", 
    discontinued: false, 
    category: "coffee", 
    description: "Smooth and mellow.", 
    longDescription: "", 
    price: 16.99, 
    stock: 7
  },
  {
    productID: UUID(),
    name: "Lunar Blend", 
    discontinued: false, 
    category: "coffee", 
    description: "Our top seller!", 
    longDescription: "", 
    price: 18.99, 
    stock: 28
  }
]);


db.users.createIndex(
  { email: 1 }, 
  { unique: true }
);

db.users.insertMany([
  { 
    userID: UUID(),
    name: 'joe.user', 
    password: '$2a$12$J71YXg4lFETP15152UnV2ODBHxdXBKkkSqbY6BPLh8M/oqYlQxQki', 
    email: 'user@email.com', 
    role: 'user'
  }, 
  { 
    userID: UUID(),
    name: 'joe.admin', 
    password: '$2a$12$cAt9q/h0ivBOX6q.nII.VuzV6NAX5DBxHPhdzOrUmtDGbfDws4ySu', 
    email: 'admin@email.com', 
    role: 'admin'
  } 
]);