user = User.create({
  username: "test",
  password: "test",
  first_name: "Test",
  last_name: "User",
})

user.posts.create({
  longitude: 14.5894,
  latitude: 121.0693547,
  blood_type: "A+",
  blood_amount: 500,
  name: "Test Post",
  age: "35",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare erat eu libero fermentum rutrum. Donec pellentesque nibh id dignissim tristique. Nullam sed blandit nunc, pretium tincidunt erat. Pellentesque consectetur elementum hendrerit. Integer dapibus, elit suscipit finibus maximus, ligula ligula fringilla dui, quis imperdiet odio arcu ac turpis.",
})

user.posts.create({
  longitude: 12.5894,
  latitude: 111.06221,
  blood_type: "O+",
  blood_amount: 1500,
  name: "John Jacob",
  age: "21",
  description: "Need blood.",
})

user = User.create({
  username: "billy",
  password: "test",
  first_name: "Billy",
  last_name: "Bob",
})

user.posts.create({
  longitude: 14.5894,
  latitude: 121.0693547,
  blood_type: "B-",
  blood_amount: 2000,
  name: "Uncle George",
  age: "58",
  description: "My uncle lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare erat eu libero fermentum rutrum.",
})