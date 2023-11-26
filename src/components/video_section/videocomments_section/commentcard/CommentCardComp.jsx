export default function CommentCard(props){
    return(
        <div className="cardouterwrap">
            <div className="cardleft">
                <div className="avatarcontainer"></div>
            </div>

            <div className="cardright">
                <div className="cardright__top">
                    <div className="cardright__top__name">{props.name}</div>
                    <div className="cardright__top__date">{props.date}</div>
                </div>

                <div className="cardright__mid">{props.message}</div>
            </div>
        </div>
    );
}