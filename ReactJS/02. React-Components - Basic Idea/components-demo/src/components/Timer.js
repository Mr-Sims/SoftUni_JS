import React from 'react'

export const Timer = (props) => {
    const [secs, setTime] = React.useState(0);

    // let [minutes, setMinutes] = React.useState(0);

    console.log('render')
    // if (secs >= 60) {
    //     setTime(secs=0);
    //     setMinutes(minutes+1)
    // }

    setTimeout(() => {
        if (secs < 10){
        setTime(secs+1);
    }
    }, 1000);

    return (
        <div>
            <h1>
                Timer: {secs} minutes.
                {/* Timer: {minutes}:{secs} minutes. */}

            </h1>
        </div>
    );
}