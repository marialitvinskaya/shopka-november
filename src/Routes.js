
import React from "react";
import { Routes, Route} from 'react-router-dom';
import WatchList from "./components/watchList";
import App from "./App";

export default function RouterProvider() {
    return (
        <Routes>
                {/*<Route path="/" element={<App />}></Route>*/}
                <Route path="/wish-list" element={<WatchList />} />
                <Route component={<App />} />
        </Routes>
    )
}


