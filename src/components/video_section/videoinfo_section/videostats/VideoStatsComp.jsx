import Veiwicon from "../../../../assets/icons/views.svg"
import Likeicon from "../../../../assets/icons/likes.svg"
import "./VideoStatsStyles.scss"

export default function VideoStatsComp(props) {
    return(
        <div className="videostatsbackground">
            <div className="videostats">
                <div className="leftstats">
                    <div className="leftstats__author">{"By "+props.channel}</div>
                    <div className="leftstats__date">{props.date}</div>
                </div>
                <div className="rightstats">
                    <div className="rightstats__veiws">
                        <img className="rightstats__veiws__icon" src={Veiwicon} alt="veiws"/>
                        <div className="rightstats__veiws_counter">{props.views}</div>
                    </div>
                    <div className="rightstats__likes">
                        <img className="rightstats__likes__icon" src={Likeicon} alt="likes"/>
                        <div className="rightstats__likes_counter">{props.likes}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}