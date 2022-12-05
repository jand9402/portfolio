import './CardsHome.css'
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchLanguage, getLanguage } from "../../redux/actions";


export default function CardsHome() {

    const dispatch = useDispatch();
    const language = useSelector((state) => state.language);

    function handleClicked(e) {
        e.preventDefault()
        dispatch(switchLanguage())
    }

    useEffect(() => {
        getLanguage()
    }, [dispatch]);

    return (
        <>
            {
                language === "spanish" ?
                    <>
                        <div className="contenedor1">
                            <div className="container">
                                <h1 className="title_cardsHome">¿Que te gustaria ver?</h1>
                                <div className="row row_cards">
                                    <div className="col-lg-4 mt-4 col_cards">
                                    <Link className="Links" to="/about">
                                            <div class="card all_cards card_img1">
                                                <div class="card-body">
                                                    <h2 className="titulo_ver_tatuadores">Sobre mi</h2>
                                                    <p className="parrafo_ver_tatuadores">Aquí podrás aprender un poco más sobre
                                                        mí, tanto en lo profesional como personal.</p>
                                                </div>
                                            </div>
                                    </Link>
                                    </div>

                                    <div className="col-lg-4 mt-4 col_cards">
                                    <Link className="Links" to="/skills">
                                            <div class="card all_cards card_img2">
                                                <div class="card-body">
                                                    <h2 className="titulo_ver_tatuadores">Skills</h2>
                                                    <p className="parrafo_ver_tatuadores">Aquí puedes ver las tecnologías en las que tengo experiencia, si no encuentras
                                                        la que necesitas recuerda que todo se puede aprender 😉 solo hace falta un poco de tiempo.</p>
                                                </div>
                                            </div>
                                            </Link>
                                    </div>

                                    <div className="col-lg-4 mt-4 col_cards mb-5">
                                    <Link className="Links" to="/proyects">
                                            <div class="card all_cards card_img3">
                                                <div class="card-body">
                                                    <h2 className="titulo_ver_tatuadores">Portfolio</h2>
                                                    <p className="parrafo_ver_tatuadores">Aquí están los proyectos en los que he trabajado,
                                                        algunos han sido académicos otros personales y también proyectos profesionales,
                                                        tomate tu tiempo para revisarlos.</p>
                                                </div>
                                            </div>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="contenedor1">
                            <div className="container">
                                <h1 className="title_cardsHome">What you want to do?</h1>
                                <div className="row row_cards">
                                    <div className="col-lg-4 mt-4 col_cards">
                                    <Link className="Links" to="/about">
                                            <div class="card all_cards card_img1">
                                                <div class="card-body">
                                                    <h2 className="titulo_ver_tatuadores">About me</h2>
                                                    <p className="parrafo_ver_tatuadores">Here you can learn a little more about
                                                        me, both professionally and personally.</p>
                                                </div>
                                            </div>
                                            </Link>
                                    </div>

                                    <div className="col-lg-4 mt-4 col_cards">
                                    <Link className="Links" to="/skills">
                                            <div class="card all_cards card_img2">
                                                <div class="card-body">
                                                    <h2 className="titulo_ver_tatuadores">Skills</h2>
                                                    <p className="parrafo_ver_tatuadores">
                                                        Here you can see the technologies in which I have experience, if you do not
                                                        find the one you need, remember that everything can be learned 😉 it just takes
                                                        a little time.</p>
                                                </div>
                                            </div>
                                            </Link>
                                    </div>

                                    <div className="col-lg-4 mt-4 col_cards mb-5">
                                    <Link className="Links" to="/proyects">
                                            <div class="card all_cards card_img3">
                                                <div class="card-body">
                                                    <h2 className="titulo_ver_tatuadores">Portfolio</h2>
                                                    <p className="parrafo_ver_tatuadores">Here are the projects
                                                     I have worked on, some have been academic, 
                                                     others personal and also professional projects, 
                                                     take your time to review them.</p>
                                                </div>
                                            </div>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>

    )
}