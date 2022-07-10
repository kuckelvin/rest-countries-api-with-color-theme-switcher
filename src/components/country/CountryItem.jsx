import { useContext } from "react";
import CountryContext from "../../context/CountryContext";
// import { searchCountry } from "../../actions/CountryActions";
import { useNavigate } from "react-router-dom";

function CountryItem({ results, result, index }) {
  const { flag, name, population, region, sub_region } = result;
  const { dispatch } = useContext(CountryContext);
  const navigate = useNavigate();

  const searchCountry = (id) => {
    let country = results.find((country) => country.id === id);
    dispatch({ type: "SET_CONCERNED_COUNTRY", payload: country });
    console.log("setConcernedCountry", country);
    navigate("/country/name");
  };

  return (
    <div className="singleCountry" onClick={() => searchCountry(result.id)}>
      <div className="flag">
        <img src={flag} alt="country flag" />
      </div>
      <div className="countryInfo">
        <h2 className="name">{name}</h2>
        <p className="description">Population: {population}</p>
        <p className="description">Region: {region}</p>
        <p className="description">Capital: {sub_region}</p>
      </div>
    </div>
  );
}

export default CountryItem;
