import { useEffect, useState } from "react";
import Delivery from "../components/Delivery/Delivery";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Reviews from "../components/Reviews/Reviews";

const Main = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Hero />
      <Products />
      <Delivery isDesktop={isDesktop} />
      <Reviews />
    </>
  );
};

export default Main;
