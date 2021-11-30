import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div id="wrapper">
        <div class="flex2-item-1 main-resource">
          <h2>Who are we?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
