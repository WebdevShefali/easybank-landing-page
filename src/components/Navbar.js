import React from "react";

const Navbar = (props) => {
  const{logo}=props;


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img src={logo} alt="" />
          </a>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <input type="checkbox" id="click"/>
          <label htmlFor="click"> <img id="toggleBtn"  alt=""/></label> 
        </button>
       
     
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Careers
                </a>
              </li>
            </ul>
            <form className="d-flex inviteBtn" role="search">
              <button className="btn" type="submit">
                Request Invite
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
