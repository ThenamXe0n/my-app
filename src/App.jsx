import "./App.css";
import ListSection from "./components/ListSection";
import DashboardLayout from "./layout/DashboardLayout";
import Layout from "./layout/Layout";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { Routes, Route, Outlet } from "react-router";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<h1>i am / path element</h1>} />
          <Route path="home" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<AboutUsPage/>} />
          <Route path="add-blog" element={<h1 className="font-bol text-center text-4xl">Add a new blog</h1>} />

        </Route> */}

        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/list" element={<ListSection/>} />
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
