import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ProductForm = ({ onSubmit, onClose, product }) => {
  const [formData, setFormData] = useState(
    product || {
      name: "",
      brand: "StyleHub",
      category: "",
      price: "",
      image: "",
      description: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal show onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {product ? "Edit StyleHub Product" : "Add New Product"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Product Name */}
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              required
            />
          </Form.Group>

          {/* Brand */}
          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Category */}
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Skincare">Skincare</option>
              <option value="Makeup">Makeup</option>
              <option value="Haircare">Haircare</option>
              <option value="Bodycare">Bodycare</option>
              <option value="Fragrance">Fragrance</option>
            </Form.Select>
          </Form.Group>

          {/* Price */}
          <Form.Group className="mb-3">
            <Form.Label>Price (₹)</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
            />
          </Form.Group>

          {/* Image */}
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="/images/product.jpg"
              required
            />
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Product description"
              required
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100"
            style={{
              backgroundColor: "#d81b60",
              border: "none",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
          >
            {product ? "Update Product" : "Add Product"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProductForm;
