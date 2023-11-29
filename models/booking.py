from db import db


class BookingModel(db.Model):
    __tablename__ = 'bookings'
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey('users.id', name='user'), nullable=False)
    flight = db.Column(db.Integer, db.ForeignKey('flights.id', name='flight'), nullable=False)