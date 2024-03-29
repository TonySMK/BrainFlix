import "./_VideoCompStyles.scss";
export default function VideoComp({ videodata, imagedata }) {
  return (
    <section className="videobackgroundwrap">
      <video className="videowrap" poster={imagedata} controls>
        <source src={videodata} />
      </video>
    </section>
  );
}
