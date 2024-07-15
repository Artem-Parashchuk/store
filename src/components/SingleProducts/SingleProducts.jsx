import { useNavigate, useParams } from "react-router-dom";
import s from "./SingleProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProduct,
  selectProductLoading,
} from "../../redux/product/selectors";
import { useEffect } from "react";
import { fetchProductThunk } from "../../redux/product/operations";
import { Product } from "../Product/Product";
import { Loader } from "../Loader/Loader";

export const SingleProducts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const isLoading = useSelector(selectProductLoading);

  useEffect(() => {
    dispatch(fetchProductThunk(id));
  }, [dispatch, id]);

  if (!product) {
    return <div>No product data available</div>;
  }

  return (
    <>
      {product && product.images ? (
        <Product
          images={product.images}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ) : (
        <div>No product data available</div>
      )}
    </>
  );
};
