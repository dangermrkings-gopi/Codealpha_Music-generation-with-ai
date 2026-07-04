from flask import Flask, jsonify, render_template
import time

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    # Simulation of model inference (latency included)
    time.sleep(2) 
    # In a real app: Load your Keras model here and predict
    return jsonify({"status": "complete", "audio_url": "/static/output.mid"})

if __name__ == '__main__':
    app.run(debug=True)
