import React from "react";
import ReactPlayer from 'react-player';


function Cruise() {

    return (
        // <div id="cruise">
        //     <h1>Landing Page</h1>
        //     <ReactPlayer volume="0" playing="true" controls="1" modestbranding="1" loop="true" url='https://www.youtube.com/watch?v=fTySVh_47Ak' />
        // </div>

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