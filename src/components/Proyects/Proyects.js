import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchLanguage, getLanguage } from "../../redux/actions";
import ProyectCards from "../ProyectCards/ProyectCards";
import './Proyects.css'


function Proyects(){
    const language = useSelector((state) => state.language);

    return(
        <div className="contaiSkills">
        <>
        {
                     language === "spanish" ? 
                     <div className="container">
                     
                        
                     <ProyectCards/>
                    

                        
                        </div>
                       
                     
                     :
                     <div className="container">
                     
                        
                     <ProyectCards/>
                    

                        
                        </div>
                     
                     
        }
        
        </>
        </div>

    )
}

export default Proyects