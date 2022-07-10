import CountryItem from "./CountryItem";
import CountryContext from "../../context/CountryContext";
import { useContext } from "react";

function CountryResult() {
  const { results } = useContext(CountryContext);
  console.log("CountryResults", results);

  return (
    <div className="allCountry">
      {results?.map((result, idx) => (
        <CountryItem
          key={result.id}
          result={result}
          index={idx}
          results={results}
        />
      ))}
    </div>
  );
}

export default CountryResult;
