"""change_column_name

Revision ID: c773cd0f7817
Revises: 61e1c2b03653
Create Date: 2024-04-07 19:51:20.123479

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'c773cd0f7817'
down_revision: Union[str, None] = '61e1c2b03653'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
