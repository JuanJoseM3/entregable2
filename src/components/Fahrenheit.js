import useFetch from "../hooks/useFetch";
import getDate from "../helpers/date";
import Min from "../images/tempmin.png";
import Max from "../images/tempmax.png";

const Fahrenheit = ({ units, setUnits }) => {
    const { isLoading, city, country, icon, description, temp, temp_min, temp_max, feels, speed, humidity } = useFetch();
    const actualDate = getDate();
    
  const handleUnits = () => setUnits(!units);

    return (
        isLoading ? (
            <div className="card">
                <div className="loader"></div>
            </div> 
        ) : (
                <div className="card">
                    <ul className="location">
                        <li>{city}, {country}</li>
                        <li>{ actualDate }</li>
                    </ul>
                    <ul className="main-info">
                        <li className="icon-container"><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} /><p className="icon-info">{ description }</p></li>
                        <li className="temp-info"><strong className="temp">{ (temp * 1.8 + 32).toFixed(2)}°F</strong><p>Feels like: { (feels * 1.8 + 32).toFixed(2) }°F</p></li>
                        <ul className="aditional-info">
                            <div className="temp-range">
                                <li>
                                    <img src={Min} className="png"/>
                                    <p><strong>Min temp: </strong><br />{ (temp_min * 1.8 + 32).toFixed(2) }°F</p>
                                </li>
                                <li>
                                    <img src={Max} className="png"/>
                                    <p><strong>Max temp: </strong><br />{ (temp_max * 1.8 + 32).toFixed(2) }°F</p>
                                </li>
                            </div>
                            
                            <li className="air-info"><strong>Wind: </strong>{ speed } km/h</li>
                            <li className="air-info"><strong>Humidity: </strong>{ humidity }%</li>
                        </ul>
                    </ul>
                    <button onClick={handleUnits}>Cambiar a Celsius</button>
                </div>
            )
    );
};

export default Fahrenheit;