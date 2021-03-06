import Home from './routes/Home'
import React from "react";
import Detail from './routes/Detail';
import "./styles.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movie/:id" element={<Detail/>}/>
            </Routes>
        </Router>

    )
}
export default App;