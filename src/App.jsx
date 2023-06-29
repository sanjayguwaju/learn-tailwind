import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Herosection from "./components/heroSection/hero-section";
import Ctasection from "./components/heroSection/cta-section";
import Featuresection from "./components/heroSection/feature-section";
import FormLayout from "./components/form-layouts/FormLayout";
import { Routes, Route } from "react-router-dom";
import Logocloud from "./components/logo-clouds/LogoCloud";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Herosection />
            <Featuresection />
            <Ctasection />
            <Logocloud />
          </>
        }
      />
      <Route exact path="/form" element={<FormLayout />} />
    </Routes>
  );
}

export default App;
