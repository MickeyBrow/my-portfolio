import './about-modal-content.css'
import collegePicture from '../src/assets/cu.png'
import myPicture from '../src/assets/me.jpg'
import { useState } from 'react'

function AboutModal() {
    const [isSkills, setIsSkills] = useState(true)
    const [isPodiumClicked, setIsPodiumClicked] = useState(false)
    const [isDPSClicked, setIsDPSClicked] = useState(false)

    const myInfo = {
        "picture": myPicture,
        "name": "Mickey Brown",
        "description": "Hi! Im a 26 year old software engineer interested in software development, sports, and finances!",
        "linkedIn": "http://www.linkedin.com/in/mickisbrown/"
    }

    const podiumExperiencePoints = [
        "Collaborated with internal teams, such as QA and other product teams, to develop a new company wide API/Webhook testing strategy.",
        "Developed End-to-End pipeline tests that provided 65% public API coverage.",
        "Aided in migrating and creating metrics and alerts surrounding product’s system health and traffic.",
        "Redesigned and developed a new frontend system allowing for a more seamless and self-serve customer experience.",
        "Developed customer facing APIs and webhooks.",
        "Wrote reusable unit tests to ensure quality control and bug detection."
    ]

    const dpsExperiencePoints = [
        "Built incredibly strong communication and leadership skills.",
        "Collaborated with administrators and teachers to identify solutions to areas of improvement within the school.",
        "Helped design and grade 50+ lesson plans for 8th grade General Science.",
        "Analyzed 70+ students’ progress through the quarter and worked with other staff to efficiently plan and coordinate work."
    ]

    return (
        <>
            <div className="modal-content-about">
                <div className="modal-left">
                    <img src={myInfo["picture"]} style={{width: '100%', height: '20%'}}/>
                    <p>{myInfo["name"]}</p>
                    <p style={{textAlign: 'center', fontSize: 'smaller'}}>{myInfo["description"]}</p>
                    <a href={myInfo["linkedIn"]} target='_blank'>LinkedIn</a>
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
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <button onClick={() => setIsSkills(!isSkills)}>{"<"}</button>
                                        <ul>
                                            <li>Python</li>
                                            <li>Javascript</li>
                                            <li>C/C++</li>
                                            <li>Elixir</li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                            : 
                            <>
                                <div className='content-header'>
                                    <p>Software</p>
                                </div>
                                <div className='content-body'>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <button onClick={() => setIsSkills(!isSkills)}>{">"}</button>
                                        <ul>
                                            <li>Github</li>
                                            <li>Insomnia</li>
                                            <li>Postman</li>
                                            <li>VS Code</li>
                                            <li>Firebase Studio</li>
                                        </ul>
                                    </div>
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
                            <div className='experience-line' onClick={() => setIsPodiumClicked(!isPodiumClicked)}>
                                <div className='experience-left'>
                                    <p style={{fontWeight: 'bolder'}}>Software Engineer</p>
                                    <p><i>Podium</i></p>
                                </div>
                                <div className='experience-right'>
                                    <p style={{flex: 2}}>Jun 2022 - Dec 2022</p>
                                    <p style={{fontSize: 'smaller', flex: 1, color: 'grey', userSelect: 'none'}}>Click here for more info!</p>
                                </div>
                            </div>
                            <div className={isPodiumClicked ? "experience-podium-content" : "experience-podium-hidden"}>
                                <p style={{fontWeight: 'bold', padding: '2%'}}>What I did at Podium:</p>
                                <ul>
                                    {podiumExperiencePoints.map((point) => (
                                        <li>{point}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='experience-line' onClick={() => setIsDPSClicked(!isDPSClicked)}>
                                <div className='experience-left'>
                                    <p style={{fontWeight: 'bolder'}}>Apprentice Teacher</p>
                                    <p><i>Denver Public Schools</i></p>
                                </div>
                                <div className='experience-right'>
                                    <p>Jan 2024 - Present</p>
                                    <p style={{fontSize: 'smaller', flex: 1, color: 'grey', userSelect: 'none'}}>Click here for more info!</p>
                                </div>
                            </div>
                            <div className={isDPSClicked ? "experience-dps-content" : "experience-dps-hidden"}>
                                <p style={{fontWeight: 'bold', padding: '2%'}}>What I did at DPS:</p>
                                <ul>
                                    {dpsExperiencePoints.map((point) => (
                                        <li>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutModal