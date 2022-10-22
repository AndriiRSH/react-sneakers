import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import AppContext from "./context";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const cartResponse = await axios.get(
          "https://62e978e83a5f1572e86b46ac.mockapi.io/cart"
        );
        const favoritesResponse = await axios.get(
          "https://62e978e83a5f1572e86b46ac.mockapi.io/favorites"
        );
        const itemsResponse = await axios.get(
          "https://62e978e83a5f1572e86b46ac.mockapi.io/items"
        );

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Error with request dates");
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://62e978e83a5f1572e86b46ac.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://62e978e83a5f1572e86b46ac.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Error with added items in drawer");
    }
  };

  const onRemoveItem = async (id) => {
    try {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
      await axios.delete(
        `https://62e978e83a5f1572e86b46ac.mockapi.io/cart/${id}`
      );
    } catch (error) {
      alert("Error");
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://62e978e83a5f1572e86b46ac.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://62e978e83a5f1572e86b46ac.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не вдалось добавити в вибрані");
    }
  };

  const onChangeSerchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        setCartOpened,
        setCartItems,
        onAddToCart,
        onAddToFavorite,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        ></Drawer>

        <Header onClickCart={() => setCartOpened(true)}></Header>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                items={items}
                cartitems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSerchInput={onChangeSerchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              ></Home>
            }
          ></Route>
          <Route
            path="/favorites"
            exact
            element={<Favorites onAddToFavorite={onAddToFavorite}></Favorites>}
          ></Route>
          <Route path="/orders" exact element={<Orders></Orders>}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
