import React, { Component } from "react";
import { carbonInfo } from "./Constants/carbonInfo";

class Result extends Component {
  render() {
    const { displayLevel } = this.props;

    return (
      <div className="flex-container" id="pg3">
        <div>
          <h2>Result</h2>
          <div className="result">
            <div className="row">
              <div className="col-sm col-md col-lg">
                <div className="contain-result">
                  <section className="flex4-item-1">
                    <h3 id="carbon-level-title">Carbon Emission Level:</h3>
                    <h3 id={carbonInfo[displayLevel].levelColor}>
                      {carbonInfo[displayLevel].level}
                    </h3>
                    <div className="progress-bar-container">
                      <div className="progress">
                        <div
                          id="low"
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          Low
                        </div>
                        <div
                          id="low-moderate"
                          className="progress-bar bg-warning"
                          role="progressbar"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          Low moderate
                        </div>
                        <div
                          id="moderate"
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          Moderate
                        </div>
                        <div
                          id="moderate-high"
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          Moderate High
                        </div>
                        <div
                          id="high"
                          className="progress-bar bg-danger"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          High
                        </div>
                      </div>
                    </div>
                    <div
                      className={`arrow-up ${carbonInfo[displayLevel].arrow}`}
                      aria-label="arrow up"
                    ></div>
                  </section>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="contain-result">
                  <section className="flex4-item-2">
                    <p id="result-description">
                      {carbonInfo[displayLevel].description}
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
