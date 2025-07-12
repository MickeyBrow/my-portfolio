import { useState } from 'react'
import './wordle-modal-content.css'

function WordleModal() {
    const [firstRow, setFirstRow] = useState("")
    const [secondRow, setSecondRow] = useState("")
    const [thirdRow, setThirdRow] = useState("")
    const [fourthRow, setFourthRow] = useState("")
    const [fifthRow, setFifthRow] = useState("")

    return (
        <div className='modal-content-worlde'>
            <div className='worlde-grid'>
                <div className='wordle-row'>

                </div>
            </div>
            <div className='wordle-submit'>
                <input />
                <button>Submit</button>
            </div>

        </div>
    )
}
export default WordleModal