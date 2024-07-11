import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import s from "./Footer.module.css";
import logo from "../../assets/logo.svg";

export const Footer = () => {
  return (
    <section className={s.footer}>
      <div className={s.logo}>
        <Link to="/">
          <img
            src={logo}
            alt="Store logo"
          />
        </Link>
      </div>

      <div className={s.rights}>
        <p>Developed by <span className={s.developed}>Artem Parashchuk</span></p>
      </div>

      <div className={s.network}>
        <a
          href="https://github.com/Artem-Parashchuk"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className={s.link_icon}/>
        </a>
        <a
          href="https://www.linkedin.com/in/artem-parashchuk-023998220/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={s.link_icon}/>
        </a>
      </div>
    </section>
  );
};
