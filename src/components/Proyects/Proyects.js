import React from "react";
import './Proyects.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProyectCards from "../ProyectCards/ProyectCards";


export default function Proyects() {
    const language = useSelector((state) => state.language);

    return (
        <div className="contai">
            {
                language === "spanish" ?
                    <>
                     <div className="container">
                     <div className="row">
                         <div className="col">
                             <div className="contenedor">
                             <Link to="/">
                             <button className="btn3 btn_volver">Volver</button>
                             </Link>
                             </div>
                         </div>
                     </div>
                     <ProyectCards/>
                 </div>
                    </>
                    :
                    <>
                        <div className="container">
                     <div className="row">
                         <div className="col">
                             <div className="contenedor">
                             <Link to="/">
                             <button className="btn3 btn_volver2">Go back</button>
                             </Link>
                             </div>
                         </div>
                     </div>
                     <ProyectCards/>
                 </div>
                    </>
            }
        </div>
    )
}