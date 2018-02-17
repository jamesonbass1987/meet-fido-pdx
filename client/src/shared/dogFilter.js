export const dogFilter = (dogs, filterParams) => {
    if (filterParams.fencedPark || filterParams.unfencedPark) {
        return dogs
    } else {
        return []
    }
}
