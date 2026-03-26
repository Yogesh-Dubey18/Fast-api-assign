from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Product(BaseModel):
    name: str
    price: float
    quantity: int = 1

products: List[Product] = []

@app.get("/")
async def root():
    return {"message": "ERP Backend LIVE!", "count": len(products)}

@app.post("/products/")
async def add_product(product: Product):
    products.append(product)
    total = sum(p.price * p.quantity for p in products)
    return {"status": "success", "total": total}

@app.get("/products/")
async def get_products():
    total = sum(p.price * p.quantity for p in products)
    return {"products": [p.dict() for p in products], "total": total}