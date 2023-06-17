import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, PopularMovies, Register, MovieReviews } from "./pages";

import "./style.css";
import { useAutoLogin } from "./hooks/useAutoLogin";

function App() {
  useAutoLogin();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieReviews />} />
        <Route path="/movies" element={<PopularMovies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
