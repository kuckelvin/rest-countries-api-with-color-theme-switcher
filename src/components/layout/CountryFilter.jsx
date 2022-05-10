import { FaArrowDown } from "react-icons/fa";
// import  from "../../icons/DownArrow";

function CountryFilter() {
  return (
    <div className="countryFilter">
      <div className="dropDown">
        <div className="filterRegion">
          <p>Filter by Region</p>
        </div>
        <FaArrowDown />
      </div>
      <div className="dropDownContent">
        <ul>
          <li>
            <a href="/" rel="noreferrer">
              Africa
            </a>
          </li>
          <li>
            <a href="/" rel="noreferrer">
              America
            </a>
          </li>
          <li>
            <a href="/" rel="noreferrer">
              Asia
            </a>
          </li>
          <li>
            <a href="/" rel="noreferrer">
              Europe
            </a>
          </li>
          <li>
            <a href="/" rel="noreferrer">
              Oceania
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CountryFilter;
