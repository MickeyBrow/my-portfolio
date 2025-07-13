import { useState, useEffect } from 'react'
import './wordle-modal-content.css'

function WordleModal() {
    const [firstRow, setFirstRow] = useState([" ", " ", " ", " ", " "])
    const [secondRow, setSecondRow] = useState([" ", " ", " ", " ", " "])
    const [thirdRow, setThirdRow] = useState([" ", " ", " ", " ", " "])
    const [fourthRow, setFourthRow] = useState([" ", " ", " ", " ", " "])
    const [fifthRow, setFifthRow] = useState([" ", " ", " ", " ", " "])
    const [index, setIndex] = useState(0)
    const [randomWord, setRandomWord] = useState("")

    async function getWord() {
        const response = await fetch("https://random-word-api.herokuapp.com/word?number=5")
        const data = await response.json();
        setRandomWord(data[0])
    }

    useEffect(() => {
        getWord()
    }, [])

    const setFunctions = [setFirstRow, setSecondRow, setThirdRow, setFourthRow, setFifthRow]

    const handleOnSubmit = async (index) => {
        const input = document.getElementById("wordle-input")
        const word = input.value.toUpperCase()
        setFunctions[index](word.split(""))
        setIndex(index + 1)
        input.value = ""
        console.log(randomWord)
    }

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
                <div className='wordle-row'>
                    {thirdRow.map((letter, i) => (
                        <div key={i} className='wordle-letter'>{letter}</div>
                    ))}
                </div>
                <div className='wordle-row'>
                    {fourthRow.map((letter, i) => (
                        <div key={i} className='wordle-letter'>{letter}</div>
                    ))}
                </div>
                <div className='wordle-row'>
                    {fifthRow.map((letter, i) => (
                        <div key={i} className='wordle-letter'>{letter}</div>
                    ))}
                </div>
            </div>
            <div className='wordle-submit'>
                <input type='text' id="wordle-input" maxLength="5" />
                <button style={{marginLeft: '2%'}} onClick={() => handleOnSubmit(index)}>Submit</button>
            </div>
        </div>
    )
}
export default WordleModal