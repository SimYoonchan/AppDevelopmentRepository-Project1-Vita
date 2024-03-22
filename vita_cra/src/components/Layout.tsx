/* --------------- IMPORTS --------------- */ 
import React from "react"
import { Outlet } from "react-router-dom"

 


/* --------------- LAYOUT FORMAT --------------- */ 
export const Layout: React.FC = () => {
    return  (
        <div>
            <p>This is my Vita app.</p>
            <ul>
                {/* HOMEPAGE/DASHBOARD */}
                <li>
                    <a href="/">Dashboard</a>
                </li>
                
                {/* CLIENTS */}
                <li>
                    <a href="/Clients">Clients</a>
                </li>

                {/* TEAMS */}
                <li>
                    <a href="/Teams">Teams</a>
                </li>

                {/* CHECKLISTS */}
                <li>
                    <a href="/Checklists">Checklists</a>
                </li>

                {/* SETTINGS */}
                <li>
                    <a href="/Settings">Settings</a>
                </li>
            </ul>
            <Outlet />
        </div>
     );
};
    // The <p> part will become a common template layout format.