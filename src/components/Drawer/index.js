import React from "react";
import Info from "../Info";

import AppContext from "../../context";
import axios from "axios";

import styles from "./Drawer.module.scss";

const deley = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isOrderComlete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onClickOrder = () => {
    setIsLoading(true);
    axios.post("https://62e978e83a5f1572e86b46ac.mockapi.io/orders", {
      items: cartItems,
    });

    setIsOrderComplete(true);
    setCartItems([]);
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      axios.delete(
        "https://62e978e83a5f1572e86b46ac.mockapi.io/cart/" + item.id
      );
      deley(1000);
    }
    setIsLoading(false);
  };
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          ></img>
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Close"
                  ></img>
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Разом:</span>
                  <div></div>
                  <b>{totalPrice} грн. </b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформити замовлення<img src="/img/arrow.svg" alt="Arrow"></img>
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComlete ? "Замовлення оформлено!" : "Пуста Корзина"}
            description={
              isOrderComlete
                ? "Ваше замовлення буде скоро відправлене"
                : "Добавте хоч один елемент"
            }
            image={
              isOrderComlete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"
            }
          ></Info>
        )}
      </div>
    </div>
  );
}

export default Drawer;
