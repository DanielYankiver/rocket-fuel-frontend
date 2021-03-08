import React from "react";
import ReactPlayer from 'react-player';

function Retro() {

    return (

        <ReactPlayer 
            className="retro"
            volume="0" 
            playing="true" 
            loop="true" 
            controls="1" 
            modestbranding="1" 
            url="https://www.youtube.com/watch?v=5Y0NAyefQF8&t=1s"
            width={843}
            height={474}
        />

    )

}

export default Retro