import React from "react";
import ReactPlayer from 'react-player';

function NASAtv() {

    return (

        <ReactPlayer 
            className="NASAtv-player"
            volume="0" 
            playing="true" 
            controls="1" 
            modestbranding="1" 
            url="https://www.youtube.com/watch?v=21X5lGlDOfg"
            width={843}
            height={474}
        />



    )

}

export default NASAtv 