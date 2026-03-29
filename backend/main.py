from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# CORS setup to allow frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://erp-frontend-mn9k.onrender.com"],  # Replace with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Product model
class Product(BaseModel):
    name: str
    price: float
    quantity: int = 1

products: List[Product] = []

# Root
@app.get("/")
async def root():
    return {"message": "ERP Backend LIVE!", "count": len(products)}

# Add product
@app.post("/products/")
async def add_product(product: Product):
    products.append(product)
    total = sum(p.price * p.quantity for p in products)
    return {"status": "success", "total": total}

# Get products
@app.get("/products/")
async def get_products():
    total = sum(p.price * p.quantity for p in products)
    return {"products": [p.dict() for p in products], "total": total}

# Delete product
@app.delete("/products/{index}")
async def delete_product(index: int):
    if 0 <= index < len(products):
        removed = products.pop(index)
        total = sum(p.price * p.quantity for p in products)
        return {"status": "success", "removed": removed, "total": total}
    raise HTTPException(status_code=404, detail="Product not found")