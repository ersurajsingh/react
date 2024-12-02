import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import SignInScreen from "./pages/sign-in-screen";
import Employees from "./pages/employees";
import OrdersDetails from "./pages/orders-details";
import Orders from "./pages/orders";
import SignUp from "./pages/sign-up";
import ExampleForm from "./modules/form";

const Router = () => {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Sign In";
        metaDescription = "Sign in to access your account.";
        break;
      case "/employees":
        title = "Employees";
        metaDescription = "Manage your employees.";
        break;
      case "/ordersdetails":
        title = "Order Details";
        metaDescription = "View details of your orders.";
        break;
      case "/orders":
        title = "Orders";
        metaDescription = "Manage your orders.";
        break;
      case "/sign-up":
        title = "Sign Up";
        metaDescription = "Create a new account.";
        break;
      default:
        title = "Default Title"; 
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
      <Route path="/login" element={<ExampleForm />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
