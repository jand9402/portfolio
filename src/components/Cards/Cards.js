import React from "react";
import './Cards.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Cards() {
    const language = useSelector((state) => state.language);
    
    return (
        <div className="row row_cards">

{
                     language === "spanish" ? <>
                     <div className="col-lg-6 mt-4 col_cards">
    <Link to="/proyects" className="Links LinkCards">
    <div class="card">
  <div class="card-body">
    <h3 class="card-title">Proyectos</h3>
    <p className="emojis">🛠️</p>
  </div>
  </div>
    </Link>
</div>

<div className="col-lg-6 mt-4 col_cards">
    <Link to="/skills" className="Links LinkCards">
    <div class="card">
  <div class="card-body">
    <h3 class="card-title">Habilidades</h3>
    <p className="emojis">🧠</p>
  </div>
  </div>
    </Link>
</div>

<div className="col-lg-6 mt-4 col_cards">
    <Link to="/personal" className="Links LinkCards">
    <div class="card">
  <div class="card-body">
    <h3 class="card-title">Vida personal</h3>
    <p className="emojis">🏡</p>
  </div>
  </div>
    </Link>
</div>

<div className="col-lg-6 mt-4 col_cards col_cards1">
    <Link to="/work" className="Links LinkCards">
    <div class="card">
  <div class="card-body">
    <h3 class="card-title">Experiencia laboral</h3>
    <p className="emojis">🏢</p>
  </div>
  </div>
    </Link>
</div>
</>        :
                <>  
                <div className="col-lg-6 mt-4 col_cards">
    <Link to="/proyects" className="Links LinkCards">
    <div class="card">
  <div class="card-body">
    <h3 class="card-title">Proyects</h3>
    <p className="emojis">🛠️</p>
  </div>
  </div>
    </Link>
</div>

<div className="col-lg-6 mt-4 col_cards">
    <Link to="/skills" className="Links LinkCards">
    <div class="card">
  <div class="card-body">
    <h3 class="card-title">Skills</h3>
    <p className="emojis">🧠</p>
  </div>
  </div>
    </Link>
</div>

<div className="col-lg-6 mt-4 col_cards">
    <Link to="/personal" className="Links LinkCards">
    <div class="card">
  <div class="card-body">
    <h3 class="card-title">Personal Life</h3>
    <p className="emojis">🏡</p>
  </div>
  </div>
    </Link>
</div>

<div className="col-lg-6 mt-4 col_cards col_cards1">
    <Link to="/work" className="Links LinkCards">
    <div class="card">
  <div class="card-body">
    <h3 class="card-title">Work experience</h3>
    <p className="emojis">🏢</p>
  </div>
  </div>
    </Link>
</div>

</> 

                
                    }



  
  </div>
   )
}