import  React from 'react';

const Header = () => {
    const isMobile = window.screen.width <= 480;
    return (
        <div className = "Header"> 
            <div className = "Logo">
                <h1>OBST</h1>
            </div>
            {
                    isMobile ? <div className="burg"></div> :
                    <div className = "Menu"> 
                        <div className = "MenuTag">
                            <h2>About</h2>
                        </div>
                        <div className = "MenuTag">
                            <h2>Smoothies</h2>
                        </div>
                        <div className = "MenuTag">
                            <h2>Delivery</h2>
                        </div>
                        <div className = "MenuTag">
                            <h2>Order</h2>
                        </div>
                    </div>
            }
        </div>
    );
}

export default Header;