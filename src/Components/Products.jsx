import React, { useEffect, useState } from "react";
//Packages
import styled from "styled-components";
//Custom Hooks
import useData from "../hooks/useData";

const ProductsWrapper = styled.div`
  overflow-x: auto;

  table tbody tr td img {
    width: 40px;
    height: 40px;
  }
  td {
    padding: 14px;
    border-bottom: 1px solid ${(props) => props.theme.light_grey};
  }
  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.blue};
    cursor: pointer;
  }
`;

const Products = () => {
  const data = useData();
  const [myProducts, setMyProducts] = useState(data.products);
  const [clicked, setClicked] = useState();
  const [sorted, setSorted] = useState();

  useEffect(() => {
    document.title = "Products";
  }, []);

  useEffect(() => {
    if (sorted !== undefined) {
      setMyProducts(sorted);
    }
  }, [clicked]);

  const sortUp = (key) => {
    let sorted = data.products.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    setSorted(sorted);
    setClicked("up" + key);
  };

  const sortDown = (key) => {
    let sorted = data.products.sort((a, b) => (a[key] < b[key] ? 1 : -1));
    setSorted(sorted);
    setClicked("down" + key);
  };

  return (
    <ProductsWrapper>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>
              {" "}
              <p>Title</p>{" "}
              <button onClick={(key) => sortUp("title")}>&#8593;</button>{" "}
              <button onClick={(key) => sortDown("title")}> &#8595;</button>
            </th>
            <th>
              <p>Type</p>{" "}
              <button onClick={(key) => sortUp("type")}>&#8593;</button>{" "}
              <button onClick={(key) => sortDown("type")}> &#8595;</button>{" "}
            </th>
            <th>
              <p>Description</p>{" "}
              <button onClick={(key) => sortUp("description")}>&#8593;</button>{" "}
              <button onClick={(key) => sortDown("description")}>
                {" "}
                &#8595;
              </button>{" "}
            </th>
            <th>
              <p>Height</p>{" "}
              <button onClick={(key) => sortUp("height")}>&#8593;</button>{" "}
              <button onClick={(key) => sortDown("height")}> &#8595;</button>{" "}
            </th>
            <th>
              <p>Width</p>{" "}
              <button onClick={(key) => sortUp("width")}>&#8593;</button>{" "}
              <button onClick={(key) => sortDown("width")}> &#8595;</button>{" "}
            </th>
            <th>
              <p>Price</p>{" "}
              <button onClick={(key) => sortUp("price")}>&#8593;</button>{" "}
              <button onClick={(key) => sortDown("price")}> &#8595;</button>{" "}
            </th>
            <th>
              <p>Rating</p>{" "}
              <button onClick={(key) => sortUp("rating")}>&#8593;</button>{" "}
              <button onClick={(key) => sortDown("rating")}> &#8595;</button>{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {myProducts.map((el, i) => (
            <tr key={i}>
              <td>
                <img
                  src={require(`../db/imgs/${el.filename}`).default}
                  alt="img"
                />
              </td>
              <td>{el.title}</td>
              <td>{el.type}</td>
              <td>{el.description}</td>
              <td>{el.height}</td>
              <td>{el.width}</td>
              <td>{el.price}</td>
              <td>{el.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ProductsWrapper>
  );
};

export default Products;
