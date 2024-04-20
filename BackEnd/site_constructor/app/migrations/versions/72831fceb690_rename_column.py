"""rename column

Revision ID: 72831fceb690
Revises: b6eab8c346e8
Create Date: 2024-04-07 20:11:40.754455

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '72831fceb690'
down_revision: Union[str, None] = 'b6eab8c346e8'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
