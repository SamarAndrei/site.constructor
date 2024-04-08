from sqlalchemy import Column, Integer, String
from app.database import Base

class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)  
    password = Column(String, nullable=False)
