import { useState } from 'react'
import Icons from '../components/icons'
import contact from '../src/assets/contact.png'
import projects from '../src/assets/projects.png'
import about from '../src/assets/about.png'
import wordle from '../src/assets/wordle.png'
import './App.css'
import Toolbar from '../components/toolbar'
import DraggableResizeableModal from '../components/drag-resize-modal.jsx'

import ContactModal from '../components/contact-modal-content.jsx'
import ProjectsModal from '../components/projects-modal-content.jsx'
import AboutModal from '../components/about-modal-content.jsx'
import WordleModal from '../components/wordle-modal-content.jsx'

function App({signOutFunc}) {
  const [mainModal, setMainModal] = useState(null)
  const [iconLookup, setIconLookup] = useState({"Contact": "none", "Projects": "none", "About": "none", "Wordle": "none"})  
  
  const icons_data = {
    "About": [about, "About Me!"],
    "Projects": [projects, "Projects"],
    "Contact": [contact, "Contact"],
    "Wordle": [wordle, "Wordle"]
  }

  function handleClick(opt) {
    let background = []
    let active = []
    let placeholder = {...iconLookup}

    if (mainModal) {
      switch(mainModal[0]) {
        case "About":
          background = ["About", "background"]
          break
        case "Contact":
          background = ["Contact", "background"]
          break
        case "Projects":
          background = ["Projects", "background"]
          break
        case "Wordle":
          background = ["Wordle", "background"]
          break
      }
    }

    switch(opt) {
      case "About":
        setMainModal(["About", <AboutModal/>])
        active = ["About", "active"]
        break
      case "Contact":
        setMainModal(["Contact", <ContactModal/>])
        active = ["Contact", "active"]
        break
      case "Projects":
        setMainModal(["Projects", <ProjectsModal/>])
        active = ["Projects", "active"]
        break
      case "Wordle":
        setMainModal(["Wordle", <WordleModal/>])
        active = ["Wordle", "active"]
        break
    }
    if (background) placeholder[background[0]] = background[1]
    placeholder[active[0]] = active[1]
    setIconLookup(placeholder)
  }

  function handleClose(current) {
    setMainModal(null)
    switch(current[0]) {
      case "About":
        setIconLookup({"Contact": iconLookup["Contact"], "Projects": iconLookup["Projects"], "About": "none", "Wordle": iconLookup["Wordle"]})
        break
      case "Contact":
        setIconLookup({"Contact": "none", "Projects": iconLookup["Projects"], "About": iconLookup["About"], "Wordle": iconLookup["Wordle"]})
        break
      case "Projects":
        setIconLookup({"Contact": iconLookup["Contact"], "Projects": "none", "About": iconLookup["About"], "Wordle": iconLookup["Wordle"]})
        break
      case "Wordle":
        setIconLookup({"Contact": iconLookup["Contact"], "Projects": iconLookup["Projects"], "About": iconLookup["About"], "Wordle": "none"})
        break
    }
  }

  return (
    <>
      <div style={{backgroundColor: 'rgb(0, 160, 80)', height: '100vh', width: '100vw'}}>
        <div className='main'>
          {Object.keys(icons_data).map((key) => (
            <Icons key={key} image={icons_data[key][0]} title={icons_data[key][1]} handleClicks={() => handleClick(key)}/>
          ))}
        </div>
        {mainModal && 
        <DraggableResizeableModal title={mainModal[0]} onClose={() => handleClose(mainModal)} icon={icons_data[mainModal[0]][0]}>
          {mainModal[1]}
        </DraggableResizeableModal>}
        <div>
          <Toolbar images={icons_data} css_types={iconLookup} clickFunc={handleClick} signOut={signOutFunc}/>
        </div>
      </div>
    </>
  )
}

export default App
