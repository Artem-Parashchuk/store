import { Link } from "react-router-dom";
import s from "./Header.module.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.jpg";
import sprite from "../../assets/sprite.svg";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link to="/">
          <img
            src={logo}
            alt="Store logo"
          />
        </Link>
      </div>
      <div className={s.header_right_side}>
        <div className={s.info}>
          <div className={s.user}>
            <div
              className={s.avatar}
              style={{ backgroundImage: `url(${avatar})` }}
            ></div>
            <p className={s.username}>Guest</p>
          </div>
        </div>

        <form className={s.form}>
          <div className={s.icon}>
            <svg className={s.icon_svg}>
              <use xlinkHref={`${sprite}#search`} />
            </svg>
          </div>
          <div className={s.input}>
            <input
              placeholder="Search for anything"
              type="search"
              autoComplete="off"
              onChange={() => {}}
              value={""}
            />
          </div>

          {/* <div className={s.box}></div> */}
        </form>
        <div className={s.account}>
          <Link
            to={"/"}
            className={s.favorites}
          >
            <svg className={s["icon-fav"]}>
              <use xlinkHref={`${sprite}#heart`} />
            </svg>
          </Link>

          <Link
            to={"/cart"}
            className={s.cart}
          >
            <svg className={s["icon-cart"]}>
              <use xlinkHref={`${sprite}#bag`} />
            </svg>
            <span className={s.count}>2</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
