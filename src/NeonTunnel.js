import React from "react";
import ReactPlayer from 'react-player';

function NeonTunnel() {

    return (

        <ReactPlayer 
            className="neon-tunnel"
            volume="0" 
            playing="true" 
            loop="true" 
            controls="1" 
            modestbranding="1" 
            url="https://www.youtube.com/watch?v=wju4JdhBeRs&t=1s"
            width={843}
            height={474}
        />

    )

}

export default NeonTunnel