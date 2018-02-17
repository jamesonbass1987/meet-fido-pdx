const dogFilter = (dogs, filterParams) => {
    if (filterParams.age || filterParams.size) {
        return dogs.filter(dog => {
            return (dog.age.name === filterParams.age || dog.size.name === filterParams.size)
        })
    } else {
        return dogs;
    }
}

export default dogFilter;