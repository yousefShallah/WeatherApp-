import React from 'react';

const Form = (props) =>{
    return(
        <div className="formClass"> 
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="Enter your city .. " />
                <input type="text" name="country" placeholder="Enter your country .. " />
                <div className="btnDiv">
                <button type="submit">Search Weather</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
