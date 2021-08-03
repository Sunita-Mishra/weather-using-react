import React ,{useContext,useState}from 'react';
import {WeatherContext} from "../helpers/context"


function Nav() {
    const{setCity,showdata,setshowdata}=useContext(WeatherContext)
    const [search, setSearch] = useState("");
    function searchweather(){
        setCity(search)
        setshowdata(true)
    }
    return (
        <div className="back">
            <div className="header">
                <div className="content">
                    <h1>LOGO</h1>

                </div>
            </div>
            <div className="main">
                <div>
                    {!showdata && <div><p className="heading">Getting Weather details was never so easy</p>
                    <p className="try">Try it now!</p></div>}
                    <div className="city">
                        <input type="text" className="input" placeholder="search city" value={search} onChange={e=>{setSearch(e.target.value)}}>
                        </input><span><button className="search" onClick={()=>{searchweather()}}>search</button></span>
                    </div>
                </div>

            </div>
            
        </div>


    )
}


export default Nav
