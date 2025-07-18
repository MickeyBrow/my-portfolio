import { useState, useEffect } from 'react'
import './wordle-modal-content.css'

function WordleModal() {
    const [isGameOver, setIsGameOver] = useState([false, "loss"])
    const [tutorialModalOpen, SetIsTutorialModalOpen] = useState(true)
    const [firstRow, setFirstRow] = useState([" ", " ", " ", " ", " "])
    const [secondRow, setSecondRow] = useState([" ", " ", " ", " ", " "])
    const [thirdRow, setThirdRow] = useState([" ", " ", " ", " ", " "])
    const [fourthRow, setFourthRow] = useState([" ", " ", " ", " ", " "])
    const [fifthRow, setFifthRow] = useState([" ", " ", " ", " ", " "])
    const [index, setIndex] = useState(0)
    const [randomWord, setRandomWord] = useState("")
    const [letterCss, setLetterCss] = useState([
        ["wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent"],
        ["wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent"],
        ["wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent"],
        ["wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent"],
        ["wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent", "wordle-letter-absent"]
    ])

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

    const tutortialLookUP = {
        "word": ["tutortial-letter-correct", "tutortial-letter-absent", "tutortial-letter-absent", "tutortial-letter-absent"],
        "home": ["tutortial-letter-absent", "tutortial-letter-absent", "tutortial-letter-present", "tutortial-letter-absent"],
        "maid": ["tutortial-letter-absent", "tutortial-letter-absent", "tutortial-letter-absent", "tutortial-letter-absent"]
    }

    const styleWord = (word, rowInd) => {
        let cssLookUp = [...letterCss]
        for (let i = 0; i < word.length; i++) {
            if (word[i] === randomWord[i]) cssLookUp[rowInd][i] = "wordle-letter-correct"
            else if (randomWord.includes(word[i])) cssLookUp[rowInd][i] = "wordle-letter-present"
        }
        setLetterCss(cssLookUp)
    }

    const handleOnSubmit = async (ind) => {
        const input = document.getElementById("wordle-input")
        const word = input.value.toLowerCase()
        styleWord(word, ind)
        Object.values(rowLookUp)[ind](word.split(""))
        setIndex(ind + 1)
        input.value = ""

        if (word === randomWord) {
            setIsGameOver([true, "win"])
            return
        }
        if (ind === 4) setIsGameOver([true, "loss"])
    }

    return (
        <>
            {isGameOver[0] ? 
            <>
                <div className='game-over-modal'>
                    <p>You {isGameOver[1]}!</p>
                    <p>The word was {randomWord}</p>
                </div>
            </>
            :
            <>
                {tutorialModalOpen && 
                <>
                    <div className='tutorial-modal'>
                        <button style={{float: 'right'}}onClick={() => SetIsTutorialModalOpen(false)}>X</button>
                        <div>
                            <p>How to play</p>
                            <p>Guess the worlde in 5 tries.</p>
                            <ul>
                                <li>Each guess must be a vlid 5 letter word.</li>
                                <li>The color of the tiles will change to show how close your guess was to the word.</li>
                            </ul>
                            <p>Examples:</p>
                            <div className='example-row'>
                                <div className='example-row-word'>
                                    {["w", "o", "r", "d"].map((letter, i) => (
                                        <div key={i} className={tutortialLookUP["word"][i]}>{letter}</div>
                                    ))}
                                </div>
                                <p>W is in the word and in the correct spot.</p>
                            </div>
                            <div className='example-row'>
                                <div className='example-row-word'>
                                    {["h", "o", "m", "e"].map((letter, i) => (
                                        <div key={i} className={tutortialLookUP["home"][i]}>{letter}</div>
                                    ))}
                                </div>
                                <p>M is in the word but in the wrong spot.</p>
                            </div>
                            <div className='example-row'>
                                <div className='example-row-word'>
                                    {["m", "a", "i", "d"].map((letter, i) => (
                                        <div key={i} className={tutortialLookUP["maid"][i]}>{letter}</div>
                                    ))}
                                </div>
                                <p>None of the letters are present here.</p>
                            </div>
                        </div>
                    </div>
                </>
                }
                <div className='modal-content-worlde'>
                    <div className='worlde-grid'>
                        {rowsArray.map((row, rowIndex) => (
                            <div key={rowIndex} className='wordle-row'>
                                {row.map((letter, i) => (
                                    <div key={i} className={letterCss[rowIndex][i]}>{letter}</div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className='wordle-submit'>
                        <input type='text' id="wordle-input" maxLength="5" autoComplete='off' />
                        <button style={{marginLeft: '2%'}} onClick={() => handleOnSubmit(index)}>Submit</button>
                    </div>
                </div>
            </>
            }
        </>
    )
}

export default WordleModal