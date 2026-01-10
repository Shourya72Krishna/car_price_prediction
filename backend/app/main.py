from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import CarInput
from app.model import predict_price
from sqlalchemy.orm import Session
from app.database import engine, SessionLocal
from app.models import Base, Prediction

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","https://car-price-prediction-flax.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/predict")
def predict(data: CarInput, db: Session=Depends(get_db)):
    price = predict_price(data)
    prediction = Prediction(
        name=data.name,
        fuel=data.fuel,
        seller_type=data.seller_type,
        transmission=data.transmission,
        owner=data.owner,
        age=data.age,
        km_driven=data.km_driven,
        predicted_price=price
    )

    db.add(prediction)
    db.commit()
    db.refresh(prediction)

    return {
        "price": price,
    }
