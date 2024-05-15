import React from "react";
// import Sidebar from './Sidebar';


export default function Navbar(props) {
  const isDarkMode = props.mode === 'dark';
  return (
  
    <div>
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid d-flex justify-content-between">
        <div className="d-flex align-items-center">
          {/* <Sidebar/> */}
          <img src="logo512.png" alt="TextUtils" style={{ width:"6%", height:"3%", marginLeft: "0.2rem" }} />

          <h5 style={{ color: "red", marginLeft: "0.5rem" }}>TextUtils</h5>
          <h6 style={{ color: "gray", marginLeft: "0.7rem" }}>Home</h6>
          <h6 style={{ color: "gray", marginLeft: "0.5rem" }}>About</h6>
        </div>
        <form className="d-flex align-items-center">
          <div className={`form-check form-switch text-${isDarkMode ? 'white' : 'default'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />      
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{}}>ENABLE DARK MODE</label>
          </div>
        </form>
      </div>
    </nav>
    </div>
  );
}
