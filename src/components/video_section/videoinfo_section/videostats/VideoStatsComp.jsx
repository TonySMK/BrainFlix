import Veiwicon from "../../../../assets/icons/views.svg";
import Likeicon from "../../../../assets/icons/likes.svg";
import "./_VideoStatsStyles.scss";

export default function VideoStatsComp({
  channeldata,
  timestampdata,
  likesdata,
  viewsdata,
}) {
  return (
    <div className="videostatsbackground">
      <div className="videostats">
        <div className="leftstats">
          <div className="leftstats__author">{`By ${channeldata}`}</div>
          <div className="leftstats__date">{timestampdata}</div>
        </div>

        <div className="rightstats">
          <div className="rightstats__veiws">
            <img
              className="rightstats__veiws__icon"
              src={Veiwicon}
              alt="veiws"
            />
            <div className="rightstats__veiws__counter">{viewsdata}</div>
          </div>
          <div className="rightstats__likes">
            <img
              className="rightstats__likes__icon"
              src={Likeicon}
              alt="likes"
            />
            <div className="rightstats__likes__counter">{likesdata}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
