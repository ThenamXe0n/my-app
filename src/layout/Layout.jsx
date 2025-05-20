import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
