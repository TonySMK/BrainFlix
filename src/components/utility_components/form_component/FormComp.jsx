import "./_FormStyles.scss";
import Button from "../button_component/ButtonComp";
import { v4 as uuidv4 } from 'uuid'

export default function FormComp({onClickDataHandler}) {

function sumoffunctions (event){
  event.preventDefault();

  function submithandler (event){
    let unixdatenow = new Date().getTime()
    console.log(event.target.content.value)
    let newcommentobject = {id:uuidv4(), name:"Sam Walker", comment:event.target.content.value, likes:0, timestamp:new Date().getTime()}
    //onClickDataHandler() takes in object, with a specific format{id:"some", name:"some", comment:"some", likes:"some", timestamp:{dynamic}}
    return newcommentobject
  }
  let results = submithandler(event)

  console.log(results)
  onClickDataHandler(results)
}

// console.log(submithandler)

// 
  return (
    <form className="commentright" onSubmit={sumoffunctions}>
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
