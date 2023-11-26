export default function NextVideoCard (props) {
    return(
        <section className="nxtvideocard">
            <img className="nxtvideocard__thumbnail" src={props.url} alt="somealt"/>
            <div className="nxtvideocard__info">
                <div className="title">{props.title}</div>
                <div className="author">{props.channel}</div>
            </div>
        </section>
    )
}