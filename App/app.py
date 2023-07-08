from flask import Flask
import docker
import socket

app = Flask(__name__)

@app.route('/')
def hello():
    docker_client = docker.DockerClient('unix:///var/run/docker.sock')
    host_info = docker_client.info()
    host_name = host_info['Name']
    container_id = socket.gethostname()
    return f'Hello from server {host_name}! Container ID: {container_id}'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

