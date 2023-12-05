"""empty message

Revision ID: 551260958cbd
Revises: 2efdbb5efec0
Create Date: 2023-12-03 21:45:49.096976

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '551260958cbd'
down_revision = '2efdbb5efec0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('booking', schema=None) as batch_op:
        batch_op.drop_constraint('destination', type_='foreignkey')
        batch_op.drop_constraint('origin', type_='foreignkey')
        batch_op.create_foreign_key('destination', 'flight', ['destination'], ['city'])
        batch_op.create_foreign_key('origin', 'flight', ['origin'], ['city'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('booking', schema=None) as batch_op:
        batch_op.drop_constraint('origin', type_='foreignkey')
        batch_op.drop_constraint('destination', type_='foreignkey')
        batch_op.create_foreign_key('origin', 'flight', ['origin'], ['id'])
        batch_op.create_foreign_key('destination', 'flight', ['destination'], ['id'])

    # ### end Alembic commands ###