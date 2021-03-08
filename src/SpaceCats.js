import React from "react";
import ReactPlayer from 'react-player';

function SpaceCats() {

    return (

        <ReactPlayer 
            className="space-cats"
            volume="0" 
            playing="true" 
            loop="true" 
            controls="1" 
            modestbranding="1" 
            url="https://www.youtube.com/watch?v=Kz-LK0OBOfM&t=1s"
            width={843}
            height={474}
        />

    )

}

export default SpaceCats