import React from 'react';
import './index.css';
import Form from './Component/Form';
//import { async } from 'q';
import Weather from './Component/Weather';
import { async } from 'q';
import img from './image/weather.jpg'


const KEY_API = "0d74eb28036727142bc7c7b1c35d7c6b";
//const URL_API = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${KEY_API}`; 

class App extends React.Component {

  state = {
   tempreature: '', 
    city: '',
    country : '',
    description : '',
    error : ''
  }

  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44
    let api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e36ed364400282e43250b6c4c0274d44`) 
    const data = await api.json();
    console.log(data);
    
    if(city && country){
      this.setState({
        tempreature: data.main.temp, 
        city: data.name,
        country : data.sys.country ,
        description : data.weather[0].description,
        error : ''
      })
    }
    else{
      this.setState({
        tempreature: '', 
        city: '',
        country : '',
        description : '',
        error : 'Please enter your city and country'
      })
      console.log(this.state.error);
    }
  }

  render(){
  return (
    <div className="App">
      <h1> Weather App  </h1>
      <img src={img} />
        <Form getWeather={this.getWeather} />
        <h2>Detiles</h2>
        <Weather
        tempreature = {this.state.tempreature} 
        city = {this.state.city}
        country = {this.state.country}
        description = {this.state.description}
        error = {this.state.error}
        /> 
        
    </div>
  );
}  
}

export default App;
