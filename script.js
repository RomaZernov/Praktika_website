// Устанавливаем API ключ и город для запроса погодных данных
const apiKey = '243a8b77ccfc3b71c13c85acddb12e63';  
const city = 'Vyborg'; 

// Функция для получения данных о погоде
function getWeatherData() {   
    // Отправляем запрос на сервер с помощью метода fetch
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=32&appid=${apiKey}`)   
      .then(response => response.json())   // Получаем ответ и преобразуем его в формат JSON
      .then(data => {   
        // Обрабатываем полученные данные и создаем новый массив объектов
        const weatherData = data.list.filter(item => item.dt_txt.includes('00:00:00') || item.dt_txt.includes('12:00:00') || item.dt_txt.includes('18:00:00')).map(item => ({   
          day: new Date(item.dt * 1000).toLocaleDateString(),   // Преобразуем дату в строку в формате "день.месяц.год"
          time: new Date(item.dt * 1000).toLocaleTimeString(),   // Преобразуем время в строку в формате "часы:минуты"
          precipitation: item.weather[0].description,   // Получаем описание погоды
          temperature: Math.round(item.main.temp - 273.15) + '°C'   // Получаем температуру в градусах Цельсия и округляем до целых чисел
        }));   
           
        // Отображаем данные в таблице
        const tableBody = document.querySelector('tbody');   // Находим тело таблицы
        tableBody.innerHTML = '';   // Очищаем тело таблицы
        weatherData.forEach(item => {   // Добавляем строки в таблицу для каждого объекта в массиве
          const row = document.createElement('tr');   // Создаем новую строку
          row.innerHTML = `   
            <td>${item.day}</td>   
            <td>${item.time}</td>   
            <td>${item.precipitation}</td>   
            <td>${item.temperature}</td>   
          `;   
          tableBody.appendChild(row);   // Добавляем строку в тело таблицы
        });   
      })   
      .catch(error => console.error(error));   // Обрабатываем ошибки при запросе данных
  }   

getWeatherData();   // Вызываем функцию для получения и отображения погодных данных.