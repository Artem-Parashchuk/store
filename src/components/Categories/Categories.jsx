import { Link } from "react-router-dom";

import s from "./Categories.module.css";

export const Categories = ({ title = "", categories = [], amount }) => {
  const list = categories.filter((_, i) => i < amount);
  return (
    <section className={s.section}>
      <h2 className={s.main_title }>{title}</h2>
      <ul className={s.list}>
        {list.map((item) => {
          return (
            <li
              key={item.id}
              className={s.item}
            >
              <Link to={`categories/${item.id}`}>
                <div className={s.image} style={{backgroundImage: `url(${item.image})`}}></div>
                <h3 className={s.title}>{item.name}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
