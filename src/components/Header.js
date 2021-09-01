import  React from 'react';

const Header = ({menu, setMenu}) => {
    const isMobile = window.innerWidth <= 480;
    return (
        <>
        <div className = "Header"> 
            <div className = "Logo">
                <h1>OBST</h1>
            </div>
            {
                    isMobile ? <div className="burg" id={menu ? "active" : "disabled"} onClick={() => setMenu(!menu)}></div> :
                    <div className = "Menu"> 
                        <div className = "MenuTag" onClick={ () => {
                            const element = document.getElementsByClassName("AboutPage")[0];
                            const y = element.getBoundingClientRect().y + 100;

                            window.scrollTo({top: y, behavior: 'smooth'});
                        }
                        }>
                            <h2>O Nás</h2>
                        </div>
                        <div className = "MenuTag" onClick={ () => {
                            const element = document.getElementsByClassName("products")[0];
                            const y = element.getBoundingClientRect().y - 150;

                            window.scrollTo({top: y, behavior: 'smooth'});
                        }
                        }>
                            <h2>Smoothies</h2>
                        </div>
                        <div className = "MenuTag" onClick={ () => {
                            const element = document.getElementsByClassName("Delivery")[0];
                            const y = element.getBoundingClientRect().y + 250;

                            window.scrollTo({top: y, behavior: 'smooth'});
                        }
                        }>
                            <h2>Doručení</h2>
                        </div>
                        <div className = "MenuTag" onClick={ () => {
                            const element = document.getElementsByClassName("order")[3];
                            const y = element.getBoundingClientRect().y ;

                            window.scrollTo({top: y, behavior: 'smooth'});
                        }
                        }>
                            <h2>Objednat</h2>
                        </div>
                </div>
            }
        </div>
        {
                menu &&
                <div className = "Menu"> 
                        <div className = "MenuTag" onClick={ () => {
                            setMenu(false);
                            const element = document.getElementsByClassName("AboutPage")[0];
                            const y = element.getBoundingClientRect().y - 700;

                            window.scrollTo({top: y, behavior: 'smooth'});
                        }
                        }>
                            <h2>O Nás</h2>
                        </div>
                        <div className = "MenuTag" onClick={ () => {
                            setMenu(false);
                            const element = document.getElementsByClassName("products")[0];
                            const y = element.getBoundingClientRect().y - 700;

                            window.scrollTo({top: y, behavior: 'smooth'});
                        }
                        }>
                            <h2>Smoothies</h2>
                        </div>
                        <div className = "MenuTag" onClick={ () => {
                            setMenu(false);
                            const element = document.getElementsByClassName("Delivery")[0];
                            const y = element.getBoundingClientRect().y - 700;

                            window.scrollTo({top: y, behavior: 'smooth'});
                        }
                        }>
                            <h2>Doručení</h2>
                        </div>
                        <div className = "MenuTag" onClick={ () => {
                            setMenu(false);
                            const element = document.getElementsByClassName("order")[3];
                            const y = element.getBoundingClientRect().y - 700;

                            window.scrollTo({top: y, behavior: 'smooth'});
                        }
                        }>
                            <h2>Objednat</h2>
                        </div>
                </div>
            }
        </>
    );
}

export default Header;