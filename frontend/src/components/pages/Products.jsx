import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductForm from '../Products/ProductForm'
import ProductTable from '../Products/ProductTable'

const API_BASE = 'https://erp-backend-fgkh.onrender.com'

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [formData, setFormData] = useState({ name: '', price: '', quantity: 1 })
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API_BASE}/products/`)
      setProducts(res.data.products || [])
      setTotal(res.data.total || 0)
    } catch (err) {
      console.error('Failed to fetch products:', err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post(`${API_BASE}/products/`, {
        name: formData.name,
        price: parseFloat(formData.price),
        quantity: parseInt(formData.quantity),
      })
      setProducts([...products, res.data.product])
      setTotal(res.data.total)
      setFormData({ name: '', price: '', quantity: 1 })
    } catch (err) {
      console.error('Failed to add product:', err)
      alert('Failed to add product. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const res = await axios.delete(`${API_BASE}/products/${id}`)
        setProducts(products.filter(p => p.id !== id))
        setTotal(res.data.total)
      } catch (err) {
        console.error('Failed to delete product:', err)
        alert('Failed to delete product. Try again.')
      }
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="mb-4 text-3xl font-bold">📦 Product Management</h1>
        <p>Total Inventory Value: ₹{total.toFixed(2)}</p>
      </div>

      <ProductForm
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        loading={loading}
      />

      <ProductTable products={products} onDelete={handleDelete} />
    </div>
  )
}