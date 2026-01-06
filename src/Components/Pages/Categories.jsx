import React, { useEffect, useState } from "react";
import "../../assets/styles/products.css";
import axios from "axios";
const Categories = () => {
  let [products, setProducts] = useState([]);
  let [category, setCategory] = useState([]);
  let [proName, setProName] = useState([]);
  let fetchApi = async () => {
    let resp = await fetch(`http://localhost:4000/products`);
    let apidata = await resp.json();
    setProducts(apidata);
    console.log(apidata);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  //   products.map((elem, index) => {
  //     console.log(elem.category);
  //   });
  let handleClick = (e) => {
    let listValue = e.target.innerText;
    let filterData = products.filter((elem) => {
      return elem.category === listValue;
    });
    setCategory(filterData);
    setProName(listValue);
    console.log(filterData);
  };
  let deleteProduct = async (id) => {
    let bool = window.confirm("Do you went to delete this Item");
    if (bool) {
      await axios.delete(`http://localhost:4000/products/${id}`);
      alert("Product Item is Deleted");
      fetchApi();
    } else {
      alert("Product Item is not Deleted");
    }
  };

  let addtoCart = async (id) => {
    // let x = await axios.get(`http://localhost:4000/products/${id}`);
    // console.log(x.data);//! way 1 not for best
    let cartData = products.filter((elem) => {
      return elem.id === id; //! way 2
    });

    let bool = window.confirm("Do you went to delete this Item");
    if (bool) {
      fetch(`http://localhost:4000/cartitems`, {
        method: "POST",
        headers: { "content-type": "application/json" }, //which type of data collect
        body: JSON.stringify(...cartData), //to convert jsx data to json
      });
      alert("Product Item is Added to Card");
    } else {
      alert("Product Item is not  Added to Card");
    }
  };

  return (
    <>
      <div className="categories">
        {/* <h1>Products</h1> */}
        <div className="category-list">
          <ul>
            <li onClick={handleClick}>men's clothing</li>
            <li onClick={handleClick}>jewelery</li>
            <li onClick={handleClick}>electronics</li>
            <li onClick={handleClick}>women's clothing</li>
          </ul>
        </div>
        <h1 className="proname">{proName}</h1>
        <div className="category-result">
          {category.map((elem, index) => {
            let { id, title, price, description, category, image, rating } =
              elem;
            return (
              <div className="category-result">
                <div className="card" key={id}>
                  <div className="cat">{category}</div>
                  <div className="img">
                    {image && <img src={image} alt={title} />}
                  </div>

                  <h4 className="title">{title}</h4>

                  <div className="rating">
                    <span className="rate">
                      {rating.rate} ★ ({rating.count})
                    </span>
                    <span className="price">
                      ₹{Math.floor(price * 80)}.00/-
                    </span>
                  </div>

                  <div className="desc">{description}</div>

                  <div className="actions">
                    <button className="add" onClick={() => addtoCart(elem.id)}>
                      Add to Cart
                    </button>
                    <button
                      className="del"
                      onClick={() => deleteProduct(elem.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
