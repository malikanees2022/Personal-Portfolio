import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Image1 from '../../assets/03.png'
import Image2 from '../../assets/06.png'
import Image3 from '../../assets/07.png'
import Image4 from '../../assets/04.png'

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.headerLeft}>
        <h1>Code & Creativity: Building Bridges Between Vision and Reality</h1>
        <p>Passionate web developer with expertise in MERN stack. <br /> Detail-oriented problem solver with strong UI/UX skills. Effective communicator and team player. Committed to delivering high-quality work. Excited to contribute to innovative projects.</p>
        <div className={styles.headerCta}>
            <Link href={"/portfolio"} className='btn'>Projects</Link>
            <Link href={"/contact"} className='btn primary'>Contact me</Link>
        </div>
      </div>
      <div className={styles.headerRight}>
        <article className={styles.card1}>
    <Image src={Image1} alt=''/>
        </article>
        <article className={styles.card2}>
    <Image src={Image2} alt=''/>
        </article>
        <article className={styles.card3}>
    <Image src={Image3} alt=''/>
        </article>
        <article className={styles.card4}>
    <Image src={Image4} alt=''/>
        </article>
      </div>
    </header>
  )
}

export default Header
