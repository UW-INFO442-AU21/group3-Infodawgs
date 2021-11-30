import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div id="wrapper">
        <div class="flex2-item-1 main-resource">
          <h2>Who are we?</h2>
          <p>
          We are Infodawgs, a 5 person team at the UW dedicated to using data to make a difference
          in the challenges we face in the world today. Our focus in creating the food carbon emissions 
          calculator is to give users a readily accessible and quick way to determine the carbon impact
          of their eating habits. As food accounts for a third of the world's carbon emissions, choosing 
          more sustainable options in our diet is a great first step to making a difference on our 
          carbon footprint. 
          </p>
        </div>
        <div className="flex-container pg1-about">
          <div className="row info">
            <div className="col-20 col-md-20 col-xl-auto d-flex about-secion-container">
              <section className="flex-item-6 about-secion">
                <img
                  className="rounded-circle profile"
                  src={`${process.env.PUBLIC_URL}/wendell.jpg`}
                  alt="people"
                />
                <h2 className="name">Wendell Li</h2>
                <ul className="list">
                  <li>Full-stack Developer</li>
                  <li>Student at the University of Washington</li>
                  <li>Class of 2022</li>
                </ul>
              </section>
              <section className="flex-item-6 about-secion">
                <img
                  className="rounded-circle profile"
                  src={`${process.env.PUBLIC_URL}/anika.jpg`}
                  alt="people"
                />
                <h2 className="name">Anika Mishra</h2>
                <ul className="list">
                  <li>UI/UX Designer</li>
                  <li>Student at the University of Washington</li>
                  <li>Class of 2022</li>
                </ul>
              </section>
              <section className="flex-item-6 about-secion">
                <img
                  className="rounded-circle profile"
                  src={`${process.env.PUBLIC_URL}/hongyi.jpg`}
                  alt="people"
                />
                <h2 className="name">Hongyi Tang</h2>
                <ul className="list">
                  <li>Front-end Engineer</li>
                  <li>Student at the University of Washington</li>
                  <li>Class of 2022</li>
                </ul>
              </section>
              <section className="flex-item-6 about-secion">
                <img
                  className="rounded-circle profile"
                  src={`${process.env.PUBLIC_URL}/ben.jpg`}
                  alt="people"
                />
                <h2 className="name">Benjamin Chan </h2>
                <ul className="list">
                  <li>Data Engineer</li>
                  <li>Student at the University of Washington</li>
                  <li>Class of 2022</li>
                </ul>
              </section>
              <section className="flex-item-6 about-secion">
                <img
                  className="rounded-circle profile"
                  src={`${process.env.PUBLIC_URL}/maya.jpg`}
                  alt="people"
                />
                <h2 className="name">Maya Nair</h2>
                <ul className="list">
                  <li>Project Manager</li>
                  <li>Student at the University of Washington</li>
                  <li>Class of 2022</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
