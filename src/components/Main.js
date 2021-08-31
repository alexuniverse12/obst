import React from 'react';
import Header from './Header';
import Offer from "./Offer";
import AboutPage from './AboutPage';
import Products from "./Products";
import Delivery from './Delivery';
import Order from './Order';
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Header/>
      <Offer/>
      <AboutPage/>
      <Products/>
      <Delivery/>
      <Order/>
      <Footer/>
    </>
  );
}

export default Main;
