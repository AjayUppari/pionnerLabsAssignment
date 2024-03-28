import { Component } from "react";
import { IoMdHome } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import { BsCurrencyExchange } from "react-icons/bs";
import { PiListDashesFill } from "react-icons/pi";
import { slide as Menu } from "react-burger-menu";

import "./index.css";

class Sidebar extends Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <>
        <div className="sidebarContainer">
          <a className="SidebarItem" href="/">
            <IoMdHome className="optionIcon" />
            Home
          </a>
          <a className="SidebarItem" href="/population">
            <ImStatsDots className="optionIcon" />
            Population Stats
          </a>
          <a className="SidebarItem" href="/crypto currency">
            <BsCurrencyExchange className="optionIcon" />
            Crypto Currency
          </a>
        </div>

        <div className="mobile-sidebarContainer">
          <button
            className="hamburgerMenuButton"
            onClick={this.toggleMenu}
            type="button"
          >
            <PiListDashesFill />
          </button>
          <Menu isOpen={isOpen} className="menu">
            <a id="home" className="menu-item" href="/">
              Home
            </a>
            <a id="about" className="menu-item" href="/population">
              Population Stats
            </a>
            <a id="contact" className="menu-item" href="/crypto currency">
              Crypto Currency
            </a>
          </Menu>
        </div>
      </>
    );
  }
}

export default Sidebar;
