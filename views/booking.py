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
        return BookingModel.query.all()


    @jwt_required()
    @blp.arguments(BookingSchema)
    @blp.response(201, BookingSchema)
    def post(self, payload):
        booking = BookingModel(**payload)
        try:
            db.session.add(booking)
            db.session.commit()
            return booking
        except SQLAlchemyError:
            abort(500)