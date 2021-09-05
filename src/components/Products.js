import React from 'react';

const Products = () => {
    return (
        <div className="products">
            <h1>Naše Smoothies</h1>
            <div className="product-list">
                <div className="item">
                    <div className="img"/>
                    <h3 className="name">Pushkoozie</h3>
                    <p className="ingredients">Еřešně, Maliny, Banán,  Pomerančový džus</p>
                    <p className="price">99 CZK / 0.5L</p>
                    <button className="order" onClick={ () => {
                            const element = document.getElementsByClassName("order")[3];
                            const y = element.getBoundingClientRect().y + 3000 ;

                            window.scrollTo({top: y, behavior: 'smooth'});
                        }}>Objednat</button>
                </div>
                <div className="item" id = "lunchSmoothie">
                    <div className="img"/>
                    <h3 className="name">Lunchoozie</h3>
                    <p className="ingredients">Jahody, Maliny, Borůvky, Banán, Ovesné vločky, Špenát, Chia, Arašídové máslo, Mandlové mléko</p>
                    <p className="price">119 CZK / 0.5L</p>
                    <button className="order" onClick={ () => {
                            const element = document.getElementsByClassName("order")[3];
                            const y = element.getBoundingClientRect().y + 4000 ;

                            window.scrollTo({top: y, behavior: 'smooth'});
                        }}>Objednat</button>
                </div>
                <div className="item">
                    <div className="img"/>
                    <h3 className="name">Mlekoozie</h3>
                    <p className="ingredients">Mléko, Jahody, Maliny, Banán</p>
                    <p className="price">99 CZK / 0.5L</p>
                    <button className="order" onClick={ () => {
                            const element = document.getElementsByClassName("order")[3];
                            const y = element.getBoundingClientRect().y + 5000 ;

                            window.scrollTo({top: y, behavior: 'smooth'});
                        }}>Objednat</button>
                </div>
            </div>
        </div>
    );
};

export default Products;