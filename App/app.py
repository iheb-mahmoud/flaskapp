from flask import Flask
import socket
import os

app = Flask(__name__)

@app.route('/')
def hello():
    server_name = socket.gethostname()
    container_id = os.uname()[1]
    return f'Hello from server {server_name}! Container ID: {container_id}'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
