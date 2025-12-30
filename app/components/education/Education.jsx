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
                  <h3>Bachelor&apos;s Degree - AUST</h3>
                  <p>
                    I earned a Bachelor&apos;s degree in Information Technology from{" "}
                    <b>Abbottabad University of Science and Technology</b>,
                    achieving a CGPA of <b>3.7</b> out of 4. My education
                    equipped me with a comprehensive understanding of technology
                    concepts and applications, preparing me to tackle real-world
                    challenges in the field. Alongside my academic pursuits, I
                    actively participated in sports activities, fostering
                    teamwork, discipline, and a healthy lifestyle.
                  </p>
                </div>
              </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calender"></i>2022
                </div>
                <h3>Web Development Certification (6 Months)</h3>
                <p>
                  I successfully completed a 6-month intensive Web Development training
                  program conducted by the{" "}
                  <b>Punjab Software Export Board (PSEB)</b>. The program focused on modern
                  frontend and full-stack development, covering HTML, CSS, JavaScript,
                  React.js, and backend fundamentals. This hands-on training strengthened my
                  practical skills in building responsive, real-world web applications and
                  laid a solid foundation for my professional career in software
                  development.
                </p>
              </div>
            </div>
            </div>
          </div>

        <div className="education-column">
  <h3 className="title">Experience</h3>
  <div className="education-box">

    {/* Software Engineer – Bitlogix */}
    <div className="education-content">
      <div className="content">
        <div className="year">
          <i className="bx bxs-calender"></i>May 2025 - Present
        </div>
        <h3>Software Engineer - Bitlogix</h3>
        <p>
          Led the development of a Legal SaaS platform for law firms using
          Python (Django) and React.js, architected with multi-tenancy to
          efficiently manage data across multiple client organizations.
          Delivered core modules including case management, invoicing,
          calendar scheduling, tasks, and time-tracking while prioritizing
          scalability, security, maintainability, and clean code standards.
        </p>
      </div>
    </div>

    {/* Front-End Developer – Octaloop Technologies */}
    <div className="education-content">
      <div className="content">
        <div className="year">
          <i className="bx bxs-calender"></i>September 2024 - May 2025
        </div>
        <h3>Front-End Developer - Octaloop Technologies</h3>
        <p>
          Developed and maintained sophisticated Web3 and blockchain-based
          trading platforms using React.js and Next.js, delivering fast,
          responsive, and intuitive user experiences. Integrated multiple
          cryptocurrency APIs to handle real-time data feeds, transactions,
          and market insights, while designing highly user-friendly trading
          interfaces to enhance navigation and overall platform usability.
        </p>
      </div>
    </div>

    {/* Front-End Developer – Cosvm Labs */}
    <div className="education-content">
      <div className="content">
        <div className="year">
          <i className="bx bxs-calender"></i>February 2024 - September 2024
        </div>
        <h3>Front-End Developer - Cosvm Labs</h3>
        <p>
          Contributed as a primary Frontend Developer for BuyCex, a major
          crypto trading platform, building responsive and scalable user
          interfaces using React.js and Tailwind CSS. Developed key
          user-facing features including API integrations, crypto card
          functionality, and CMS implementations, while introducing
          animations, charting libraries, and optimized layouts to enhance
          engagement and performance.
        </p>
      </div>
    </div>

    {/* Front-End Developer – Geeks Hub */}
    <div className="education-content">
      <div className="content">
        <div className="year">
          <i className="bx bxs-calender"></i>October 2022 - March 2024
        </div>
        <h3>Front-End Developer - Geeks Hub</h3>
        <p>
          Built and maintained business and e-commerce web applications using
          React.js, Next.js, and Gatsby. Improved application performance and
          speed through code optimization and best practices, and integrated
          Sanity and Contentful CMS to enhance content management and overall
          user experience.
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
