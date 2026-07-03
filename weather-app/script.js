const foreCastData = {
  city_name: "",
  city_country: "",
  current_temperature: "",
  feels_like: "",
  min: "",
  max: "",
  icon: '',
  clouds_type: "",
  unit: "celsius",
};
const forecastContainer = document.getElementById("forecast-container");
const messageScreen = document.getElementById("message-screen");
const errorScreen = document.getElementById("error-screen");
const ApiKey = "20e1345a281f2aff58d34a2e57055f52";

// ! Getting the Weather Datas
const fetchData = async (city_name) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${ApiKey}&units=metric&lang=en`;
    const response = await fetch(url);

    const result = response.json();
    if (!response.ok) {
      console.log(response);
      throw new Error("An Error occured");
    }
    return result;
  } catch (error) {
    errorScreen.style.display = "flex";
    showError();
    console.error(error);
  }
};
const fetchimage = async (icon) => {
  try {
    const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const response = await fetch(url);
    return response.blob();
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};

// ! Getting the city name and updating the forecastData
const onSubmit = async (e) => {
  e.preventDefault();
  const city_name = document.getElementById("city_name").value;

  if (city_name.trim() !== "") {
    foreCastData.city_name = city_name;
    const result = await fetchData(city_name);
    console.log(result, foreCastData);

    if (result) {
      foreCastData.city_country = result.sys.country;
      foreCastData.city_name = result.name;
      foreCastData.current_temperature = result.main.temp;
      foreCastData.max = result.main.temp_max;
      foreCastData.min = result.main.temp_min;
      foreCastData.feels_like = result.main.feels_like;
      foreCastData.clouds_type = result.weather[0].description;
      foreCastData.icon = result.weather[0].icon

      forecastContainer.style.display = "flex";

      forecastContainer.innerHTML = `
        <h2 class="title">${foreCastData.city_name}, ${foreCastData.city_country}</h2>
        <span class="container">
            <span>
                <h2>current temperature:</h2>
                <h2>${foreCastData.current_temperature}°c</h2>
            </span>
            <span>
                <h2>Feels like:</h2>
                <h2>${foreCastData.feels_like}°c</h2>
            </span>
            <span>
                <h2>Min:</h2>
                <h2>${foreCastData.min}°c</h2>
                <h2 style="margin-inline: 5px">,Max:</h2>
                <h2>${foreCastData.max}°c</h2>
            </span>
        </span>
        <div class="image-container">
            <h2>${foreCastData.clouds_type}</h2>
            <span> <img src="https://openweathermap.org/img/wn/${foreCastData.icon}@2x.png" alt="Meteo" /> </span>
        </div>
    `;
      errorScreen.style.display = "none";
    } else {
      forecastContainer.style.display = "none";
      errorScreen.style.display = "flex";
    }
    forecastContainer.style.display = "flex";
    messageScreen.style.display = "none";
  } else {
    errorScreen.style.display = "flex";
    messageScreen.style.display = "none";
  }
};

const onLoad = () => {
  const form = document.getElementById("app-form");
  form.addEventListener("submit", (e) => onSubmit(e));
  if (foreCastData.city_name.trim() === "") {
    messageScreen.style.display = "flex";
    forecastContainer.style.display = "none";
    console.log(foreCastData);
  }
};

window.addEventListener("load", onLoad());
