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
  <h4>Hi, I&apos;m Anees-ur-Rehman, a Software Engineer</h4>
  <p>
    Hello! I&apos;m Anees, an experienced Software Engineer specializing in
    React.js and Next.js, with a strong focus on building fast, scalable, and
    intuitive web applications. I enjoy transforming complex ideas into
    polished digital experiences through clean code, thoughtful UI/UX design,
    and performance-driven development.
  </p>
  <p>
    I have hands-on experience working on Web3 and blockchain-based platforms,
    developing high-performance trading interfaces, and integrating real-time
    APIs. Alongside frontend expertise, I&apos;m expanding into full-stack
    development using the MERN stack and Python/Django to deliver secure,
    end-to-end solutions.
  </p>
  <p>
    I take a collaborative, detail-oriented approach to every project—working
    closely with teams and clients to understand goals and deliver reliable,
    maintainable products. Committed to continuous learning and modern best
    practices, I aim to build digital solutions that combine creativity,
    technical precision, and real business impact.
  </p>
          <a href="https://drive.google.com/file/d/1QHQ2wrbw62yT-KYoXzGgSN2tQU2UMKQO/view" className={`btn primary ${styles.aboutCta}`} target='_blank'>Download CV</a>
        </article>
      </div>
      <div className={styles.educationBox}>
        <Education />
      </div>
    </section>
  );
};

export default Page;
