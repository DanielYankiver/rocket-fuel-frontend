import React from "react";
import ReactPlayer from 'react-player';

function Futurama() {

    return (

        <ReactPlayer 
            className="futurama-player"
            volume="0" 
            playing="true" 
            loop="true" 
            controls="1" 
            modestbranding="1" 
            url="https://www.youtube.com/watch?v=6F1QNfmiqHc"
            width={843}
            height={474}
        />

    )

}

export default Futurama 