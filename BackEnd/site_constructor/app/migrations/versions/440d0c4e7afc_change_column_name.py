"""change_column_name

Revision ID: 440d0c4e7afc
Revises: c773cd0f7817
Create Date: 2024-04-07 19:58:18.084615

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '440d0c4e7afc'
down_revision: Union[str, None] = 'c773cd0f7817'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
