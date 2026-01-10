from pydantic import BaseModel

class CarInput(BaseModel):
    name: str
    fuel: str
    seller_type: str
    transmission: str
    owner: str
    age: int
    km_driven: int