import React, { useState } from "react";
import "../../assets/styles/addproduct.css";
import axios from "axios";
const AddProducts = () => {
  let [formdata, setFormdata] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rate: "",
    count: "",
  });

  let handleInput = (e) => {
    let key = e.target.name;
    let val = e.target.value;

    let newProduct = {
      ...formdata,
      [key]: val,
    };
    setFormdata(newProduct);
  };

  let handleImage = (e) => {
    let file = e.target.files[0];
    let imageUrl = URL.createObjectURL(file); // demo purpose
    setFormdata({ ...formdata, image: imageUrl });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let newProduct = {
      title: formdata.title,
      price: Number(formdata.price),
      description: formdata.description,
      category: formdata.category,
      image: formdata.image,
      rating: {
        rate: Number(formdata.rate),
        count: Number(formdata.count),
      },
    };
    await axios.post("http://localhost:4000/products", newProduct);
    alert("Product Added Successfully");
    // ✅ FORM CLEAR
    setFormdata({
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
      rate: "",
      count: "",
    });
  };
  return (
    <>
      <div className="addproducts">
        Add Products
        <div className="formbox">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={formdata.title}
              onChange={handleInput}
              placeholder="Enter Title"
            />
            <input
              type="number"
              name="price"
              value={formdata.price}
              onChange={handleInput}
              placeholder="Enter Price"
            />

            <textarea
              name="description"
              value={formdata.description}
              onChange={handleInput}
              placeholder="Enter Description"
              rows="4"
            ></textarea>

            <select
              name="category"
              value={formdata.category}
              onChange={handleInput}
            >
              <option value="">Select Category</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
            </select>
            <input
              // value={formdata.image}
              onChange={handleImage}
              type="file"
              accept="image/*"
            />
            <input type="number" placeholder="Enter Rating (1–5)" />
            <input
              name="rate"
              value={formdata.rate}
              onChange={handleInput}
              type="number"
              placeholder="Enter Rate"
            />
            <input
              name="count"
              value={formdata.count}
              onChange={handleInput}
              type="number"
              placeholder="Enter Count"
            />
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
