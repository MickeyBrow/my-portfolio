import { useState } from 'react'
import './projects-modal-content.css'

function ProjectsModal() {
    const [index, setIndex] = useState(0)
    const projects = {
        "0": {
            "title": "This portfolio!",
            "body": "This project can best be described as a clever way to present my resume and technical skills, using a computer simlation web app.",
            "skills": ["React", "CSS", "HTML", "JavaScript"],
            "link": "https://github.com/MickeyBrow/my-portfolio"
        },
        "1": {
            "title": "Budget Tracker",
            "body": "This was one of my first complex personal projects that I built. It was more of a learning experience than anything, giving me the chance to learn how to plan, construct, and deploy a web app by myself.",
            "skills": ["NextJs", "CSS", "HTML", "JavaScript", "Python", "Flask"],
            "link": "https://github.com/MickeyBrow/budget-tracker"
        },
    }

    function handleLeftArrow() {
        if (index > 0) {
            setIndex(index - 1)
        }
    }
    function handleRightArrow() {
        if (index < Object.keys(projects).length - 1) {
            setIndex(index + 1)
        }
    }

    return (
        <div className='modal-content-projects'>
            <button onClick={handleLeftArrow} style={{marginLeft: '1%'}}>{"<"}</button>
            <div className='project-card'>
                <p style={{flex: 1, textAlign: 'center'}}>{projects[index]["title"]}</p>
                <div className='project-body'>
                    <p style={{flex: 1, textAlign: 'center'}}>{projects[index]["body"]}</p>
                    <div>
                        <p>Languages & Programs used:</p>
                        <ul>
                            {projects[index]["skills"].map((skill) => (
                                <li key={skill} style={{display: 'inline-block', marginRight: '5%'}}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <a style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex'}} href={projects[index]["link"]}>GitHub Link</a>
            </div>
            <button onClick={handleRightArrow} style={{marginRight: '1%'}}>{">"}</button>
        </div>
    )
}
export default ProjectsModal