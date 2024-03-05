"use client"
import React, { useState } from 'react'
import styles from './portfolio.module.css'
import SectionHeader from '../components/section-header/SectionHeader'
import { data } from './data'
import CatagoriesButton from './CatagoriesButton'
import Projects from './Projects'

const Page  = () => {
  const [projects,setProjects]=useState(data)
  const categories=data.map(item=>item.category)
  const uniqueCategories=["all",...new Set(categories)]

  const filterProjectHandler=(category)=>{
    if(category==="all"){
      setProjects(data)
      return;
    }
    const filteredProjects= data.filter(project=>project.category===category);
    setProjects(filteredProjects);
  }
  
  return (
    <section>
      <SectionHeader title={"My Projects"} subtitle={"My recent Projects. Filter with the buttons"}/>
      <div>
        <CatagoriesButton categories={uniqueCategories} onFilterProjects={filterProjectHandler}/>
        <Projects projects={projects}/>
      </div>
      
    </section>
  )
}

export default Page 
