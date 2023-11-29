import "./AvatarStyles.scss"
import AvatarIcon from "../../../assets/images/Mohan-muruge.jpg"
import AvatarPlaceholder from "../../../assets/images/avatar_placeholder.png"

export default function AvatarLogo(props){
    let iconimg
    let suffix
    let alttext
    
    if (props.icon==="true"){
        iconimg=AvatarIcon
        suffix= "img1"
        alttext="MohanM"
    }else{
        iconimg=AvatarPlaceholder
        suffix= "img2"
        alttext="Undefined"
    }

    return(
        <div className={"avatar__"+props.location}>
            <img className={"avatar__"+props.location+"__"+suffix} src={iconimg} alt={alttext}/>
        </div>
    )
}