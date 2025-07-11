import React, { useState } from 'react'
import speaker from '../src/assets/speaker.png'
import wifi from '../src/assets/wifi.png'
import start from '../src/assets/start.png'
import resume from '../src/assets/resume.png'
import './toolbar.css'

function Toolbar({images, css_types, clickFunc, signOut}) {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const handleToolbarClass = (key) => {
        switch(key) {
            case "active":
                return "toolbar-icon-active"
            case "background":
                return "toolbar-icon-background"
            case "none":
                return "toolbar-icon"
        }
    }

    return (
        <>
            <div className='toolbar'>
                <div className='left-toolbar'>
                    <div className='toolbar-icon'>
                        <img src={start} onClick={signOut} />
                    </div>
                    <div className='toolbar-input'>
                        <input placeholder='Type here to search'/>
                        <div className='toolbar-icon'>
                            <img src={resume}/>
                        </div>
                    </div>
                    {Object.keys(images).map((key) => (
                        <React.Fragment key={key}>
                            <div className={handleToolbarClass(css_types[key])}>
                                <img src={images[key][0]} onClick={() => clickFunc(key)}/>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <div className='right-toolbar'>
                    {isHovering ? (
                        <div className='textbox'>
                            <p>Textbox</p>
                            <p>Internet Access</p>
                        </div>
                    ) : null}
                    <div className='toolbar-icon' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img src={wifi} />
                    </div>
                    <div className='toolbar-icon'>
                        <img src={speaker} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toolbar