from sqlalchemy import Column, DateTime, Integer, String
from datetime import datetime


from ..database.database import Base


class Url(Base):
    __tablename__ = "url"

    id = Column(Integer, primary_key=True)
    original_url = Column(String)
    shortened_url = Column(String, unique=True, index=True)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
