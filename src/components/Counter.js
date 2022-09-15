import '../style/Counter.scss'
import {useEffect, useRef, useState} from "react";
import moment from "moment"
import Countdown from "react-countdown";

/**
 * display the remaining time
 */
const Counter = () => {
    const clockRef = useRef();
    const handleStart = () => clockRef.current.start();
    const handlePause = () => clockRef.current.pause();
    // State
    const [nbMsRemaining, setNbMsRemaining] = useState(0);
    const [date, setDate] = useState(moment());
    const [isInClass, setIsInClass] = useState(false)

    /**
     * fetch the remaining time + isInClass and setIsInClass
     */
    const fetchTimeRemaining = () => {
        fetch('https://lab.nocturne.app/api/edt/M2/time-remain')
            .then(res => {
                return res.json()
            })
            .then(response => {
                setNbMsRemaining(response.timeRemainMs)
                setDate(moment().add(response.timeRemainMs, "milliseconds").toDate())
                setIsInClass(response.isInClass);
                if (response.isInClass) {
                    handleStart()
                } else {
                    handlePause()
                }
            })
    };
    useEffect(() => {
        fetchTimeRemaining()
        let intervalID = setInterval(() => fetchTimeRemaining, 1000*60)
        return clearInterval(intervalID)
    }, [])

    const renderer = ({formatted}) => {
        const {days, hours, minutes, seconds} = formatted;

        return (
            <div>
                <div className="counter-container" >
                    <span className="subcontainer">
                        <p className="nombre">{days}</p> <p className="details">jours</p>
                    </span>
                    <span className="separator">
                        :
                    </span>
                    <span className="subcontainer">
                        <p className="nombre">{hours}</p> <p className="details">heures</p>
                    </span>
                    <span className="separator">
                        :
                    </span>
                    <span className="subcontainer">
                        <p className="nombre">{minutes}</p> <p className="details">minutes</p>
                    </span>
                    <span className="separator">
                        :
                    </span>
                    <span className="subcontainer">
                        <p className="nombre">{seconds}</p> <p className="details">secondes</p>
                    </span>
                </div>
                <p className="avant">Nombre d'heure de cours restant avant la fin de cette année cancer</p>
            </div>
        );
    };

    return (
        <Countdown renderer={renderer} date={Date.now() + nbMsRemaining} intervalDelay={0} autoStart={false}
                   ref={clockRef} className="countdown"/>
    )
}

export default Counter
