import React, { useEffect, useState } from "react";
import { getOneProduct } from "../mock/asyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getOneProduct(id)
      .then((res) => {
        setDetail(res);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setDetail(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading && <p>Cargando detalle...</p>}
      {error && <p>{error}</p>}
      {detail && <ItemDetail detail={detail} />}
    </div>
  );
};

export default ItemDetailContainer;
