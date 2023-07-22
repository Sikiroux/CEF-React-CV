export default function Card(props) {
    return(
        <div className={"card "+ props.class +" "+ props.md +" "+ props.lg +" "+ props.sm} style={{width: "18rem"}}>
            <img class="card-img-top" src={props.image} alt={props.imageAlt}/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <button class="card-button"><a href={props.link} target="_blank" rel="noreferrer">{props.textButton}</a></button>
            </div>
            <div class="card-footer">
                <p>{props.footer}</p>
            </div>
        </div>
    )
}