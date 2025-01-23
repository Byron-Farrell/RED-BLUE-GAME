import PlainButton from "./PlainButton";
import React, {useEffect} from 'react';
import Modal from "./Modal";

const RedBlueGame = (props) => {
    const [score, setScore] = React.useState(0);
    const [wordIsRed, setWordIsRed] = React.useState(true);
    const [isRed1, setIsRed1] = React.useState(false);
    const [isRed2, setIsRed2] = React.useState(true);
    const [word, setWord] = React.useState('RED');
    const [button1, setButton1] = React.useState('RED');
    const [button2, setButton2] = React.useState('BLUE');
    const [timer, setTimer] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const [incorrect, setIncorrect] = React.useState(0);
    const [started, setStarted] = React.useState(false);

    useEffect(() => {
        if (timer > 0) {
            const intervalId = setTimeout(() => {
                setTimer(c => c - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        }



    }, [timer]);

    function ShowModal() {
        if (timer > 0) {
            return null
        }

        return (
            <Modal>
                <header className={'text-2xl mb-5 text-center'}>Times Up!</header>

                <section className={'flex flex-col justify-center gap-2'}>
                    <div>Answered Correctly: <span className={'text-emerald-400'}>{correct}</span></div>
                    <div>Answered Incorrectly: <span className={'text-red-400'}>{incorrect}</span></div>
                    <div>Total Score: <span className={'text-blue-400'}>{score}</span></div>
                </section>
            </Modal>
        )
    }

    function startGame() {
        if (!started) {
            setStarted(true);
        }

        setTimer(90);
    }

    function formatTime() {
        if (timer > 60) {
            const remainder = timer % 60;
            return `1:${remainder}`;
        }

        return timer;
    }

    function handleClick(buttonName) {
        const isRed = buttonName === 'RED';

        if (wordIsRed === isRed) {
            setScore((prevScore) => prevScore + 1);
            setCorrect((prevCorrect) => prevCorrect + 1);
        }
        else {
            if (score > 0) {
                setScore((prevScore) => prevScore - 1);
                setIncorrect((prevIncorrect) => prevIncorrect + 1);
            }
        }
        const randomNumber = Math.floor(Math.random() * 2)

        if (randomNumber < 1) {
            setWordIsRed(true)
        }
        else {
            setWordIsRed(false)
        }

        const randomNumber1 = Math.floor(Math.random() * 2)

        if (randomNumber1 < 1) {
            setWord('RED')
        }
        else {
            setWord('BLUE')
        }


        const randomNumber3 = Math.floor(Math.random() * 2)

        if (randomNumber3 < 1) {
            setIsRed1(true)
            setIsRed2(false)
        }
        else {
            setIsRed1(false)
            setIsRed2(true)
        }

        const randomNumber4 = Math.floor(Math.random() * 2)

        if (randomNumber4 < 1) {
            setButton1('RED')
            setButton2('BLUE')
        }
        else {
            setButton1('BLUE')
            setButton2('RED')
        }
    }
    return (
        <div>
            {(timer > 0) ? <div className="sm:p-10 p-2">
                <div className={'text-white'}>
                    <div>Time: {formatTime()}</div>
                    <div>Score: {score}</div>
                </div>
                <header className={`${wordIsRed ? 'text-red-400' : 'text-blue-400'} text-9xl text-center mt-16 mb-32`}>{ word }</header>
                <div className={'flex gap-8 md:flex-row flex-col justify-center items-center'}>
                    <PlainButton onClick={() => handleClick(button1)} className={`${isRed1 ? 'text-red-400' : 'text-blue-400'} text-3xl md:w-auto w-full hover:bg-slate-700 active:bg-slate-700`}>{ button1 }</PlainButton>
                    <PlainButton onClick={() => handleClick(button2)} className={`${isRed2 ? 'text-red-400' : 'text-blue-400'} text-3xl md:w-auto w-full hover:bg-slate-700 active:bg-slate-700`}>{ button2 }</PlainButton>
                </div>
            </div> :
                <div className={'flex flex-col justify-center items-center h-lvh '}>
                    <PlainButton onClick={startGame} className={'text-xl md:w-auto w-full hover:bg-emerald-600 hover:border-emerald-600 active:bg-emerald-600 active:border-emerald-600 text-slate-100'}>{started ? "RESTART" : "START"}</PlainButton>
                </div>
            }

            {started ? <ShowModal/> : null}
        </div>
    )
}

export default RedBlueGame;