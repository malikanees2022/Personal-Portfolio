import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Image1 from '../../assets/1.png'
import Image2 from '../../assets/2.png'
import Image3 from '../../assets/3.png'
import Image4 from '../../assets/4.png'

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.headerLeft}>
        <h1>Get your business online the right way!</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At distinctio sint aliquam accusantium officia, eius ducimus sunt dolorem optio id.</p>
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
