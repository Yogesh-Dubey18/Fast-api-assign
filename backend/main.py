from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from uuid import uuid4

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://erp-frontend-mn9k.onrender.com"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Product model
class Product(BaseModel):
    id: str = None
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
    product.id = str(uuid4())  # unique ID
    products.append(product)
    total = sum(p.price * p.quantity for p in products)
    return {"status": "success", "product": product, "total": total}

# Get products
@app.get("/products/")
async def get_products():
    total = sum(p.price * p.quantity for p in products)
    return {"products": [p.dict() for p in products], "total": total}

# Delete product
@app.delete("/products/{product_id}")
async def delete_product(product_id: str):
    for i, p in enumerate(products):
        if p.id == product_id:
            removed = products.pop(i)
            total = sum(p.price * p.quantity for p in products)
            return {"status": "success", "removed": removed, "total": total}
    raise HTTPException(status_code=404, detail="Product not found")