import { Component } from "react";
import { IoMdHome } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import { BsCurrencyExchange } from "react-icons/bs";

class Population extends Component {
  render() {
    return (
      <div className="sectionContainer">
        <div className="sidebarContainer ">
          <a className="SidebarItem" href="/">
            <IoMdHome className="optionIcon" />
            Home
          </a>
          <a className="SidebarItem active" href="/population">
            <ImStatsDots className="optionIcon" />
            Population Stats
          </a>
          <a className="SidebarItem" href="/crypto currency">
            <BsCurrencyExchange className="optionIcon" />
            Crypto Currency
          </a>
        </div>

        <div className="populationChartContainer">
          <h1>This is Population Section</h1>
        </div>
      </div>
    );
  }
}

export default Population;
