import "./_NavBarStyles.scss";
import ButtonComp from "../utility_components/button_component/ButtonComp";
import AvatarComp from "../utility_components/avatar_component/AvatarComp";
import BrainflixLogo from "../../assets/logo/BrainFlix-logo.svg";
import SearchIcon from "../../assets/icons/search.svg";

export default function NavBarComp() {
  return (
    <header>
      <nav className="nav">
        <div className="nav__first">
          <div className="mainlogo">
            <img
              className="mainlogo__img"
              src={BrainflixLogo}
              alt="Brainflix Logo"
            />
            <a className="mainlogo__link" href="n/a">
              BrainFlix Logo
            </a>
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
          <AvatarComp location="nav" icon="true" />
          <ButtonComp name="upload"/>
        </div>
      </nav>
    </header>
  );
}
