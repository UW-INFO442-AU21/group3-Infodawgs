import React, { Component } from "react";
import FoodCenter from "./FoodCenter.js";
import MyFood from "./MyFood.js";
import * as d3 from "d3";
import data from "./FoodList.csv";
import Result from "./Result.js";

class FoodSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardsInMyFood: [],
      calculateLevelNumber: 0,
    };
  }

  addToMyFood = (newCard) => {
    this.setState({
      cardsInMyFood: [...this.state.cardsInMyFood, newCard],
    });
  };

  removeFromMyFood = (newCard) => {
    this.setState({
      cardsInMyFood: this.state.cardsInMyFood.filter(
        (card) => card.number !== newCard.number
      ),
    });
  };

  updateCard = (updatedCard) => {
    const { cardsInMyFood } = this.state;
    let cardNumber = cardsInMyFood.map((card) => card.number);
    let checkIndex = cardNumber.indexOf(updatedCard.number);
    this.setState({
      cardsInMyFood: [
        ...cardsInMyFood.slice(0, checkIndex),
        updatedCard,
        ...cardsInMyFood.slice(checkIndex + 1),
      ],
    });
  };

  calculateLevel = () => {
    const { cardsInMyFood } = this.state;

    let levelIndex = 0;
    d3.csv(data)
      .then((data) => {
        data.forEach((data) => {
          for (let i = 0; i < cardsInMyFood.length; i++) {
            let card = cardsInMyFood[i];
            if (card.name === data.Food) {
              console.log(
                "Each card data:",
                data.Food,
                data.Carbon,
                data.Category
              );
              let carbonLevel = data.Carbon;
              carbonLevel = carbonLevel * 2;
              levelIndex += carbonLevel;
              console.log(carbonLevel);
            }
          }
        });
        let levelNum = Math.floor(levelIndex / cardsInMyFood.length);
        console.log(levelNum);
        if (levelNum > 30) {
          levelNum = 4;
        } else if (levelNum > 21) {
          levelNum = 3;
        } else if (levelNum > 14) {
          levelNum = 2;
        } else if (levelNum > 7) {
          levelNum = 1;
        } else {
          levelNum = 0;
        }
        this.setState({ calculateLevelNumber: levelNum });
      })
      .catch((error) => {
        throw error;
      });
  };

  render() {
    const { cardsInMyFood, calculateLevelNumber } = this.state;

    return (
      <div>
        <div className="flex-container">
          <div className="row">
            <FoodCenter
              onCardClicked={this.addToMyFood}
              chosenCards={cardsInMyFood}
            />
            <MyFood
              onCardClicked={this.removeFromMyFood}
              chosenCards={cardsInMyFood}
              updateCard={this.updateCard}
              calculateLevel={this.calculateLevel}
            />
          </div>
        </div>
        <div className="flex-container" id="pg3">
          <div>
            <Result displayLevel={calculateLevelNumber} />
          </div>
        </div>
      </div>
    );
  }
}

export default FoodSection;
