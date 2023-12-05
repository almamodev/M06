"""empty message

Revision ID: 28f3b3c2daeb
Revises: 
Create Date: 2023-12-05 15:47:32.409953

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '28f3b3c2daeb'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('flight',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('city', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('city')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('password', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('username')
    )
    op.create_table('booking',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('origin', sa.String(), nullable=False),
    sa.Column('destination', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['destination'], ['flight.city'], name='destination'),
    sa.ForeignKeyConstraint(['origin'], ['flight.city'], name='origin'),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('booking')
    op.drop_table('user')
    op.drop_table('flight')
    # ### end Alembic commands ###