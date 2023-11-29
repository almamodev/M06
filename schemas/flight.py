from marshmallow import Schema, fields


class FlightSchema(Schema):
    id = fields.Integer()
    origin = fields.String()
    destination = fields.String()