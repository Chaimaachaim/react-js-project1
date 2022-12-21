          import react from "react";
import img from "./header-image.4a431212.svg";

const Body =()=>{ 
    
const bdstyle= {
    fontFamily:"Nunito,sans-serif",
    fontSize:"3rem",
    marginTop :"140px",
    marginLeft : "80px",
    color:"dimgrey"

};
const pstyle={
    fontFamily:"Nunito,sans-serif",
    paddingTOP:"10px",
    paddingLeft:"100px",
    color:"grey",
}; const btnstyle={
  marginLeft:"100px",
   color:" rgb(255, 255, 255)",
  cursor: "pointer",
  padding:"10px 30px" ,
  borderRadius: "30px 0px 30px 30px",
  background:" rgb(56, 66, 77)",
  fontFamily:"Nunito,sans-serif",
  fontSize:"18px",
};const imgstyle={
 marginLeft:"100",
 marginTOP:" 12px",
 
}


      return(
        <div className="body">
        <h1 style={bdstyle}>
        Creative Multipurpose <br></br> Website 
        <span style={{color:"rgb(249, 79, 79"}}>Template</span>
     </h1>
     <p style={pstyle}>Lorem ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy<br></br>  eirmod tempor invidunt ut labore et dolore magna., </p>
     <button style={btnstyle} >Get started</button>
     <div>
     <img src={img} style= {imgstyle}/>
     </div>
       </div>


      )
}
export default Body;