import React, { Component } from "react";
import { hours } from "../constants/Cards.js/hours";

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
        maskOn: true,
        activityDuration: 0,
      },
    };
  }

  onChangeRadioButton = (value) => {
    const { card } = this.state;

    if (value !== card.maskOn) {
      this.setState(
        {
          card: { ...card, maskOn: value },
        },
        () => this.props.onUpdateCard(this.state.card)
      );
    }
  };

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
        <form>
          <div className="card-radio-button">
            <label>Wear Mask?</label>
            <input
              type="radio"
              // id="mask_on"
              name="yes_no"
              defaultChecked={true}
              onChange={() => this.onChangeRadioButton(true)}
            />{" "}
            Yes
            <input
              type="radio"
              // id="mask_off"
              name="yes_no"
              onChange={() => this.onChangeRadioButton(false)}
            />{" "}
            No
          </div>
        </form>
        <div className="card-select-box">
          <label>Duration?</label>
          <select
            name="duration"
            value={card.activityDuration}
            onChange={(event) => this.handleChangeDropdown(event)}
          >
            {hours.map((hour, index) => (
              <option key={index} value={index}>
                {hour}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default CardItemDetails;
