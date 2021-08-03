import React from 'react';
import Content from './content';


function Nav() {

    return (
        <div className="back">
            <div className="header">
                <div className="content">
                    <h1>LOGO</h1>

                </div>
            </div>
            <div className="main">
                <div>
                    <p className="heading">Getting Weather details was never so easy</p>
                    <p className="try">Try it now!</p>
                    <div className="city">
                        <input type="text" className="input" placeholder="search city" >

                        </input><span><button className="search">search</button></span>
                    </div>
                </div>

            </div>
            <Content />
        </div>


    )
}


export default Nav
