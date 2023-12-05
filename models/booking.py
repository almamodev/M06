from db import db


class BookingModel(db.Model):
    __tablename__ = 'booking'
    id = db.Column(db.Integer, primary_key=True)
    origin = db.Column(db.String, db.ForeignKey('flight.city', name='origin'), nullable=False)
    destination = db.Column(db.String, db.ForeignKey('flight.city', name='destination'), nullable=False)