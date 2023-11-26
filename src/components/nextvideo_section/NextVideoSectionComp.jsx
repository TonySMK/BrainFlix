import SidebarData from "../../data/videos.json";
import NextVideoCard from "./nextvideocard_section/NextVideoCardComp.jsx";

export default function NextVideoSection() {
    return (
        <section className="nextvideosection">
            <div className="nextvideosection__title">Next Video</div>
            <div className="nextvideosection__list">
                <NextVideoCard
                    title={SidebarData[1].title}
                    url={SidebarData[1].imageRRRRRRR}
                    channel={SidebarData[1].channel}
                />
            </div>
        </section>
    )
}