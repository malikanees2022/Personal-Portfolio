import React from 'react'
import styles from './services.module.css'
import SectionHeader from '../components/section-header/SectionHeader'
import { data } from './servicesData'
import Card from '../components/card/Card'
import { FiCheckCircle } from "react-icons/fi";

const page = () => {
  return (
    <section>
      <SectionHeader title={"Services"} subtitle={"The serivices I offer"}/>
      <div className={`container ${styles.container}`}>
    {data.map(({id,icon,title,description,points})=>(
      <Card key={id} className={styles.service}>
        <span>{icon}</span>
        <h5>{title}</h5>
        <p>{description}</p>
         {points?.map((item, index) => (
  <div key={index} className={styles.point}>
    <FiCheckCircle className={styles.checkIcon} />
    <p>{item}</p>
  </div>
))}
      </Card>
    ))}
      </div>
     
    </section>
  )
}

export default page

