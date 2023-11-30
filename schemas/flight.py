from marshmallow import Schema, fields


class FlightSchema(Schema):
    id = fields.Integer()
    city = fields.String()