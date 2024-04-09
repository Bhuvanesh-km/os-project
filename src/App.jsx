import Brands from "./components/Brands";
import NavBar from "./components/Navbar.jsx";

import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

const Brita = lazy(() => import("./pages/Brita.jsx"));
const Burtsbees = lazy(() => import("./pages/Burtsbees.jsx"));
const CatLitter = lazy(() => import("./pages/CatLitter.jsx"));
const Clorox = lazy(() => import("./pages/Clorox.jsx"));
const Glad = lazy(() => import("./pages/Glad.jsx"));
const HomeCare = lazy(() => import("./pages/HomeCare.jsx"));
const Laundry = lazy(() => import("./pages/Laundry.jsx"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Brands />} />
            <Route path="/brita" element={<Brita />} />
            <Route path="/burtsbees" element={<Burtsbees />} />
            <Route path="/cat-litter" element={<CatLitter />} />
            <Route path="/clorox" element={<Clorox />} />
            <Route path="/glad" element={<Glad />} />
            <Route path="/homecare" element={<HomeCare />} />
            <Route path="/laundry" element={<Laundry />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
