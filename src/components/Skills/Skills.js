import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import redux from "../../assets/redux.png"
import react from "../../assets/react.png"
import javascript from "../../assets/javascript.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import bootstrap from "../../assets/bootstrap.png"
import sql from "../../assets/sql.png"
import node from "../../assets/node.png"
import vacio from "../../assets/vacio.png"
import star from "../../assets/star.png"
import './Skills.css'


function Skills(){

    const language = useSelector((state) => state.language);



return(
    
    <div className="contaiSkills">

{
                     language === "spanish" ?
                     <div className="container">
                        <div className="row">
                         <div className="col">
                         </div>
                     </div>
                     <div className="row row_skills">
                        <div className="col-lg-6 mt-4 col_skils">
                            <h1 className="skilss_title">Habilidades técnicas</h1>
                            <div className="tech_list">
                            <ul className="list-group">
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={javascript} alt="javascrips logo"/><h2 className="skills_text">Javascript</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={html} alt="html logo"/><h2 className="skills_text">HTML</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={css} alt="css logo"/><h2 className="skills_text">CSS</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={react} alt="react logo"/><h2 className="skills_text">React.js</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={redux} alt="redux logo"/><h2 className="skills_text">Redux</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={bootstrap} alt="bootstrap logo"/><h2 className="skills_text">Bootstrap</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={sql} alt="sql logo"/><h2 className="skills_text">SQL</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={node} alt="node logo"/><h2 className="skills_text">Node.js</h2></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 col_skils">
                            <h1 className="skilss_title">Habilidades blandas</h1>
                            <div className="tech_list">
                            <ul className="list-group">
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={star} alt="soft skill"/><h2 className="skills_text">Resolución de problemas</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={star} alt="soft skill "/><h2 className="skills_text">Trabajo en equipo</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={star} alt=" soft skill"/><h2 className="skills_text">Comunicación clara</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={star} alt=" soft skill"/><h2 className="skills_text">Gestión del tiempo </h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={vacio} alt=" soft skill"/><h2 className="skills_text">Adaptación al cambio</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={vacio} alt="soft skill "/><h2 className="skills_text">Empatia</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={vacio} alt=" soft skill"/><h2 className="skills_text">Actitud positiva</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={vacio} alt=" soft skill"/><h2 className="skills_text">Resiliencia</h2></li>
                                </ul>
                            </div>
                        </div>
                        
                     </div>
                 </div>
                   :
                   <div className="container">
                        <div className="row">
                         <div className="col">
                             
                         </div>
                     </div>
                     <div className="row row_skills">
                        <div className="col-lg-6 mt-4 col_skils">
                            <h1 className="skilss_title">Tech skills</h1>
                            <div className="tech_list">
                            <ul className="list-group">
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={javascript} alt="javascrips logo"/><h2 className="skills_text">Javascript</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={html} alt="html logo"/><h2 className="skills_text">HTML</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={css} alt="css logo"/><h2 className="skills_text">CSS</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={react} alt="react logo"/><h2 className="skills_text">React.js</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={redux} alt="redux logo"/><h2 className="skills_text">Redux</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={bootstrap} alt="bootstrap logo"/><h2 className="skills_text">Bootstrap</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={sql} alt="sql logo"/><h2 className="skills_text">SQL</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={node} alt="node logo"/><h2 className="skills_text">Node.js</h2></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 col_skils">
                            <h1 className="skilss_title">Soft skills</h1>
                            <div className="tech_list">
                            <ul className="list-group">
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={star} alt="soft skill"/><h2 className="skills_text">Problem solving</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={star} alt="soft skill "/><h2 className="skills_text">Team work</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={star} alt=" soft skill"/><h2 className="skills_text">Assertive communication</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={star} alt=" soft skill"/><h2 className="skills_text">Time management </h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={vacio} alt=" soft skill"/><h2 className="skills_text">Adaptation to change</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={vacio} alt="soft skill "/><h2 className="skills_text">Empathy</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={vacio} alt=" soft skill"/><h2 className="skills_text">Positive attitude</h2></li>
                                    <li className="list-group-item d-flex"><img className="logo_skills" src={vacio} alt=" soft skill"/><h2 className="skills_text">Resilience</h2></li>
                                </ul>
                            </div>
                        </div>
                        
                     </div>
                 </div>



                
                    }

    
    </div>
)
}

export default Skills