import "./VideoDesStyles.scss";

export default function VideoDesComp(props){
    return(
        <div className="videodesbackground">
            <div className="videodes">{props.description}</div>
        </div>
    )
}