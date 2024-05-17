from flask import Flask, jsonify
from threading import Thread, Timer
import random
import sqlite3

app = Flask(__name__)

# Define categories
categories = ["auto", "car", "bus", "truck", "motorcycle", "bike"]

counts = {category: 0 for category in categories}

def connect_db():
    conn = sqlite3.connect('vehicle_counts.db')
    conn.execute('''CREATE TABLE IF NOT EXISTS counts (
                        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                        auto INTEGER,
                        car INTEGER,
                        bus INTEGER,
                        truck INTEGER,
                        motorcycle INTEGER,
                        bike INTEGER
                    )''')
    return conn

def generate_counts():
    global counts
    conn = connect_db()
    for category in categories:
        counts[category] = random.randint(0, 100)  # Adjust range as needed
    cursor = conn.cursor()
    cursor.execute("INSERT INTO counts (auto, car, bus, truck, motorcycle, bike) VALUES (?, ?, ?, ?, ?, ?)",
                   (counts['auto'], counts['car'], counts['bus'], counts['truck'], counts['motorcycle'], counts['bike']))
    conn.commit()
    cursor.close()
    conn.close()
    # Schedule the next generation after 1 millisecond
    t = Timer(0.001, generate_counts)
    t.start()

# Start the count generation thread
t = Thread(target=generate_counts)
t.daemon = True  # Set as daemon to avoid blocking program exit
t.start()

@app.route('/latest_counts')
def get_latest_counts():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM counts ORDER BY timestamp DESC LIMIT 1")
    latest_counts = cursor.fetchone()
    cursor.close()
    conn.close()
    if latest_counts:
        return jsonify(dict(zip(categories, latest_counts[1:])))  # Exclude timestamp
    else:
        return jsonify({category: 0 for category in categories})  # Return empty counts if no data

if __name__ == '__main__':
    app.run(debug=True)
