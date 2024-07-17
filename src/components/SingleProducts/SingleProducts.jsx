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
import { Products } from "../Products/Products";
import { selectRelatedProducts } from "../../redux/products/selectors";
import { getRelatedProducts } from "../../redux/products/productsSlice";

export const SingleProducts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const isLoading = useSelector(selectProductLoading);
  const relatedProducts = useSelector(selectRelatedProducts);

  useEffect(() => {
    dispatch(fetchProductThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      dispatch(getRelatedProducts(product.category.id));
    }
  }, [product, dispatch]);

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
      {relatedProducts && relatedProducts.length > 0 ? (
        <Products
          title="Related products"
          products={relatedProducts}
          amount={10}
        />
      ) : (
        <p className={s.products_error}>No related products available</p>
      )}
    </>
  );
};
