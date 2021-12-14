
import Weather from "./components/weather";
import Weatherinfo from "./components/weatherinfo";
import {useState,useEffect} from 'react';


function App() {

  const [city,setCity] = useState("london")
  const [search,setSearch] = useState("london")
  const [data,setData] = useState({})

  useEffect(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f85e645f254d4a096664e880bb4b587e`)
      .then((res)=>{
          return res.json();
      }).then((resp)=>{
          setData(resp)
          console.log(resp)
          
      }).catch((err)=>{console.log(err)})
      setCity("")
      
  },[search])
  return (
    <div >
      {
        data?(
          <div>
          <Weather city={city} setCity={setCity} setSearch={setSearch}/>
          <Weatherinfo name={data.name} wind={data.wind?.speed} humidity={data.main?.humidity} pressure={data.main?.pressure} countryname={data.sys?.country} temp={data.main?.temp} visibility={data.visibility}/>
          </div>
        ):(
          <div>is loading...</div>
        )
      }
      
      
    </div>
  );
}

export default App;



