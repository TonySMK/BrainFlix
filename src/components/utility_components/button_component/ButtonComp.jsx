import "./_ButtonStyles.scss";
import uploadIcon from "../../../assets/icons/upload.svg";
import plusIcon from "../../../assets/icons/add_comment.svg";
import publishIcon from "../../../assets/icons/publish.svg"
import { useState, useEffect } from "react";

export default function Button({ name, formId}) {
  const [compState, setCompState] = useState(true);
  let iconSelect

  if (name === "comment") {
    iconSelect = plusIcon;
  }
  else if (name === "upload") {
    iconSelect = uploadIcon;
  }
  else if (name === "publish") {
    iconSelect = publishIcon;
    
  }


useEffect(()=>{
  if (name === "cancel") {
    setCompState(false);
  }
  // !!! we are adding "name" into dependency array simply to resolve error... nothing more why...
},[name])

  return (  
    <>
      {compState ? (
        <button type="submit" form={formId} className={`generalbutton button${name}`}>
          <img
            className={"button" + name + "__icon"}
            src={iconSelect}
            alt={name}
          />
          <div className={"button" + name + "__text"}>{name}</div>
        </button>
      ) : (
          <button className={`generalbutton button${name}`}>
            <div className={"button" + name + "__text"}>{name}</div>
          </button>
      )}
    </>
  );
}
