const fetch = require("node-fetch")
const config = require("../config/config.json")
exports.weather = (req,res,next)=>{
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.body.town}&units=metric&appid=8d0296fab1ae5b08bc49777608b9fad8`,{
            method:"POST",
            mode: "cors",
        }
    )
        .then((response) => response.json())
        .then((data) => {
            let iconUrl = "http://openweathermap.org/img/w/";
            let icon = data.weather[0].icon;
            let forecast = data.weather[0].description;
            let temperature = data.main.temp;
            let city = data.name;
            console.log(`Today's forecast for ${city}: ${forecast}`);
            console.log(`It's currently ${temperature}°C `);
            res.json({forecast,temperature,city,icon,iconUrl});
        })
        .catch((err)=>{
            console.log(err);
        })
}