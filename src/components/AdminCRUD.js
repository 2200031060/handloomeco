import React, { useState } from "react";
import '../styles/Admin.css';

const AdminCRUD = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Handloom Bag", price: 500, description: "Beautiful handmade bag", image: "" },
    { id: 2, name: "Handwoven Blanket", price: 1200, description: "Cozy and warm blanket", image: "" },
  ]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "", image: "" });
  const [editProduct, setEditProduct] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Handle Image Change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Creating a temporary URL for the image
      setNewProduct({ ...newProduct, image: imageUrl });
    }
  };

  // Add Product
  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.image) {
      alert("Please fill in all fields and add an image");
      return;
    }
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setNewProduct({ name: "", price: "", description: "", image: "" });
  };

  // Delete Product
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  // Update Product
  const handleUpdate = () => {
    if (!editProduct.name || !editProduct.price || !editProduct.description || !editProduct.image) {
      alert("Please fill in all fields and add an image");
      return;
    }
    const updatedProducts = products.map((product) =>
      product.id === editProduct.id ? editProduct : product
    );
    setProducts(updatedProducts);
    setEditProduct(null);
  };

  return (
    <div className="container">
      <h2>Admin Dashboard - Manage Products</h2>

      {/* Product List */}
      <div>
        <h3>Product List</h3>
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <strong>{product.name}</strong> - ₹{product.price} - {product.description}
              <div>
                {product.image && <img src={product.image} alt={product.name} className="product-image" />}
              </div>
              <button onClick={() => handleDelete(product.id)} className="btn-delete">
                Delete
              </button>
              <button onClick={() => setEditProduct(product)} className="btn-edit">
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Product */}
      <div className="product-form-section">
        <h3>Add Product</h3>
        <div className="product-form">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleChange}
          />
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
          />
          {newProduct.image && <img src={newProduct.image} alt="Preview" className="image-preview" />}
          <button onClick={handleAdd} className="btn-add">
            Add Product
          </button>
        </div>
      </div>

      {/* Edit Product */}
      {editProduct && (
        <div className="product-form-section">
          <h3>Edit Product</h3>
          <div className="product-form">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={editProduct.name}
              onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={editProduct.price}
              onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={editProduct.description}
              onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
            />
            <input
              type="file"
              name="image"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  setEditProduct({ ...editProduct, image: imageUrl });
                }
              }}
              accept="image/*"
            />
            {editProduct.image && <img src={editProduct.image} alt="Preview" className="image-preview" />}
            <button onClick={handleUpdate} className="btn-update">
              Update Product
            </button>
            <button onClick={() => setEditProduct(null)} className="btn-cancel">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCRUD;
