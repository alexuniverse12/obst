import React from 'react';

const Order = () => {
    return (
        <div className="order">
            <h1>How to Order</h1>
            <p>Text us your address, phone number and smoothie you want on WhatsApp or Telegram and we will deliver everything in 15 mins</p>
            <div className="chat-links">
                <div className="item">
                    <h1>Telegram</h1>
                    <button onClick = {() => window.location.assign("https://t.me/obstcompany")}>Open Chat With Us</button>
                </div>
                <div className="item">
                    <h1>WhatsApp</h1>
                    <button onClick = {() => window.location.assign("https://wa.me/420776542624")}>Open Chat With Us</button>
                </div>
            </div>
            <p id="remark">*Cash Payment Only</p>
        </div>
    );
};

export default Order;