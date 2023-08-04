import './ClockStyles.css'
import React, { useEffect,useState } from 'react';

function Clock() {
    const [clockState, setClockState] = useState();

    useEffect(() => {

        setInterval(() => {
            
            const date = new Date();
            setClockState(date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));

        }, 1000);

    }, [])
    
    return <div class = "clock98">{clockState}</div>;

}

export default Clock;