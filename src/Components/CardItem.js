import React, { Component } from "react";

export let selectedCards = [1];

class CardItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      button: true,
    };
  }

  render() {
    const { button } = this.state;
    const { category, name, number, imageSrc, imageAlt, isClicked, onClick } =
      this.props;

    const card = {
      name,
      number,
      activityDuration: 0,
      imageSrc,
      imageAlt,
    };

    return (
      <div
        className={`flex-activity-item ${category} ${
          button ? "buttonTrue" : "buttonFalse"
        }`}
        role="button"
        onClick={() => onClick(card)}
        style={{ backgroundColor: isClicked ? "lightgrey" : "" }}
      >
        <div tabIndex="0" className="row">
          <div className="col-1 icon">
            <img
              src={`${process.env.PUBLIC_URL}${imageSrc}`}
              alt={imageAlt}
              className="activityIcon"
            ></img>
          </div>
          <div className="col">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default CardItem;
