import "./ButtonStyles.scss"
import UploadIcon from "../../../assets/icons/upload.svg"
import PlusIcon from "../../../assets/icons/add_comment.svg"

export default function Button(props){
    let iconselect = PlusIcon
    if (props.name==="upload"){
        iconselect = UploadIcon
    }
    return(
        <div onClick={props.clickHandler} className={"button"+props.name}>
            <img className={"button"+props.name+"__icon"} src={iconselect} alt={props.name}/>
            <div className={"button"+props.name+"__text"}>{props.name}</div>
        </div>
    )
}