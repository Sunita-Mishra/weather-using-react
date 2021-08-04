import React ,{useContext,useEffect, useState}from 'react';
import {WeatherContext} from "../helpers/context";
import humidity from "./humidity.png";
import temperature from "./temperature.png";
import Visibility from "./visibility.png";

function Content() {
    const{city}=useContext(WeatherContext)
    // const[wind,setwind]=useState();
    const[weatherdetails,setweatherdetails]=useState({})
    // const [search, setSearch] = useState("");
    useEffect(()=>
    fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=93cfd80ca7b68a32492f5c4ec19fad97`)
    .then((response)=>{
    return response.json();})
    .then((data)=>
    {
        console.log(data);
        let weatherdata={
            wind:data.wind.speed,
            pressure:data.main.pressure,
            humidity:data.main.humidity,
            temperature: data.main.temp,
            visibility:data.visibility,
            icon:data.weather[0].icon,
            sky:data.weather[0].main
        }
        
        setweatherdetails(weatherdata);
    }),[city])
    return (
        <div>
            <div className="location">
               <div> <p> LOCATION: {city}({weatherdetails.sky})</p></div> <div><img src={` http://openweathermap.org/img/wn/${weatherdetails.icon}@2x.png`}></img></div>
            </div>
            <div className="details">
                <div>  Wind speed:{weatherdetails.wind}m/s </div>     <div>   Pressure:{weatherdetails.pressure} hPa</div>
                
            </div>
            <div className="card">
                <div className="humidity">
                    <div>
                        <img className="img" src={humidity}></img>
                    </div>
                    
                    <div >
                        Humidity
                    </div>
                    <div className="values"> 
                    {weatherdetails.humidity}%
                    </div>
                </div>
                <div className="temp">
                <div>
                        <img className="img" src={temperature}></img>
                    </div>
                    <div>
                        Temperature
                    </div>
                    <div className="values">
                    {weatherdetails.temperature}K
                    </div>
                </div>




                <div className="visi">
                <div>
                        <img className="img" src={Visibility} ></img>
                    </div>
                    <div>
                        Visibility
                    </div>
                    <div className="values">
                    {weatherdetails.visibility}m
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Content
