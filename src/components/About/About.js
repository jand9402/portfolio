import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchLanguage, getLanguage } from "../../redux/actions";
import './About.css'


function About(){

    return(
        <>
        <h1>About me</h1>
        </>
    )
}

export default About