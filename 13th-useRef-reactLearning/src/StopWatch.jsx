
import React, { useState, useEffect, useRef } from "react";
function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimerRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimerRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimerRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false)
    }

    function formateTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let miliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        miliseconds = String(miliseconds).padStart(2,"0");
       
        return `${hours}:${minutes}:${seconds}:${miliseconds}`;
    }

    return (<>

        <div className="stopwatch">
            <div className="display">{formateTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">START</button>
                <button onClick={stop} className="stop-button">STOP</button>
                <button onClick={reset} className="reset-button">RESET</button>
            </div>
        </div>
    </>);
}
export default StopWatch