import React from "react";
import ReactPlayer from 'react-player';

function Welcome() {


    return(
        <ReactPlayer 
            className="earth-player"
            volume="0" 
            playing="true" 
            controls="1" 
            modestbranding="1"
            loop="true" 
            url="https://www.youtube.com/watch?v=CG4hxngTPbY"
            width={843}
            height={474}
      />
    )

}


export default Welcome