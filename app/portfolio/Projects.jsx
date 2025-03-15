import React from "react";
import styles from "./portfolio.module.css";
import Card from "../components/card/Card";
// import Image from "next/image";
import Link from "next/link";
import ImageCard from "../components/imagecard/ImageCard";

const Projects = ({ projects }) => {
  return (
    <div className={styles.projects}>
      {projects.map(({ id, title, image, desc, demo, github,image2 }) => (
        <Card key={id} className={styles.project}>
          <div className={styles.image}>
            {/* <Image src={image} alt=''/> */}
            <ImageCard imageUrl = {image} imageUrl2={image2}/>
            
          </div>

          <div className={styles.content}>
            <h4>{title}</h4>
            <p>{desc}</p>
            <div className={styles.cta}>
              <Link
                href={demo}
                className={`${styles.btn} ${styles.primary}`}
                target="_blank"
                rel="nopopener noreferrer"
              >
                Demo
              </Link>
              {/* <Link
                href={github}
                className={`${styles.btn} ${styles.primary}`}
                target="_blank"
                rel="nopopener noreferrer"
              >
                Github
              </Link> */}
            </div>
          </div>
         
        </Card>
      ))}
    </div>
  );
};

export default Projects;
