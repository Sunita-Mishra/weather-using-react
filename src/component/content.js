import React,{useEffect, useState} from 'react'


function Content() {
    const[city,setCity]=useState(null);
    const [search, setSearch] = useState("mumbai");
    var details;
    useEffect(()=>
    fetch( `https://api.openweathermap.org/data/2.5/weather?q=${search} &appid=93cfd80ca7b68a32492f5c4ec19fad97`)
    .then((response)=>{
    return response.json();})
    .then((data)=>
    {
        console.log(data);
       // setCity(data);
    }),[])
    

    return (
        <div>
            <div className="location">
                <p> LOCATION:</p>
            </div>
            <div className="location">
                <div>  Wind speed:20m/s </div>     <div>   Pressure:10125h Pa</div>
            </div>
            <div className="card">
                <div>
                    <div>
                        Humidity
                    </div>
                    <div>
                        13%
                    </div>
                </div>
                <div>
                    <div>
                        Temperature
                    </div>
                    <div>
                        40°C
                    </div>
                </div>




                <div>
                    <div>
                        Visibility
                    </div>
                    <div>
                        02km
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Content
