import React, { useState, useEffect, useRef } from "react";

export const Timer = () => {
    const [timeObj, setTimeObj] = useState({
        hrs: 0,
        mins: 0,
        secs: 0
    });

    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);

    const intervalIdRef = useRef(null);
    const initialTimeRef = useRef(null);

    useEffect(() => {
        if(!isTimerRunning) return;

        intervalIdRef.current = setInterval(() => {
            setTimeLeft( prev => {
                if ( prev <= 1 ) {
                    clearInterval(intervalIdRef.current);
                    setIsTimerRunning(false);
                    return 0;
                }

                return prev - 1;
            })
        }, 1000)

        return () => clearInterval(intervalIdRef.current)
    }, [isTimerRunning])

    const handleTimerToggle = () => {
        if (isTimerRunning) {
            clearInterval(intervalIdRef.current);
            setIsTimerRunning(false);
        } else {
            const newTimeLeft = timeObj.hrs * 60 * 60 + timeObj.mins * 60 + timeObj.secs;
            if ( timeLeft === 0 && newTimeLeft === 0 ) return;
            if ( timeLeft === 0 && newTimeLeft > 0 ) {
                setTimeLeft(newTimeLeft);
                initialTimeRef.current = newTimeLeft;
                setTimeObj({ hrs: 0, mins: 0, secs: 0 })
            }

            setIsTimerRunning(true);
        }
    }

    const formatTimeString = (timeStr) => {
        return String(timeStr).padStart(2, 0);
    };

    const formatTime = () => {
        const hrs = formatTimeString(Math.floor(timeLeft / 3600));
        const mins = formatTimeString(Math.floor((timeLeft % 3600) / 60));
        const secs = formatTimeString(timeLeft % 60);

        return `${hrs}:${mins}:${secs}`;
    };

    const handleReset = () => {
        setTimeLeft(initialTimeRef.current);
        setIsTimerRunning(true);
    };

    const handleClear = () => {
        setTimeLeft(0)
        setIsTimerRunning(false);
        initialTimeRef.current = null;
    };

    return (
        <div>
            <h1>Timer Component</h1>
            <div className="inputs">
                <input
                    style={{ width: '60px', height: '25px', marginLeft: '5px' }}
                    type="number"
                    min="0"
                    value={timeObj.hrs}
                    onChange={(e) => setTimeObj({ ...timeObj, hrs: +e.target.value })}
                />:
                <input
                    style={{ width: '60px', height: '25px', marginLeft: '5px' }}
                    type="number"
                    min="0"
                    value={timeObj.mins}
                    onChange={(e) => setTimeObj({ ...timeObj, mins: +e.target.value })}
                />:
                <input
                    style={{ width: '60px', height: '25px', marginLeft: '5px' }}
                    type="number"
                    min="0"
                    value={timeObj.secs}
                    onChange={(e) => setTimeObj({ ...timeObj, secs: +e.target.value })}
                />
            </div>
            <h2>{formatTime()}</h2>
            <div className="buttons">
                <button
                    onClick={handleTimerToggle}
                    style={{ minWidth: '80px', padding: '5px', marginRight: '5px', cursor: 'pointer' }}
                >
                    {isTimerRunning ? "Pause" : timeLeft > 0 ? "Continue" : "Start"}
                </button>
                <button
                    onClick={handleReset}
                    style={{ minWidth: '80px', padding: '5px', marginRight: '5px', cursor: 'pointer' }}
                >
                    Reset
                </button>
                <button
                    onClick={handleClear}
                    style={{ minWidth: '80px', padding: '5px', cursor: 'pointer' }}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};