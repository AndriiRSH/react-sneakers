import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../context";
function Header(props) {
  const { cartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  // console.log(cartItems.reduce((sum, obj) => obj.price + sum, 0));

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} alt="" src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин найкращих кросівок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} alt="Корзина" src="/img/cart.svg" />
          <span>{totalPrice} грн.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} alt="Закладки" src="/img/heart.svg" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} alt="Користувач" src="/img/user.svg" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
