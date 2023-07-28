import { useState,useEffect } from "react";

import "./Realisation.css"

import Card from "../../component/Card/Card.jsx";
import Banner from "../../component/Banner/Banner.jsx";
import TitleSection from "../../component/TitleSection/TitleSection.jsx";
import imageCalculator from "../../asset/image/Calculator.png";
import imageAdmin from "../../asset/image/static-admin-dashboard.png";
import imageForm from "../../asset/image/TOP-signup-form.png";

export default function Realisation() {
    return(
        <main>
            {/* Banner image */}
            <Banner/>
            {/* Title section */}
            <TitleSection 
                title="PORTFOLIO" 
                presentation="Voici quelques-unes de mes réalisations."/>
            {/* Portfolio card section */}
            <section className="portfolio-section container">
                <div className="row">
                    <div className="col-12 portfolio-section__container">
                        <div className="row portfolio-section__card-container">
                            <div className="card-container__portfolio-card col-sm-6 col-md-6 col-lg-4">
                                <Card
                                    className="project-card"
                                    title="Calculatrice"
                                    image={imageCalculator}
                                    imageAlt="Image du projet calculatrice"
                                    text="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    link="https://github.com/Sikiroux/TOP-Calculator"
                                    textButton="voir"
                                    footer="Site réaliser avec HTML5, CSS3, JavaScript"
                                />
                            </div>
                            <div className="card-container__portfolio-card col-sm-6 col-md-6 col-lg-4">
                                <Card 
                                    className="project-card"
                                    title="Admin Dashboard"
                                    image={imageAdmin}
                                    text="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    link="https://github.com/Sikiroux/TOP-Admin-Dashboard"
                                    textButton="voir"
                                    footer="Site realiser avec HTML5 et CSS3"
                                />
                            </div>
                            <div className="card-container__portfolio-card col-sm-6 col-md-6 col-lg-4">
                                <Card 
                                    className="project-card"
                                    title="Signup Form"
                                    image={imageForm}
                                    text="Some quick example text to build on the card title and make up the bulk of the card's"
                                    link="https://github.com/Sikiroux/TOP-Sign-up-form"
                                    textButton="voir"
                                    footer="Site realisé avec HTML5 et CSS3"
                                />
                            </div>
                            
                            
                            
                            </div>
                    </div>
                    
                </div>
            </section>
        </main>
    )
}