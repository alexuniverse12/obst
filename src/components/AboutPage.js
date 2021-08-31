import  React from 'react';

const AboutPage = () => {
    const isMobile = window.innerWidth <= 480;

    if(isMobile === false){
        return (
            <div className = "AboutPage"> 
                <div id = "headline">
                    <h1>Opatrně doručíme levné a chutné smoothie do 15 minut</h1> 
                </div>
                <div id = "circles" >
                    <div className = "oneCircle">
                        <h1>Zdravé</h1> 
                    </div>
                    <div className = "oneCircle" id = "advancedCircle">
                        <h1>{"Doručení\nzdarma"}</h1> 
                    </div>
                    <div className = "oneCircle">
                        <h1>Chutně</h1> 
                    </div>
                    <div className = "oneCircle" id = "advancedCircle">
                        <h1>{"Rychlé\ndoručení"}</h1> 
                    </div>
                    <div className = "oneCircle">
                        <h1>Výživně</h1> 
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className = "AboutPage"> 
                <div id = "headline">
                    <h1>Opatrně doručíme levné a chutné smoothie do 15 minut</h1> 
                </div>
                <div id = "circles" >
                    <div className = "oneCircle">
                        <h1>Zdravé</h1> 
                    </div>
                    <div className = "oneCircle">
                        <h1>Chutně</h1> 
                    </div>
                    <div className = "oneCircle" id = "advancedCircle">
                        <h1>{"Doručení\nzdarma"}</h1> 
                    </div>
                    <div className = "oneCircle">
                    <h1>Čerstvé</h1> 
                    </div>
                    <div className = "oneCircle">
                        <h1>Výživně</h1> 
                    </div>
                    <div className = "oneCircle" id = "advancedCircle">
                        <h1>{"Rychlé\ndoručení"}</h1> 
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;