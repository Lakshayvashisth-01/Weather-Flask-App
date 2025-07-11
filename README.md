# Weather-Flask-App
Dockerised Web Apps on IBM Cloud . Our project demonstrates a simple weather web application that fetches real-time weather data. It's built with standard web technologies and designed for easy containerisation.
Features :
Search weather by city name
Shows temperature, humidity, wind speed, cloud cover, and description
REST API at /api/weathe
 Dockerized for easy deployment

Tech Stack : 
Backend: Python, Flask
API: OpenWeatherMap
Frontend: HTML (via Jinja templates)

Others: Docker


## 📁 Project Structure

.
├── app.py # Flask application
├── requirements.txt # Python dependencies
├── Dockerfile # Docker configuration
├── templates/ # HTML templates (Flask)
└── static/ # CSS, JS, or image files (if any)

yaml
Copy
Edit

---

## ▶️ Getting Started

```bash
1. Clone and Install
git clone <repo-url>
cd <project-folder>
pip install -r requirements.txt
2. Set Your API Key
bash
Copy
Edit
export OWM_KEY=your_openweathermap_api_key
3. Run the App
bash
Copy
Edit
python app.py
Visit: http://localhost:5000

🔌 API Usage
Endpoint: /api/weather?city=CityName
Method: GET

✅ Sample Response
json
Copy
Edit
{
  "city": "Delhi",
  "temp": 30.2,
  "humidity": 60,
  "description": "clear sky",
  "clouds": 5,
  "wind": 3.4
}
If the city is not found or an error occurs:

json
Copy
Edit
{
  "error": "city not found"
}
🐳 Run with Docker
Build the image:
bash
Copy
Edit
docker build -t weather-app .
Run the container:
bash
Copy
Edit
docker run -e OWM_KEY=your_api_key -p 5000:5000 weather-app
📄 Requirements
Python 3.8+

Flask

requests
(see requirements.txt for exact versions)
