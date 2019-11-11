# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create({
  username: "test",
  password: "test",
  first_name: "Test",
  last_name: "User",
})

User.first.posts.create({
  longitude: 14.5894,
  latitude: 121.0693547,
  blood_type: "A+",
  blood_amount: 500,
  name: "Test Post",
  age: "35",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare erat eu libero fermentum rutrum. 
    Donec pellentesque nibh id dignissim tristique. Nullam sed blandit nunc, pretium tincidunt erat. Pellentesque consectetur elementum hendrerit. 
    Integer dapibus, elit suscipit finibus maximus, ligula ligula fringilla dui, quis imperdiet odio arcu ac turpis.",
})
