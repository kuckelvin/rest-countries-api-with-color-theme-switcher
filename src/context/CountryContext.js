import { createContext, useReducer } from "react";
import countryReducer from "./CountryReducer"
import countryInfo from "../country.json"

const CountryContext = createContext()


export const CountryProvider = ({children}) => {
    const initialState = {
        results: countryInfo,
        filterDropDown: false,
        darkMode: true,
        concernedCountry: {},
    }
    
    const [state, dispatch] = useReducer(countryReducer, initialState)
    
    return (
    <CountryContext.Provider value={{...state, dispatch}}>
        {children}
    </CountryContext.Provider>
    )
} 

export default CountryContext