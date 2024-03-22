/* --------------- IMPORTS --------------- */ 
import React from "react"
import { Outlet } from "react-router-dom"




/* --------------- LAYOUT FORMAT --------------- */ 
export const Clients: React.FC = () => {
    return  (
        <div>
            <p>This is clients page.</p>

            <Outlet />
        </div>
     );
};