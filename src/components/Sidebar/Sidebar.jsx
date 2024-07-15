import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectCatIsLoading,
} from "../../redux/categories/selectors";
import { Loader } from "../Loader/Loader";

export const Sidebar = () => {
  
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCatIsLoading);

  return (
    <aside className={s.sidebar}>
      <h2 className={s.title}>Category</h2>
      <nav className={s.nav}>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className={s.menu}>
            {categories.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink
                    to={`/categories/${item.id}`}
                    className={({ isActive }) =>
                      `${s.link} ${isActive ? s.active : ""}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}
      </nav>

      <div className={s.footer}>
        <a
          href="/help"
          className={s.link}
          target="_blank"
        >
          Help
        </a>
        <a
          href="/term"
          className={s.link}
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </aside>
  );
};
