import React from 'react';
import Header from './Header';
import Offer from "./Offer";
import AboutPage from './AboutPage';
import Products from "./Products";
import Delivery from './Delivery';

function Main() {
  return (
    <>
      <Header/>
      <Offer/>
      <AboutPage/>
      <Products/>
      <Delivery/>
    </>
  );
}

export default Main;
