import React, { Component } from "react";
import { quantity } from "../Constants/quantity";

export class CardItemDetails extends Component {
  constructor(props) {
    super(props);

    const { name, number, imageAlt, imageSrc } = this.props;

    this.state = {
      card: {
        name,
        number,
        imageSrc,
        imageAlt,
        activityDuration: 0,
      },
    };
  }

  handleChangeDropdown = (event) => {
    const duration = parseInt(event.target.value);
    const { card } = this.state;

    if (duration !== card.activityDuration) {
      this.setState({ card: { ...card, activityDuration: duration } }, () =>
        this.props.onUpdateCard(this.state.card)
      );
    }
  };

  render() {
    const { card } = this.state;
    const { imageAlt, imageSrc, name, onDeleteCard } = this.props;

    return (
      <div className="flex-my-activity-item" role="form">
        <div className="row">
          <div onClick={() => onDeleteCard(card)}>
            <div className="close" role="button" aria-label="Close">
              ×
            </div>
          </div>
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
        <div className="card-select-box">
          <label>Quantity</label>
          <select
            name="duration"
            value={card.activityDuration}
            onChange={(event) => this.handleChangeDropdown(event)}
          >
            {quantity.map((quantity, index) => (
              <option key={index} value={index}>
                {quantity}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default CardItemDetails;
