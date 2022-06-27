import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Personal.css'


function Skills(){

    const language = useSelector((state) => state.language);



return(
    
    <div className="contai">

{
                     language === "spanish" ?
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
                     <div className="row">
                         <div className="col">
                            <h1 className="title_personal">Vida personal</h1>
                            <p className="text_personal">Desde niño siempre fui muy activo, me gustaba jugar mucho y hacer deporte, pase por varios deportes hasta que llegue al baloncesto y me quede ahí, disfrute ser basquetbolista muchos años, recorrí casi todo el país jugando torneos y hasta tuve la oportunidad de ir a un campamento de verano de baloncesto en Estados Unidos.</p>
                            <p className="text_personal">Además del baloncesto también soy fan de la F1 desde 2019 que salió la serie de Netflix “Drive to survive”. Me enganche de inmediato y hasta el día de hoy no me he perdido un solo GP. Soy fan de McLaren, pero quiero que Hamilton logre ganar su octavo titulo y convertirse en el corredor con más campeonatos.</p>
                            <p className="text_personal">Otro gran amor son los animales, de hecho, cuando era pequeño quería ser veterinario por el amor tan grande que tengo por los animales, actualmente tengo dos perros, un pastor belga malinois y un husky que adopté cuando lo encontré amarrado abandonado en un puente.</p>
                            <p className="text_personal">Estoy casado desde febrero de 2021 y un dato muy CURIOSO es que conocí a mi esposa por Tinder, fue tan claro para nosotros y tuvimos una conexión tan grande que tan solo dos meses después de haber hecho match en Tinder nos casamos y ha sido la mejor decisión de mi vida.</p>
                            <p className="text_personal">Tengo muchos sueños en la vida, pero el más grande es ser papá, junto con mi esposa tenemos muchas ganas de ser padres pero sabemos que aun no es el momento indicado y queremos hacerlo de una forma muy responsable. Otros sueños que tengo son viajar y conocer los 5 continentes, ir a todas las carreras de F1 en un año, ir a todos los Grand slam en un año, ver a los Lakers ganar un anillo, ir a unos juegos olímpicos en Asia, vivir en una casa muy grande con mucho terreno para poder tener muchos perros, loros y quiero un gato gigante.</p>
                            <p className="text_personal">Esto es un poco de lo que soy y de mis metas, gracias por tomarte el tiempo de llegar hasta aquí, si te gusto mi perfil, mi historia, mis habilidades o simplemente tienes algo mas de curiosidad sobre mi te invito a que me contactes y podamos conversar un poco.</p>
                         </div>
                         </div>
                         <div className="row row_contacto">
                            <Link to="/contact">
                                <div className="col col_contacto">
                                    <button className="btn2 btn_contact">Contacto</button>
                                </div>
                                </Link>
                             </div>
                     
                 </div>
                   :
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
                     <div className="row">
                         <div className="col">
                            <h1 className="title_personal">Personal life</h1>
                            <p className="text_personal">Since I was a kid I was always very active, I liked to play a lot and sports, I went through several sports until I got to basketball and I stayed there, I enjoyed being a basketball player for many years, I traveled almost all over the country playing tournaments and I even had the opportunity to go to a basketball summer camp in the United States.</p>
                            <p className="text_personal">Besides basketball I am also a F1 fan since 2019 when the Netflix series "Drive to survive" came out. I was hooked immediately and to this day I haven't missed a single GP. I'm a McLaren fan, but I whis Hamilton win his 8th title and become the driver with most championships.</p>
                            <p className="text_personal">Another great love is animals, in fact, when I was a kid I wanted to be a veterinarian because of the great love I have for animals, I currently have two dogs, a Belgian Malinois shepherd and a husky I adopted when I found him tied up abandoned on a bridge.</p>
                            <p className="text_personal">I am married since February 2021 and a very CURIOUS fact is that I met my wife through Tinder, it was so clear for us and we had such a great connection that just two months after matching on Tinder we got married and it has been the best decision of my life.</p>
                            <p className="text_personal">I have many dreams in life, but the biggest one is to be a dad, together with my wife we really want to be parents but we know it's not the right time yet and we want to do it in a very responsible way. Other dreams I have are to travel and see the 5 continents, go to all the F1 races in a year, go to all Grand slams in a year, see the Lakers win a ring, go to the Olympics in Asia, live in a very big house with a lot of land so I can have many dogs, parrots and I want a giant cat.</p>
                            <p className="text_personal">This is a little bit of who I am and my goals, thanks for taking the time to get here, if you like my profile, my story, my skills or just have some more curiosity about me I invite you to contact me and we can talk a little bit.</p>
                         </div>
                         </div>
                         <div className="row row_contacto">
                            <Link to="/contact">
                                <div className="col col_contacto">
                                    <button className="btn2 btn_contact">Contact</button>
                                </div>
                             </Link>
                             </div>
                     
                 </div>



                
                    }

    
    </div>
)
}

export default Skills