/* --------------- IMPORTS --------------- */ 
import React from "react"
import { Outlet } from "react-router-dom"




/* --------------- LAYOUT FORMAT --------------- */ 
export const Settings: React.FC = () => {
    return  (
        <div>
            <p>This is settings page.</p>

            <Outlet />
        </div>
     );
};