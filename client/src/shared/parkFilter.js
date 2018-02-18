export const parkFilter = (parks, filterParams) => {
    let filterParksArray = [...parks]

    if (filterParams.fencedPark || filterParams.unfencedPark) {
        return filterParksArray.filter(park => (
            park.name.toLowerCase().includes(filterParams.searchQuery.trim().toLowerCase()) &&
            (park.fenced === filterParams.fencedPark || !park.fenced === filterParams.unfencedPark)
        ))
    } else {
        return filterParksArray;
    }
}
