import React, { memo, useState } from "react";
import { Table, Button, Badge } from "react-bootstrap";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const ProductTable = ({ products, onEdit, onDelete }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: null,
  });

  // Sorting handler
  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc"
        ? "desc"
        : "asc";
    setSortConfig({ key, direction });
  };

  // Sort products
  const sortedProducts = () => {
    let sorted = [...products];

    if (sortConfig.key) {
      sorted.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key])
          return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key])
          return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return sorted;
  };

  // Sort icon
  const renderSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />;
    }
    return <FaSort />;
  };

  // Category badge color
  const categoryVariant = (category) => {
    switch (category) {
      case "Skincare":
        return "info";
      case "Makeup":
        return "danger";
      case "Haircare":
        return "warning";
      case "Bodycare":
        return "success";
      case "Fragrance":
        return "secondary";
      default:
        return "dark";
    }
  };

  return (
    <div>
      <Table
        striped
        bordered
        hover
        responsive
        className="text-center align-middle"
        style={{ fontSize: "18px" }}
      >
        <thead style={{ backgroundColor: "#f8bbd0" }}>
          <tr>
            <th onClick={() => handleSort("id")}>
              ID {renderSortIcon("id")}
            </th>
            <th onClick={() => handleSort("name")}>
              Product Name {renderSortIcon("name")}
            </th>
            <th onClick={() => handleSort("brand")}>
              Brand {renderSortIcon("brand")}
            </th>
            <th onClick={() => handleSort("category")}>
              Category {renderSortIcon("category")}
            </th>
            <th onClick={() => handleSort("price")}>
              Price (₹) {renderSortIcon("price")}
            </th>
            <th>Image</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {sortedProducts().map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td style={{ fontWeight: "bold" }}>{product.name}</td>
              <td>{product.brand}</td>
              <td>
                <Badge bg={categoryVariant(product.category)}>
                  {product.category}
                </Badge>
              </td>
              <td>₹{product.price}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  width="80"
                  height="80"
                  style={{
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              </td>
              <td style={{ maxWidth: "200px" }}>
                {product.description}
              </td>
              <td>
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={() => onEdit(product)}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  className="ms-2"
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default memo(ProductTable);
