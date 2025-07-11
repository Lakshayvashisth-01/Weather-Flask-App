const weatherMenu = document.querySelector('.menu-items');

async function getWeather() {
  const city = document.getElementById("city-input").value.trim() || "Delhi";

  try {
    const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

    weatherMenu.innerHTML = `
      <div class="menu-item">
        <img src="https://cdn-icons-png.flaticon.com/512/4814/4814315.png" alt="Weather Icon">
        <h3>${data.city} Weather</h3>
        <p>${data.description}</p>
        <span>Temperature: ${data.temp}°C</span>
      </div>
      <div class="menu-item">
        <img src="https://cdn-icons-png.flaticon.com/512/728/728093.png" alt="Humidity Icon">
        <h3>Humidity</h3>
        <span>${data.humidity}%</span>
      </div>
      <div class="menu-item">
        <img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" alt="Clouds">
        <h3>Clouds</h3>
        <span>${data.clouds}%</span>
      </div>
      <div class="menu-item">
        <img src="https://cdn-icons-png.flaticon.com/512/1116/1116453.png" alt="Wind">
        <h3>Wind Speed</h3>
        <span>${data.wind} m/s</span>
      </div>
    `;
  } catch (e) {
    weatherMenu.innerHTML = `<p style="color:red;">❌ ${e.message}</p>`;
    console.error(e);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("city-input").value = "Delhi";
  getWeather();
});
