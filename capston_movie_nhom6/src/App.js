import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import HomePage from "./templates/HomeTemplate/HomePage/ListMoviePage";
import AboutPage from "./templates/HomeTemplate/AboutPage";
import NewsPage from "./templates/HomeTemplate/NewsPage";
import Detail from "./templates/HomeTemplate/DetailPage/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HomeTemplate */}
        <Route path="/" element={<HomeTemplate />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
        {/* AdminTemplate */}
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
