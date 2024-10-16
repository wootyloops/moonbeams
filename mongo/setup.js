// initial product/user data for mongo

let error = true

let res = [
  db.users.drop(),
  db.users.createIndex({ email: 1 }, { unique: true }),
  db.users.insert({ "_id":{"$oid":"6709d79a6499ce4beb6a02ef"},"password":"$2a$12$J71YXg4lFETP15152UnV2ODBHxdXBKkkSqbY6BPLh8M/oqYlQxQki","email":"user@email.com","roles":"user","__v":0 }),
  db.users.insert({ "_id":{"$oid":"6709dbc0907ceb77980514f4"},"password":"$2a$12$cAt9q/h0ivBOX6q.nII.VuzV6NAX5DBxHPhdzOrUmtDGbfDws4ySu","email":"admin@email.com","roles":"admin","__v":0 }),
  db.products.drop(),
  db.products.insert(
    {"_id":{"$oid":"66fa19ef46ae8078a5257885"},"name":"Moon Bean T-Shirt","category":"apparel","description":"Show your Moon Bean pride!","price":25.99,"stock":0,"__v":0}
  ),
  db.products.insert(
    {"_id":{"$oid":"66fa1bf386ad1e4f41d06dcf"},"name":"Celestial Roast","category":"coffee","description":"It's out of this world.","price":32.99,"stock":17,"__v":0}
  ),
  db.products.insert(
    {"_id":{"$oid":"670437d5b8ff26034e64f6c2"},"name":"Jupiter Bold","slug":"jupiter-bold","category":"coffee","description":"Strong & Rich","longDescription":"A dark roast with hints of cheese.","price":21.99,"stock":4,"__v":0}
  ),
  db.products.insert(
    {"_id":{"$oid":"67034016acd8fe8b5554ba97"},"name":"Astral Keychain","category":"accessories","description":"The official Moon Beans keychain","longDescription":"Show your Moon Bean pride with this beautiful keychain!","price":12.99,"stock":13,"__v":0}
  ),
  db.products.insert(
    {"_id":{"$oid":"66fa239f16fd51ba557c6517"},"name":"Classic Crater Roast","category":"coffee","description":"Smooth and mellow.","price":16.99,"stock":7,"__v":0}
  ),
  db.products.insert(
    {"_id":{"$oid":"66fa22c1840f215804ad911b"},"name":"Lunar Blend","category":"coffee","description":"Our top seller!","price":18.99,"stock":28,"__v":0}
  ),
  db.products.insert(
    {"_id":{"$oid":"66fa1c3886ad1e4f41d06dd3"},"name":"Moon Bean Keychain","category":"accessories","description":"For the moonman on the go.","price":9.99,"stock":0,"__v":0}
  ),
  db.products.insert(
    {"_id":{"$oid":"66fa1c1786ad1e4f41d06dd1"},"name":"Moon Bean Coffee Mug","category":"accessories","description":"Imbibe your beans in style.","price":12.99,"stock":51,"__v":0}
  )

]

printjson(res)

if (error) {
  print('Error, exiting')
  quit(1)
}