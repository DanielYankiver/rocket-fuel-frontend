import React from "react";
import ReactPlayer from 'react-player';


function Launch() {

    return (
    
      <ReactPlayer 
        className="launch-player"
        volume="0" 
        playing="true" 
        loop="true" 
        controls="1" 
        modestbranding="1" 
        url="https://www.youtube.com/watch?v=nGnX6GkrOgk"
        width={843}
        height={474}
      />

    )

}

export default Launch 