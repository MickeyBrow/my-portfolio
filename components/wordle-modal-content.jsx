import { useState } from 'react'
import './wordle-modal-content.css'

function WordleModal() {
    const [firstRow, setFirstRow] = useState(["S", "t", "e", "a", "k"])
    const [secondRow, setSecondRow] = useState(["T", "a", "c", "o", "s"])
    const [thirdRow, setThirdRow] = useState(["", "", "", "", ""])
    const [fourthRow, setFourthRow] = useState(["", "", "", "", ""])
    const [fifthRow, setFifthRow] = useState(["", "", "", "", ""])

    return (
        <div className='modal-content-worlde'>
            <div className='worlde-grid'>
                <div className='wordle-row'>
                    {firstRow.map((letter, i) => (
                        <div key={i} className='wordle-letter'>{letter}</div>
                    ))}
                </div>
                <div className='wordle-row'>
                    {secondRow.map((letter, i) => (
                        <div key={i} className='wordle-letter'>{letter}</div>
                    ))}
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