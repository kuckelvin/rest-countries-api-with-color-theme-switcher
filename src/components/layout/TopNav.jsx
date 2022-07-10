// import { IoIosMoon } from "react-icons/io";
import Moon from "../../icons/Moon";
import CountryContext from "../../context/CountryContext";
import { useContext } from "react";

function TopNav() {
  const { darkMode, dispatch } = useContext(CountryContext);

  function toggleMode() {
    dispatch({ type: "TOGGLE_DARK_MODE" });
    const html = document.querySelector("html");
    if (html.classList.contains("light")) {
      html.classList.remove("light");
    } else {
      html.classList.add("light");
    }
  }

  return (
    <div className="topNav">
      <div className="container">
        <div className="leftNav">
          <h1>Where in the World?</h1>
        </div>
        <div className="rightNav" onClick={toggleMode}>
          <div className="logo">
            <Moon
              fillColor={darkMode ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 98%)"}
              outlineColor={darkMode ? "" : "hsl(200, 15%, 8%)"}
              strokeWidth={darkMode ? "0" : "35"}
            />
          </div>
          <div className="mode">{darkMode ? "Light Mode" : "Dark Mode"}</div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
