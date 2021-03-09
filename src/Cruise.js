import React from "react";
import ReactPlayer from 'react-player';


function Cruise() {

    return (

            <ReactPlayer 
              className="cruise-player"
              volume="0" 
              playing="true"
              loop="true" 
              controls="1" 
              modestbranding="1" 
              url="https://www.youtube.com/watch?v=fTySVh_47Ak"
              width={843}
              height={474}
            />

    )

}

export default Cruise 