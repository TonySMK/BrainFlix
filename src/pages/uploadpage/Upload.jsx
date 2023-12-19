import "./_UploadStyles.scss";
import thumbnailimage from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/utility_components/button_component/ButtonComp";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function UploadPage() {

  const [usname, setUSName] = useState("");
  const [usdescription, setUSDescription] = useState("");

  const handleUserName = (e) => {
    setUSName(e.target.value);
  };
  const handleDes = (e) => {
    setUSDescription(e.target.value);
  };

  function onclickhander(event) {
    if (!usname || !usdescription) {
      event.preventDefault()
      alert("There is an empty infomation field.")
    } else{
      alert("Video uploaded")
    };
  }
  return (
    <main className="uploadbackgroundwrap">
      <section className="uploadpage">
        <section className="uploadpage__title">Upload Video</section>
        <section className="uploadpage__body">
          <div className="uploadbody">
            <div className="uploadbody__thumbnailtitle">Video Thumbnail</div>
            <img
              className="thumbnailimage"
              src={thumbnailimage}
              alt="thumbnailimageplaceholder"
            />
          </div>

          <form className="uploadform" id="theform">
            <div className="uploadform_top">
              <label className="uploadform__labeltitle">
                title of your video
              </label>
              <input
                className="uploadform__inputtitle"
                name="title"
                onChange={handleUserName}
                value={usname}
                type="text"
                placeholder="Add a title to your video"
              />
            </div>
            
            <div className="uploadform_bottom">
              <label className="uploadform__labledescription">
                add a video description
              </label>
              <textarea
                className="uploadform__inputdescription"
                name="des"
                onChange={handleDes}
                value={usdescription}
                maxLength="500"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </form>
        </section>
        <section className="uploadpage__buttons">
          <div className="publishbuttonwrapper">
            <Link
              to="/"
              onClick={onclickhander}
              style={{ textDecoration: "none" }}
            >
              <Button name="publish" formid="theform"/>
            </Link>
          </div>
          <div className="cancelbuttonwrapper">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button name="cancel" urlreference="/"/>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
