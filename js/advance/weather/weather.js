// function getOldWeather(name, callback) {
//   setTimeout(() => {
//     callback({ city: name, temperature: 30 });
//   }, 10000);
// }

// getOldWeather("Beijing", (data) => {
//   console.log(`The weather in ${data.city} is ${data.temperature}°C.`);
//   getOldWeather("Shanghai", (data) => {
//     console.log(`The weather in ${data.city} is ${data.temperature}°C.`);
//   });
//   getOldWeather("Guangzhou", (data) => {
//     console.log(`The weather in ${data.city} is ${data.temperature}°C.`);
//   });
// });

// function getWeatherPromise(name) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ city: name, temperature: 30 });
//     }, 2000);
//   });
// }

// getWeatherPromise("Beijing").then((data) => {
//   console.log(`The weather in ${data.city} is ${data.temperature}°C.`);
//   return getWeatherPromise("Shanghai");
// }).then((data) => {
//   console.log(`The weather in ${data.city} is ${data.temperature}°C.`);
//   return getWeatherPromise("Guangzhou");
// }).then((data) => {
//   console.log(`The weather in ${data.city} is ${data.temperature}°C.`);
//   return getWeatherPromise("Shenzhen");
// }).then((data) => {
//   console.log(`The weather in ${data.city} is ${data.temperature}°C.`);
// }).catch((error) => {
//   console.error("Error fetching weather data:", error);
// });

// async function getWeatherAsync(name) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ city: name, temperature: 30 });
//     }, 2000);
//   });
// }

// async function displayWeather() {
//   try {
//     const data1 = await getWeatherAsync("Beijing");
//     console.log(`The weather in ${data1.city} is ${data1.temperature}°C.`);

//     const data2 = await getWeatherAsync("Shanghai");
//     console.log(`The weather in ${data2.city} is ${data2.temperature}°C.`);

//     const data3 = await getWeatherAsync("Guangzhou");
//     console.log(`The weather in ${data3.city} is ${data3.temperature}°C.`);

//     const data4 = await getWeatherAsync("Shenzhen");
//     console.log(`The weather in ${data4.city} is ${data4.temperature}°C.`);
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
// }

// displayWeather();

async function getWeatherAsync(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  try {
    const response = await fetch(url);
    console.log("Fetching weather data from API...", response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Weather data received:", data);
    return data.current_weather;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
}

async function displayWeather() {
  try {
    const weather = await getWeatherAsync(40.7128, -74.006); // New York City coordinates
    console.log(
      `Current temperature in New York City: ${weather.temperature}°C`,
    );
    return weather; // Return the weather data for later use
  } catch (error) {
    console.error("Failed to display weather:", error);
  }
}

const loadWeather = document.getElementById("loadWeather");

let data = null;

loadWeather.addEventListener("click", async () => {
  data = await displayWeather();
});

const result = document.getElementById("weatherReulst");

result.addEventListener("click", () => {
  if (data) {
    console.log("Weather data:", data);
    document.getElementById("result").textContent =
      `Current temperature in New York City: ${data.temperature}°C`;
  } else {
    console.log("Weather data is not loaded yet.");
  }
});

// this keyword is used to refer to the current object in a method or function. It allows you to access properties and methods of the object that the function is a part of. The value of this depends on how the function is called, and it can change based on the context in which it is used.

let city = "Los Angeles";
const weatherObject = {
  city: "New York City",
  temperature: 30,
  getWeatherInfo: async function () {
    console.log(`The weather in ${this.city} is ${this.temperature}°C.`);
  },
};

weatherObject.getWeatherInfo(); // The weather in New York City is 30°C.


// OOP

// class VideoCard {
//   constructor(brand, model, memory) {
//     this.brand = brand;
//     this.model = model;
//     this.memory = memory;
//   }

//   getDetails() {
//     return `${this.brand} ${this.model} with ${this.memory}GB memory`;
//   }
//   render() {
//     const cardElement = document.createElement("div");
//     cardElement.className = "video-card";
//     cardElement.textContent = this.getDetails();
//     document.body.appendChild(cardElement);
//   }
// }


// const myVideoCard = new VideoCard("NVIDIA", "RTX 3080", 10);
// myVideoCard.render();
// const anotherVideoCard = new VideoCard("AMD", "Radeon RX 6800", 16);
// anotherVideoCard.render();


// class ShortVideoCard extends VideoCard {
//   constructor(brand, model, memory, duration) {
//     super(brand, model, memory);
//     this.duration = duration;
//   }
  
//   getDetails() {
//     return `${super.getDetails()} with a duration of ${this.duration} minutes`;
//   }

//   render() {
//     const cardElement = document.createElement("div");
//     cardElement.className = "short-video-card";
//     cardElement.textContent = this.getDetails();
//     document.body.appendChild(cardElement);
//   }
// }

// const myShortVideoCard = new ShortVideoCard("NVIDIA", "RTX 3060", 8, 5);
// myShortVideoCard.render();