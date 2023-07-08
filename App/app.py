from flask import Flask
import os
import socket

app = Flask(__name__)

@app.route('/')
def hello():
    if 'HOSTNAME' in os.environ:
        server_name = os.environ['HOSTNAME']
    else:
        server_name = socket.gethostname()
    return f'Hello from server {server_name}!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

