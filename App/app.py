import os
import socket
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    host_name = socket.gethostname()
    container_id = os.uname()[1]
    return f' Container ID: {container_id}'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
