import React,{Component} from 'react'
import './frontPage.css'
import { Link } from 'react-router-dom';
    const Front = () =>{
    return(
        <><div id="particles-js"></div><div>
            <p>Welcome to CS551 Cloud Computing group project webpage. The button below will redirect you to the form that needs to be submitted. Thank you for participating in this questionarie. The team behind this web page are greatful for each and every one who has filled out the form.</p>
        </div><div>
                <Link to="/Lucky">Submit Response</Link>
        </div></>
    );
};



export default Front;