import "./NextVideoCardStyles.scss"

export default function NextVideoCard (props) {
    let listofvideo = props.data
    console.log(listofvideo[0].id)

    function somefuncitons(e){
        alert("you click a video tab"+e.target)
    }
    let tabs = listofvideo.map(video =>
        <section key={video.id} className="nxtvideocard" onClick={somefuncitons}>
            <div className="nxtvideocard__thumbnailcontainer">
                <img className="thumbnail_image" src={video.image} alt="somealt"/>
            </div>
            <div className="nxtvideocard__info">
                <div className="title">{video.title}</div>
                <div className="author">{video.channel}</div>
            </div>
        </section>
        );

    return(
        <>{tabs}</>
    )
}