import React, { useState } from "react";
import "./AddProducts.scss";

import axios from "axios";
const AddProducts = () => {
  const [formData, setFormData] = useState({
    productName: "",
    image: "",
    category: "",
    price: "",
    rating: "",
    itemsSold: "",
    itemId: "",
  });
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataUrl = reader.result;
      setFormData({
        ...formData,
        image: imageDataUrl,
      });
    };

    reader.readAsDataURL(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5010/missxartist/add-product", formData)
      .then((response) => {
        console.log("Success:", response.data);

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="add-products">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <div className="upload-btn-wrapper">
            <button className="btn">Choose an image</button>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageUpload}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a category </option>

            <option value="mobile cover">Mobile Cover</option>
            <option value="keychain">Keychain</option>
            <option value="vector art">Vector Art</option>
          </select>
        </div>
        <div className="form-group">
          <label>Return Duration:</label>
          <select
            name="category"
            value={formData.returnDuration}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a Duration </option>

            <option value="No Return">No Return</option>
            <option value="7 Days Return">7 Days Return</option>
            <option value="7 Days Replacement">7 Days Replacement</option>
            <option value="30 Days Return">30 Days Return</option>
            <option value="30 Days Replacement">30 Days Replacement</option>
          </select>
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Items Sold:</label>
          <input
            type="text"
            name="itemsSold"
            value={formData.itemsSold}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Item ID:</label>
          <input
            type="text"
            name="itemId"
            value={formData.itemId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="submit-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
