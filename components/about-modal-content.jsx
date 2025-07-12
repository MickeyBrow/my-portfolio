import './about-modal-content.css'
import collegePicture from '../src/assets/cu.png'
import myPicture from '../src/assets/me.jpg'
import { useState } from 'react'

function AboutModal() {
    const [isSkills, setIsSkills] = useState(true)
    const myInfo = {
        "picture": myPicture,
        "name": "Mickey Brown",
        "description": "Hi! Im a 26 year old software engineer interested in software development, sports, and finances!"
    }

    return (
        <>
            <div className="modal-content-about">
                <div className="modal-left">
                    <img src={myInfo["picture"]} style={{width: '100%', height: '20%'}}/>
                    <p>{myInfo["name"]}</p>
                    <p style={{textAlign: 'center', fontSize: 'smaller'}}>{myInfo["description"]}</p>
                </div>
                <div className="modal-right">
                    <div style={{display: 'flex'}}>
                        <div className="education-content">
                            <div className='content-header'>
                                <p>Education</p>
                            </div>
                            <div style={{display: 'flex', flex: '2', margin: '5px'}}>
                                <div>
                                    <p>BS in Electrical and Computer Engineering</p>
                                    <p>University of Colorado</p>
                                    <p>2018-2022</p>
                                </div>
                                <img src={collegePicture} style={{width: '50px', height: '50px'}}/>
                            </div>
                        </div>
                        <div className="skills-content">
                            {isSkills ? 
                            <>
                                <div className='content-header'>
                                    <p>Skills</p>
                                </div>
                                <div className='content-body'>
                                    <p>Python</p>
                                    <p>Javascript</p>
                                    <p>C/C++</p>
                                    <p>Elixir</p>
                                    <button style={{float: 'right'}} onClick={() => setIsSkills(!isSkills)}>x</button>
                                </div>
                            </>
                            : 
                            <>
                                <div className='content-header'>
                                    <p>Software</p>
                                </div>
                                <div className='content-body'>
                                    <p>Github</p>
                                    <p>Insomnia</p>
                                    <p>VS Code</p>
                                    <button style={{float: 'right'}} onClick={() => setIsSkills(!isSkills)}>x</button>
                                </div>
                            </>
                            }
                            
                        </div>
                    </div>
                    <div className="experiences-content">
                        <div className='content-header'>
                            <p>Experiences</p>
                        </div>
                        <div className='content-body'>
                            <div className='experience-line'>
                                <div className='experience-left'>
                                    <p>Software Engineer</p>
                                    <p>Podium</p>
                                </div>
                                <div className='experience-right'>
                                    <p>Jun 2022 - Dec 2022</p>
                                </div>
                            </div>
                            <div className='experience-line'>
                                <div className='experience-left'>
                                    <p>Teacher</p>
                                    <p>Denver Public Schools</p>
                                </div>
                                <div className='experience-right'>
                                    <p>Jan 2024 - Present</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutModal