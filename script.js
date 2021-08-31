let city = document.querySelector('.city');
let temp = document.querySelector('.temp');
let cloud = document.querySelector('.cloud');
let nam = document.querySelector('.name');
let date = document.querySelector('.date');
let search = document.querySelector('.search');

// city.value = 'chennai';

search.addEventListener('click', async function () {
  let url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    city.value +
    '&appid=89a866485aecd671d20a63958e48c1c9';
  try {
    let data_dummy = await fetch(url);
    let data = await data_dummy.json();
    let city_name = await data.name;
    console.log(city_name);
    let city_temp = await Math.floor(data.main.temp);
    let city_cloud = await data.weather[0].main;
    let date_time = new Date().toDateString();
    nam.innerHTML = `${city_name}`;
    temp.innerHTML = `${city_temp - 273} &#176; C`;
    date.innerHTML = `${date_time}`;
    if (city_cloud == 'Clouds') {
      src = '/assets/cloudy.png';
    } else if (city_cloud == 'Rain') {
      src = '/assets/rainy.png';
    } else {
      src = '/assets/sunny.png';
    }
    cloud.innerHTML = `<img class="cloudy" src=${src}>`;
  } catch (err) {
    alert('Enter the Correct City Name');
  }

  console.log(city_name);
  console.log(city_temp);
  console.log(date_time);
  console.log(city_cloud);
});
