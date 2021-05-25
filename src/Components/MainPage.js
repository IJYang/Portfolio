import React from 'react'
import Header from './Header'
import ProjectList from './ProjectList'
import ResumeSection from './ResumeSection'
import ContactSection from './ContactSection'
import Footer from './Footer'
import About from './About'

const MainPage = () => {
    return (
        <div id="main-page">
            <Header/>
            <About/>
            <ProjectList/>
            <ResumeSection/>
            <ContactSection/>
            <Footer/>
        </div>
    )
}

export default MainPage