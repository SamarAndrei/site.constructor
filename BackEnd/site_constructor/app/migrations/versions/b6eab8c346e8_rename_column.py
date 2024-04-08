"""rename column

Revision ID: b6eab8c346e8
Revises: 77cd52e586c5
Create Date: 2024-04-07 20:08:45.720694

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'b6eab8c346e8'
down_revision: Union[str, None] = '77cd52e586c5'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.alter_column('table_name', 'old_column_name', new_column_name='new_column_name')



def downgrade() -> None:
    pass
