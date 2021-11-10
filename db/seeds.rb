# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create :name => 'Napoleon Ochoa', :email => 'napoleonsochoa', :password => 'District81', :password_confirmation => 'District81'

# let Apartments = [
#     {
#       id: 1,
#       name: "Desert Hearts", 
#       street: 33,
#       city: "Black Rock City",
#       state: "Nevada",
#       manager: "",
#       price: 750,
#       bedrooms: 3,
#       bathrooms: 2,
#       pets: "yes",
#       user_id:872222

#     },
#     {
#       id: 2,
#       name: "Pink Mammoth",
#       street: 25,
#       city: "Black Rock City",
#       state: "Nevada",
#       manager: "",
#       price: 750,
#       bedrooms: 3,
#       bathrooms: 2,
#       pets: "no",
#       user_id:870333
#     },
#     {
#       id: 3,
#       name: "Robot Heart",
#       street: 16,
#       city: "Black Rock City",
#       state: "Nevada",
#       manager: "",
#       price: 750,
#       bedrooms: 3,
#       bathrooms: 2,
#       pets: "no",
#       user_id:936867
#     },
#     {
#       id: 4,
#       name: "Mayan Warrior",
#       street: 3,
#       city: "Nevada",
#       state: "Black Rock City",
#       manager: "",
#       price: 750,
#       bedrooms: 3,
#       bathrooms: 2,
#       pets: "no",
#       user_id:563498
#     },
#     {
#       id: 5,
#       name: "Hello, We Love You",
#       street: 22,
#       city: "Black Rock City",
#       state: "Nevada",
#       manager: "",
#       price: 750,
#       bedrooms: 3,
#       bathrooms: 2,
#       pets: "no",
#       user_id:740896
#     },
#     {
#       id: 6,
#       name: "Kazbah",
#       street: 3,
#       city: "Black Rock City",
#       state: "Nevada",
#       manager: "",
#       price: 750,
#       bedrooms: 3,
#       bathrooms: 2,
#       pets: "yes",
#       user_id:848037
#     },
#     {
#       id: 7,
#       name: "Question Mark",
#       street: 12,
#       city: "Black Rock City",
#       state: "",
#       manager: "Nevada",
#       price: 750,
#       bedrooms: 3,
#       bathrooms: 2,
#       pets: "no",
#       user_id:870987
#     },
#     {
#       id: 8,
#       name: "White Ocean", 
#       street: 44,
#       city: "Black Rock City",
#       state: "Nevada",
#       manager: "",
#       price: 750,
#       bedrooms: 3,
#       bathrooms: 3,
#       pets: "yes",
#       user_id:786739
#     }
    
# ]
# apartments.each do |attributes|
#     Apartment.create attributes
#     puts "creating apartment #{attributes}"
#   end