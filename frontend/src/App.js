import "./App.css";
import RestifyNavbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchPage from "./components/Search/Index";
import SearchResult from "./components/SearchResult/Index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/test" element={<RestifyNavbar />}>
          {/* Components that need navbar go here */}
          <Route path="/signup/test/2" element={<Signup />} />
        </Route>
        <Route index element={<SearchPage/>}></Route>
        <Route path="search/:method/:field/" element={<SearchResult/>}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
