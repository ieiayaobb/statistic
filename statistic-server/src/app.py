__author__ = 'shenyineng'

from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@socketio.on('connect')
def init(message):
    print(message)

if __name__ == '__main__':
    socketio.run(app, port=9092, host='localhost')