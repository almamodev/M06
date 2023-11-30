from db import db


class BookingModel(db.Model):
    __tablename__ = 'booking'
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey('user.id', name='user'), nullable=False)
    origin = db.Column(db.String, db.ForeignKey('flight.id', name='origin'), nullable=False)
    destination = db.Column(db.String, db.ForeignKey('flight.id', name='destination'), nullable=False)