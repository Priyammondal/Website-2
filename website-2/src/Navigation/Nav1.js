import React from 'react'
import './nav1.css';
function nav1() {
    return (
        <div className="Nav1-main">

            <div id="first">
                <strong><p>Please input your information, for a personalized quote</p></strong>
            </div>


            <div id="second">
                <div id="input">
                    <input id="progress" type="text"></input>
                    <div>Your Progress</div>
                </div>
                <div id="ApplicationNo">
                    <p style={{ color: "tomato" }}>Your Application ID</p>
                    <p>ORC 4893020230</p>
                </div>
            </div>
        </div>
    )
}

export default nav1
