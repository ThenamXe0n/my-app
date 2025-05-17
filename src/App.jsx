import "./App.css";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route
          path="*"
          element={
            <section className="h-screen w-screen flex items-center justify-center font-bold">
              404 not found
            </section>
          }
        />
      </Routes>
    </>
  );
}

export default App;
