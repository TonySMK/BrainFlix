import "./CommentStyles.scss";
import CommentCard from "../commentcard/CommentCardComp.jsx";
import AvatarComp from "../../../utility_components/avatar_component/AvatarComp.jsx";
import Data from "../../../../data/video-details.json"
import Button from "../../../utility_components/button_component/ButtonComp.jsx";

export default function CommentSection() {


    return(
        <div className="commentsectionbackground">
            <div className="commentsection">
                <div className="commentform">
                    <div className="commentform__top">3 Comments</div>
                    <div className="commentform__bot">

                        <div className="commentleft">
                        <AvatarComp 
                            location="formicon"
                            icon="true"
                        />
                        </div>


                        <form className="commentright">
                            <label className="commentright__label">Join the Conversation</label>
                            <textarea className="commentright__textarea" id="message" type="text" placeholder="add a new comment" maxlength="250"></textarea>
                            <Button 
                            name="comment"
                            />
                        </form>

                    </div>
                </div>

                <div className="commentscollection">
                    <CommentCard 
                        name= {Data[0].comments[0].name}
                        message={Data[0].comments[0].comment} 
                        date={Data[0].comments[0].timestamp} 
                        />
                </div>
            </div>
        </div>
    )
}