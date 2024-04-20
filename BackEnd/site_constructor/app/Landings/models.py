from sqlalchemy import Column, Integer, String, ForeignKey, JSON
from ..database import Base


class Landings(Base):
    __tablename__ = 'landings'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey("users.id"))
    name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    description = Column(String, nullable=True)
    structure = Column(JSON, nullable=False)