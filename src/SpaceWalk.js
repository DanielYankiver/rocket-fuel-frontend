import React from "react";
import ReactPlayer from 'react-player';

function SpaceWalk() {

    return (

        <ReactPlayer 
            className="space-walk"
            volume="0" 
            playing="true" 
            loop="true" 
            controls="1" 
            modestbranding="1" 
            url="https://www.youtube.com/watch?v=Wfoy_OvNDvw"
            width={843}
            height={474}
        />

    )

}

export default SpaceWalk