import {Link, NavLink} from "react-router-dom";

import './Header.css'

export default function Header() {
    function changeStyleLink() {
      document.addEventListener("DOMContentLoaded", () => {
        
      })

      // let nav = document.querySelector(".navbar-nav");
      // let linksNav = nav.querySelectorAll("nav-link");
      // console.log(linksNav);

      // linksNav.forEach(link => {
      //   link.addEventListener("click",() => {
      //     linksNav.forEach(link => {
      //       link.classList.remove("active");
      //     })
      //     link.classList.add("active");
      //   })
      // })
    }

    changeStyleLink();

    return(
        <header>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">JOHN DOE</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <NavLink className="nav-link " to="/">ACCUEIL</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="nav-link" to="/Services">SERVICES</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="nav-link" to="/Realisation">REALISATION</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="nav-link" to="/Blog">BLOG</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/Contact">ME CONTACTER</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
    )
}