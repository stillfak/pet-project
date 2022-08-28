import React from "react";
const AboutComponent = React.lazy(() => import('../pages/About'));
const HomeComponent = React.lazy(() => import('../pages/Home'));

export const routes = [
    {   
        path: "/", 
        element:<HomeComponent/>
    },
    { 
        path: "about",
        element:<AboutComponent />
    }
]