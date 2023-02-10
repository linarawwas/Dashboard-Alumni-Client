import React from "react";
import Aside from "./Aside/Aside";
import style from './Dashboard.css'
import DashNav from "./DashNav/DashNav";
import Profile from './Profile/Profile';
import './Profile/Profile.css'
//still need to make the same style for the rest of the data without using usestate or changing the state of anything

function Dashboard(){
    return(
        <div>
<DashNav />
            <div className="DashBody">
            <Aside />
            <Profile />
            </div>

        </div>
    )
}
export default Dashboard;