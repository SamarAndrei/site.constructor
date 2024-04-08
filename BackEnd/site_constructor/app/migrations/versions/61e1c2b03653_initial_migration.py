"""Initial migration

Revision ID: 61e1c2b03653
Revises: cb9eabf1b383
Create Date: 2024-04-07 19:50:33.543776

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '61e1c2b03653'
down_revision: Union[str, None] = 'cb9eabf1b383'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
