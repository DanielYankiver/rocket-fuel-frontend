import React from "react";
import ReactPlayer from 'react-player';

function Ocean() {

    return (

        <ReactPlayer 
            className="ocean-player"
            volume="0" 
            playing="true" 
            loop="true" 
            controls="1" 
            modestbranding="1" 
            url="youtube.com/watch?v=BEaegFLrvqY"
            width={843}
            height={474}
        />

    )

}

export default Ocean 