from db import db


class FlightModel(db.Model):
    __tablename__ = 'flight'
    id = db.Column(db.Integer, primary_key=True)
    origin = db.Column(db.String, nullable=False)
    destination = db.Column(db.String, nullable=False)