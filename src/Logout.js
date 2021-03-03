import React from "react";
import ReactPlayer from 'react-player';

function Logout() {

    return(
        <ReactPlayer 
        className="abort-player"
        volume="0" 
        playing="true" 
        loop="true" 
        controls="1" 
        modestbranding="1" 
        url="https://www.youtube.com/watch?v=PUX5FzpBbcQ"
        width={843}
        height={474}
    />

    )

}


export default Logout 