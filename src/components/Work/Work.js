import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import sabaneta1 from "../../assets/sabaneta1.png"
import sabaneta2 from "../../assets/sabaneta2.png"
import solvo1 from "../../assets/solvo1.png"
import solvo2 from "../../assets/solvo2.png"
import findink1 from "../../assets/findink1.png"
import findink2 from "../../assets/findink2.png"

import './Work.css'


function Work(){

    const language = useSelector((state) => state.language);



return(
    
    <div className="contai">

{
                     language === "spanish" ?
                     <div className="container">
                        <div className="row mb-5">
                         <div className="col">
                             <div className="contenedor">
                             <Link to="/">
                             <button className="btn3 btn_volver2">Volver</button>
                             </Link>
                             </div>
                         </div>
                     </div>
                     <div className="row ">
                         <div className="col mb-5">
                         <h1 className="skilss_title mb-5">Experiencia laboral</h1>
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={sabaneta1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={solvo1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={findink1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
                      
                 </div>
                   :
                   <div className="container">
                        <div className="row mb-5">
                         <div className="col">
                             <div className="contenedor">
                             <Link to="/">
                             <button className="btn3 btn_volver2">Go Back</button>
                             </Link>
                             </div>
                         </div>
                     </div>
                     <div className="row ">
                         <div className="col mb-5">
                         <h1 className="skilss_title mb-5">Work experience</h1>
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={sabaneta2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={solvo2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={findink2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
                      
                 </div>



                
                    }

    
    </div>
)
}

export default Work