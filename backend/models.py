from sqlalchemy.orm import declarative_base
from sqlalchemy import Column, Integer, String
Base = declarative_base()


class User(Base):
    __tablename__ = 'accounts'
    id = Column(Integer, nullable=False, primary_key=True)
    username = Column(String(64), nullable=False, unique=True)
    password = Column(String(256), nullable=False)
    email = Column(String(128), nullable=False, unique=True)
    role = Column(String(32), nullable=False, default='user')
