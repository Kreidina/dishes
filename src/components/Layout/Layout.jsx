import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import css from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Header />
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
      <footer className={css.footer}>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
