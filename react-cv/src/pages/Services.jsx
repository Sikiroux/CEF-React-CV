import '../style/css/Service.css';
import ux from '../icon/rdesktop.svg';
import code from '../icon/rcode.svg';
import seo from '../icon/rsearch.svg';
import techno from '../image/geo.jpg';

export default function Blog() {
    return(
        <main>
            <div class="image-header"></div>
            <div className="container main__title-container">
                <h1>MON OFFRE DE SERVICES</h1>
                <p>Voici les prestations sur lesquelles je peux intervenir</p>
                <div className="small-border"></div>
            </div>

            <div className="row container-fluid main__services-container ">
                <div className="col-lg-3 col-md-3 col-sm-4 services-container__ux gx-4">
                    <img className="logo ux-design-logo" src={ux} alt="ux-icon"/>
                    <h2>UX DESIGN</h2>
                    <p>L'<strong>UX Design</strong> est une méthode de <br/>conception
                    centréer sur l'utilisateur. Son but <br/>est d'offrir une expérience
                    de navigation <br/> optimale à l'internaute.</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 services-container__dev-web gx-4">
                    <img className="logo dev-web-logo" src={code} alt="web-dev-icon"/>
                    <h2>DEVELOPPEMENT WEB</h2>
                    <p>Le <strong>développement de site web</strong> repose sur <br/>l'utilisation
                    des langages HTML, CSS, <br/>JavaScript et PHP.</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 services-container__seo gx-4">
                    <img className="logo seo-logo" src={seo} alt="seo-icon"/>
                    <h2>UX DESIGN</h2>
                    <p>Le <strong>référencement naturel d'un site</strong>, aussi <br/>appelé
                    SEO, consiste à mettre des <br/>techniques en oeuvre pour améliorer sa<br/>
                    position dans les résultats des moteurs de <br/>recherche.</p>
                </div>
            </div>
        </main>
    )
}