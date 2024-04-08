"""change_column_name

Revision ID: cb9eabf1b383
Revises: 86a5bfcf833f
Create Date: 2024-04-07 19:48:14.554652

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'cb9eabf1b383'
down_revision: Union[str, None] = '86a5bfcf833f'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.alter_column('users', 'user_id', new_column_name='id')
    


def downgrade() -> None:
    pass
