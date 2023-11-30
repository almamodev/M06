from models.booking import BookingModel
from schemas.booking import BookingSchema
from flask_smorest import Blueprint, abort
from db import db
from sqlalchemy.exc import SQLAlchemyError
from flask.views import MethodView
from flask_jwt_extended import jwt_required, get_jwt_identity


blp = Blueprint('booking', __name__)


@blp.route('/booking')
class BookingView(MethodView):
    @jwt_required()
    @blp.response(200, BookingSchema(many=True))
    def get(self):
        return BookingModel.query.filter(BookingModel.user == get_jwt_identity()).all()
    

    @jwt_required()
    @blp.arguments(BookingSchema)
    @blp.response(201)
    def post(self, payload):
        booking = BookingModel(user=get_jwt_identity(), flight=payload['flight'])
        try:
            db.session.add(booking)
            db.session.commit()
        except SQLAlchemyError:
            abort(500)