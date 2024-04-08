"""rename column

Revision ID: 77cd52e586c5
Revises: 440d0c4e7afc
Create Date: 2024-04-07 20:04:45.806339

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '77cd52e586c5'
down_revision: Union[str, None] = '440d0c4e7afc'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    
    pass


def downgrade() -> None:
    pass
