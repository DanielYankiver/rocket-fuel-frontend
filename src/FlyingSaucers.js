import React from "react";
import ReactPlayer from 'react-player';

function FlyingSaucers() {

    return (

        <ReactPlayer 
            className="flying-saucers"
            volume="0" 
            playing="true" 
            loop="true" 
            controls="1" 
            modestbranding="1" 
            url="https://www.youtube.com/watch?v=Q47zPnzGZyI&t=5s"
            width={843}
            height={474}
        />

    )

}

export default FlyingSaucers