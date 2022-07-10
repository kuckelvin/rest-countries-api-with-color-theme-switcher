const countryReducer = (state, action) => {
    switch(action.type) {
        case "GET_RESULTS":
            return {
                ...state,
                results: action.payload,
            }
        case "TOGGLE_FILTER_DROPDOWN":
            return{
                ...state,
                filterDropDown: !state.filterDropDown,
            }
        case "TOGGLE_DARK_MODE":
            return {
                ...state,
                darkMode: !state.darkMode,
            }
        case "SET_CONCERNED_COUNTRY":
            return {
                ...state,
                concernedCountry: action.payload,
        }
        default:
            return state
        
    }
}

export default countryReducer