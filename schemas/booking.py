from marshmallow import Schema, fields

class BookingSchema(Schema):
    id = fields.Integer(dump_only=True)
    user = fields.Nested('UserSchema', only=('id',))
    flight = fields.Nested('FlightSchema', only=('id',))