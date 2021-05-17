import React from "react";
import Navbar from './Navbar';
import Login from './Login';
import { Button } from 'react-bootstrap';

function Landing(){
    return(

        <div>
        <Navbar />
        <b>TOONSTREAM</b>
        <h1><b>TOONSTREAM VER.1.0</b></h1>
        <p>STREAM BOT<br />Starting at $5 for 1000 streams</p>
        <Button variant="outline-primary" size="lg" >
            Block level button
        </Button>
        </div>
    );
}

export default Landing;