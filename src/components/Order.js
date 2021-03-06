import React from 'react';

const Order = () => {
    return (
        <div className="order">
            <h1>Jak Objednat</h1>
            <p>Napiště nám Vaši adresu, telefonní číslo a smoothie, které chcete do WhatsAppu nebo Telegramu a bude už všechno u Vás do 15 min</p>
            <div className="chat-links">
                <div className="item">
                    <h1>Telegram</h1>
                    <button>Otevřít Chat s námi</button>
                    {/* <button onClick = {() => window.location.assign("")}>Otevřít Chat s námi</button> */}
                </div>
                <div className="item">
                    <h1>WhatsApp</h1>
                    <button>Otevřít Chat s námi</button>
                    {/* <button onClick = {() => window.location.assign("")}>Otevřít Chat s námi</button> */}
                </div>
            </div>
            <p id="remark">*Platba pouze v hotovosti</p>
        </div>
    );
};

export default Order;