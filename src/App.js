function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
            Корзина
            <img
              className="removeBtn cu-p"
              src="/img/btn-remove.svg"
              alt="Remove"
            ></img>
          </h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Чоловічі кросівки Nike Jordan</p>
                <b>12 999 грн.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              ></img>
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Разом:</span>
                <div></div>
                <b>22 000 грн. </b>
              </li>
              <li>
                <span>Податок 5%:</span>
                <div></div>
                <b>2 200 грн. </b>
              </li>
            </ul>
            <button className="greenButton">
              Оформити замовлення<img src="/img/arrow.svg" alt="Arrow"></img>
            </button>
          </div>
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} alt="" src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин найкращих кросівок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span>850 грн.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Всі кросівки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"></img>
            <input placeholder="Пошук..."></input>
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/unliked.svg" alt="Unliked"></img>
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            ></img>
            <h5>Чоловічі кросівки Nike Jordan</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>12 999</b>
              </div>
              <button className="button">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z"
                    fill="#D3D3D3"
                  />
                </svg>
                {/* <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img> */}
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpeg"
              alt="Sneakers"
            ></img>
            <h5>Чоловічі кросівки Nike Jordan</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>12 999</b>
              </div>
              <button className="button">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z"
                    fill="#D3D3D3"
                  />
                </svg>
                {/* <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img> */}
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpeg"
              alt="Sneakers"
            ></img>
            <h5>Чоловічі кросівки Nike Jordan</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>12 999</b>
              </div>
              <button className="button">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z"
                    fill="#D3D3D3"
                  />
                </svg>
                {/* <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img> */}
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpeg"
              alt="Sneakers"
            ></img>
            <h5>Чоловічі кросівки Nike Jordan</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>12 999</b>
              </div>
              <button className="button">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z"
                    fill="#D3D3D3"
                  />
                </svg>
                {/* <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
