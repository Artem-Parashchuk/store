import { Link } from "react-router-dom";
import s from "./Products.module.css";

export const Products = ({ title, products = [], amount, style = {} }) => {
  const list = products.filter((_, i) => i < amount);
  return (
    <section
      className={s.products}
      style={style}
    >
      {title && <h2>{title}</h2>}
      <div className={s.list}>
        {products.map((product) => {
          return (
            <Link
              className={s.product}
              key={product.id}
              to={`/products/${product.id}`}
            >
              <div
                className={s.image}
                style={{ backgroundImage: `url(${product.images[0]})` }}
              ></div>

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
          );
        })}
      </div>
    </section>
  );
};
