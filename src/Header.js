import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calActive: true,
      aboutActive: false,
      resActive: false,
    };
  }

  handleClick = (event) => {
    if (event === 0) {
      this.setState({
        calActive: true,
        aboutActive: false,
        resActive: false,
      });
    } else if (event === 1) {
      this.setState({
        calActive: false,
        aboutActive: true,
        resActive: false,
      });
    } else {
      this.setState({
        calActive: false,
        aboutActive: false,
        resActive: true,
      });
    }


  };

  render() {
    const { onAboutClicked } = this.props;
    const { calActive, aboutActive, resActive } = this.state;
    return (
      <div
        id="header"
        style={{
          background: `url(${process.env.PUBLIC_URL}/Calculator-bg.jpg`,
        }}
      >
        <div id="logo">
          <h1>Food Carbon Emissions Calculator</h1>
        </div>
        <div id="menu">
          <ul>
            <li
              onClick={() => {
                onAboutClicked(0);
                this.handleClick(0);
              }}
              style={{ backgroundColor: calActive ? "#3b945e" : "" }}
            >
              Calculator
            </li>
            <li
              onClick={() => {
                onAboutClicked(1);
                this.handleClick(1);
              }}
              style={{ backgroundColor: aboutActive ? "#3b945e" : "" }}
            >
              About Us
            </li>
            <li
              onClick={() => {
                onAboutClicked(2);
                this.handleClick(2);
              }}
              style={{ backgroundColor: resActive ? "#3b945e" : "" }}
            >
              Resources
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
