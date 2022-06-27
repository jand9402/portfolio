import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchLanguage, getLanguage } from "../../redux/actions";
import Cards from "../Cards/Cards";
import './Home.css'


function Home(){

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
    
    <div className="contai">

{
                     language === "spanish" ?
                     <div className="container">
                     <div className="row row_language">
                         <div className="col col_languagge">
                             <div className="contenedor">
                             <button className="btn1 btn_language" onClick={e => handleClicked(e)}>Switch</button>
                             </div>
                             <p className="language_text">¿Do you want to switch to english?</p>
                             <div className="row rwo_title">
                                <div className="col col_title">
                                    <h1 className="title_home">¡BIENVENIDO!</h1>
                                    <h5 className="sub_home1">Bienvenido a mi pagina persona</h5>
                                    <h5 className="sub_home2">Aquí podrás conocer un poco mas sobre mis proyectos, habilidades, vida laboral y vida personal</h5>
                                </div>
                             </div>
                             <div className="row row_contacto">
                                <Link to="/contact">
                                <div className="col col_contacto">
                                    <button className="btn2 btn_contact">Contacto</button>
                                </div>
                                </Link>
                             </div>
                             <Cards/>
                         </div>
                     </div>
                 </div>
                   :
                   <div className="container">
                     <div className="row row_language">
                         <div className="col col_languagge">
                             <div className="contenedor">
                             <button className="btn1 btn_language" onClick={e => handleClicked(e)}>Cambiar</button>
                             </div>
                             <p className="language_text">¿Quieres cambiar a español?</p>
                             <div className="row rwo_title">
                                <div className="col col_title">
                                    <h1 className="title_home">¡WELCOME!</h1>
                                    <h5 className="sub_home1">Welcome to my personal page</h5>
                                    <h5 className="sub_home2">Here you can learn a little more about my projects, skills, work life and personal life</h5>
                                </div>
                             </div>
                             <div className="row row_contacto">
                                <Link to="/contact">
                                <div className="col col_contacto">
                                    <button className="btn2 btn_contact">Contact</button>
                                </div>
                                </Link>
                             </div>
                             <Cards/>
                         </div>
                     </div>
                 </div>



                
                    }

    
    </div>
)
}

export default Home