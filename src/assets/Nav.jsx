import react from "react";
import logo from "./react.svg";
const Nav=() =>{

  const mystyle = {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    textDecoration: "none",
    fontSize: "23px",
    marginLeft : "500px",
    marginTop:"3px",
      gap:"80px",

  };
  const logstyle={
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    marginTop:"30px"
  };
  return (
    <div className="nav">
        <img style={logstyle} src={logo} />
        <ul style={mystyle}>
          <li>
            <a href=" ">Home</a>
          </li>
          <li>
            <a href=" ">News</a>
          </li>
          <li>
            <a href=" ">Contact</a>
          </li>
          <li>
            <a href=" ">About</a>
          </li>
        </ul>
      </div>
      );
    }

export default Nav;
