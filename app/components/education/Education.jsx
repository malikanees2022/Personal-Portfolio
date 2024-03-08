import React from "react";
import "./education.css";

const Education = () => {
  return (
    <div>
      <section className="education" id="education">
        <h2 className="heading">
          My <span>Journey</span>
        </h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calender"></i>2019 - 2023
                  </div>
                  <h3>`Bachelor's Degree - AUST`</h3>
                  <p>
                    `I earned a Bachelor's degree in Information Technology from
                    <b>Abbottabad University of Science and Technology</b>,
                    achieving a CGPA of <b>3.7</b> out of 4. My education
                    equipped me with a comprehensive understanding of technology
                    concepts and applications, preparing me to tackle real-world
                    challenges in the field. Alongside my academic pursuits, I
                    actively participated in sports activities, fostering
                    teamwork, discipline, and a healthy lifestyle.`
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calender"></i>2017 - 2019
                  </div>
                  <h3>F.Sc - GPGC No.1</h3>
                  <p>
                    I successfully completed my F.Sc. in Pre-Engineering from{" "}
                    <b>`Government Post Graduate College No.1 Abbottabad</b> with
                    flying colors, achieving an 'A' grade. This achievement
                    highlights my commitment to academic excellence and fuels my
                    passion for pursuing a career in engineering.`
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calender"></i>2016 - 2017
                  </div>
                  <h3>Matriculation - GHS No.3</h3>
                  <p>
                    I completed my Matriculation in the Science stream at{" "}
                    <b>Government High School No.3 Abbottabad</b>, obtaining an
                    outstanding <b>A+</b> grade. This achievement underscores my
                    commitment to academic excellence and paves the way for my
                    aspirations in higher education and beyond. Additionally, I
                    actively participated in sports activities, honing my
                    teamwork, leadership, and discipline skills, which
                    complemented my academic achievements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="education-column">
            <h3 className="title">Experience</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calender"></i>November 2023 - Present
                  </div>
                  <h3>Front-End Developer - Geeks Hub</h3>
                  <p>
                    Proficient in the artistry of web development, with
                    expertise in HTML, CSS, JavaScript, React.js, Bootstrap, and
                    Tailwind CSS - crafting immersive and user-friendly digital
                    experiences.
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calender"></i>July 2023 - October 2023
                  </div>
                  <h3>React.js Developer - Stem Wizards Academia</h3>

                  <p>
                    Developed websites using React.js, and Tailwind. Optimized
                    user experience and achieved webpage goals through the
                    development of site structure, navigation, page
                    optimization, and seamless graphics integration.
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calender"></i>April 2023 - June 2023
                  </div>
                  <h3>Front-End Developer - Created Opportunities</h3>
                  <p>
                    Skilled in HTML,CSS,Javascript and Bootstrap, specializing
                    in user-friendly web development. Collaborated across
                    teamsto create admin, vendor, and customer interfaces,
                    optimizing user experiences.
                  </p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calender"></i>October 2022 - March 2023
                  </div>
                  <h3>Junior Web Developer - Code Band</h3>
                  <p>
                    Developed websites using JavaScript, and HTML. Enhanced user
                    experience and accomplish webpage objectives by creating
                    site structure, navigation, page optimization, and graphics
                    integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
