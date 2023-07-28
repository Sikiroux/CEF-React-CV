import './Service.css';
import ux from '../../asset/icon/rdesktop.svg';
import code from '../../asset/icon/rcode.svg';
import seo from '../../asset/icon/rsearch.svg';
import techno from '../../asset/image/geo.jpg';

import Banner from "../../component/Banner/Banner.jsx";
import TitleSection from "../../component/TitleSection/TitleSection.jsx";

export default function Blog() {
    return(
        <main>
            <Banner/>
            <TitleSection title="MON OFFRE DE SERVICES" presentation="Voici les prestations sur lesquelles je peux intervenir"/>
            <div className="container main__services-container ">
                <div className="row">
                    <div className="col-12">
                        <div className= "row services-container">
                            {/* Card 1 */}
                            <div className="col-sm-8 col-md-4 col-lg-4 services-card">
                                <div className=" services-container__ux">
                                    <img className="logo ux-design-logo" src={ux} alt="ux-icon"/>
                                    <h2>UX DESIGN</h2>
                                    <p>L'<strong>UX Design</strong> est une méthode de <br/>conception
                                    centréer sur l'utilisateur. Son but <br/>est d'offrir une expérience
                                    de navigation <br/> optimale à l'internaute.</p>
                                </div>
                            </div>                                          
                            {/* Card 2 */}
                            <div className="col-sm-8 col-md-4 col-lg-4 services-card">
                                <div className="services-container__dev-web">
                                    <img className="logo dev-web-logo" src={code} alt="web-dev-icon"/>
                                    <h2>DEVELOPPEMENT WEB</h2>
                                    <p>Le <strong>développement de site web</strong> repose sur <br/>l'utilisation
                                    des langages HTML, CSS, <br/>JavaScript et PHP.</p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="col-sm-8 col-md-4 col-lg-4 services-card">
                                <div className="services-container__seo">
                                    <img className="logo seo-logo" src={seo} alt="seo-icon"/>
                                    <h2>UX DESIGN</h2>
                                    <p>Le <strong>référencement naturel d'un site</strong>, aussi <br/>appelé
                                    SEO, consiste à mettre des <br/>techniques en oeuvre pour améliorer sa<br/>
                                    position dans les résultats des moteurs de <br/>recherche.</p>
                                </div>
                            </div>
                        
                        
                        
                        </div>
                    </div>
                </div>
                
            </div>
        </main>
    )
}