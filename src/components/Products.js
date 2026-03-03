import React, { useEffect, useState } from "react";
import NavigationBar from "./Navbar";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";
import { Button, Row, Col, Form } from "react-bootstrap";
import "../App.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Error fetching StyleHub products:", error)
      );
  }, []);

  // Create
  const handleCreate = () => {
    setCurrentProduct(null);
    setShowForm(true);
  };

  // Edit
  const handleEdit = (product) => {
    setCurrentProduct(product);
    setShowForm(true);
  };

  // Delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete product");
        }
        setProducts(products.filter((product) => product.id !== id));
        alert("Product deleted successfully!");
      })
      .catch((error) =>
        console.error("Error deleting StyleHub product:", error)
      );
  };

  // Submit form
  const handleFormSubmit = (product) => {
    if (currentProduct) {
      // UPDATE
      fetch(`http://localhost:5000/products/${currentProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update product");
          }
          return response.json();
        })
        .then((updatedProduct) => {
          setProducts(
            products.map((p) =>
              p.id === updatedProduct.id ? updatedProduct : p
            )
          );
          setShowForm(false);
          alert("Product updated successfully!");
        })
        .catch((error) =>
          console.error("Error updating StyleHub product:", error)
        );
    } else {
      // CREATE
      const newId =
        products.length > 0
          ? Math.max(...products.map((p) => p.id)) + 1
          : 1;

      const newProduct = { ...product, id: newId };

      fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to create product");
          }
          return response.json();
        })
        .then((createdProduct) => {
          setProducts([...products, createdProduct]);
          setShowForm(false);
          alert("Product added successfully!");
        })
        .catch((error) =>
          console.error("Error creating StyleHub product:", error)
        );
    }
  };

  // Search filter
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Fixed Navbar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: "#d81b60",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        <NavigationBar />
      </div>

      {/* Content */}
      <div style={{ marginTop: "120px", padding: "20px" }}>
        <div className="d-flex justify-content-center mb-4">
          <h1 style={{ color: "#d81b60", fontWeight: "bold" }}>
            StyleHub Products
          </h1>
        </div>

        <Row className="mb-4">
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="Search beauty products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                border: "2px solid #d81b60",
                borderRadius: "6px",
              }}
            />
          </Col>

          <Col xs={12} md={6} className="d-flex justify-content-end">
            <Button
              onClick={handleCreate}
              style={{
                backgroundColor: "#d81b60",
                border: "none",
                borderRadius: "20px",
                padding: "10px 25px",
                fontWeight: "bold",
              }}
            >
              + Add Product
            </Button>
          </Col>
        </Row>

        {/* Results */}
        {searchTerm && filteredProducts.length === 0 ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              height: "200px",
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#c2185b",
            }}
          >
            No products found!
          </div>
        ) : (
          <ProductTable
            products={filteredProducts}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {showForm && (
          <ProductForm
            onSubmit={handleFormSubmit}
            onClose={() => setShowForm(false)}
            product={currentProduct}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
