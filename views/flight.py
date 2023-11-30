from flask_smorest import Blueprint
from models.flight import FlightModel
from schemas.flight import FlightSchema
from flask.views import MethodView


blp = Blueprint('flight', __name__)


@blp.route('/flight')
class FlightView(MethodView):
    @blp.response(200, FlightSchema(many=True))
    def get(self):
        return FlightModel.query.all()


