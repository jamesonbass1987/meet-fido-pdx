# AGE DATA
Age.create(name: 'Puppy')
Age.create(name: 'Young')
Age.create(name: 'Adult')
Age.create(name: 'Senior')

# SIZE DATA
Size.create(name: 'Miniature')
Size.create(name: 'Small')
Size.create(name: 'Medium')
Size.create(name: 'Large')
Size.create(name: 'Extra Large')

# BREED DATA
breeds_list = ["Affenpinscher", "Afghan", "Airedale", "Akbash", "Akita", "Alaskan", "American", "Anatolian", "Appenzell", "Australian", "Basenji", "Basset", "Beagle", "Bearded", "Beauceron", "Bedlington", "Belgian", "Bernese", "Bichon", "Black", "Bloodhound", "Blue", "Bluetick", "Boerboel", "Bolognese", "Border", "Borzoi", "Boston", "Bouvier", "Boxer", "Boykin", "Briard", "Brittany", "Brussels", "Bull", "Bullmastiff", "Cairn", "Canaan", "Cane", "Carolina", "Catahoula", "Cattle", "Caucasian", "Cavalier", "Chesapeake", "Chihuahua", "Chinese", "Chinook", "Chocolate", "Chow", "Cirneco", "Clumber", "Cockapoo", "Cocker", "Collie", "Coonhound", "Corgi", "Coton", "Curly-Coated", "Dachshund", "Dalmatian", "Dandi", "Doberman", "Dogo", "Dogue", "Dutch", "English", "Entlebucher", "Eskimo", "Feist", "Field", "Fila", "Finnish", "Flat-Coated", "Fox", "Foxhound", "French", "Galgo", "German", "Giant", "Glen", "Golden", "Gordon", "Great", "Greater", "Greyhound", "Hamiltonstovare", "Harrier", "Havanese", "Hound", "Hovawart", "Husky", "Ibizan", "Icelandic", "Illyrian", "Irish", "Italian", "Jack", "Japanese", "Jindo", "Kai", "Karelian", "Keeshond", "Kerry", "Kishu", "Klee", "Komondor", "Kuvasz", "Kyi", "Labrador", "Lakeland", "Lancashire", "Leonberger", "Lhasa", "Lowchen", "Maltese", "Manchester", "Maremma", "Mastiff", "McNab", "Miniature", "Mixed", "Mountain", "Munsterlander", "Neapolitan", "New", "Newfoundland", "Norfolk", "Norwegian", "Norwich", "Nova", "Old", "Otterhound", "Papillon", "Patterdale", "Pekingese", "Peruvian", "Petit", "Pharaoh", "Pit", "Plott", "Podengo", "Pointer", "Polish", "Pomeranian", "Poodle", "Portuguese", "Presa", "Pug", "Puli", "Pumi", "Rat", "Redbone", "Retriever", "Rhodesian", "Rottweiler", "Rough", "Saint", "Saluki", "Samoyed", "Sarplaninac", "Schipperke", "Schnauzer", "Scottish", "Sealyham", "Setter", "Shar", "Sheep", "Shepherd", "Shetland", "Shiba", "Shih", "Siberian", "Silky", "Skye", "Sloughi", "Smooth", "South", "Spaniel", "Spanish", "Spitz", "Staffordshire", "Standard", "Sussex", "Swedish", "Terrier", "Thai", "Tibetan", "Tosa", "Toy", "Treeing", "Vizsla", "Weimaraner", "Welsh", "West", "Wheaten", "Whippet", "White", "Wire", "Wirehaired", "Xoloitzcuintle", "Yellow", "Yorkshire"]

breeds_list.each do |breed|
    Breed.create(name: breed)
end

# NEIGHBORHOOD DATA
neighborhood_array = ['Alberta', 'Beaumont/Wilshire', 'Downtown Portland', 'Goose Hollow', 'Hawthorne District', 'Hollywood', "John's Landing", "Ladd's Addition", "Laurelhurst", "Lloyd District", "Mississippi Avenue", "Mount Tabor", "Murrayhill", "Northwest", "Orenco Station", "Pearl District", "Riverplace", "Multnomah Village", "Sellwood", "South Waterfront", "St. Johns", "University Park", "Woodstock"]

neighborhood_array.each do |neighborhood|
    Neighborhood.create(name: neighborhood)
end

# PARKS DATA

parksObj = [
    {
        name: 'Brentwood Park',
        description: 'Includes dog off-leash area – fenced paths – paved, picnic tables, playground, soccer field, softball field, tennis court, and volleyball court.',
        address_1: 'SE 60th Avenue',
        address_2: 'Duke',
        fenced: true,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Chimney Park',
        description: "Includes dog off-leash area – fenced.",
        address_1: '9360 N Columbia Blvd',
        fenced: true,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Delta Park',
        description: "Includes dog off-leash area – fenced, football field, paths – paved, picnic tables, playground, soccer field, softball field, synthetic turf, and volleyball court.",
        address_1: 'N Denver Avenue',
        fenced: true,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'The Fields',
        description: 'N/A',
        address_1: 'NW 11th Avenue',
        address_2: 'Overton Street',
        fenced: true,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Gabriel Park',
        description: "Includes accessible picnic area, accessible play area, accessible restroom, baseball field, basketball court, BEECN – basic earthquake emergency communication node, dog off-leash area – fenced, paths – paved, paths – unpaved, picnic site – reservable, picnic tables, playground, skatepark, soccer field, softball field, tennis court, tennis court – lighted, and volleyball court.",
        address_1: 'SW 45th Avenue',
        address_2: 'Vermont Street',
        fenced: true,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Lynchwood Park',
        description: 'Includes dog off-leash area – fenced, and paths – unpaved.',
        address_1: 'SE 170th Avenue',
        address_2: 'Haig Street',
        fenced: true,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Normandale Park',
        description: 'Includes accessible play area, accessible restroom, basketball court, dog off-leash area – fenced, football field, paths – paved, paths – unpaved, picnic shelter, picnic site – reservable, picnic tables, playground, soccer field, softball field, and volleyball court.',
        address_1: 'NE 57th Avenue',
        address_2: 'Halsey Street',
        fenced: true,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Sacajawea Park',
        description: 'Includes dog off-leash area – fenced, and paths – unpaved.',
        address_1: 'NE 75th Avenue',
        address_2: 'Alberta Street',
        fenced: true,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Wallace Park',
        description: 'Includes accessible picnic area, accessible play area, accessible restroom, basketball court, dog off-leash area – fenced, paths – paved, picnic shelter, picnic site – reservable, picnic tables, playground, soccer field, softball field, statue or public art, and tennis court.',
        address_1: 'NW 25th Avenue',
        address_2: 'Raleigh',
        fenced: true,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    # UNFENCED AREAS
    {
        name: 'Arbor Lodge Park',
        description: 'Includes accessible restroom, baseball field, BEECN – basic earthquake emergency communication node, dog off-leash area, horseshoe pit, paths – paved, picnic tables, playground, soccer field, softball field, statue or public art, tennis court, tennis court – lighted, and universal access play area.',
        address_1: 'N Bryant Street',
        address_2: 'Delaware Avenue',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Cathedral Park',
        description: 'Includes accessible restroom, boat dock, boat ramp, canoe launch, dog off-leash area, paths – paved, picnic tables, Plaza, riverfront views, and stage – outdoor.',
        address_1: 'N Edison Street',
        address_2: 'Pittsburg Avenue',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Overlook Park',
        description: 'Includes accessible picnic area, accessible restroom, baseball field, basketball court, dog off-leash area, paths – paved, paths – unpaved, picnic shelter, picnic site – reservable, picnic tables, playground, soccer field, softball field, track, and volleyball court.',
        address_1: 'N Fremont Street',
        address_2: 'Interstate Avenue',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Portland International Raceway',
        description: 'Includes dog off-leash area, raceway, and visitor attraction.',
        address_1: 'N Denver Avenue',
        address_2: 'Victory Blvd',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Alberta Park',
        description: 'Includes accessible play area, accessible restroom, basketball court, BEECN – basic earthquake emergency communication node, dog off-leash area, paths – paved, paths – unpaved, picnic tables, playground, soccer field, softball field, and tennis court.',
        address_1: 'NE 22nd Avenue',
        address_2: 'Killingsworth Street',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Argay Park',
        description: 'Includes accessible play area, basketball court, dog off-leash area, paths – paved, paths – unpaved, picnic tables, playground, soccer field, softball field, tennis backboard, tennis court, and tennis court – lighted.',
        address_1: 'NE 141st Avenue',
        address_2: 'Falling Street',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'East Holladay Park',
        description: 'Includes accessible play area, dog off-leash area, paths – paved, and playground.',
        address_1: 'NE 130th Avenue',
        address_2: 'Wasco Street',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Fernhill Park',
        description: 'Includes baseball field, dog off-leash area, horseshoe pit, paths – paved, picnic tables, playground, soccer field, softball field, tennis court, track, and volleyball court.',
        address_1: 'NE 37th Avenue',
        address_2: 'Ainsworth Street',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Frazer Park',
        description: 'Includes basketball court, dog off-leash area, picnic tables, and playground.',
        address_1: 'NE 52nd Avenue',
        address_2: 'Hassalo Street',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Grant Park',
        description: 'Includes accessible play area, accessible restroom, baseball field, basketball court, dog off-leash area, football field, fountain, paths – paved, paths – unpaved, picnic shelter, picnic site – reservable, picnic tables, playground, soccer field, softball field, splash pad, statue or public art, synthetic turf, tennis court, tennis court – lighted, and track.',
        address_1: 'NE 33rd Avenue',
        address_2: 'U.S. Grant Place',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Irving Park',
        description: 'Includes accessible restroom, baseball field, basketball court, dog off-leash area, Fountain - Interactive, horseshoe pit, paths – paved, picnic site – reservable, picnic tables, playground, soccer field, softball field, tennis backboard, tennis court, tennis court – lighted, and volleyball court.',
        address_1: 'NE 7th Avenue',
        address_2: 'Freemont Street',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Wilshire Park',
        description: 'Includes accessible picnic area, accessible restroom, dog off-leash area, horseshoe pit, paths – paved, paths – unpaved, picnic shelter, picnic site – reservable, picnic tables, playground, soccer field, softball field, and volleyball court.',
        address_1: 'NE 33rd Avenue',
        address_2: 'Skidmore Street',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Couch Park',
        description: 'Includes accessible restroom, basketball court, dog off-leash area, paths – paved, playground, Plaza, and statue or public art.',
        address_1: 'NW 19th Avenue',
        address_2: 'Glisan Street',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Cherry Park',
        description: 'Includes dog off-leash area.',
        address_1: 'NW 19th Avenue',
        address_2: 'Glisan Street',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Creston Park',
        description: 'Includes accessible picnic area, accessible play area, accessible restroom, dog off-leash area, horseshoe pit, paths – paved, picnic site – reservable, picnic tables, playground, softball field, and tennis backboard.',
        address_1: 'SE 110th Avenue',
        address_2: 'Powell Blvd',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Laurelhurst Park',
        description: 'Includes accessible picnic area, accessible play area, accessible restroom, basketball court, dog off-leash area, historical site, horseshoe pit, paths – paved, paths – unpaved, picnic site – reservable, picnic tables, playground, soccer field, statue or public art, tennis backboard, tennis court, and volleyball court.',
        address_1: 'SE 39th Avenue',
        address_2: 'Stark Stret',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Lents Park',
        description: 'Includes accessible picnic area, accessible play area, accessible restroom, baseball field, basketball court, BEECN – basic earthquake emergency communication node, dog off-leash area, football field, horseshoe pit, paths – paved, paths – unpaved, picnic site – reservable, picnic tables, playground, soccer field, softball field, stage – outdoor, synthetic turf, tennis backboard, tennis court, and tennis court – lighted.',
        address_1: 'SE 92nd Avenue',
        address_2: 'Holgate Street',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Mt. Tabor Park',
        description: 'Includes accessible picnic area, accessible play area, accessible restroom, basketball court, dog off-leash area, horseshoe pit, paths – paved, paths – unpaved, picnic shelter, picnic site – reservable, picnic tables, playground, Plaza, stage – outdoor, statue or public art, tennis court, tennis court – lighted, volleyball court, and wedding site – reservable.',
        address_1: 'SE Lincoln Street',
        address_2: 'SE 64th Avenue',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Sellwood Riverfront Park',
        description: 'Includes accessible restroom, boat dock, canoe launch, dog off-leash area, paths – paved, paths – unpaved, picnic tables, and riverfront views.',
        address_1: 'SE Spokane Street',
        address_2: 'Oaks Parkway',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Sewallcrest Park',
        description: 'Includes accessible play area, basketball court, dog off-leash area, paths – paved, picnic tables, playground, soccer field, and softball field.',
        address_1: 'SE 31st Avenue',
        address_2: 'Market Street',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Woodstock Park',
        description: 'Includes accessible play area, accessible restroom, BEECN – basic earthquake emergency communication node, dog off-leash area, horseshoe pit, paths – paved, picnic site – reservable, picnic tables, playground, soccer field, softball field, statue or public art, and tennis court.',
        address_1: 'SE 47th Avenue',
        address_2: 'Steele Street',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Council Crest Park',
        description: 'Includes dog off-leash area, paths – paved, paths – unpaved, picnic tables, Plaza, statue or public art, vista point, and wedding site – reservable.',
        address_1: 'SW Council Crest Drive',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Hillsdale Park',
        description: ' Includes dog off-leash area, and picnic tables.',
        address_1: 'SW 27th Avenue',
        address_2: 'Hillsdale Highway',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    },
    {
        name: 'Wilamette Park',
        description: 'Includes accessible picnic area, accessible restroom, boat dock, boat ramp, canoe launch, dog off-leash area, paths – paved, paths – unpaved, picnic shelter, picnic site – reservable, picnic tables, playground, riverfront views, soccer field, tennis court, and tennis court – lighted.',
        address_1: 'SW Macadam Avenue',
        address_2: 'Nebraska Street',
        fenced: false,
        hours_open: Time.new(1, 1, 1, 5),
        hours_close: Time.new(1, 1, 1, 24)
    }
]

parksObj.each do |park|
    Park.create(name: park[:name], description: park[:description], address_1: park[:address_1], address_2: park[:address_2], fenced: park[:fenced], hours_open: park[:hours_open], hours_close: park[:hours_close])
end

# USER DATA

neighborhood = Neighborhood.find_by(name: 'St. Johns')
user_1 = User.create(username: 'testuser', email:'test@email.com', password: 'password', neighborhood: neighborhood)

park = Park.find_by(name: 'Chimney Park')
breed = Breed.find_by(name: 'Labrador')
size = Size.find_by(name: 'Large')
age = Age.find_by(name: 'Young')

dog_1 = Dog.create(name: 'Rex', breed: breed, size: size, age: age, sex: 'Male', user: user_1, neighborhood: neighborhood, preferred_park: park, description: 'Fun energetic dog who loves to play!')


neighborhood_2 = Neighborhood.find_by(name: 'Alberta')
user_2 = User.create(username: 'testuser_2', password: 'password', email: 'test2@email.com', neighborhood: neighborhood)

park_2 = Park.find_by(name: 'Alberta Park')
breed_2 = Breed.find_by(name: 'Terrier')
size_2 = Size.find_by(name: 'Medium')
age_2 = Age.find_by(name: 'Adult')

dog_2 = Dog.create(name: 'Ella', breed: breed_2, size: size_2, age: age_2, sex: 'Female', user: user_2, neighborhood: neighborhood_2, preferred_park: park_2, description: 'Mellow dog who is a big people person but loves to play!')