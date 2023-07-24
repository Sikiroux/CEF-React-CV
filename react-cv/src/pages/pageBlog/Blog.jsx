import "./Blog.css"

import Banner from "../../component/Banner/Banner.jsx";
import TitleSection from "../../component/TitleSection/TitleSection.jsx";
import Card from "../../component/Card/Card.jsx";



export default function Blog() {
    console.log("blog");
    return(
        <main>
            <Banner/>
        <TitleSection
            title="Blog"
            presentation="Retrouvez ici quelques articles sur le développement web."
        />
        <section className="blog-section container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="row blogcard-container">
                        <Card
                            class="blog-card"
                            sm="col-sm-3"
                            md="col-md-5"
                            lg="col-lg-3"
                            title="Coder son site en HTML/CSS"
                            textButton="Lire la suite"
                            footer={<time dateTime="2022-08-22">Publié le 22 août 2022</time>}
                        />
                        <Card
                            class="blog-card"
                            sm="col-sm-3"
                            md="col-md-5"
                            lg="col-lg-3"
                            title="Vendre ses produits sur le web"
                            textButton="Lire la suite"
                            footer={<time dateTime="2022-08-20">Publié le 20 août 2022</time>}
                        />
                        <Card
                            class="blog-card"
                            sm="col-sm-3"
                            md="col-md-5"
                            lg="col-lg-3"
                            title="Se positionner sur Google"
                            textButton="Lire la suite"
                            footer={<time dateTime="2022-08-1">Publié le 1 août 2022</time>}
                        />
                        <Card
                            class="blog-card"
                            sm="col-sm-3"
                            md="col-md-5"
                            lg="col-lg-3"
                            title="Coder en responsive design"
                            textButton="Lire la suite"
                            footer={<time dateTime="2022-07-31">Publié le 31 juillet 2022</time>}
                        />
                        <Card
                            class="blog-card"
                            sm="col-sm-3"
                            md="col-md-5"
                            lg="col-lg-3"
                            title="Techniques de référencement"
                            textButton="Lire la suite"
                            footer={<time dateTime="2022-07-30">Publié le 30 juillet 2022</time>}
                        />
                        <Card
                            class="blog-card"
                            sm="col-sm-3"
                            md="col-md-5"
                            lg="col-lg-3"
                            title="Aprendre à coder"
                            textButton="Lire la suite"
                            footer={<time dateTime="2022-07-12">Publié le 12 juillet 2022</time>}
                        />
                    </div>
                </div>
            </div>
        </section>
        
        </main>
    )
}