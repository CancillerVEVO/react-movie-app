import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, PopularMovies, Register, MovieReviews } from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieReviews />} />
          <Route path="/movies" element={<PopularMovies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
