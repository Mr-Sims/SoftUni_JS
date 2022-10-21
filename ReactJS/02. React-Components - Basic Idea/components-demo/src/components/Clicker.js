import { useState } from "react";

export const Clicker = () => {
    const [clicks, setClicks] = useState(0);

    const clickHandler = (ev) => {
        console.log(ev.target);
        setClicks(oldClicks => oldClicks + 1)
    }

    const dangerClicks = clicks > 20;

    if(clicks > 30) {
        return (
            <h1>Clicker is BROKEN!</h1>
        );
    }

    return (
        <div>
            <div>
                {dangerClicks && <h1>DANGER CLICKS</h1> }
                {clicks > 10 ?
                    <h2>Medium Clicks</h2>
                    :
                    <h3>Normal Clicks</h3>
                    // null
                }
            </div>
            <button onClick={clickHandler} >{clicks}</button>
        </div>
    );

}