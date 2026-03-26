# backend/main.py create karo
echo 'from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import uvicorn

app = FastAPI(title="ERP Backend API", version="1.0")

class Product(BaseModel):
    name: str
    price: float
    quantity: int = 1

products: List[Product] = []

@app.get("/")
async def root():
    return {"message": "ERP Backend LIVE!", "products_count": len(products)}

@app.post("/products/")
async def add_product(product: Product):
    products.append(product)
    total = sum(p.price * p.quantity for p in products)
    return {"status": "success", "product_added": product.dict(), "total_amount": total}

@app.get("/products/")
async def get_products():
    total = sum(p.price * p.quantity for p in products)
    return {"products": [p.dict() for p in products], "total": total}

@app.delete("/products/{index}")
async def delete_product(index: int):
    if 0 <= index < len(products):
        deleted