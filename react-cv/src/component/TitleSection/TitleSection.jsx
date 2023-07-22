import "./TitleSection.css"

export default function TitleSection(props) {
    return(
        <section className="container title-section">
                <h1>{props.title}</h1>
                <p>{props.presentation}</p>
                <div className="small-border"></div>
        </section>
    )
}