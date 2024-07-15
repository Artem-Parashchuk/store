import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import s from "./Products.module.css";
import { Loader } from "../Loader/Loader";
import { selectProductsLoading } from "../../redux/products/selectors";

export const Products = ({ title, products = [], amount, style = {} }) => {
  const isLoading = useSelector(selectProductsLoading);
  const list = products.filter((_, i) => i < amount);

  
  return (
    <section
      className={s.products}
      style={style}
    >
      {title && <h2 className={s.main_title}>{title}</h2>}
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={s.list}>
          {list.map((product) => {
            return (
              <li
                key={product.id}
                className={s.product}
              >
                <Link to={`/products/${product.id}`}>
                  <div
                    className={s.image}
                  >
                    <img src={product.images[0]} alt="" />
                  </div>

                  <div className={s.wrapper}>
                    <h3 className={s.title}>{product.title}</h3>
                    <div className={s.cat}>{product.category.name}</div>
                    <div className={s.info}>
                      <div className={s.price}>{product.price}$</div>
                      <div className={s.oldPrice}>
                        {Math.floor(product.price * 0.8)}$
                      </div>
                    </div>

                    <div className={s.purchases}>
                      {Math.floor(Math.random() * 20 + 1)} purchased
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};
