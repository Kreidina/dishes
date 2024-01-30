// import { useEffect, useState } from "react";
import OrderForm from "../OrderForm/OrderForm";
import ProductList from "../OrderForm/ProductList";
import { Left } from "../helpers/icons";

const Order = () => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  // const [isTablet, setIsTablet] = useState(
  //   window.innerWidth >= 768 && window.innerWidth < 1280
  // );

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsDesktop(window.innerWidth >= 1280);
  //     setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <>
      <Left />
      <h1
        style={{
          textAlign: "center",
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        Ваші замовлення
      </h1>
      <ProductList />
      <OrderForm />
    </>
  );
};

export default Order;
