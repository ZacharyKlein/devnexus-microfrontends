import React, {useState} from 'react'

const MicroWidget = () => {

    const [weather, setWeather] = useState('');

    const submit = () => {
        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}/app2/?`)
            .then(response => response.json())
            .then(json => setWeather(json))
            .catch(e => console.warn(e));

    }

    return <div>
        <h2>Micro Widget from Micro App 2</h2>

        <button onClick={submit}>Click Me</button>

        {weather ? <div>
            <h3>Weather Report</h3>
            <table>
                <tbody>
                <tr>
                    <td>High:</td>
                    <td>{weather.high}</td>
                </tr>
                <tr>
                    <td>Low:</td>
                    <td>{weather.low}</td>
                </tr>
                <tr>
                    <td>Wind:</td>
                    <td>{weather.wind}</td>
                </tr>
                <tr>
                    <td>Direction:</td>
                    <td>{weather.direction}</td>
                </tr>
                </tbody>
            </table>
        </div> : null}

    </div>
}

export default MicroWidget;
