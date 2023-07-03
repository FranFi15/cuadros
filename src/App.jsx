import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Nav } from "./components/Banner/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
