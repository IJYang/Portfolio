import React from 'react'
import Button from 'react-bootstrap/Button'

const ResumeSection = () => {
    return (
        <div id="resume" class="section">
            <h3>Resume</h3>
            <Button variant="primary" href="https://drive.google.com/file/d/1VDSPFtE75eHaJ0HCvA3ZRtNNvWPKk3J9/view?usp=sharing" target="_blank"><i class="fa fa-download"/> Download Resume</Button>
        </div>
    )
}

export default ResumeSection