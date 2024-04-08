import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import NavBar from "./components/Navbar.jsx";

const App = lazy(() => import("./App.jsx"));
const Brita = lazy(() => import("./pages/Brita.jsx"));
const Burtsbees = lazy(() => import("./pages/Burtsbees.jsx"));
const CatLitter = lazy(() => import("./pages/CatLitter.jsx"));
const Clorox = lazy(() => import("./pages/Clorox.jsx"));
const Glad = lazy(() => import("./pages/Glad.jsx"));
const HomeCare = lazy(() => import("./pages/HomeCare.jsx"));
const Laundry = lazy(() => import("./pages/Laundry.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/brita" element={<Brita />} />
          <Route path="/burtsbees" element={<Burtsbees />} />
          <Route path="/cat-litter" element={<CatLitter />} />
          <Route path="/clorox" element={<Clorox />} />
          <Route path="/glad" element={<Glad />} />
          <Route path="/homecare" element={<HomeCare />} />
          <Route path="/laundry" element={<Laundry />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);
