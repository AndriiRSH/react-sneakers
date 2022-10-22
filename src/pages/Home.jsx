import React from "react";
import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSerchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    return (
      isLoading
        ? [...Array(8)]
        : items.filter((item) => item.title.toLowerCase().includes(searchValue))
    ).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      ></Card>
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Пошук по запиту: "${searchValue}"` : "Всі кросівки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search"></img>
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear"
            ></img>
          )}
          <input
            onChange={onChangeSerchInput}
            value={searchValue}
            placeholder="Пошук..."
          ></input>
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
