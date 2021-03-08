import React from "react";
import ReactPlayer from 'react-player';

function AsteroidBelt() {

    return (

        <ReactPlayer 
            className="asteroid-belt-player"
            volume="0" 
            playing="true" 
            loop="true" 
            controls="1" 
            modestbranding="1" 
            url="https://www.youtube.com/watch?v=hJp7-vDN43g"
            width={843}
            height={474}
        />

    )

}

export default AsteroidBelt