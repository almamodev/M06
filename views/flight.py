from flask_smorest import Blueprint
from models.flight import FlightModel
from schemas.flight import FlightSchema
from flask.views import MethodView


blp = Blueprint('flights', __name__)


@blp.route('/flights')
class FlightView(MethodView):
    @blp.response(200, FlightSchema(many=True))
    def get(self):
        return FlightModel.query.all()