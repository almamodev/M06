from flask_smorest import Blueprint, abort
from models.user import UserModel
from schemas.user import UserSchema
from db import db
from flask.views import MethodView
from flask_jwt_extended import create_access_token
from passlib.hash import pbkdf2_sha256


blp = Blueprint('account', __name__)


@blp.route('/login')
class LoginView(MethodView):
    @blp.arguments(UserSchema)
    @blp.response(200)
    def post(self, payload):
        user = UserModel.query.filter(UserModel.username == payload['username']).first()
        if user and pbkdf2_sha256.verify(payload['password'], user.password):
            return create_access_token(identity=user.id, fresh=True)
        else:
            abort(401)


@blp.route('/register')
class RegisterView(MethodView):
    @blp.arguments(UserSchema)
    @blp.response(201)
    def post(self, payload):
        if UserModel.query.filter(UserModel.username == payload['username']).first():
            abort(409)
        else:
            user = UserModel(username=payload['username'], password=pbkdf2_sha256.hash(payload['password']))
            db.session.add(user)
            db.session.commit()

