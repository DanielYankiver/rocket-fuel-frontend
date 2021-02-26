import React from "react";

function Launches() {

    return (
        <div id="launches">
            <h1>Upcoming Launches Page</h1>
            <div>
                <a href="https://spaceflightnow.com/launch-schedule/" target="_blank">
                    <h3>Space Flight Now</h3>
                </a>
                <embed src="https://spaceflightnow.com/launch-schedule/" width="500px" height="300px"></embed>
            </div>
            {/* <div>
                <a href="https://www.spacex.com/launches/" target="_blank">
                    <h3>Space X</h3>
                </a>
                <embed src="https://www.spacex.com/launches/" width="500px" height="300px"></embed>
            </div> */}
            {/* <div>
                <a href="https://www.space.com/32286-space-calendar.html" target="_blank">
                    <h3>space.com</h3>
                </a>
                    <embed src="https://www.space.com/32286-space-calendar.html" width="500px" height="300px"></embed>
            </div> */}
            {/* <div>
                <a href="https://spacecoastlaunches.com/launch-list/" target="_blank">    
                    <h3>Space Coast Launches</h3>
                </a>
                <embed src="https://spacecoastlaunches.com/launch-list/" width="500px" height="300px"></embed>
            </div> */}
        </div>

    )

}

export default Launches 