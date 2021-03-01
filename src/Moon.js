import React from "react";
import ReactPlayer from 'react-player';

function Moon() {

    return (
        <div id="moon">
            <h1>Moon Page</h1>
            <br></br>
            <ReactPlayer volume="0" playing="true" controls="1" modestbranding="1" url='https://www.youtube.com/watch?v=IfrQ5dczECY&feature=emb_logo' />
        </div>

    )

}

export default Moon 