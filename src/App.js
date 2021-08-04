import React, {useState } from 'react';
import './component/style.css';
import {WeatherContext} from "./helpers/context";
import Content from './component/weather';
import Nav from './component/search';


function App() {
  const[city,setCity]=useState("")
  const[showdata,setshowdata]=useState(false)
  return (
    <div className="App">
      <WeatherContext.Provider value={{city,setCity,showdata,setshowdata}}>
        <Nav/>
        {showdata && <Content />}
       </WeatherContext.Provider>
    </div>
  )
}

export default App



