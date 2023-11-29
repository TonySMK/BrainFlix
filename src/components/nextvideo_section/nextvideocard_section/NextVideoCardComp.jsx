import "./NextVideoCardStyles.scss"

export default function NextVideoCard (props) {
    return(
        <section className="nxtvideocard">

            <div className="nxtvideocard__thumbnailcontainer">
                <img className="thumbnail_image" src={props.url} alt="somealt"/>
            </div>

            <div className="nxtvideocard__info">
                <div className="title">{props.title}</div>
                <div className="author">{props.channel}</div>
            </div>

        </section>
    )
}