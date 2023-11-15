import React,{Component} from 'react'
import './LuckyDrawForm.css'
const Lucky = () => {
    return(
        <div>
        <div>
          <label type="text" placeholder="Enter Participant Name">Enter Participant Name: </label>
          <input></input> <br></br><br></br>
          <label for="gender">Gender: </label>
            <select id="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select><br></br><br></br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/><br></br><br></br>
            <button onClick="">Add Participant</button> <br></br>
        </div>
        </div>
    );
};


export default Lucky;