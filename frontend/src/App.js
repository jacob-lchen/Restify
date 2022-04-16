import "./App.css";
import RestifyNavbar from "./components/Navbar/UserNav/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchPage from "./components/Search/Index";
import SearchResult from "./components/SearchResult/Index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Restaurant from "./components/Restaurant/Restaurant";
import Blogs from "./components/Restaurant/Blog/Blogs";
import Images from "./components/Restaurant/ImagesComponent/Images";
import Comments from "./components/Restaurant/Comments/Comments";
import Menu from "./components/Restaurant/Menu/Menu";
import AnonNavbar from "./components/Navbar/AnonNav/Navbar";
import AddBlog from "./components/AddBlog/AddBlog";
import Feed from "./components/Feed/Feed";
import EditProfile from "./components/EditProfile/EditProfile";

function App() {
  return (
    <div>
      <Router>
        <RestifyNavbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route index element={<SearchPage />}></Route>
          <Route path="/addblog" element={<AddBlog />}></Route>
          <Route path="/signup/test" element={<RestifyNavbar />}>
            {/* Components that need navbar go here */}
            <Route path="/signup/test/2" element={<Signup />} />
          </Route>
          <Route index element={<SearchPage />}></Route>
          <Route
            path="/search/:method/:field/"
            element={<SearchResult />}
          ></Route>
          <Route path="/restaurant/:id/" element={<Restaurant />}>
            <Route index element={<Menu />}></Route>
            <Route path="/restaurant/:id/blog/" element={<Blogs />}></Route>

            <Route
              path="/restaurant/:id/comment/"
              element={<Comments />}
            ></Route>
            <Route path="/restaurant/:id/menu/" element={<Menu />}></Route>
            <Route path="/restaurant/:id/image/" element={<Images />}></Route>
            <Route path="/restaurant/:id/*" element={<PageNotFound />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
