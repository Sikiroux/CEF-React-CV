import "./Legal.css"
import TitleSection from "../../component/TitleSection/TitleSection.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faMobileScreen,faEnvelope,faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Legal() {
    return(
        <main>
            <TitleSection title="MENTIONS LEGALES"/>
            <section className="container">
                <div className="row">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item editor">
                            <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Editeur du site
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h2>John Doe</h2>
                                <address className="editor-address">
                                    <p> <FontAwesomeIcon icon={faLocationDot}/> 40 Rue Laure Diebold <br/> 69009 Lyon, France</p>
                                    <FontAwesomeIcon icon={faMobileScreen}/> <a href="tel:0620304050" className="editor-address__phone">06 20 30 40 50</a><br/>
                                    <FontAwesomeIcon icon={faEnvelope}/> <a href="mailto:john.doe@gmail.com" className="editor-address__mail">jhon.doe@gmail.com</a>
                                </address>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item host">
                            <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Hébergeur
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h2>Always Data</h2>
                                <address className="host-address">
                                    <p>91 rue du Faubourg Saint Honoré <br/> 75008 Paris</p>
                                    <FontAwesomeIcon icon={faGlobe}/> <a href="www.alwaysdata.com" className="host-address__website">www.alwaysdata.com</a>
                                </address>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item credits">
                            <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Crédits
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h2>Crédits</h2>
                                <p className="text-one">Site développé par Jhon Doe, étudiant du CEF.</p>
                                <br/>
                                <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/">Pixabay.</a></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}