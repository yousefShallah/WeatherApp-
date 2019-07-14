import React from 'react';

const Weather = (props) =>{
    return(
        <div className="detials"> 
        {
              props.city && 
              <p className="info-tittle"> City : 
                <span className="info_value"> {props.city} </span>    
              </p>
          }

        {
              props.country && 
              <p className="info-tittle"> Country : 
                <span className="info_value"> {props.country} </span>    
              </p>
          }
          {
    props.tempreature && 
    <p className="info-tittle"> Tempreature : 
      <span className="info_value"> {props.tempreature} </span>    
    </p>
}
        {
              props.description && 
              <p className="info-tittle"> Description : 
                <span className="info_value"> {props.description} </span>    
              </p>
          }
       
        {
            props.error &&
            
              <p className="info-tittle"> Error : 
              <span className="info_value"> {props.error} </span>    
            </p>
        }
          
        </div>
    )
}

export default Weather;
