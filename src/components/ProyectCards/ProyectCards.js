import React from "react";
import './ProyectCards.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import sempaq from "../../assets/sempaq.png" 
import jungle from "../../assets/jungle.png" 
import ecommerce from "../../assets/ecommerce.png" 
import basket from "../../assets/basket.png" 


export default function ProyectCards() {
    const language = useSelector((state) => state.language);

    return (
        <div className="row row_cards">

            {
                language === "spanish" ? <>
                    <div className="col-lg-12 mt-4 col_cards">
                        <div class="card card_proyects">
                            <div class="card-body">
                                <a href="https://jand9402.github.io/src/public/" target="_blank">
                                <img class="card-img-top" src={sempaq} alt="sempaq"/>
                                </a>
                        <p className="card-text">Este fue mi primer proyecto, es una landing page que construí con HTML y Bootstrap, también tiene integrado Nodemailer.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 mt-4 col_cards">
                        <div class="card card_proyects">
                            <div class="card-body">
                                <a href="https://pruebajungleboxjaironaranjo.000webhostapp.com/" target="_blank">
                                <img class="card-img-top" src={jungle} alt="jungle"/>
                                </a>
                        <p className="card-text">Esta es otra landing page, esta vez creada con PHP y la función de correos implementada con mail() de PHP</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 mt-4 col_cards">
                        <div class="card card_proyects">
                            <div class="card-body">
                                <a href="https://front-sigma-three.vercel.app/" target="_blank">
                                <img class="card-img-top" src={ecommerce} alt="ecommerce"/>
                                </a>
                        <p className="card-text">Este e-commerce es hasta ahora mi proyecto mas grande, fue creado para el proyecto final de Bootcamp de Soy Henry, junto con otros 4 compañeros estuvimos trabajando por tres semanas en este proyecto donde se implementó React.js, Redux, HTML, CSS, Bootstrap, Sweetalert, Node.js, MongoDB, Stripe. Mi participación en este proyecto fue enteramente en el lado del Front, me encargué del carrito de compras y el checkout, estuve ayudando con las vistas y funciones de las paginas de detalle y algunos temas en el panel del administrador </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 mt-4 col_cards mb-5">
                        <div class="card card_proyects">
                            <div class="card-body">
                                <a href="https://basket-colombia.vercel.app/" target="_blank">
                                <img class="card-img-top" src={basket} alt="basket"/>
                                </a>
                        <p className="card-text">Este es mi proyecto personal, como buen amante del baloncesto estoy construyendo un sitio web donde pueda integrar toda la comunidad del baloncesto de Colombia, igualmente construida con React.js se encuentra aun en desarrollo. </p>
                            </div>
                        </div>
                    </div>
                </> :
                    <>  
                    <div className="col-lg-12 mt-4 col_cards">
                        <div class="card card_proyects">
                            <div class="card-body">
                                <a href="https://jand9402.github.io/src/public/" target="_blank">
                                <img class="card-img-top" src={sempaq} alt="sempaq"/>
                                </a>
                        <p className="card-text">This was my first project, it's a landing page that I built with HTML and Bootstrap, it also has Nodemailer integrated.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 mt-4 col_cards">
                        <div class="card card_proyects">
                            <div class="card-body">
                                <a href="https://pruebajungleboxjaironaranjo.000webhostapp.com/" target="_blank">
                                <img class="card-img-top" src={jungle} alt="jungle"/>
                                </a>
                        <p className="card-text">This is another landing page, this time created with PHP and the mail function implemented with mail().</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 mt-4 col_cards">
                        <div class="card card_proyects">
                            <div class="card-body">
                                <a href="https://front-sigma-three.vercel.app/" target="_blank">
                                <img class="card-img-top" src={ecommerce} alt="ecommerce"/>
                                </a>
                        <p className="card-text">This e-commerce is my biggest project so far, it was created for Soy Henry's final Bootcamp project, along with 4 other colleagues we were working for three weeks on this project where React.js, Redux, HTML, CSS, Bootstrap, Sweetalert, Node.js, MongoDB, Stripe. My participation in this project was entirely on the Front side, I was in charge of the shopping cart and the checkout, I was helping with the views and functions of the detail pages and some themes in the administrator panel.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 mt-4 col_cards mb-5">
                        <div class="card card_proyects">
                            <div class="card-body">
                                <a href="https://basket-colombia.vercel.app/" target="_blank">
                                <img class="card-img-top" src={basket} alt="basket"/>
                                </a>
                        <p className="card-text">This is my personal project, as a good basketball lover I am building a website where I can integrate the entire Colombian basketball community, also built with React.js is still under development. </p>
                            </div>
                        </div>
                    </div>
                    </>


            }




        </div>
    )
}