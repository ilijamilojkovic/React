import { useRef, useState } from "react";
import ResultModal from "./Resultmodal";
export default function TimerChallenge({ title, targetTime }) {

    const [timeRemaning, setTimeRemaning] = useState(targetTime * 1000);

    const timer = useRef();
    const dialog = useRef();
    const timerIsActive = timeRemaning > 0 && timeRemaning < targetTime * 1000;

    if (timeRemaning <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handlereset() {
        setTimeRemaning(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaning(prevTimeRemaning => prevTimeRemaning - 10);
        }, 10);
    }
    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remaningTime={timeRemaning} onReset={handlereset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inative'}
                </p>
            </section>
        </>);
}