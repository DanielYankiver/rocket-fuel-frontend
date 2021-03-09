import React from "react";
import ReactPlayer from 'react-player';

function Clouds() {

    return (

        <ReactPlayer 
            className="clouds-player"
            volume="0" 
            playing="true" 
            loop="true" 
            controls="1" 
            modestbranding="1" 
            url="https://www.youtube.com/watch?v=bog4VzMWP20&t=1"
            width={843}
            height={474}
        />

    )

}

export default Clouds 