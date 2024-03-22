/* --------------- IMPORTS --------------- */ 
import React from "react"
import { Outlet } from "react-router-dom"




/* --------------- LAYOUT FORMAT --------------- */ 
export const Teams: React.FC = () => {
    return  (
        <div>
            <p>This is teams page.</p>

            <Outlet />
        </div>
     );
};