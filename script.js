const apiKey = 'f3a750a7ad6a3f82c8c48d04ce5069c1';


const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=${apiKey}`;
const table = document.getElementById('weather-table');

// Fetch data from API and build table
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.list.forEach(weatherData => {
      const date = new Date(weatherData.dt * 1000);
      const dateFormatted = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
      const temp = `${Math.round(weatherData.main.temp - 273.15)}°C`;
      const windSpeed = `${weatherData.wind.speed} m/s`;
      const description = weatherData.weather[0].description;

      const row = document.createElement('tr');
      const dateCell = document.createElement('td');
      const tempCell = document.createElement('td');
      const windSpeedCell = document.createElement('td');
      const descriptionCell = document.createElement('td');

      dateCell.textContent = dateFormatted;
      tempCell.textContent = temp;
      windSpeedCell.textContent = windSpeed;
      descriptionCell.textContent = description;

      dateCell.style.padding = '10px';
      tempCell.style.padding = '10px';
      windSpeedCell.style.padding = '10px';
      descriptionCell.style.padding = '10px';

      dateCell.style.border = '1px solid #ccc';
      tempCell.style.border = '1px solid #ccc';
      windSpeedCell.style.border = '1px solid #ccc';
      descriptionCell.style.border = '1px solid #ccc';

      row.appendChild(dateCell);
      row.appendChild(tempCell);
      row.appendChild(windSpeedCell);
      row.appendChild(descriptionCell);

      table.querySelector('tbody').appendChild(row);
    });
  })
  .catch(error => console.error(error));