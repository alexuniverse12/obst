import React from "react";

// make button "order" to transition to the Order section
const Offer = () => {
    return (
        <div className="offer">
            <div className="offer-text">
                <h1>Smoothies you need</h1>
                <p>Get a fresh smoothie in 15 minutes with a free delivery</p>
                <button onClick={() => {
                    document.getElementsByClassName("order")[3].scrollIntoView({behavior: "smooth", block: "center"});
                }}>Order</button>
            </div>
            <div className="offer-image"></div>
        </div>
    )
};

export default Offer;