import "./Navbar.scss";
import React from "react"


function Navbar(){
    return (
        <div className="Navbar">
            <div className="Logo">
                <p className="logo"> <img src={process.env.PUBLIC_URL + "/lamp.gif"}  width={100} height={70}/> </p>
                <p className="text">AfTeR NoOn</p>
            </div>
            <div>
               <div className="buttons">
                 <div className="button">Button</div>
                 <div className="button">Button</div>
                 <div className="button">Button</div>
                 <div className="button">Button</div>
               </div> 
            </div>
            
        </div>
    );
}


export default Navbar;