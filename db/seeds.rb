# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
    User.create([
        {username: 'xXCharlie420Xx' , password_digest: '123' , age: 19, name: "Charlie"}
    ])

    Listing.create([
        {location: "Craigsville Bay Area", image_url: "https://assets.specialized.com/i/specialized/96120-41_ROLL-ELITE-LTD-BLK-CMLNGRN-HLGCP_FDSQ?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto", what_it_is: "Kush Cycle", category: "Bikes", description: "Flex on all your friends" }
    ])

    Favorite.create([
        {user_id: 1, listing_id: 1}
    ])
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
