import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Mechatronics Engineering";

const universityname = 
  "Universidad Autónoma de Yucatán. Campus of Exact Sciences and Engineering.";

const detailOrQuote =
  "Expected graduation: July 2024. GPA: 4.0 (98/100).";


const Education = () => {
  return (
    <section className="padding" id="Education">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Education</h2>
        <p className="large">{description}</p>
        <hr />
        <p className="medium">{universityname}</p>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default Education;
