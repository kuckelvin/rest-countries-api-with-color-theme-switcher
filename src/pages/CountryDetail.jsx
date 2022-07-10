import BackButton from "../components/layout/BackButton";
import { useContext } from "react";
import CountryContext from "../context/CountryContext";
// import { useParams } from "react-router-dom";

function CountryDetail() {
  const {
    concernedCountry: {
      flag,
      name,
      population,
      region,
      sub_region,
      currency,
      language,
      top_level_domain,
      border_countries,
    },
  } = useContext(CountryContext);

  // const params = useParams();

  //   function searchCountry(id) {
  //     let concernedCountry = results.find((country) => country.id === id);
  //     console.log(concernedCountry);
  //   }

  //   useEffect(() => {
  //     searchCountry();
  //     //eslint-disable-next-line
  //   }, []);
  return (
    <div className="container">
      <BackButton />
      <div className="countryDetail">
        <div className="detailContainer">
          <div className="detailFlag">
            <img src={flag} alt="countryFlag" />
          </div>
          <div className="detailDescription">
            <h1>{name}</h1>
            <div className="spec">
              <div className="leftDetail">
                <h4>Native Name: </h4>
                <h4>Population: {population}</h4>
                <h4>Region: {region}</h4>
                <h4>Sub Region: {sub_region}</h4>
                <h4>Capital: </h4>
              </div>
              <div className="rightDetail">
                <h4>Top Level Domain: {top_level_domain}</h4>
                <h4>Currencies: {currency}</h4>
                <h4>Languages: {language}</h4>
              </div>
            </div>
            <div className="border">
              <h4>
                Border Countres:{" "}
                <span className="borderButton">{border_countries}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
