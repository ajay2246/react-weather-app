import Climate from "./climate";


function Weatherinfo(props){
    const style1={
        maxWidth:"350px",
        margin:"auto",
        border:"1px solid black",
        marginTop:"100px",
        height:"430px",
        borderRadius:"20px",
        backgroundColor:"white",
        boxShadow: "10px 10px 10px #9E9E9E"
    }
    return (
        <div style={style1}>
            <div style={{textAlign:"center",padding:"20px",fontSize:"20px",fontWeight:"bold"}}>React Weather App</div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div><span style={{fontSize:"22px"}}>{Math.floor(props.temp -273)} c</span>| Cloudy</div>
                <div style={{margin:"20px",textAlign:"center"}}><img src="https://cdn-icons-png.flaticon.com/128/414/414825.png" alt="img" height="80px" width="100px"/></div>
            </div>
            <div style={{textAlign:"center",padding:"10px",fontSize:"20px",fontWeight:"bold"}}>{props.name} | {props.countryname}</div>
            <div style={{textAlign:"left",padding:"20px",fontSize:"15px",fontWeight:"bold"}}>Weather info</div>
            <div style={{display:"flex",flexWrap:"wrap"}}>
            <Climate image="https://cdn-icons-png.flaticon.com/128/941/941818.png" item="visibility" value={props.visibility} />
            <Climate image="https://cdn-icons-png.flaticon.com/128/3738/3738867.png" item="wind" value={props.wind}/>
            <Climate image="https://cdn-icons-png.flaticon.com/128/3738/3738867.png" item="humidity" value={props.humidity}/>
            <Climate image="https://cdn-icons-png.flaticon.com/128/3738/3738867.png" item="pressure" value={props.pressure}/>
            </div>
        </div>
    )
}
export default Weatherinfo;