import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, PopularMovies, Register, MovieReviews } from "./pages";
import { UserProvider } from "./providers";

import "./style.css";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieReviews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies" element={<PopularMovies />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
export default App;
