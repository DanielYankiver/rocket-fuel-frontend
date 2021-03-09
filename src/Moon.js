import React from "react";
import ReactPlayer from 'react-player';

function Moon() {

    return (

        <ReactPlayer 
            className="moon-player"
            volume="0" 
            playing="true" 
            loop="true" 
            controls="1" 
            modestbranding="1" 
            url="https://www.youtube.com/watch?v=IfrQ5dczECY&t=4260s"
            width={843}
            height={474}
        />

    )

}

export default Moon 