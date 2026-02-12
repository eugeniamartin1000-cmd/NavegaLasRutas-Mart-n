import React, { useEffect, useState } from "react";
import { getProducts } from "../mock/asyncMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        console.log("Productos cargados:", res);
        setData(res);
      })
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <ItemList data={data} />
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ItemListContainer;
