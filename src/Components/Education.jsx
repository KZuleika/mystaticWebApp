import React from "react";
import image from "../images/design-desk.jpeg";
import imageAltText from "../images/design-desk.jpeg";
import projectList from "../images/design-desk.jpeg";

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section__title">Education</h2>
        <p className="section__subtitle">
          A brief overview of my educational background.
        </p>

        <div className="education__container container grid">
          <div className="education__content grid">
            <div className="education__data">
              <h3 className="education__title">Bachelor's Degree</h3>
              <span className="education__subtitle">
                University of Puerto Rico
              </span>
              <span className="education__subtitle">
                Computer Science
              </span>
              <div>
                <span className="education__rounder"></span>
                <span className="education__line"></span>
              </div>
              <p className="education__description">
                I studied at the University of Puerto Rico, Mayaguez Campus, in
                the Computer Science department. I graduated in May 2019.
              </p>
            </div>
            <div className="education__data">
              <h3 className="education__title">Master's Degree</h3>
              <span className="education__subtitle">
                University of Puerto Rico
              </span>
              <span className="education__subtitle">
                Computer Engineering
              </span>
              <div>
                <span className="education__rounder"></span>
                <span className="education__line"></span>
              </div>
              <p className="education__description">
                I studied at the University of Puerto Rico, Mayaguez Campus, in
                the Computer Engineering department. I graduated in December
                2020.
              </p>
            </div>
          </div>

          <div className="education__img grid">
            <div className="education__img-overlay">
              <img src={image} alt={imageAltText} className="education__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

