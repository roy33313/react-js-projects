import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import SearchBar from "./Components/SearchBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <SearchBar />

        <Routes>
          <Route exact path="/" element={<News category="economy" />} />
          <Route exact path="/fashion" element={<News category="fashion" />} />
          <Route exact path="/economy" element={<News category="economy" />} />
          <Route exact path="/sports" element={<News category="sports" />} />
          <Route exact path="/health" element={<News category="health" />} />
          <Route
            exact
            path="/education"
            element={<News category="education" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News category="entertainment" />}
          />
          <Route
            exact
            path="/politics"
            element={<News category="politics" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
