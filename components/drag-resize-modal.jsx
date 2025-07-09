import { useState, useRef } from 'react'
import Draggable from 'react-draggable'
import computer from '../src/assets/computer.png'
import './drag-resize-modal.css'

function DraggableResizeableModal({title, onClose, children}) {
    const [isEnlarged, setIsEnlarged] = useState(false)
    const nodeRef = useRef(null)

    function handleOnEnlarge() {
        setIsEnlarged(!isEnlarged)
        if(isEnlarged){
            nodeRef.current.style.width = '100vw'
            nodeRef.current.style.height = '100vh'
            nodeRef.current.style.top = '0'
            nodeRef.current.style.left = '0'
        }

    }

    return (
        <>
            {isEnlarged ? (
                <div className='modal-fullscreen' ref={nodeRef}>
                    <div className='topBar-fullscreen' onClick={() => {}}>
                        <img src={computer} />
                        <p>{title}</p>
                        <div className='controls'>
                            <button className='controls-btn' onClick={handleOnEnlarge}>O</button>
                            <button className='controls-btn' onClick={onClose}>X</button>
                        </div>
                    </div>
                    {children}
                </div>
            ) : (
                <Draggable nodeRef={nodeRef}>
                    <div className='modal' ref={nodeRef}>
                        <div className='topBar'>
                            <img src={computer} />
                            <p>{title}</p>
                            <div className='controls'>
                                <button className='controls-btn' onClick={handleOnEnlarge}>O</button>
                                <button className='controls-btn' onClick={onClose}>X</button>
                            </div>
                        </div>
                        {children}
                    </div>
                </Draggable>
            )}
        </>
    )
}

export default DraggableResizeableModal