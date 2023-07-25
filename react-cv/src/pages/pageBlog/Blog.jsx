import "./Blog.css"

import Banner from "../../component/Banner/Banner.jsx";
import TitleSection from "../../component/TitleSection/TitleSection.jsx";
import Card from "../../component/Card/Card.jsx";



export default function Blog() {
    return(
    <main>
        {/* Banner component */}
        <Banner/>
        <TitleSection
            title="Blog"
            presentation="Retrouvez ici quelques articles sur le développement web."
        />
        <section className="blog-section container">
            <div className="row">
                <div className="col-12">
                    {/* Card container */}
                    <div className="row blogcard-container">
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 blogcard-container__card-container">
                            <Card 
                                class="blog-card"
                                title="Coder son site en HTML/CSS"
                                text="Some quick example text to build on the card title and make up the bulk of the card's content"
                                textButton="Lire la suite"
                                footer={<time dateTime="2022-08-22">Publié le 22 août 2022</time>}
                            />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 blogcard-container__card-container">
                            <Card
                                class="blog-card"
                                title="Vendre ses produits sur le web"
                                text="Some quick example text to build on the card title and make up the bulk of the card's content"
                                textButton="Lire la suite"
                                footer={<time dateTime="2022-08-20">Publié le 20 août 2022</time>}
                            />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 blogcard-container__card-container">
                            <Card
                                class="blog-card"
                                title="Se positionner sur Google"
                                text="Some quick example text to build on the card title and make up the bulk of the card's content"                                textButton="Lire la suite"
                                footer={<time dateTime="2022-08-1">Publié le 1 août 2022</time>}
                            />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 blogcard-container__card-container">
                            <Card
                                class="blog-card"
                                title="Coder en responsive design"
                                text="Some quick example text to build on the card title and make up the bulk of the card's content"
                                textButton="Lire la suite"
                                footer={<time dateTime="2022-07-31">Publié le 31 juillet 2022</time>}
                            /> 
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 blogcard-container__card-container">
                            <Card
                                class="blog-card"
                                title="Techniques de référencement"
                                text="Some quick example text to build on the card title and make up the bulk of the card's content"
                                textButton="Lire la suite"
                                footer={<time dateTime="2022-07-30">Publié le 30 juillet 2022</time>}
                            />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 blogcard-container__card-container">
                            <Card
                                class="blog-card"
                                title="Aprendre à coder"
                                text="Some quick example text to build on the card title and make up the bulk of the card's content"
                                textButton="Lire la suite"
                                footer={<time dateTime="2022-07-12">Publié le 12 juillet 2022</time>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}