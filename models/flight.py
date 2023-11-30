from db import db


class FlightModel(db.Model):
    __tablename__ = 'flight'
    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String, unique=True, nullable=False)