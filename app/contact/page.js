import React from 'react'
import styles from './contact.module.css'
import { MdOutlineEmail } from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import SectionHeader from '../components/section-header/SectionHeader'
import ContactDetails from '../components/contactdetails/ContactDetails'
import ContactForm from '../components/contactform/ContactForm'

const page = () => {
  return (
    <section>
      <SectionHeader title={"Get In Touch"} subtitle={"Contact me via any of the list below"}/>
      <div className={`container ${styles.contactWrapper}`}>
        <a href="mailto:malikaneesurrehmamn12@gmail.com" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
          <MdOutlineEmail className={styles.contactIcon}/>
        </a>
        <a href="https://m.me/malik.aneeslucky  " className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
          <RiMessengerLine className={styles.contactIcon}/>
        </a>
        <a href="https://wa.me/+923170508024" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
          <BsWhatsapp className={styles.contactIcon}/>
        </a>
      </div>

      <div className={styles.formBox}>
        <ContactForm/>
      </div>

      <div className={styles.contactBox}>
      <ContactDetails/>
      </div>
    </section>
  )
}

export default page
