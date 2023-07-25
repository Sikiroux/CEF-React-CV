import "./Contact.css"
import TitleSection from "../../component/TitleSection/TitleSection.jsx"

export default function Blog() {
    return(
        <main className="background-contact">
            
                <section className="contact-section">
                    <TitleSection 
                        title="ME CONTACTER" 
                        presentation="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."
                    />
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <section className="col-lg-6 contact-form">
                                        <h2 class="section-title">Formulaire de contact</h2>
                                        <form>
                                            <input type="text" placeholder="Votre nom" />
                                            <input type="mail" placeholder="Votre adresse email"/>
                                            <input type="tel" placeholder="Votre numéro de téléphone"/>
                                            <input type="text" placeholder="Sujet"/>
                                            <textarea name="" id="" cols="30" rows="8" placeholder="Votre message"></textarea>
                                            <button type="submit">Envoyer</button>
                                        </form>
                                    </section>
                                    <section className="col-lg-6 address-information">
                                        <h2 className="section-title">Mes coordonnées</h2>
                                        <address>
                                            <p>40 rue Laure Diebold, 69009 Lyon, France</p>
                                            <a href="tel:0620304050">06 20 30 40 50</a>
                                        </address>

                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </main>
    )
}