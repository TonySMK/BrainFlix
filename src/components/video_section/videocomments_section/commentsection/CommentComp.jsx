import "./CommentStyles.scss";
import CommentCard from "../commentcard/CommentCardComp.jsx";
import AvatarComp from "../../../utility_components/avatar_component/AvatarComp.jsx";
import Button from "../../../utility_components/button_component/ButtonComp.jsx";

export default function CommentSection(props) {
    console.log(props.comments)


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
                    comms = {props.comments}/>
                </div>
            </div>
        </div>
    )
}