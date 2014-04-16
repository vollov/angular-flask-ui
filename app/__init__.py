from flask import Flask
from flask_login import LoginManager

app = Flask(__name__, static_url_path='')

login_manager = LoginManager()
login_manager.login_view = "login"
login_manager.session_protection = "basic"
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
login_manager.init_app(app)

#from app.routes import index