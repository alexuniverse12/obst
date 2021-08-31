import React from 'react';
import Header from './Header';
import Offer from "./Offer";
import AboutPage from './AboutPage';
import Products from "./Products";
import Delivery from './Delivery';
import Order from './Order';

function Main() {
  return (
    <>
      <Header/>
      <Offer/>
      <AboutPage/>
      <Products/>
      <Delivery/>
      <Order/>
    </>
  );
}

export default Main;
