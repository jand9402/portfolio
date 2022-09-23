import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchLanguage, getLanguage } from "../../redux/actions";
import CardsHome from "../CardsHome/CardsHome"
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
                     <>
                     <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                         <div className="carousel-inner">
                             <div className="carousel-item active">
                                 <h1 className='text_banner1'>¡Bienvenido a mi portfolio!</h1>
                                 <h3 className='sub_banner1'>¿Quieres cambiar de idioma?</h3>
                                 <button className='btn_banner1' onClick={e => handleClicked(e)}>Switch to English</button>
                                 
                             </div>
                         </div>
                     </div>
                     <CardsHome />
                 </>
                   :
                   <>
                     <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                         <div className="carousel-inner">
                             <div className="carousel-item active">
                                 <h1 className='text_banner1'>¡Welcome to my portfolio!</h1>
                                 <h3 className='sub_banner1'>Do you want to change language?</h3>
                                 <button className='btn_banner1' onClick={e => handleClicked(e)}>Switch to Spanish</button>
                                 
                             </div>
                         </div>
                     </div>
                     <CardsHome />
                 </>



                
                    }

    
    </div>
)
}

export default Home