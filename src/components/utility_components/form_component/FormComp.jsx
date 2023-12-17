import "./_FormStyles.scss";
import Button from "../button_component/ButtonComp";
import { v4 as uuidv4 } from 'uuid'

export default function FormComp({onClickDataHandler}) {

  return (
    <form className="commentright" >
      <label className="commentright__label">Join the Conversation</label>
      <textarea
        className="commentright__textarea"
        id="message"
        name="content"
        type="text"
        placeholder="Add a new comment"
        maxLength="250"
        // onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <Button name="comment"/>
    </form>
  );
}
