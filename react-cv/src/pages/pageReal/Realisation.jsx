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
            <section class="portfolio-section container">
                <div class="row">
                    <div class="col-12">
                        <div className="row portfolio-section__card-container">
                            <Card
                                class="project-card col-md-3 col-lg-4 col-sm-3"
                                title="Calculatrice"
                                image={imageCalculator}
                                imageAlt="Image du projet calculatrice"
                                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                                link="https://github.com/Sikiroux/TOP-Calculator"
                                textButton="voir"
                                footer="Site réaliser avec HTML5, CSS3, JavaScript"
                            />
                            <Card 
                                class="project-card col-md-3 col-lg-4 col-sm-3"
                                title="Admin Dashboard"
                                image={imageAdmin}
                                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                                link="https://github.com/Sikiroux/TOP-Admin-Dashboard"
                                textButton="voir"
                                footer="Site realiser avec HTML5 et CSS3"
                            />
                            <Card 
                                class="project-card col-md-3 col-lg-4 col-sm-3"
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
            </section>
        </main>
    )
}