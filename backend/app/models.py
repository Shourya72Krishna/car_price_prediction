import uuid
from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.sql import func
from app.database import Base

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(50), nullable=False)
    fuel = Column(String(50), nullable=False)
    seller_type = Column(String(50), nullable=False)
    transmission = Column(String(50), nullable=False)
    owner = Column(String(50), nullable=False)
    age = Column(Integer, nullable=False)
    km_driven = Column(BigInteger, nullable=False)
    predicted_price = Column(Float, nullable=False)
    consent = Column(Boolean, default=True)
    source = Column(String(50), default="web")  # web / mobile
    user_agent = Column(String(255), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
