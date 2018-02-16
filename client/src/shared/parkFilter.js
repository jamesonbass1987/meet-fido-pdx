export const parkFilter = (parks, filterParams) => {
    if (filterParams.fencedPark || filterParams.unfencedPark) {
        return parks.filter(park => (
            park.name.toLowerCase().includes(filterParams.searchQuery.trim().toLowerCase()) &&
            (park.fenced === filterParams.fencedPark || !park.fenced === filterParams.unfencedPark)
        ))
    } else {
        return []
    }
}
