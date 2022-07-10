const FilterDropDown = () => {
  return (
    <div className="dropDownContent">
      <ul>
        <li>
          <a href="/countrydetail" rel="noreferrer">
            Africa
          </a>
        </li>
        <div className="filterLine"></div>
        <li>
          <a href="/" rel="noreferrer">
            America
          </a>
        </li>
        <div className="filterLine"></div>
        <li>
          <a href="/" rel="noreferrer">
            Asia
          </a>
        </li>
        <div className="filterLine"></div>
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
  );
};

export default FilterDropDown;
