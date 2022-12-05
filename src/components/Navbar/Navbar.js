import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchLanguage, getLanguage } from "../../redux/actions";
import "./Navbar.css"
import jn from "../../assets/JN.png"

function Navbar(){
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language);

    function handleClicked (e) {
        e.preventDefault()
        dispatch(switchLanguage()) 
    }

    useEffect(() => {
        getLanguage()
      }, [dispatch]);
return(
    <>
    
                     {language === "spanish" ?
                     <nav className="navbar navbar-expand-lg ">
                     <div className="container-fluid">
                       <Link to="/">
                       <a className="navbar-brand" href="#"><img className="logoNav" src={jn} alt="logo"/></a>
                       </Link>
                       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon navbar-toggler-icon-nav"></span>
                       </button>
                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                             <Link className="Links" to="/">
                             <a className="nav-link active" aria-current="page">Inicio</a>
                             </Link>
                           </li>
                           <li className="nav-item">
                           <Link className="Links" to="/about">
                             <a className="nav-link">Sobre mi</a>
                           </Link>
                           </li>
                           <li className="nav-item dropdown">
                           <Link className="Links" to="/skills">
                             <a className="nav-link">Skills</a>
                             </Link>
                           </li>
                           <li className="nav-item">
                             <Link className="Links" to="/proyects">
                             <a className="nav-link active" aria-current="page">Portfolio</a>
                             </Link>
                           </li>
                           <li className="nav-item">
                             <Link className="Link" to="/contact">
                             <a className="nav-link active">Contacto</a>
                             </Link>
                           </li>
                         </ul>
                         <form className="d-flex" role="search">
                           {/* <input className="form-control me-2" type="search" placeholder="Buscar mi tatuador" aria-label="Search"/>
                           <button className="btn btn-search btn-outline-success" type="submit">Buscar</button> */}
                         </form>
                       </div>
                     </div>
                   </nav>
                   :
                   <nav className="navbar navbar-expand-lg ">
                   <div className="container-fluid">
                     <Link to="/">
                     <a className="navbar-brand" href="#"><img className="logoNav" src={jn} alt="logo"/></a>
                     </Link>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon navbar-toggler-icon-nav"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                         <li className="nav-item">
                           <Link className="Links" to="/">
                           <a className="nav-link active" aria-current="page">Home</a>
                           </Link>
                         </li>
                         <li className="nav-item">
                         <Link className="Links" to="/about">
                           <a className="nav-link">About me</a>
                         </Link>
                         </li>
                         <li className="nav-item dropdown">
                         <Link className="Links" to="/skills">
                           <a className="nav-link">Skills</a>
                           </Link>
                         </li>
                         <li className="nav-item">
                           <Link className="Links" to="/proyects">
                           <a className="nav-link active" aria-current="page">Portfolio</a>
                           </Link>
                         </li>
                         <li className="nav-item">
                           <Link className="Link" to="/contact">
                           <a className="nav-link active">Contact</a>
                           </Link>
                         </li>
                       </ul>
                       <form className="d-flex" role="search">
                         {/* <input className="form-control me-2" type="search" placeholder="Buscar mi tatuador" aria-label="Search"/>
                         <button className="btn btn-search btn-outline-success" type="submit">Buscar</button> */}
                       </form>
                     </div>
                   </div>
                 </nav>}
                    
    

</>
)
}

export default Navbar