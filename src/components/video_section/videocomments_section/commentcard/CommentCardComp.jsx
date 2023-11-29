import "./CommentCardStyles.scss";
import AvatarComp from "../../../utility_components/avatar_component/AvatarComp.jsx"

export default function CommentCard(props){
    return(
        <div className="cardouterwrap">
            <div className="cardleft">
                <AvatarComp 
                    location="formicon"
                    icon="false"
                />
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