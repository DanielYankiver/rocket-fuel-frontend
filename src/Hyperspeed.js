import React from "react";
import ReactPlayer from 'react-player';

function Hyperspeed() {

    return (
   
            <ReactPlayer 
              className="hyperspeed-player"
              volume="0" 
              playing="true" 
              controls="1" 
              modestbranding="1" 
              url="https://www.youtube.com/watch?v=al93dC3vqws"
              width={843}
              height={474}
            />
     
    )

}

export default Hyperspeed 