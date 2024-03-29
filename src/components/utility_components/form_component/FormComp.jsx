import "./_FormStyles.scss";
import Button from "../button_component/ButtonComp";

export default function FormComp({onClickFormHandler}) {

  function handleCommentSubmit (event){
    event.preventDefault();
    let form = event.target
    let comment = event.target.content.value
    let name = "Sam Walker"

    onClickFormHandler(name, comment)
    form.reset()
  }

  return (
    <form className="commentright" onSubmit={handleCommentSubmit}>
      <label className="commentright__label">Join the Conversation</label>
      <textarea
        className="commentright__textarea"
        id="message"
        name="content"
        type="text"
        placeholder="Add a new comment"
        maxLength="250"
      ></textarea>
      <Button name="comment"/>
    </form>
  );
}
