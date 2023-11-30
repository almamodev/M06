from db import db


class BookingModel(db.Model):
    __tablename__ = 'booking'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', name='user_id'), nullable=False)
    flight_id = db.Column(db.Integer, db.ForeignKey('flight.id', name='flight_id'), nullable=False)