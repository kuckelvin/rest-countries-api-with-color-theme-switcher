import DownArrow from "../../icons/DownArrow";
import { useContext } from "react";
import CountryContext from "../../context/CountryContext";
import FilterDropDown from "./FilterDropDown";

function CountryFilter() {
  const { filterDropDown, dispatch } = useContext(CountryContext);

  return (
    <div className="countryFilter">
      <div className="dropDown">
        <div className="filterRegion">
          <p>Filter by Region</p>
        </div>
        <div
          className="downArrow"
          onClick={() => dispatch({ type: "TOGGLE_FILTER_DROPDOWN" })}
        >
          <DownArrow />
          {filterDropDown ? <FilterDropDown /> : ""}
        </div>
      </div>
    </div>
  );
}

export default CountryFilter;
