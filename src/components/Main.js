import React from 'react';
import Header from './Header';
import Offer from "./Offer";
import AboutPage from './AboutPage';
import Products from "./Products";
import Order from './Order';

function Main() {
  return (
    <>
      <Header/>
      <Offer/>
      <AboutPage/>
      <Products/>
      <Order/>
    </>
  );
}

export default Main;
