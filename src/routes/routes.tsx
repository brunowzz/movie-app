import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Movie from "../containers/Movies";
import Serie from "../containers/Series";
import DefaultLayout from "../layout/DefaultLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/serie" element={<Serie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
