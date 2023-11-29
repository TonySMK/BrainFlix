import "./NextVideoSectionStyles.scss";
import SidebarData from "../../data/videos.json";
import NextVideoCard from "./nextvideocard_section/NextVideoCardComp.jsx";

export default function NextVideoSection() {
    return (
        <section className="nextvideosection">
            <div className="nextvideosection__title">next videos</div>
            <div className="nextvideosection__list">
                <NextVideoCard
                    title={SidebarData[1].title}
                    url={SidebarData[1].image}
                    channel={SidebarData[1].channel}
                />
                <NextVideoCard
                    title={SidebarData[2].title}
                    url={SidebarData[2].image}
                    channel={SidebarData[2].channel}
                />
                <NextVideoCard
                    title={SidebarData[3].title}
                    url={SidebarData[3].image}
                    channel={SidebarData[3].channel}
                />
            </div>
        </section>
    )
}