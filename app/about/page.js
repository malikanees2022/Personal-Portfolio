import React from 'react'
import styles from './about.module.css'
import SectionHeader from '../components/section-header/SectionHeader'
import Image from 'next/image'
import AboutImage from '../assets/about2.png'

const page = () => {
  return (
    <section>
      <SectionHeader title={"About Me"} subtitle={"Who I am and what I do"}/>
      <div className={`container ${styles.container}`}>
        <article className={styles.image}>
          <Image src={AboutImage} alt=''/>
        </article>
        <article className={styles.aboutContent}>
          <h4>My name is Anees, and I am a developer</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic ipsa similique alias. In, maiores vitae! Nisi nihil hic est. Deserunt et voluptate aliquam quidem cupiditate corporis impedit animi maxime.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum nisi culpa illo quas odit minima ea tenetur temporibus fugit.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure id impedit temporibus tenetur culpa amet ut assumenda, ipsa nisi, beatae, modi error quam. Debitis libero ipsum veniam sapiente sed aperiam, magni, error ex reprehenderit mollitia deleniti fugiat corporis perspiciatis aliquam?</p>
          <a href="../assets/cv.pdf" className={`btn primary ${styles.aboutCta}`} target='_blank' download>Download CV</a>
        </article>
      </div>
    </section>
  )
}

export default page
