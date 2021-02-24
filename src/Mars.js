import React from "react";
import ReactPlayer from 'react-player';

function Mars() {

    return (
        <div id="mars">
            <h1>Mars Page</h1>
            <ReactPlayer volume="0" playing="true" controls="1" modestbranding="1" url='https://www.youtube.com/watch?v=6B_6K-splRU' />
        </div>

    )

}

export default Mars 