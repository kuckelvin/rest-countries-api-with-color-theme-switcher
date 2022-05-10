import TopNav from "./components/layout/TopNav";
import Country from "./pages/Country"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="appContainer">
        <TopNav />
        <main>
          <Routes>
            <Route path="/" element={<Country />} />
          </Routes>
        </main>
      </div>
    </Router>

  );
}

export default App;
