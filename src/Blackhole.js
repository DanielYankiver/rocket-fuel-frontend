import React from "react";
import ReactPlayer from 'react-player';

function Blackhole() {

    return (

        <ReactPlayer 
            className="blackhole-player"
            volume="0" 
            playing="true" 
            loop="true" 
            controls="1" 
            modestbranding="1" 
            url="https://www.youtube.com/watch?v=3NeIVjfuKQY"
            width={843}
            height={474}
        />

    )

}

export default Blackhole 