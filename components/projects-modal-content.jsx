import { useState } from 'react'
import './projects-modal-content.css'

function ProjectsModal() {
    const [index, setIndex] = useState(0)
    const projects = {
        "0": {
            "title": "Budget Tracker",
            "body": "Body",
            "link": "link"
        },
        "1": {
            "title": "This portfolio!",
            "body": "Body",
            "link": "link"
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
                <p>{projects[index]["title"]}</p>
                <p>{projects[index]["body"]}</p>
                <a href={projects[index]["link"]}>GitHub Link</a>
            </div>
            <button onClick={handleRightArrow} style={{marginRight: '1%'}}>{">"}</button>
        </div>
    )
}
export default ProjectsModal