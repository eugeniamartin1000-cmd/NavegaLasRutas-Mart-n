import React, { useEffect, useState } from "react";
import { getProducts } from "../mock/asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        console.log("Productos cargados:", res);

        
        if (idCategory) {
          const filtered = res.filter(
            (product) => product.category === idCategory
          );
          setData(filtered);
        } else {
          setData(res);
        }
      })
      .catch((err) => console.error("Error cargando productos:", err));
  }, [idCategory]);

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
