import { useDispatch, useSelector } from "react-redux";
import { Poster } from "../Poster/Poster";
import { Products } from "../Products/Products";
import { selectFilterProduct, selectProducts } from "../../redux/products/selectors";
import { Categories } from "../Categories/Categories";
import { selectCategories } from "../../redux/categories/selectors";
import { Banner } from "../Banner/Banner";
import { useEffect } from "react";
import { filteredByPrice } from "../../redux/products/productsSlice";

export const Home = () => {
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const filterProduct = useSelector(selectFilterProduct)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!products.length){
      return
    }

    dispatch(filteredByPrice(100))
  }, [dispatch, products.length])

  return (
    <>
      <Poster />
      <Products
        products={products}
        amount={5}
        title={"Trending"}
      />
      <Categories
        categories={categories}
        amount={5}
        title="Worth seeing"
      />
      <Banner />
      <Products
        products={filterProduct}
        amount={5}
        title={"Less than 100$"}
      />
    </>
  );
};
