import  React from 'react';

const AboutPage = () => {
    const isMobile = window.innerWidth <= 480;

    if(isMobile === false){
        return (
            <div className = "AboutPage"> 
                <div id = "headline">
                    <h1>We carefuly delivery cheap and tasty smoothies in 15 mins</h1> 
                </div>
                <div id = "circles" >
                    <div className = "oneCircle">
                        <h1>CHEAP</h1> 
                    </div>
                    <div className = "oneCircle" id = "advancedCircle">
                        <h1>{"FREE\nDELIVERY"}</h1> 
                    </div>
                    <div className = "oneCircle">
                        <h1>TASTY</h1> 
                    </div>
                    <div className = "oneCircle" id = "advancedCircle">
                        <h1>{"FAST\nDELIVERY"}</h1> 
                    </div>
                    <div className = "oneCircle">
                        <h1>NUTRICIOUS</h1> 
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className = "AboutPage"> 
                <div id = "headline">
                    <h1>We carefuly delivery cheap and tasty smoothies in 15 mins</h1> 
                </div>
                <div id = "circles" >
                    <div className = "oneCircle">
                        <h1>CHEAP</h1> 
                    </div>
                    <div className = "oneCircle">
                        <h1>TASTY</h1> 
                    </div>
                    <div className = "oneCircle" id = "advancedCircle">
                        <h1>{"FAST\nDELIVERY"}</h1> 
                    </div>
                    <div className = "oneCircle">
                    <h1>FRESH</h1> 
                    </div>
                    <div className = "oneCircle">
                        <h1>NUTRICIOUS</h1> 
                    </div>
                    <div className = "oneCircle" id = "advancedCircle">
                        <h1>{"FREE\nDELIVERY"}</h1> 
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;