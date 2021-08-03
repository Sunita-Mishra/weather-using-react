import React ,{useContext,useEffect, useState}from 'react';
import {WeatherContext} from "../helpers/context"

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
            visibility:data.visibility
        }
        setweatherdetails(weatherdata);
    }),[city])
    return (
        <div>
            <div className="location">
                <p> LOCATION: {city}</p>
            </div>
            <div className="location">
                <div>  Wind speed:{weatherdetails.wind}m/s </div>     <div>   Pressure:{weatherdetails.pressure} Pa</div>
            </div>
            <div className="card">
                <div>
                    <div>
                        Humidity
                    </div>
                    <div>
                    {weatherdetails.humidity}%
                    </div>
                </div>
                <div>
                    <div>
                        Temperature
                    </div>
                    <div>
                    {weatherdetails.temperature}°C
                    </div>
                </div>




                <div>
                    <div>
                        Visibility
                    </div>
                    <div>
                    {weatherdetails.visibility}km
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Content
