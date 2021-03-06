import React from "react";
import ReactPlayer from 'react-player';

function Mars() {

    return (

        <ReactPlayer 
            className="mars-player"
            volume="0" 
            playing="true" 
            controls="1" 
            modestbranding="1" 
            url="https://www.youtube.com/watch?v=6B_6K-splRU"
            width={843}
            height={474}
        />

    )

}

export default Mars 