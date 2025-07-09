import { useState } from 'react'
import speaker from '../src/assets/speaker.png'
import wifi from '../src/assets/wifi.png'
import start from '../src/assets/start.png'
import resume from '../src/assets/resume.png'
import './toolbar.css'

function Toolbar({images, css_actives, clickFunc}) {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

      const handleMouseLeave = () => {
        setIsHovering(false);
    }

    return (
        <>
            <div className='toolbar'>
                <div className='left-toolbar'>
                    <div className='toolbar-icon'>
                        <img src={start} />
                    </div>
                    <div className='toolbar-input'>
                        <input placeholder='Type here to search'/>
                        <div className='toolbar-icon'>
                            <img src={resume}/>
                        </div>
                    </div>
                    {Object.keys(images).map((key) => (
                        <>
                            <div key={key} className={css_actives[key] ? 'toolbar-icon-active' : 'toolbar-icon'}>
                                <img src={images[key]} onClick={() => clickFunc(key)}/>
                            </div>
                        </>
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