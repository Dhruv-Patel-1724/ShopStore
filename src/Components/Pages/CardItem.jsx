import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../assets/styles/carditem.css";
const CardItem = () => {
  let [products, setProducts] = useState([]);
  let fetchApi = async () => {
    let resp = await fetch(`http://localhost:4000/cartitems`);
    let apidata = await resp.json();
    setProducts(apidata);
    console.log(apidata);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  let deleteCardItem = async (id) => {
    let bool = window.confirm("Do you went to delete this Item");
    if (bool) {
      await axios.delete(`http://localhost:4000/cartitems/${id}`);

      alert("Product Item is Deleted");
      fetchApi();
    } else {
      alert("Product Item is not Deleted");
    }
  };
  return (
    <>
      <div className="container">
        <table border={2}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              {/* <th>Description</th> */}
              <th>Category</th>
              <th>Image</th>
              <th>Rating</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((elem, index) => {
              let { id, title, price, description, category, image, rating } =
                elem;
              return (
                <tr key={id}>
                  <th>{index + 1}.</th>
                  <th>{title}</th>
                  <th> ₹{Math.floor(price * 80)}.00/-</th>
                  {/* <th>{description}</th> */}
                  <th>{category}</th>
                  <th>
                    {Math.floor(rating.rate * 80)} ★ ({rating.count})
                  </th>
                  <th>
                    <img src={image} alt={title} width="170" />
                  </th>
                  <th>
                    <button onClick={() => deleteCardItem(elem.id)}>
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CardItem;
