import { useState, useEffect } from 'react'
import Icons from '../components/icons'
import contact from '../src/assets/contact.png'
import projects from '../src/assets/projects.png'
import about from '../src/assets/about.png'
import './App.css'
import Toolbar from '../components/toolbar'
import DraggableResizeableModal from '../components/drag-resize-modal.jsx'

import ContactModal from '../components/contact-modal-content.jsx'
import ProjectsModal from '../components/projects-modal-content.jsx'
import AboutModal from '../components/about-modal-content.jsx'

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isNewOrder, setIsNewOrder] = useState(false)
  const modalRenderOrder = [[isContactOpen, <ContactModal />, "Contact Me!", () => setIsContactOpen(false)], [isProjectsOpen, <ProjectsModal/>, "My Projects", () =>setIsProjectsOpen(false)], [isAboutOpen, <AboutModal/>, "About Me!", () => setIsAboutOpen(false)]]


  const icons_data = {
    "Contact": contact,
    "Projects": projects,
    "About Me": about
  }
  const icons_actives = {
    "Contact": isContactOpen,
    "Projects": isProjectsOpen,
    "About Me": isAboutOpen
  }

  useEffect(() => {}, [isContactOpen, isProjectsOpen, isAboutOpen, isNewOrder])
  

  function handleClick(opt) {
    switch(opt) {
      case "Contact":
        setIsContactOpen(true)
        break
      case "Projects":
        setIsProjectsOpen(true)
        break
      case "About Me":
        setIsAboutOpen(true)
        break
    }
  }

  function handleToolbarClick(key) {
    switch(key) {
      case "Contact":
        setIsContactOpen(true)
        break
      case "Projects":
        setIsProjectsOpen(true)
        break
      case "About Me":
        setIsAboutOpen(true)
        break
    }
  }

  return (
    <>
      <div style={{backgroundColor: 'rgb(0, 160, 80)', height: '100vh', width: '100vw'}}>
        <div className='main'>
          {Object.keys(icons_data).map((key) => (
            <Icons image={icons_data[key]} title={key} handleClicks={() => handleClick(key)}/>
          ))}
        </div>
        {modalRenderOrder.map((item, i) => item[0] && <DraggableResizeableModal id={`modal${i}`} title={item[2]} onClose={item[3]}>
          {item[1]}
        </DraggableResizeableModal>)}
        <div>
          <Toolbar images={icons_data} css_actives={icons_actives} clickFunc={handleToolbarClick}/>
        </div>
      </div>
    </>
  )
}

export default App
