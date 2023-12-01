import "./NextVideoSectionStyles.scss";
import NextVideoCard from "./nextvideocard_section/NextVideoCardComp.jsx";

export default function NextVideoSection(props) {
    return (
        <section className="nextvideosection">
            <div className="nextvideosection__title">next videos</div>
            <div className="nextvideosection__list">
                <NextVideoCard
                    data = {props.data}
                />
            </div>
        </section>
    )
}