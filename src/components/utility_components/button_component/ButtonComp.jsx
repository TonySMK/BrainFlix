import "./_ButtonStyles.scss";
import UploadIcon from "../../../assets/icons/upload.svg";
import PlusIcon from "../../../assets/icons/add_comment.svg";
import PublishIcon from "../../../assets/icons/publish.svg"
import { useState, useEffect } from "react";
import { Form, Link } from "react-router-dom";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function Button({ name, formid}) {
  const [output, setOutput] = useState(true);
  let iconselect

  if (name === "comment") {
    iconselect = PlusIcon;
  }
  else if (name === "upload") {
    iconselect = UploadIcon;
  }
  else if (name === "publish") {
    iconselect = PublishIcon;
    
  }


useEffect(()=>{
  if (name === "cancel") {
    setOutput(false);
  }
},[])

  return (  
    <>
      {output ? (
        <button type="submit" form={formid} className={`generalbutton button${name}`}>
          <img
            className={"button" + name + "__icon"}
            src={iconselect}
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
