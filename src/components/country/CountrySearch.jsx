import { useState } from "react";
import Search from "../../icons/Search";

function CountrySearch() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form type="submit" onSubmit={handleSubmit} className="countrySearch">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span class="placeholder">Search for a country...</span>
      <Search />
    </form>
  );
}

export default CountrySearch;
