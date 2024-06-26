"""Add_column_name

Revision ID: a7e187bba5cf
Revises: 5ae65b138b0a
Create Date: 2024-04-20 17:36:35.707242

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'a7e187bba5cf'
down_revision: Union[str, None] = '5ae65b138b0a'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('landings', sa.Column('structure', sa.JSON(), nullable=False))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('landings', 'structure')
    # ### end Alembic commands ###
