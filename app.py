from flask import Flask
from flask_smorest import Api
from db import db
from flask_migrate import Migrate
from flask_cors import CORS
import models
from flask_jwt_extended import JWTManager
import os
import base64
from views.account import blp as account
from views.booking import blp as booking
from views.flight import blp as flight
from datetime import timedelta


app = Flask(__name__)


app.config['API_TITLE'] = 'UF2'
app.config['API_VERSION'] = '1'
app.config['OPENAPI_VERSION'] = '3.1.0'


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite' 
db.init_app(app)
migrate = Migrate(app, db)


api = Api(app)
api.register_blueprint(account)
api.register_blueprint(booking)
api.register_blueprint(flight)


app.config['JWT_SECRET_KEY'] = base64.urlsafe_b64encode(os.urandom(32)).decode()
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=8)
jwt = JWTManager(app)


cors = CORS(app, resources={r'*': {'origins': '*'}})


if __name__ == '__main__':
    app.run(debug=True)