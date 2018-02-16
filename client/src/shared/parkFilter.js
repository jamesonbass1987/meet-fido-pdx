export const parkFilter = (parks, filterParams) => (
    parks.filter(park => (
        park.name.toLowerCase().includes(filterParams.searchQuery.trim().toLowerCase())
    ))
)