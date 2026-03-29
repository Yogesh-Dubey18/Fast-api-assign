import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductForm from '../Products/ProductForm'
import ProductTable from '../Products/ProductTable'

const API_BASE = 'https://erp-backend-fgkh.onrender.com'

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [formData, setFormData] = useState({ name: '', price: '', quantity: 1 })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API_BASE}/products/`)
      setProducts(res.data.products || [])
    } catch (err) {
      console.error('Failed to fetch products:', err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post(`${API_BASE}/products/`, {
        name: formData.name,
        price: parseFloat(formData.price),
        quantity: parseInt(formData.quantity)
      })
      fetchProducts()
      setFormData({ name: '', price: '', quantity: 1 })
    } catch (err) {
      console.error('Failed to add product:', err)
      alert('Failed to add product. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (index) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      // Note: Backend delete endpoint needed for full functionality
      const newProducts = products.filter((_, i) => i !== index)
      setProducts(newProducts)
    }
  }

  return (
    <div>
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">📦 Product Management</h1>
        <p className="text-xl text-gray-600">Manage your inventory and stock levels</p>
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