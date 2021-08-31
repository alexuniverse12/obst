import React from 'react';

const Products = () => {
    return (
        <div className="products">
            <h1>Our Smoothies</h1>
            <div className="product-list">
                <div className="item">
                    <div className="img"/>
                    <h3 className="name">Pushkoozie</h3>
                    <p className="ingredients">Cherry, raspberry, banana, orange juice</p>
                    <p className="price">99 CZK / 0.5L</p>
                    <button className="order">Order</button>
                </div>
                <div className="item">
                    <div className="img"/>
                    <h3 className="name">Pushkoozie</h3>
                    <p className="ingredients">Cherry, raspberry, banana, orange juice</p>
                    <p className="price">99 CZK / 0.5L</p>
                    <button className="order">Order</button>
                </div>
                <div className="item">
                    <div className="img"/>
                    <h3 className="name">Pushkoozie</h3>
                    <p className="ingredients">Cherry, raspberry, banana, orange juice</p>
                    <p className="price">99 CZK / 0.5L</p>
                    <button className="order">Order</button>
                </div>
            </div>
        </div>
    );
};

export default Products;