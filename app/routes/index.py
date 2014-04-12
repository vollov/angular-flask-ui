import json

from flask import jsonify
from app import app

@app.route('/')
def root():
    return app.send_static_file('index.html')


@app.route('/users', methods=['GET'])
def get_users():
    users = {'hi':'hello'}
    return jsonify(user=json.dumps(users))
