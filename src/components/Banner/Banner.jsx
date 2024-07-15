import s from "./Banner.module.css";
import bannerImg from "../../assets/banner.png";

export const Banner = () => {
  return (
    <section className={s.banner}>
      <div className={s.left}>
        <p className={s.content}>
          NEW YEAR
          <span>SALE</span>
        </p>
        <button className={s.more}>See more</button>
      </div>

      <div
        className={s.right}
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <p className={s.discount}>
          save to <span>50%</span> off
        </p>
      </div>
    </section>
  );
};
