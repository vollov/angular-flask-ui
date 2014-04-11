import json

from flask import jsonify
from route import app

@app.route('/users', methods=['GET'])
def get_users():
    users = {'hi':'hello'}
    return jsonify(user=json.dumps(users))
