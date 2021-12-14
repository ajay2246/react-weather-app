

function Climate(props){
    return(
        <div style={{display:"flex",alignItems:"center",paddingLeft:"30px",marginBottom:"20px"}}>
            <div><img src={props.image} alt="icon" height="30px"/></div>
            <div style={{paddingLeft:"10px"}}>
                <div>{props.value}</div>
                <div>{props.item}</div>
            </div>
        </div>
    )
}

export default Climate
