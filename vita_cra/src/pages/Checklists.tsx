/* --------------- IMPORTS --------------- */ 
import React from "react"
import { Outlet } from "react-router-dom"




/* --------------- LAYOUT FORMAT --------------- */ 
export const Checklists: React.FC = () => {
    return  (
        <div>
            <p>This is checklists page.</p>

            <Outlet />
        </div>
     );
};