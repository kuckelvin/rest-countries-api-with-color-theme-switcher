import CountryFilter from "../components/layout/CountryFilter";
import CountrySearch from "../components/country/CountrySearch";
import CountryResult from "../components/country/CountryResult";

function Country() {
  return (
    <>
      <div className="container">
        <CountrySearch />
        <CountryFilter />
      </div>
      <div className="container">
        <CountryResult />
      </div>
    </>
  );
}

export default Country;
