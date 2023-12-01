import "./CommentCardStyles.scss";
import AvatarComp from "../../../utility_components/avatar_component/AvatarComp.jsx"

export default function CommentCard(props){
    let commentlist = props.comms
    
    let card = commentlist.map(comment =>
        <div key={comment.id} className="cardouterwrap">
            <div className="cardleft">
            <AvatarComp 
                location="formicon"
                icon="false"
            />
            </div>

            <div className="cardright">
                <div className="cardright__top">
                    <div className="cardright__top__name">{comment.name}</div>
                    <div className="cardright__top__date">{comment.timestamp}</div>
                </div>

                <div className="cardright__mid">{comment.comment}</div>
            </div>
        </div>);

    return(
        <>{card}</>
    );
}