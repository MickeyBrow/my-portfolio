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
    const [letterCss, setLetterCss] = useState(["wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent"])

    async function getWord() {
        const response = await fetch("https://random-word-api.herokuapp.com/word?length=5")
        const data = await response.json();
        setRandomWord(data[0])
    }

    useEffect(() => {
        getWord()
    }, [])

    const rowsArray = [firstRow, secondRow, thirdRow, fourthRow, fifthRow]
    const rowLookUp = {
        firstRow: setFirstRow,
        secondRow: setSecondRow,
        thirdRow: setThirdRow,
        fourthRow: setFourthRow,
        fifthRow: setFifthRow
    }

    const handleOnSubmit = async (index) => {
        const input = document.getElementById("wordle-input")
        const word = input.value.toLowerCase()
        checkWord(word)
        Object.values(rowLookUp)[index](word.split(""))
        setIndex(index + 1)
        input.value = ""
    }

    const checkWord = (word) => {
        let letter_css = []
        for (let i = 0; i < word.length; i++) {
            if (word[i] == randomWord[i]) {
                letter_css[i] = "wordle-letter-correct"
            } else if (randomWord.includes(word[i])) {
                letter_css[i] = "wordle-letter-present"
            } else {
                letter_css[i] = "wordle-letter-absent"
            }
        }
        setLetterCss(letter_css)
    }

    return (
        <div className='modal-content-worlde'>
            <div className='worlde-grid'>
                {rowsArray.map((row, rowIndex) => (
                    <div key={rowIndex} className='wordle-row'>
                        {row.map((letter, i) => (
                            <div key={i} className={letterCss[i]}>{letter}</div>
                        ))}
                    </div>
                ))}
            </div>
            <div className='wordle-submit'>
                <input type='text' id="wordle-input" maxLength="5" />
                <button style={{marginLeft: '2%'}} onClick={() => handleOnSubmit(index)}>Submit</button>
            </div>
        </div>
    )
}
export default WordleModal