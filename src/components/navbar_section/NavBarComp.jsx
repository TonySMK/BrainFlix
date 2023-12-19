import "./_NavBarStyles.scss";
import ButtonComp from "../utility_components/button_component/ButtonComp";
import AvatarComp from "../utility_components/avatar_component/AvatarComp";
import BrainflixLogo from "../../assets/logo/BrainFlix-logo.svg";
import SearchIcon from "../../assets/icons/search.svg";
import { Link } from "react-router-dom";

export default function NavBarComp() {

  return (
    <header className="navbackgroundwrap">
      <nav className="nav">
        <div className="nav__first">
          <div className="mainlogo">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <img
                className="mainlogo__img"
                src={BrainflixLogo}
                alt="Brainflix Logo"
              />
            </Link>
          </div>
        </div>

        <div className="nav__second">
          <div className="searchcontainer">
            <div className="searchcontainer__imgwarp">
              <img
                className="searchcontainer__imgwarp__iconsearch"
                src={SearchIcon}
                alt="sdasd"
              />
            </div>

            <input
              className="searchcontainer__inputtext"
              type="text"
              placeholder="Search"
              maxLength="15"
            />
          </div>
          <div className="avatarwrapper">
            <AvatarComp location="nav" icon="true" />
          </div>

          <div className="uploadbuttonwrapper">
            <Link to="/upload" style={{ textDecoration: "none" }}>
              <ButtonComp name="upload" urlreference="/upload" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
