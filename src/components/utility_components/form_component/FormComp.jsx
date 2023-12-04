import "./_FormStyles.scss";

export default function FormComp() {
  return (
    <form className="commentright" onSubmit={myFunc}>
      <label className="commentright__label">Join the Conversation</label>
      <textarea
        className="commentright__textarea"
        id="message"
        type="text"
        placeholder="add a new comment"
        maxLength="250"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <Button name="comment" />
    </form>
  );
}
