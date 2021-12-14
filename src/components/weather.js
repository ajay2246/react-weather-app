

function Weather(props){

    const style1={
        maxWidth:"400px",
        margin:"auto",
        border:"1px solid black",
        marginTop:"100px",
        height:"330px",
        borderRadius:"20px",
        backgroundColor:"white",
        boxShadow: "10px 10px 10px #9E9E9E"
    }
    return (
        <div style={style1}>
            <h3 style={{textAlign:"center"}}>React Weather App</h3>
            <div style={{margin:"20px",textAlign:"center"}}><img src="https://cdn-icons-png.flaticon.com/128/414/414825.png" alt="img" height="100px" width="150px"/></div>
            <div style={{textAlign:"center",fontSize:"20px"}}>Find Weather Of Your City</div>
            <div style={{display:"flex",justifyContent:"start",alignItems:"center",margin:"auto",maxWidth:"50%",marginTop:"30px"}}>
                <div style={{}}><input type="text" placeholder="city" value={props.city} onChange={(e)=>{props.setCity(e.target.value)}} style={{height:"35px",borderRadius:"10px",border:"1px solid black"}} /></div>
                <div style={{}}><button onClick={()=>{props.setSearch(props.city)}} style={{height:"35px",borderRadius:"10px",color:"white",backgroundColor:"black"}}>Search</button></div>
            </div>
        </div>
    )
}
export default Weather;