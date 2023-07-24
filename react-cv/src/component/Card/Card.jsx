export default function Card(props) {
    const cardClass = `card ${props.class}`;
    return(
        <div className={cardClass} style={{width: "18rem"}}>
            <img className="card-img-top" src={props.image} alt={props.imageAlt}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <button className="card-button"><a href={props.link} target="_blank" rel="noreferrer">{props.textButton}</a></button>
            </div>
            <div className="card-footer">
                <p>{props.footer}</p>
            </div>
        </div>
    )
}