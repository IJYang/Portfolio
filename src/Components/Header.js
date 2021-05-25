import React from 'react'

const Header = () => {
    return (
        <div class="topnav">
            <a class="active" class="left-header" href="#home">John Yang</a>
            <a href="#contact" name="contact" class="right-header">Contact</a>
            <a href="#resume" name="resume" class="right-header">Resume</a>
            <a href="#projects" name="projects" class="right-header">Projects</a>
            <a href="#about" name="about" class="right-header">About</a>
        </div>
    )
}

export default Header