import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './monkey.png'
import olive from './OliveAPI.png'
import sightsee from './sightsee.png'

const ProjectList = () => {
    return (
        <div id="projects" class="section">
            <h3>Projects</h3> 
            <div class="card mb-5 shadow p-1 bg-white rounded">
                <div class="row no-gutters">
                    <div id="image-container" class="col-md-7">
                        <img id="first-project" class="card-img-top" src={olive} style={{ width: "100%" }} alt="Card image cap"/>
                    </div>
                    <div id="text-container" class="col-md-5">
                        <div class="card-body">
                            <h3 class="card-title">Olive API</h3>
                            <p class="card-text">An API that helps you find the best software solution for your technical requirements. Uses Amazon Aurora with PostgreSQL for data storage, AWS Lambda for compute and AWS Elasticsearch for full-text search. </p>
                            <ul class="tech-list">
                                <li>Django</li>
                                <li>Docker</li>
                                <li>S3</li>
                                <li>RDS</li>
                                <li>Elasticsearch</li>
                                <li>Lambda</li>
                                <li>PostgreSQL</li>
                                <li>Git</li>
                            </ul>
                            <div class="github-button">
                                <Button variant="primary" href="https://github.com/IJYang/Olive-API" target="_blank"><i class="fa fa-github"/> Repository</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-5 shadow p-1 bg-white rounded">
                <div class="row no-gutters">
                    <div id="image-container" class="col-md-7">
                        <img id="second-project" class="card-img-top" src={logo} style={{ width: "100%" }} alt="Card image cap"/>
                    </div>
                    <div id="text-container" class="col-md-5">
                        <div class="card-body">
                            <h3 class="card-title">Sightsee</h3>
                            <p class="card-text">A full-stack android application designed to showcase tourist attractions across British Columbia. Built with Java and used Google Firebase as the back-end to store user data and images.</p>
                            <ul class="tech-list">
                                <li>Java</li>
                                <li>Firebase</li>
                                <li>Git</li>
                            </ul>
                            <div>
                                <Button variant="primary" href="https://github.com/IJYang/Sightsee" target="_blank"><i class="fa fa-github"/> Repository</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-5 shadow p-1 bg-white rounded">
                <div class="row no-gutters">
                    <div id="image-container" class="col-md-7">
                        <img id="third-project" class="card-img-top" src={logo} style={{ width: "100%" }} alt="Card image cap"/>
                    </div>
                    <div id="text-container" class="col-md-5">
                        <div class="card-body">
                            <h3 class="card-title">Abalone AI</h3>
                            <p class="card-text">A 2D strategy game based on the ‘Abalone’ board game developed with Python. Used the pygame library for the UI and implemented an AI-based CPU which uses the minimax algorithm with alpha-beta pruning.</p>
                            <ul class="tech-list">
                                <li>Python</li>
                                <li>Git</li>
                            </ul>
                            <div>
                                <Button variant="primary" href="https://github.com/IJYang/Abalone" target="_blank"><i class="fa fa-github"/> Repository</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectList