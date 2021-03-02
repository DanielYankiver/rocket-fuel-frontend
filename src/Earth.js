import React from "react";
import ReactPlayer from 'react-player';

function Earth() {

    return (
        <div id="earth">
            <h1>Earth Page</h1>
            <br></br>
            <ReactPlayer className="earth-player" volume="0" playing="true" controls="1" modestbranding="1" url='https://www.youtube.com/watch?v=EEIk7gwjgIM' />
        </div>

    )

}

export default Earth 