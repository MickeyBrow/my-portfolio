import { useState } from 'react'
import './projects-modal-content.css'

function ProjectsModal() {
    const [index, setIndex] = useState(0)
    const projects = {
        "0": {
            "title": "This portfolio!",
            "body": "This project can best be described as a clever way to present my resume and technical skills, using a computer simlation web app.",
            "learned": "The biggest thing I have learned from this project would be the the importance of designing and planning data structures. While that might be something that sounds obvious in the realm of development, this project really showed me how powerful making a look up object might be and the need for organization when passing all that information around the application.",
            "skills": ["React", "CSS", "HTML", "JavaScript"],
            "link": "https://github.com/MickeyBrow/my-portfolio"
        },
        "1": {
            "title": "Budget Tracker",
            "body": "This was one of my first complex personal projects that I built. It was more of a learning experience than anything, giving me the chance to learn how to plan, construct, and deploy a web app by myself!",
            "learned": "With this being my first project, there is a ton I learned through the experience. However, the biggest one that comes to mind is confidence. This project was built right after my employment at Podium so it was an opportunity to put all of the skills that I had just learned to the test.",
            "skills": ["NextJs", "CSS", "HTML", "JavaScript", "Python", "Flask", "Firebase"],
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
                    <div className='project-purpose'>
                        <p style={{fontWeight: 'bolder', textDecoration: 'underline'}}>Purpose of the Project:</p>
                        <p style={{flex: 1, textAlign: 'center'}}>{projects[index]["body"]}</p>
                    </div>
                    <div className='project-learned'>
                        <p style={{fontWeight: 'bolder', textDecoration: 'underline'}}>What I learned:</p>
                        <p style={{textAlign: 'center'}}>{projects[index]["learned"]}</p>
                    </div>
                    <div className='project-programs'>
                        <p style={{fontWeight: 'bolder', textDecoration: 'underline'}}>Languages & Programs used:</p>
                        <ul>
                            {projects[index]["skills"].map((skill) => (
                                <li key={skill} style={{marginRight: '5%'}}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <a style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex'}} href={projects[index]["link"]} target='_blank'>GitHub Link</a>
            </div>
            <button onClick={handleRightArrow} style={{marginRight: '1%'}}>{">"}</button>
        </div>
    )
}
export default ProjectsModal