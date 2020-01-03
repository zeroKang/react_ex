import React, {useState} from 'react'
import QuizBoard from './QuizBoard'
import QuizInput from './QuizInput'

const QuizComponent = () => {

    const [idx, setIdx] = useState(0)
    const [end, setEnd] = useState(false)

    const arr = [  
                    {title:"Quiz1...", answer:"1" },
                    {title:"Quiz2...", answer:"2" },
                    {title:"Quiz3...", answer:"3" },
                    {title:"Quiz4...", answer:"4" },
                    {title:"Quiz5...", answer:"5" }, 
                ]

    const checkAnswer = (userInput) => {
        console.log("checkAnswer")
        if(arr[idx].answer === userInput){
            if(idx === arr.length -1){
                setEnd(true)
                return
            }
            setIdx(idx + 1)
        }
    }

    return (
        <div>
            {end ? <h1>TRUE</h1> : <> <QuizBoard title={arr[idx].title}></QuizBoard> <QuizInput fn={checkAnswer}></QuizInput></>     }

        </div>
    )
}

export default QuizComponent