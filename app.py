from flask import Flask, render_template, request, jsonify
import requests
import os

app = Flask(__name__)
# Load API key securely from environment variable
API_KEY = os.getenv("OWM_KEY")
if not API_KEY:
    raise RuntimeError("Please set the OWM_KEY environment variable")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/weather")
def api_weather():
    city = request.args.get("city", "").strip()
    if not city:
        return jsonify({"error": "City is required"}), 400

    resp = requests.get(
        "https://api.openweathermap.org/data/2.5/weather",
        params={"q": city, "appid": API_KEY, "units": "metric"}
    )
    data = resp.json()
    if resp.status_code != 200:
        return jsonify({"error": data.get("message", "Error fetching weather")}), resp.status_code

    return jsonify({
        "city": data["name"],
        "temp": data["main"]["temp"],
        "humidity": data["main"]["humidity"],
        "description": data["weather"][0]["description"],
        "clouds": data["clouds"]["all"],
        "wind": data["wind"]["speed"]
    })

if __name__ == "__main__":
    app.run(debug=True)
