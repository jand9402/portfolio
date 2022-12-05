import React from "react";
import './Contact.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import whatsapp from "../../assets/whatsapp.png"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"
import outlook from "../../assets/outlook.png"


export default function Contact() {
    const language = useSelector((state) => state.language);
    
    return (
        <div className="contai contai2">
            <div className="container">
        <div className="row row_cards">

{
                     language === "spanish" ? <>
                     <div className="row">
                         <div className="col">
                             <div className="contenedor">
                            
                             </div>
                         </div>
                     </div>
                     <div className="col-lg-4 mt-4 col_cards">
                   
    <a href="https://wa.link/u5kftc" target="_blank">
    <div class="card">
  <div class="card-body">
    <img className="card-img-top" src={whatsapp} alt="whatsapp"/>
  </div>
  </div>
    </a>
</div>

<div className="col-lg-4 mt-4 col_cards">
<a href="https://www.linkedin.com/in/jairo-naranjo-8b9b659a/" target="_blank">
    <div class="card">
  <div class="card-body">
  <img className="card-img-top" src={linkedin} alt="linkedin"/>
  </div>
  </div>
    </a>
</div>

<div className="col-lg-4 mt-4 col_cards">
<a href="https://www.instagram.com/jand9402/" target="_blank">
    <div class="card">
  <div class="card-body">
  <img className="card-img-top" src={instagram} alt="instagram"/>
  </div>
  </div>
    </a>
</div>


</>        :
                <>  
                <div className="row">
                         <div className="col">
                             <div className="contenedor">
                             </div>
                         </div>
                     </div>
                     <div className="col-lg-4 mt-4 col_cards">
                   
    <a href="https://wa.link/18z6ue" target="_blank">
    <div class="card">
  <div class="card-body">
    <img className="card-img-top" src={whatsapp} alt="whatsapp"/>
  </div>
  </div>
    </a>
</div>

<div className="col-lg-4 mt-4 col_cards">
<a href="https://www.linkedin.com/in/jairo-naranjo-8b9b659a/" target="_blank">
    <div class="card">
  <div class="card-body">
  <img className="card-img-top" src={linkedin} alt="linkedin"/>
  </div>
  </div>
    </a>
</div>

<div className="col-lg-4 mt-4 col_cards">
<a href="https://www.instagram.com/jand9402/" target="_blank">
    <div class="card">
  <div class="card-body">
  <img className="card-img-top" src={instagram} alt="instagram"/>
  </div>
  </div>
    </a>
</div>

</> 

                
                    }



</div>
  </div>
  </div>
   )
}