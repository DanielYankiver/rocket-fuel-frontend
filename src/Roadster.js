import React from "react";
import ReactPlayer from 'react-player';

function Roadster() {

    return (

        <ReactPlayer 
            className="roadster-player"
            volume="0" 
            playing="true" 
            loop="true" 
            controls="1" 
            modestbranding="1" 
            url="https://www.youtube.com/watch?v=aBr2kKAHN6M&t=33"
            width={843}
            height={474}
        />

    )

}

export default Roadster 