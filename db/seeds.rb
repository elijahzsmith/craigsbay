require 'faker'

puts "Seeding Users...."
# 50.times do
#     User.create(username: 'xXCharlie420Xx' , password: '123' , age: 19, name: "Charlie")
# end
    u1 = User.create(username: 'xXCharlie420Xx' , email: "example0@gmail.com", password: '123' , age: 19, name: "Charlie")
    u2 = User.create(username: 'jaclo23' , email: "example1@gmail.com", password: '123' , age: 19, name: "Jacob")
    u3 = User.create(username: 'elijahzmith' , email: "example2@gmail.com", password: '123' , age: 22, name: "Elijah")
    u4 = User.create(username: 'bitz820' , email: "example3@gmail.com", password: '123' , age: 65, name: "Mark")
    u5 = User.create(username: 'elizabethtreahy' , email: "example4@gmail.com", password: '123' , age: 19, name: "Elizabeth")
    u6 = User.create(username: 'wowzers' , email: "example5@gmail.com", password: '123' , age: 23, name: "Potato")
puts "Done Seeding Users!"

puts "Seeding Listings...."




    l1 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/00000_9S9Lfs6dRdVz_0t20t2_600x450.jpg", what_it_is: "1977 MGB", category: "Vehicles", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l2 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/01010_cK2hunEZTKTz_0lM0t2_600x450.jpg", what_it_is: "Washburn SBF80", category: "Instruments", description: Faker::Lorem.paragraph(sentence_count: 10), user_id: u1.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l3 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/00d0d_bX26HGj5yYgz_0CI0t2_600x450.jpg", what_it_is: "04 can am ds650", category: "Outdoor", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l4 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/01212_1feOSAGPJaBz_0t20CI_600x450.jpg", what_it_is: "ryobi leaf blower", category: "Outdoor", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l5 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/00s0s_12IqwZZ0ew4z_0rO0CI_300x300.jpg", what_it_is: "konica A3 autoreflex film camera", category: "Electronics", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l6 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/00Z0Z_gMje8HowcZQz_0pO0jm_300x300.jpg", what_it_is: "DELL Keyboards", category: "Electronics", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l7 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/01010_buPWGSeLY1wz_0lM0t2_300x300.jpg", what_it_is: "Computer Printer", category: "Electronics", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l8 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/00o0o_5XB9xViZa5Az_0t20t2_300x300.jpg", what_it_is: "i7 9700k 2080Super GPU Excellent Gaming PC", category: "Electronics", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l9 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/00l0l_cc0hbs6Degpz_08u08u_300x300.jpg", what_it_is: " Nintendo 64 Console w/ Two Controllers", category: "Electronics", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l10 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/00C0C_gHxNjOcVrrOz_0t20CI_600x450.jpg", what_it_is: "Wooden Cabinet", category: "Furniture", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: nil, end_time:"2022-07-01T12:00:00")


    l11 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/00B0B_cqaxgOGLl9Kz_09G07g_600x450.jpg", what_it_is: "Free Glass Corner Desk w/ Chair", category: "Furniture", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l12 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/00909_1vzqKGtEOkpz_0t20CI_600x450.jpg", what_it_is: "Zen 3-D puzzle", category: "Games", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l13 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/00E0E_hgPKmrMDk5nz_0t20CI_600x450.jpg", what_it_is: "Livestrong Treadmill", category: "Exercise Equipment", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: u2.id, end_time:"2022-06-03T12:55:00")

    l14 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/00G0G_5bfk2Z45lx2z_05a03Q_600x450.jpg", what_it_is: "Free Dirt", category: "Landscaping", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: u3.id, end_time:"2022-06-03T12:55:00")

    l15 = Listing.create(location: Faker::Address.city, image_url: "https://images.craigslist.org/00R0R_mNVnc0F9Jrz_0t90CI_600x450.jpg", what_it_is: "Wheeled Carry on Travel Bag", category: "Bags", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l16 = Listing.create(location: Faker::Address.city, image_url: "https://assets.specialized.com/i/specialized/96120-41_ROLL-ELITE-LTD-BLK-CMLNGRN-HLGCP_FDSQ?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto", what_it_is: "Buddy Bike", category: "Bikes", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u1.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l17 = Listing.create(location: Faker::Address.city, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGy30oLdBfwHCYUuKS3eH0xFqJie_q0lANg&usqp=CAU", what_it_is: "Swag", category: "Cool Factor", description:Faker::Lorem.paragraph(sentence_count: 30), user_id: u3.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l18 = Listing.create(location: Faker::Address.city, image_url: "https://i.pinimg.com/236x/e3/70/08/e37008af8900b12e02f89847abd0de8a--random-pictures-the-day.jpg", what_it_is: "Bush Monster", category: "Outdoor", description: Faker::Lorem.paragraph, user_id: u3.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l19 = Listing.create(location: Faker::Address.city, image_url: "https://www.awesomeinventions.com/wp-content/uploads/2018/02/feb1518_1.jpg", what_it_is: "Remote", category: "Electronics", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u3.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

    l20 = Listing.create(location: Faker::Address.city, image_url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/lodge-cast-iron-round-skillet-10.25-inch-currently-priced-at-ps34.31-4ad0b4f.jpg?quality=90&fit=700,466", what_it_is: "Grandmas cast iron", category: "Kitchen", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u5.id, winner_id: u5.id, end_time:"2022-06-02T21:52:00")

    l21 = Listing.create(location: Faker::Address.city, image_url: "https://image.invaluable.com/housePhotos/linkauctiongalleries/24/698324/H18786-L249787047.JPG", what_it_is: "Assorted items", category: "Misc", description: Faker::Lorem.paragraph(sentence_count: 30), user_id: u6.id, winner_id: nil, end_time:"2022-07-01T12:00:00")

puts "Done Seeding Listings!"

puts "Seeding Favorites....."
    f1 = Favorite.create(user_id: u1.id, listing_id: l20.id)
    f2 = Favorite.create(user_id: u2.id, listing_id: l13.id)
    f3 = Favorite.create(user_id: u2.id, listing_id: l14.id)
    f4 = Favorite.create(user_id: u4.id, listing_id: l3.id)
    f5 = Favorite.create(user_id: u5.id, listing_id: l4.id)
    
    f6 = Favorite.create(user_id: u1.id, listing_id: l3.id)
    f7 = Favorite.create(user_id: u2.id, listing_id: l10.id)
    f8 = Favorite.create(user_id: u3.id, listing_id: l13.id)
    f9 = Favorite.create(user_id: u4.id, listing_id: l1.id)
    
    f10 = Favorite.create(user_id: u1.id, listing_id: l3.id)
    f11 = Favorite.create(user_id: u2.id, listing_id: l12.id)
    f12 = Favorite.create(user_id: u3.id, listing_id: l2.id)
    f13 = Favorite.create(user_id: u3.id, listing_id: l14.id)
puts "Done Seeding Favorites!"

puts "Seeding Timers....."
    t1= Timer.create(listing_id: l1.id)
    t2= Timer.create(listing_id: l2.id)
    t3= Timer.create(listing_id: l3.id)
    t4= Timer.create(listing_id: l4.id)
    t5= Timer.create(listing_id: l5.id)
    t6= Timer.create(listing_id: l6.id)
    t7= Timer.create(listing_id: l7.id)
    t8= Timer.create(listing_id: l8.id)
    t9= Timer.create(listing_id: l9.id)
    t10= Timer.create(listing_id: l10.id)
    t11= Timer.create(listing_id: l11.id)
    t12= Timer.create(listing_id: l13.id)
puts "Done Seeding Timers!"

