# # # AGE DATA
# # Age.create(name: 'Puppy')
# # Age.create(name: 'Young')
# # Age.create(name: 'Adult')
# # Age.create(name: 'Senior')

# # # SIZE DATA
# # Size.create(name: 'Miniature')
# # Size.create(name: 'Small')
# # Size.create(name: 'Medium')
# # Size.create(name: 'Large')
# # Size.create(name: 'Extra Large')

# # # BREED DATA
# # breeds_list = ["Affenpinscher", "Afghan", "Airedale", "Akbash", "Akita", "Alaskan", "American", "Anatolian", "Appenzell", "Australian", "Basenji", "Basset", "Beagle", "Bearded", "Beauceron", "Bedlington", "Belgian", "Bernese", "Bichon", "Black", "Bloodhound", "Blue", "Bluetick", "Boerboel", "Bolognese", "Border", "Borzoi", "Boston", "Bouvier", "Boxer", "Boykin", "Briard", "Brittany", "Brussels", "Bull", "Bullmastiff", "Cairn", "Canaan", "Cane", "Carolina", "Catahoula", "Cattle", "Caucasian", "Cavalier", "Chesapeake", "Chihuahua", "Chinese", "Chinook", "Chocolate", "Chow", "Cirneco", "Clumber", "Cockapoo", "Cocker", "Collie", "Coonhound", "Corgi", "Coton", "Curly-Coated", "Dachshund", "Dalmatian", "Dandi", "Doberman", "Dogo", "Dogue", "Dutch", "English", "Entlebucher", "Eskimo", "Feist", "Field", "Fila", "Finnish", "Flat-Coated", "Fox", "Foxhound", "French", "Galgo", "German", "Giant", "Glen", "Golden", "Gordon", "Great", "Greater", "Greyhound", "Hamiltonstovare", "Harrier", "Havanese", "Hound", "Hovawart", "Husky", "Ibizan", "Icelandic", "Illyrian", "Irish", "Italian", "Jack", "Japanese", "Jindo", "Kai", "Karelian", "Keeshond", "Kerry", "Kishu", "Klee", "Komondor", "Kuvasz", "Kyi", "Labrador", "Lakeland", "Lancashire", "Leonberger", "Lhasa", "Lowchen", "Maltese", "Manchester", "Maremma", "Mastiff", "McNab", "Miniature", "Mixed", "Mountain", "Munsterlander", "Neapolitan", "New", "Newfoundland", "Norfolk", "Norwegian", "Norwich", "Nova", "Old", "Otterhound", "Papillon", "Patterdale", "Pekingese", "Peruvian", "Petit", "Pharaoh", "Pit", "Plott", "Podengo", "Pointer", "Polish", "Pomeranian", "Poodle", "Portuguese", "Presa", "Pug", "Puli", "Pumi", "Rat", "Redbone", "Retriever", "Rhodesian", "Rottweiler", "Rough", "Saint", "Saluki", "Samoyed", "Sarplaninac", "Schipperke", "Schnauzer", "Scottish", "Sealyham", "Setter", "Shar", "Sheep", "Shepherd", "Shetland", "Shiba", "Shih", "Siberian", "Silky", "Skye", "Sloughi", "Smooth", "South", "Spaniel", "Spanish", "Spitz", "Staffordshire", "Standard", "Sussex", "Swedish", "Terrier", "Thai", "Tibetan", "Tosa", "Toy", "Treeing", "Vizsla", "Weimaraner", "Welsh", "West", "Wheaten", "Whippet", "White", "Wire", "Wirehaired", "Xoloitzcuintle", "Yellow", "Yorkshire"]

# # breeds_list.each do |breed|
# #     Breed.create(name: breed)
# # end

# # # NEIGHBORHOOD DATA
# # neighborhood_array = ['Alberta', 'Beaumont/Wilshire', 'Downtown Portland', 'Goose Hollow', 'Hawthorne District', 'Hollywood', "John's Landing", "Ladd's Addition", "Laurelhurst", "Lloyd District", "Mississippi Avenue", "Mount Tabor", "Murrayhill", "Northwest", "Orenco Station", "Pearl District", "Riverplace", "Multnomah Village", "Sellwood", "South Waterfront", "St. Johns", "University Park", "Woodstock"]

# # neighborhood_array.each do |neighborhood|
# #     Neighborhood.create(name: neighborhood)
# # end

# # PARKS DATA

# parksObj = [
#     {
#         name: 'Brentwood Park',
#         description: 'Includes dog off-leash area – fenced paths – paved, picnic tables, playground, soccer field, softball field, tennis court, and volleyball court.',
#         address_1: 'SE 60th Avenue',
#         address_2: 'Duke',
#         fenced: true,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.474847,
#         loc_longitude: -122.606113,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=706'
#     },
#     {
#         name: 'Chimney Park',
#         description: "Includes dog off-leash area – fenced.",
#         address_1: '9360 N Columbia Blvd',
#         fenced: true,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.607636,
#         loc_longitude: -122.759246,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=71'
#     },
#     {
#         name: 'Delta Park',
#         description: "Includes dog off-leash area – fenced, football field, paths – paved, picnic tables, playground, soccer field, softball field, synthetic turf, and volleyball court.",
#         address_1: 'N Denver Avenue',
#         fenced: true,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude:  45.598901,
#         loc_longitude: -122.680928,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=196'
#     },
#     {
#         name: 'The Fields Park',
#         description: 'Includes accessible picnic area, accessible play area, accessible restroom, BEECN – basic earthquake emergency communication node, dog off-leash area – fenced, paths – paved, picnic tables, playground, and statue or public art.',
#         address_1: 'NW 11th Avenue',
#         address_2: 'Overton Street',
#         fenced: true,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.532826,
#         loc_longitude: -122.682495,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=844'
#     },
#     {
#         name: 'Gabriel Park',
#         description: "Includes accessible picnic area, accessible play area, accessible restroom, baseball field, basketball court, BEECN – basic earthquake emergency communication node, dog off-leash area – fenced, paths – paved, paths – unpaved, picnic site – reservable, picnic tables, playground, skatepark, soccer field, softball field, tennis court, tennis court – lighted, and volleyball court.",
#         address_1: 'SW 45th Avenue',
#         address_2: 'Vermont Street',
#         fenced: true,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude:  45.474297,
#         loc_longitude: -122.719109,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=203'
#     },
#     {
#         name: 'Lynchwood Park',
#         description: 'Includes dog off-leash area – fenced, and paths – unpaved.',
#         address_1: 'SE 170th Avenue',
#         address_2: 'Haig Street',
#         fenced: true,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.497999,
#         loc_longitude: -122.485928,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=234'
#     },
#     {
#         name: 'Normandale Park',
#         description: 'Includes accessible play area, accessible restroom, basketball court, dog off-leash area – fenced, football field, paths – paved, paths – unpaved, picnic shelter, picnic site – reservable, picnic tables, playground, soccer field, softball field, and volleyball court.',
#         address_1: 'NE 57th Avenue',
#         address_2: 'Halsey Street',
#         fenced: true,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.532056,
#         loc_longitude: -122.606141,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=126'
#     },
#     {
#         name: 'Sacajawea Park',
#         description: 'Includes dog off-leash area – fenced, and paths – unpaved.',
#         address_1: 'NE 75th Avenue',
#         address_2: 'Alberta Street',
#         fenced: true,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.559474,
#         loc_longitude: -122.585858,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=140'
#     },
#     {
#         name: 'Wallace Park',
#         description: 'Includes accessible picnic area, accessible play area, accessible restroom, basketball court, dog off-leash area – fenced, paths – paved, picnic shelter, picnic site – reservable, picnic tables, playground, soccer field, softball field, statue or public art, and tennis court.',
#         address_1: 'NW 25th Avenue',
#         address_2: 'Raleigh',
#         fenced: true,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.533308,
#         loc_longitude: -122.703689,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=158'
#     },
#     # UNFENCED AREAS
#     {
#         name: 'Arbor Lodge Park',
#         description: 'Includes accessible restroom, baseball field, BEECN – basic earthquake emergency communication node, dog off-leash area, horseshoe pit, paths – paved, picnic tables, playground, soccer field, softball field, statue or public art, tennis court, tennis court – lighted, and universal access play area.',
#         address_1: 'N Bryant Street',
#         address_2: 'Delaware Avenue',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.572801,
#         loc_longitude: -122.693768,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=876'
#     },
#     {
#         name: 'Cathedral Park',
#         description: 'Includes accessible restroom, boat dock, boat ramp, canoe launch, dog off-leash area, paths – paved, picnic tables, Plaza, riverfront views, and stage – outdoor.',
#         address_1: 'N Edison Street',
#         address_2: 'Pittsburg Avenue',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.58749,
#         loc_longitude: -122.762478 ,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=69'
#     },
#     {
#         name: 'Overlook Park',
#         description: 'Includes accessible picnic area, accessible restroom, baseball field, basketball court, dog off-leash area, paths – paved, paths – unpaved, picnic shelter, picnic site – reservable, picnic tables, playground, soccer field, softball field, track, and volleyball court.',
#         address_1: 'N Fremont Street',
#         address_2: 'Interstate Avenue',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.548522,
#         loc_longitude: -122.682562,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=250'
#     },
#     {
#         name: 'Portland International Raceway',
#         description: 'Includes dog off-leash area, raceway, and visitor attraction.',
#         address_1: 'N Denver Avenue',
#         address_2: 'Victory Blvd',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.593085,
#         loc_longitude: -122.688131,
#         image_url: ''
#     },
#     {
#         name: 'Alberta Park',
#         description: 'Includes accessible play area, accessible restroom, basketball court, BEECN – basic earthquake emergency communication node, dog off-leash area, paths – paved, paths – unpaved, picnic tables, playground, soccer field, softball field, and tennis court.',
#         address_1: 'NE 22nd Avenue',
#         address_2: 'Killingsworth Street',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.564475,
#         loc_longitude: -122.645104,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=676'
#     },
#     {
#         name: 'East Holladay Park',
#         description: 'Includes accessible play area, dog off-leash area, paths – paved, and playground.',
#         address_1: 'NE 130th Avenue',
#         address_2: 'Wasco Street',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.53071,
#         loc_longitude: -122.529188,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=258'
#     },
#     {
#         name: 'Fernhill Park',
#         description: 'Includes baseball field, dog off-leash area, horseshoe pit, paths – paved, picnic tables, playground, soccer field, softball field, tennis court, track, and volleyball court.',
#         address_1: 'NE 37th Avenue',
#         address_2: 'Ainsworth Street',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude:  45.566154,
#         loc_longitude: -122.623416,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=90'
#     },
#     {
#         name: 'Frazer Park',
#         description: 'Includes basketball court, dog off-leash area, picnic tables, and playground.',
#         address_1: 'NE 52nd Avenue',
#         address_2: 'Hassalo Street',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.53051,
#         loc_longitude: -122.610657,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=95'
#     },
#     {
#         name: 'Grant Park',
#         description: 'Includes accessible play area, accessible restroom, baseball field, basketball court, dog off-leash area, football field, fountain, paths – paved, paths – unpaved, picnic shelter, picnic site – reservable, picnic tables, playground, soccer field, softball field, splash pad, statue or public art, synthetic turf, tennis court, tennis court – lighted, and track.',
#         address_1: 'NE 33rd Avenue',
#         address_2: 'U.S. Grant Place',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.539047,
#         loc_longitude: -122.628984,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=214'
#     },
#     {
#         name: 'Irving Park',
#         description: 'Includes accessible restroom, baseball field, basketball court, dog off-leash area, Fountain - Interactive, horseshoe pit, paths – paved, picnic site – reservable, picnic tables, playground, soccer field, softball field, tennis backboard, tennis court, tennis court – lighted, and volleyball court.',
#         address_1: 'NE 7th Avenue',
#         address_2: 'Freemont Street',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.548266,
#         loc_longitude: -122.658617,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=100'
#     },
#     {
#         name: 'Wilshire Park',
#         description: 'Includes accessible picnic area, accessible restroom, dog off-leash area, horseshoe pit, paths – paved, paths – unpaved, picnic shelter, picnic site – reservable, picnic tables, playground, soccer field, softball field, and volleyball court.',
#         address_1: 'NE 33rd Avenue',
#         address_2: 'Skidmore Street',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.552839,
#         loc_longitude: -122.627935,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=289'
#     },
#     {
#         name: 'Couch Park',
#         description: 'Includes accessible restroom, basketball court, dog off-leash area, paths – paved, playground, Plaza, and statue or public art.',
#         address_1: 'NW 19th Avenue',
#         address_2: 'Glisan Street',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 36.106935,
#         loc_longitude: -97.045139,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=76'
#     },
#     {
#         name: 'Cherry Park',
#         description: 'Includes dog off-leash area.',
#         address_1: 'SE 110th Avenue',
#         address_2: 'Stephens Street',
#         fenced: false,
#         hours_open: "5:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 33.838764,
#         loc_longitude: -118.168021,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=184'
#     },
#     {
#         name: 'Creston Park',
#         description: 'Includes accessible picnic area, accessible play area, accessible restroom, dog off-leash area, horseshoe pit, paths – paved, picnic site – reservable, picnic tables, playground, softball field, and tennis backboard.',
#         address_1: 'SE 110th Avenue',
#         address_2: 'Powell Blvd',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.496132,
#         loc_longitude: -122.618089,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=816'
#     },
#     {
#         name: 'Laurelhurst Park',
#         description: 'Includes accessible picnic area, accessible play area, accessible restroom, basketball court, dog off-leash area, historical site, horseshoe pit, paths – paved, paths – unpaved, picnic site – reservable, picnic tables, playground, soccer field, statue or public art, tennis backboard, tennis court, and volleyball court.',
#         address_1: 'SE 39th Avenue',
#         address_2: 'Stark Stret',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.521176,
#         loc_longitude: -122.627141,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=115'
#     },
#     {
#         name: 'Lents Park',
#         description: 'Includes accessible picnic area, accessible play area, accessible restroom, baseball field, basketball court, BEECN – basic earthquake emergency communication node, dog off-leash area, football field, horseshoe pit, paths – paved, paths – unpaved, picnic site – reservable, picnic tables, playground, soccer field, softball field, stage – outdoor, synthetic turf, tennis backboard, tennis court, and tennis court – lighted.',
#         address_1: 'SE 92nd Avenue',
#         address_2: 'Holgate Street',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.48729,
#         loc_longitude: -122.570407,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=893'
#     },
#     {
#         name: 'Mt. Tabor Park',
#         description: 'Includes accessible picnic area, accessible play area, accessible restroom, basketball court, dog off-leash area, horseshoe pit, paths – paved, paths – unpaved, picnic shelter, picnic site – reservable, picnic tables, playground, Plaza, stage – outdoor, statue or public art, tennis court, tennis court – lighted, volleyball court, and wedding site – reservable.',
#         address_1: 'SE Lincoln Street',
#         address_2: 'SE 64th Avenue',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.514005,
#         loc_longitude: -122.597686,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=31'
#     },
#     {
#         name: 'Sellwood Riverfront Park',
#         description: 'Includes accessible restroom, boat dock, canoe launch, dog off-leash area, paths – paved, paths – unpaved, picnic tables, and riverfront views.',
#         address_1: 'SE Spokane Street',
#         address_2: 'Oaks Parkway',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.465045,
#         loc_longitude: -122.661905,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=267'
#     },
#     {
#         name: 'Sewallcrest Park',
#         description: 'Includes accessible play area, basketball court, dog off-leash area, paths – paved, picnic tables, playground, soccer field, and softball field.',
#         address_1: 'SE 31st Avenue',
#         address_2: 'Market Street',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.509742,
#         loc_longitude: -122.633058,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=268'
#     },
#     {
#         name: 'Woodstock Park',
#         description: 'Includes accessible play area, accessible restroom, BEECN – basic earthquake emergency communication node, dog off-leash area, horseshoe pit, paths – paved, picnic site – reservable, picnic tables, playground, soccer field, softball field, statue or public art, and tennis court.',
#         address_1: 'SE 47th Avenue',
#         address_2: 'Steele Street',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.483602,
#         loc_longitude: -122.612516,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=292'
#     },
#     {
#         name: 'Council Crest Park',
#         description: 'Includes dog off-leash area, paths – paved, paths – unpaved, picnic tables, Plaza, statue or public art, vista point, and wedding site – reservable.',
#         address_1: 'SW Council Crest Drive',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.498619,
#         loc_longitude: -122.707909,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=80'
#     },
#     {
#         name: 'Hillsdale Park',
#         description: ' Includes dog off-leash area, and picnic tables.',
#         address_1: 'SW 27th Avenue',
#         address_2: 'Hillsdale Highway',
#         fenced: false,
#         hours_open: "8:00 A.M.",
#         hours_close: "Midnight",
#         loc_latitude: 45.498619,
#         loc_longitude: -122.707909,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=799'
#     },
#     {
#         name: 'Wilamette Park',
#         description: 'Includes accessible picnic area, accessible restroom, boat dock, boat ramp, canoe launch, dog off-leash area, paths – paved, paths – unpaved, picnic shelter, picnic site – reservable, picnic tables, playground, riverfront views, soccer field, tennis court, and tennis court – lighted.',
#         address_1: 'SW Macadam Avenue',
#         address_2: 'Nebraska Street',
#         fenced: false,
#         hours_open: 8,
#         hours_close: "Midnight",
#         loc_latitude: 45.477469,
#         loc_longitude: -122.67085,
#         image_url: 'https://www.portlandoregon.gov/parks/finder/index.cfm?action=ViewFile&PolPhotosID=287'
#     }
# ]

# parksObj.each do |park|
#     Park.create(name: park[:name], description: park[:description], address_1: park[:address_1], address_2: park[:address_2], fenced: park[:fenced], hours_open: park[:hours_open], hours_close: park[:hours_close], loc_latitude: park[:loc_latitude], loc_longitude: park[:loc_longitude], image_url: park[:image_url])
# end

# # USER DATA

# neighborhood = Neighborhood.find_by(name: 'St. Johns')
# user_1 = User.create(username: 'jamesonbass', email:'jameson@email.com', password: 'password', profile_image_url: '' neighborhood: neighborhood)

# park = Park.find_by(name: 'Chimney Park')
# breed = Breed.find_by(name: 'Labrador')
# size = Size.find_by(name: 'Large')
# age = Age.find_by(name: 'Young')

# dog_1 = Dog.create(name: 'Ella', breed: breed, size: size, age: age, sex: 'Male', user: user_1, neighborhood: neighborhood, preferred_park: park, description: 'Fun energetic dog who loves to play!')


# neighborhood_2 = Neighborhood.find_by(name: 'Alberta')
# user_2 = User.create(username: 'testuser_2', password: 'password', email: 'test2@email.com', neighborhood: neighborhood)

# park_2 = Park.find_by(name: 'Alberta Park')
# breed_2 = Breed.find_by(name: 'Terrier')
# size_2 = Size.find_by(name: 'Medium')
# age_2 = Age.find_by(name: 'Adult')

# dog_2 = Dog.create(name: 'Ella', breed: breed_2, size: size_2, age: age_2, sex: 'Female', user: user_2, neighborhood: neighborhood_2, preferred_park: park_2, description: 'Mellow dog who is a big people person but loves to play!')


Dog.create(
name: Faker::Dog.name, 
breed: Breed.all[rand(0...Breed.all.length)], 
size: Size.all[rand(0...Size.all.length)],
age: Age.all[rand(0...Age.all.length)],
sex: Faker::Dog.gender,
user: User.all[rand(0...User.all.length)],
profile_image_url: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40791869/1/?bust=1517096291',
description: 'Smol heckin good boys and girls long bois doggo, I am bekom fat tungg. Waggy wags wow very biscit big ol pupper wow such tempt snoot clouds, shoober ruff many pats what a nice floof.'
)

Dog.create(
name: Faker::Dog.name, 
breed: Breed.all[rand(0...Breed.all.length)], 
size: Size.all[rand(0...Size.all.length)],
age: Age.all[rand(0...Age.all.length)],
sex: Faker::Dog.gender,
user: User.all[rand(0...User.all.length)],
profile_image_url: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40798769/1/?bust=1517176288',
description: 'Bork doggo extremely cuuuuuute, blep. Noodle horse heck corgo you are doing me a frighten, doge.'
)

Dog.create(
name: Faker::Dog.name, 
breed: Breed.all[rand(0...Breed.all.length)], 
size: Size.all[rand(0...Size.all.length)],
age: Age.all[rand(0...Age.all.length)],
sex: Faker::Dog.gender,
user: User.all[rand(0...User.all.length)],
profile_image_url: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40007320/5/?bust=1511741779',
description: 'Doggorino long water shoob borking doggo, very jealous pupper. Stop it fren noodle horse most angery pupper I have ever seen you are doing me a frighten much ruin diet.'
)

Dog.create(
name: Faker::Dog.name, 
breed: Breed.all[rand(0...Breed.all.length)], 
size: Size.all[rand(0...Size.all.length)],
age: Age.all[rand(0...Age.all.length)],
sex: Faker::Dog.gender,
user: User.all[rand(0...User.all.length)],
profile_image_url: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39260983/1/?bust=1504136012',
description: 'Woofer wow such tempt heckin good boys stop it fren ur givin me a spook doge, woofer vvv thicc puggorino. I am bekom fat ur givin me a spook he made many woofs very taste wow, mlem.'
)

Dog.create(
name: Faker::Dog.name, 
breed: Breed.all[rand(0...Breed.all.length)], 
size: Size.all[rand(0...Size.all.length)],
age: Age.all[rand(0...Age.all.length)],
sex: Faker::Dog.gender,
user: User.all[rand(0...User.all.length)],
profile_image_url: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40970902/1/?bust=1518811120',
description: 'Doggorino puggo long bois such treat smol very jealous pupper stop it fren doge, heckin angery woofer woofer h*ck shoob blep boof. '
)

Dog.create(
name: Faker::Dog.name, 
breed: Breed.all[rand(0...Breed.all.length)], 
size: Size.all[rand(0...Size.all.length)],
age: Age.all[rand(0...Age.all.length)],
sex: Faker::Dog.gender,
user: User.all[rand(0...User.all.length)],
profile_image_url: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39933945/1/?bust=1510878719',
description: 'Dat tungg tho adorable doggo noodle horse long water shoob, shibe doggo snoot, shibe you are doing me the shock. Mlem borkdrive very hand that feed shibe long doggo.'
)


Dog.create(
name: Faker::Dog.name, 
breed: Breed.all[rand(0...Breed.all.length)], 
size: Size.all[rand(0...Size.all.length)],
age: Age.all[rand(0...Age.all.length)],
sex: Faker::Dog.gender,
user: User.all[rand(0...User.all.length)],
profile_image_url: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40985611/1/?bust=1518988036',
description: 'Corgo he made many woofs you are doing me the shock doing me a frighten pupperino many pats mlem, borking doggo smol borking doggo with a long snoot for pats puggo fat boi such treat.'
)


Dog.create(
name: Faker::Dog.name, 
breed: Breed.all[rand(0...Breed.all.length)], 
size: Size.all[rand(0...Size.all.length)],
age: Age.all[rand(0...Age.all.length)],
sex: Faker::Dog.gender,
profile_image_url: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40981974/1/?bust=1518936963',
description: 'Pats heckin angery woofer heck bork h*ck snoot, bork you are doing me a frighten the neighborhood pupper adorable doggo. '
)



User.create(username: 'jamesonbass', email:'jameson@email.com', password: 'password', profile_image_url: 'https://i.imgur.com/gsUiwCM.jpg', neighborhood: Neighborhood.all[rand(0...Neighborhood.all.length)],
bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut odio consequat dolor blandit congue. Pellentesque sit amet posuere nibh. Nunc dapibus mauris felis, sit amet luctus velit maximus nec.")

User.create(username: 'janesmith', email:'test@email.com', password: 'password', profile_image_url: 'https://i.imgur.com/3nUcu7Th.jpg', neighborhood: Neighborhood.all[rand(0...Neighborhood.all.length)],
bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, ex consectetur dignissim suscipit, tellus est viverra ex, eu ultricies enim felis non diam. In gravida egestas erat, sit amet ornare urna faucibus quis.")

User.create(username: 'michaelsamson', email:'test@email.com', password: 'password', profile_image_url: 'https://i.imgur.com/sptGH2xh.jpg', neighborhood: Neighborhood.all[rand(0...Neighborhood.all.length)],
bio: "Vestibulum aliquet, ligula molestie dapibus fermentum, odio diam iaculis dolor, a bibendum ex velit vitae enim. Morbi convallis dolor et iaculis mollis. Maecenas vitae tristique velit.")

User.create(username: 'sarahjane', email:'test@email.com', password: 'password', profile_image_url: 'https://i.imgur.com/wIqwaW4h.jpg', neighborhood: Neighborhood.all[rand(0...Neighborhood.all.length)],
bio: "Nulla turpis nunc, sodales vitae sem et, congue bibendum diam. Curabitur lacus mi, ultrices eu scelerisque ac, volutpat vitae magna. Morbi euismod sodales ligula, nec mattis tortor. Morbi neque tellus, commodo sed dictum sed, malesuada ac neque.")

User.create(username: 'peterjohnson', email:'test@email.com', password: 'password', profile_image_url: 'https://i.imgur.com/5mMdJMDh.jpg', neighborhood: Neighborhood.all[rand(0...Neighborhood.all.length)],
bio: "Aenean accumsan imperdiet erat et sagittis. Quisque at tellus quis lectus venenatis molestie. In vestibulum pretium pellentesque. Morbi interdum, tellus eu pellentesque condimentum, enim arcu tempus nunc, quis varius orci quam hendrerit nibh.")

User.create(username: 'stephaniepeters', email:'test@email.com', password: 'password', profile_image_url: 'https://i.imgur.com/dcYuS7Eh.jpg', neighborhood: Neighborhood.all[rand(0...Neighborhood.all.length)],
bio: "Phasellus est odio, feugiat eu mi in, luctus molestie orci. In laoreet, nibh nec scelerisque maximus, diam tellus iaculis lacus, at ornare ligula lorem non nunc. Cras luctus libero neque, condimentum congue ante rutrum eget.")

user = User.all[rand(0...User.all.length)].parks << Park.all[rand(0...Park.all.length)]
user.save

