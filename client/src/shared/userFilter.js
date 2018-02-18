const _ = require('lodash')

export const userFilter = (users, filterParams) => {
    let filterUsersArray = [...users]

    if(filterParams.searchQuery){
        filterUsersArray = filterUsersArray.filter(user => {
            return user.username.includes(filterParams.searchQuery.trim().toLowerCase())
        })
    }

    if (filterParams.selectedPark){
        filterUsersArray = filterUsersArray.filter(user => {
            return user.parks.some(park => park.name === filterParams.selectedPark)
        })
    }

    return filterUsersArray
}
