import s from "./Poster.module.css";

import bgImg from "../../assets/computer.png";

export const Poster = () => {
  return (
    <section className={s.home}>
      <h2 className={s.title}>BIG SALE 20%</h2>
      <div className={s.product}>
        <div className={s.text}>
          <p className={s.subtitle}>the bestseller of 2023</p>
          <h3 className={s.head}>LENNON r2d2 with NVIDIA 5090 TI</h3>
          <button className={s.button}>Buy Now</button>
        </div>
        <div className={s.image}>
          <img
            src={bgImg}
            alt="laptop and system block"
          />
        </div>
      </div>
    </section>
  );
};
