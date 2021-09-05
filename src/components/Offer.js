import React from "react";

// make button "order" to transition to the Order section
const Offer = () => {
    return (
        <div className="offer">
            <div className="offer-text">
                <h1>Už Vás nebaví nezdravé jídlo?</h1>
                <p>Dostaňte čerstvé smothie bez cukru do 15 min s doručením zdarma</p>
                <button onClick={ () => {
                            const element = document.getElementsByClassName("products")[0];
                            const y = element.getBoundingClientRect().y - 150;

                            window.scrollTo({top: y, behavior: 'smooth'});
                        }
                }>Objednat</button>
            </div>
            <div className="offer-image"></div>
        </div>
    )
};

export default Offer;