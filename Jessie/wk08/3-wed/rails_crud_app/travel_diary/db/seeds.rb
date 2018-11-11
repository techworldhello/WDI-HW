# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.destroy_all

city = City.create(city: 'Paris', description: 'loved it', has_been: true)
city2 = City.create(city: 'New York', description: 'yayy', has_been: true)
city3 = City.create(city: 'Istanbul', description: 'looking into flights', has_been: false)
city4 = City.create(city: 'Beijing', description: 'cultural', has_been: true)
city5 = City.create(city: 'Edinburgh', description: 'nice architecture', has_been: false)

comment = Comment.create(city_id: city.id, body: 'nice')
comment2 = Comment.create(city_id: city.id, body: 'cool')
comment3 = Comment.create(city_id: city2.id, body: 'test')
comment4 = Comment.create(city_id: city4.id, body: 'I wanna go too')

image = Image.create(city_id: city.id, url: 'https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/eiffel-tower-paris-p.jpg?imwidth=480')
image2 = Image.create(city_id: city.id, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8_H7xQ4ou6yPKj_qZsevokI8MY3DdtQY_lG0Gn4-cR-EVhPj')
image3 = Image.create(city_id: city.id, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzHe5ZsHamx0nBwdX8bqlei9qFGTBpc-C6t7qJRXOqfd4r2G3')
image4 = Image.create(city_id: city.id, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmTVbSQ6yFzAoWAA2Cgv84biDKTL7EoWvn-6cwbic1ARTMl3Ww')
image5 = Image.create(city_id: city2.id, url: 'https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?auto=compress&cs=tinysrgb&h=350')
image6 = Image.create(city_id: city2.id, url: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg')
image7 = Image.create(city_id: city2.id, url: 'https://thenypost.files.wordpress.com/2017/04/new-york.jpg?quality=90&strip=all&w=618&h=410&crop=1')
image8 = Image.create(city_id: city4.id, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnX48TFicrmJaXPsmP52cqf-HKYKHzCZWv7SEoEnZGmP97Qqnz')
image9 = Image.create(city_id: city4.id, url: 'https://media.gettyimages.com/photos/beijing-central-business-district-picture-id567584171?s=612x612')
image10 = Image.create(city_id: city4.id, url: 'https://media.virtuoso.com/m/cms/VCom/Destination/regions/asia/China/Beijing/h490/Beijing-Pagoda.jpg')
