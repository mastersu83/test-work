import React from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import RightBar from "./components/RightBar/RightBar";
import Cards from "./components/Cards/Cards";
import Basket from "./components/Basket/Basket";
import Order from "./components/Order/Order";
import { Route, Routes } from "react-router-dom";
import OrdersHistory from "./components/OrdersHistory/OrdersHistory";

function App() {
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.content}>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Category />
                  <Cards />
                </>
              }
            />
            <Route path="basket" element={<Basket />} />
            <Route path="order" element={<Order />} />
            <Route path="history-order" element={<OrdersHistory />} />
          </Routes>
        </div>
        <RightBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
