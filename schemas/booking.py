from marshmallow import Schema, fields

class BookingSchema(Schema):
    id = fields.Integer(dump_only=True)
    origin = fields.Nested('FlightSchema')
    destination = fields.Nested('FlightSchema')