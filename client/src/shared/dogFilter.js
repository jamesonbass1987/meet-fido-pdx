const dogFilter = (dogs, filterParams) => {
    let filterDogsArray = [...dogs]

    if (filterParams.age){
        filterDogsArray = filterDogsArray.filter(dog => (dog.age.name === filterParams.age))
    }

    if (filterParams.size) {
        filterDogsArray = filterDogsArray.filter(dog => (dog.size.name === filterParams.size))
    }

    if (filterParams.breed) {
        filterDogsArray = filterDogsArray.filter(dog => (dog.breed.name === filterParams.breed))
    }

    return filterDogsArray;
}

export default dogFilter;