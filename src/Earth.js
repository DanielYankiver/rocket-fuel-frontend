import React from "react";
import ReactPlayer from 'react-player';

function Earth() {

    return (
   
            <ReactPlayer 
              className="earth-player"
              volume="0" 
              playing="true" 
              controls="1" 
              modestbranding="1" 
              url="https://www.youtube.com/watch?v=EEIk7gwjgIM"
              width={843}
              height={474}
            />
     
    )

}

export default Earth 