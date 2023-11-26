import "./VideoTitleStyles.scss";

export default function TitleVideoComp(props) {
    return(
        <div className="videotitlebackground">
            <div className="videotitle">{props.title}</div>
        </div>
    );
}