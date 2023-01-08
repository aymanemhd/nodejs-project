import React from "react";
import { useState } from "react";
import "../Styles/card.css";
import Popup from "reactjs-popup";
import { addToCart } from "../action/cartAction";
import { useDispatch } from "react-redux";

const Card = ({ pizza }) => {
  const { name, varients, prices, category, image, description } = pizza;
  const [size, setSize] = useState("small");
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const addToCartHendler = () => {
    // console.log(pizza);
    dispatch(addToCart(pizza, qty, size));
  };

  return (
    <div className="card">
      <div>
        <div className="card-image">
          <Popup
            trigger={<img src={image} alt="pizza " className="image" />}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> {name} </div>
                <div className="content">
                  <img src={image} alt="pizza " className="popup-image" />
                  <div className="model-description">
                    <h6>Descrition :</h6>
                    {description}
                  </div>
                  <div className="model-description">
                    <h6>category :</h6>
                    {category}
                  </div>
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <h6 className="card-header">{name}</h6>
        <div className="card-main">
          <div className="card-left">
            <h6 className="card_headers">Varients</h6>
            <select
              className="card-size"
              onChange={(e) => setSize(e.target.value)}
            >
              {varients.map((v, key) => {
                return (
                  <option value={v} key={key}>
                    {v}
                  </option>
                );
              })}
            </select>
            <h6 className="card_headers price">
              {/* prices: [
                            {
                              small: 99,
                              medium: 199,
                              large: 399,
                            },
                          ], 
              */}
              price :{prices && qty && prices[0][size] * qty}₹
            </h6>
          </div>
          <div className="card-right">
            <h6 className="card_headers">Quantity</h6>
            <select
              className="card-size"
              onChange={(e) => setQty(e.target.value)}
            >
              {[...Array(10).keys()].map((v, i) => {
                return (
                  <option value={i + 1} key={i}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <br />
            <button onClick={addToCartHendler} className="button btn-margin">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
