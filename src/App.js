import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState";

function App() {
  return (
    <>
      <AlertState>
        <Router>
          <Navbar />
          <hr />
          <Alert />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
          </Routes>
          <Footer />
        </Router>
      </AlertState>
    </>
  );
}

export default App;
