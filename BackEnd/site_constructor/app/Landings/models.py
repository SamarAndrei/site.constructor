from sqlalchemy import Column, Integer, String, ForeignKey
from ..database import Base


class Landings(Base):
    __tablename__ = 'landings'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey("users.id"), nullable=False)
    name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    description = Column(String, nullable=True)
