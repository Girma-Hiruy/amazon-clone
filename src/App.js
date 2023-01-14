import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import Payment from "./Payment";
import auth from "./firebase";
import { useStateValue } from "./StateProvider";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Footer from "./Footer";

const promise = loadStripe(
  "pk_test_51MKoNxKUF2OvWxBUkeQCYK1yWSoYABEJ8hpGYsD8dyPDg5DJ3XCDestV7m0ALuPvj72Z1Le0eMoOLfJEIv6wkEUf00EhZm3siA"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      //console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Header />
              <Payment />
            </Elements>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
