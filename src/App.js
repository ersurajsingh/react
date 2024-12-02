import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation
} from "react-router-dom";
import SignInScreen from "./pages/sign-in-screen";
import Employees from "./pages/employees";
import OrdersDetails from "./pages/orders-details";
import Orders from "./pages/orders";
import SignUp from "./pages/sign-up";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "StockMaster - Sign In";
        metaDescription = "Sign in to access your account.";
        break;
      case "/employees":
        title = "StockMaster - Employees";
        metaDescription = "Manage your employees.";
        break;
      case "/ordersdetails":
        title = "StockMaster - Order Details";
        metaDescription = "View details of your orders.";
        break;
      case "/orders":
        title = "StockMaster - Orders";
        metaDescription = "Manage your orders.";
        break;
      case "/sign-up":
        title = "StockMaster - Sign Up";
        metaDescription = "Create a new account.";
        break;
      default:
        title = "Default Title"; // Optional: add a default title
        metaDescription = "Default meta description."; // Optional: add a default description
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        "head > meta[name='description']"
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignInScreen />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/ordersdetails" element={<OrdersDetails />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
