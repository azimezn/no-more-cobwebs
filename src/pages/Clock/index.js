import { useEffect, useRef, useState } from "react";
import "./style.css"

export default function Clock() {

    const [ currentTime, setCurrentTime ] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const cleanTime = date.toLocaleTimeString("en-US");
            setCurrentTime(cleanTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const secondHandRef = useRef(null);
    const minsHandRef = useRef(null);
    const hourHandRef = useRef(null);

    useEffect(() => {
        const secondHand = secondHandRef.current;
        const minsHand = minsHandRef.current;
        const hourHand = hourHandRef.current;

        function setDate() {
            const now = new Date();

            const seconds = now.getSeconds();
            const secondsDegrees = ((seconds / 60) * 360) + 90;
            secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

            const mins = now.getMinutes();
            const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
            minsHand.style.transform = `rotate(${minsDegrees}deg)`;

            const hour = now.getHours();
            const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
            hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        }

        const intervalID = setInterval(setDate, 1000);

        // setInterval(setDate, 1000);
        // setDate();

        return () => clearInterval(intervalID);
    }, []);

    return (
        <>
            <div className="clockPage">
            <h1 className="clockTime">Current time is: {currentTime}</h1>
                {/* <div className="clockHeader">This is a clock.</div> */}
                <div className="clock">
                    <div className="clock-face">
                        <div className="hand hour-hand" ref={hourHandRef}></div>
                        <div className="hand min-hand" ref={minsHandRef}></div>
                        <div className="hand second-hand" ref={secondHandRef}></div>
                    </div>
                </div>
            </div>
        </>
    );
}