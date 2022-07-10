import TopNav from "./components/layout/TopNav";
import Country from "./pages/Country"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { CountryProvider } from "./context/CountryContext"
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <CountryProvider>
      <Router>
        <div className="appContainer">
          <TopNav />
          <main>
            <Routes>
              <Route path="/" element={<Country />} />
              <Route path="/country/name" element={<CountryDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CountryProvider>
  );
}

export default App;
