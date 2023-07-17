import { Link } from 'react-router-dom'

import '../style/css/Footer.css';

import twitter from '../icon/twitter-sign.png';
import linkedin from '../icon/linkedin-logo.png';
import github from '../icon/github-sign.png';
import chevron from '../icon/chevrn.svg';

export default function Footer() {
   return(
        <footer className="footer container-fluid">
            <div className="row footer-info-container">
                <div className="col-lg-3 col-md-6 footer__info">
                    <div className="container info__container">
                        <h5>Jhon Doe</h5>
                        <address>
                        <a href="https://www.google.com/maps/place/40+Rue+Laure+
                        Diebold,+69009+Lyon/@45.778662,4.7963986,17z/data=!3m1!4b1!4m6!3m5!1
                        s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th
                        ?entry=ttu" target="_blank" rel="noreferrer" className="links">40 Rue Laure Diebold <br/>69009 Lyon, France</a>
                        <p>Téléphone: <a href="0620304050" className="links">06 20 30 40 50</a></p>
                        </address>
                        <div className="container info__logo-container">
                            <img src={github}/>
                            <img src={twitter}/>
                            <img src={linkedin}/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 footer__links">
                    <div className="container links__container">
                        <h5>Liens utiles</h5>
                        <nav className="links__nav">
                            <Link to="/" className="links"><img src={chevron} alt="chevron" class="links-chevron" />Accueil</Link>
                            <Link to="/" className="links"><img src={chevron} alt="chevron" class="links-chevron" />A propos</Link>
                            <Link to="/Services" className="links"><img src={chevron} alt="chevron" class="links-chevron" />Services</Link>
                            <Link to="/Contact" className="links"><img src={chevron} alt="chevron" class="links-chevron" />Me contacter</Link>
                            <Link to="/Legal" className="links"><img src={chevron} alt="chevron" class="links-chevron" />Mentions légales</Link>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 footer__real">
                    <div className="container real__container">
                        <h5>Mes dernière realisations</h5>
                        <nav className="real__nav">
                            <Link className="links"><img src={chevron} alt="chevron" class="links-chevron" />Real 1</Link>
                            <Link className="links"><img src={chevron} alt="chevron" class="links-chevron" />Real 2</Link>
                            <Link className="links"><img src={chevron} alt="chevron" class="links-chevron" />Real 3</Link>
                        </nav>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 footer__blog">
                    <div className="container blog__container">
                        <h5>Mes derniers articles</h5>
                        <nav className="blog__nav">
                            <Link className="links"><img src={chevron} alt="chevron" class="links-chevron" />Blog 1</Link>
                            <Link className="links"><img src={chevron} alt="chevron" class="links-chevron" />Blog 2</Link>
                            <Link className="links"><img src={chevron} alt="chevron" class="links-chevron" />Blog 3</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="row copyright-container">
                <p className="copyright-container__text">&copy; Designed by Jhon Doe</p>
            </div>
        </footer>
   )
}