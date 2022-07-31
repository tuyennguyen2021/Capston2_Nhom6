import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import HomePage from "./templates/HomeTemplate/HomePage/ListMoviePage";
import AboutPage from "./templates/HomeTemplate/AboutPage";
import NewsPage from "./templates/HomeTemplate/NewsPage";
import Detail from "./templates/HomeTemplate/DetailPage/Detail";
import Login from "./templates/HomeTemplate/LoginHomePage/Login";
import Checkout from "./templates/HomeTemplate/CheckoutPage/Checkout";
import Loading from "./components/Loading/Loading";
import Register from "./templates/HomeTemplate/RegisterHomePage/Register";
import Profile from "./templates/HomeTemplate/ProfilePage/Profile";
import AdminTemplate from "./templates/AdminTemplate";
import AddFilm from "./templates/AdminTemplate/Films/AddFilm";
import Users from "./templates/AdminTemplate/Users/Users";
import AddUser from "./templates/AdminTemplate/Users/AddUser";
import Films from "./templates/AdminTemplate/Films/Films";
import EditFilm from "./templates/AdminTemplate/Films/EditFilm";
import ShowTime from "./templates/AdminTemplate/Showtime/ShowTime";
import EditUser from "./templates/AdminTemplate/Users/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Routes>
        {/* HomeTemplate */}
        <Route path="/" element={<HomeTemplate />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        {/* AuthHomePage */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* CheckoutPage */}
        <Route path="/checkout/:id" element={<Checkout />} />
        {/* AdminTemplate */}
        <Route path="/admin" element={<AdminTemplate />}>
          <Route path="/admin/films" element={<Films />} />
          <Route path="/admin/films/addnew" element={<AddFilm />} />
          <Route path="/admin/films/edit/:id" element={<EditFilm />} />
          <Route
            path="/admin/films/showtime/:id/:tenphim"
            element={<ShowTime />}
          />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/users/addnew" element={<AddUser />} />
          <Route path="/admin/users/edit/:tk" element={<EditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
