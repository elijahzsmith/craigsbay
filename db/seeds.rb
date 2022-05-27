
puts "Seeding Users...."
# 50.times do
#     User.create(username: 'xXCharlie420Xx' , password: '123' , age: 19, name: "Charlie")
# end
    u1 = User.create(username: 'xXCharlie420Xx' , password: '123' , age: 19, name: "Charlie")
    u2 = User.create(username: 'jacob98' , password: '123' , age: 19, name: "Jacob")
    u3 = User.create(username: 'elijahzmith' , password: '123' , age: 22, name: "Elijah")
    u4 = User.create(username: 'bitz820' , password: '123' , age: 65, name: "Mark")
    u5 = User.create(username: 'elizabethtreahy' , password: '123' , age: 19, name: "Elizabeth")
    u6 = User.create(username: 'wowzers' , password: '123' , age: 23, name: "Potato")
puts "Done Seeding Users!"

puts "Seeding Listings...."
# 50.times do 
#     Listing.create(location: Faker::Address.city, image_url: Faker::LoremFlickr.image, what_it_is: Faker::Commerce.product_name, category: Faker::Commerce.department, description: Faker::Lorem)
# end

    l1 = Listing.create(location: Faker::Address.city, image_url: Faker::LoremFlickr.image, what_it_is: Faker::Commerce.product_name, category: Faker::Commerce.department, description: Faker::Lorem)
    l2 = Listing.create(location: Faker::Address.city, image_url: Faker::LoremFlickr.image, what_it_is: Faker::Commerce.product_name, category: Faker::Commerce.department, description: Faker::Lorem)
    l3 = Listing.create(location: Faker::Address.city, image_url: Faker::LoremFlickr.image, what_it_is: Faker::Commerce.product_name, category: Faker::Commerce.department, description: "Flex on all your friends")
    l4 = Listing.create(location: Faker::Address.city, image_url: Faker::LoremFlickr.image, what_it_is: Faker::Commerce.product_name, category: Faker::Commerce.department, description: "Flex on all your friends")
    l5 = Listing.create(location: Faker::Address.city, image_url: Faker::LoremFlickr.image, what_it_is: Faker::Commerce.product_name, category: Faker::Commerce.product_name, description: "Flex on all your friends")
    l6 = Listing.create(location: Faker::Address.city, image_url: Faker::LoremFlickr.image, what_it_is: Faker::Commerce.product_name, category: Faker::Commerce.department, description: "Flex on all your friends")
    l7 = Listing.create(location: Faker::Address.city, image_url: Faker::LoremFlickr.image, what_it_is: Faker::Commerce.product_name, category: Faker::Commerce.department, description: "Flex on all your friends")
puts "Done Seeding Listings!"

puts "Seeding Favorites....."
    f1 = Favorite.create(user_id: u1.id, listing_id: l1.id)
    f2 = Favorite.create(user_id: u2.id, listing_id: l1.id)
    f3 = Favorite.create(user_id: u3.id, listing_id: l1.id)
    f4 = Favorite.create(user_id: u4.id, listing_id: l1.id)
    f5 = Favorite.create(user_id: u5.id, listing_id: l1.id)
puts "Done Seeding Favorites!"
