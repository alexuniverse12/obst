import React from "react";

// make button "order" to transition to the Order section
const Offer = () => {
    return (
        <div className="offer">
            <div className="offer-text">
                <h1>Smoothies které chcete</h1>
                <p>Získejte čerstvé smoothie do 15 min s doručením k Vám zdarma</p>
                <button onClick={() => {
                    document.getElementsByClassName("order")[3].scrollIntoView({behavior: "smooth", block: "center"});
                }}>Objednat</button>
            </div>
            <div className="offer-image"></div>
        </div>
    )
};

export default Offer;