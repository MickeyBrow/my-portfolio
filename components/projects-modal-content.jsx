import { useState } from 'react'
import './projects-modal-content.css'

function ProjectsModal() {
    const [index, setIndex] = useState(0)
    const projects = {
        "0": {
            "title": "This portfolio!",
            "body": "Body",
            "link": "https://github.com/MickeyBrow/my-portfolio"
        },
        "1": {
            "title": "Budget Tracker",
            "body": "Body",
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
                </div>
                <a style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex'}} href={projects[index]["link"]}>GitHub Link</a>
            </div>
            <button onClick={handleRightArrow} style={{marginRight: '1%'}}>{">"}</button>
        </div>
    )
}
export default ProjectsModal