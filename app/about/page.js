"use client";
import React from 'react';
import styles from './about.module.css';
import SectionHeader from '../components/section-header/SectionHeader';
import Image from 'next/image';
import AboutImage from '../assets/13.png';
import Education from '../components/education/Education';

const Page = () => {
  return (
    <section>
      <SectionHeader title={"About Me"} subtitle={"Who I am and what I do"} />
      <div className={`container ${styles.container}`}>
        <article className={styles.image}>
          <Image src={AboutImage} alt='' />
        </article>
        <article className={styles.aboutContent}>
          <h4>Hi, I&apos;m Anees-ur-rehman, a Web Developer</h4>
          <p>Hello there! I&apos;m Anees, a passionate web developer with expertise in the MERN stack. I thrive on turning ideas into reality through elegant and efficient code. With a keen eye for detail and a knack for problem-solving, I craft user-friendly interfaces that deliver exceptional experiences.</p>
          <p>I bring a collaborative approach to every project, working closely with clients to understand their needs and goals. Whether it&apos;s building a dynamic web application or designing a sleek website, I&apos;m committed to delivering high-quality work that exceeds expectations.</p>
          <p>What sets me apart is my dedication to continuous improvement. I stay updated with the latest technologies and industry trends, ensuring that my skills are always sharp and my solutions are cutting-edge. Let&apos;s collaborate and bring your ideas to life!</p>

          <a href="https://drive.google.com/file/d/1oiA3ysZyuYpJVgey_S0xC3lXf6gH9Hzf/view" className={`btn primary ${styles.aboutCta}`} target='_blank'>Download CV</a>
        </article>
      </div>
      <div className={styles.educationBox}>
        <Education />
      </div>
    </section>
  );
};

export default Page;
