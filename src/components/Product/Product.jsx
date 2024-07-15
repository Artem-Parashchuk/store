import { Link, useNavigate } from "react-router-dom";
import s from "./Product.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/user/userSlice";

const SIZES = [4, 4.5, 5];

export const Product = (item) => {
    const { images, title, price, description } = item
    const dispatch = useDispatch()
    const [currentImage, setCurrentImage] = useState(images[0])
    const [currentSize, setCurrentSize] = useState()
    useEffect(() => {
        if(!currentImage.length) return 
        setCurrentImage(images[0])
    }, [images])

    const addToCart = () => {
        dispatch(addItemToCart(item))
    }

  return (
    <section
      className={s.product}
    >
      <div className={s.images}>
        <div className={s.current}>
          <img
            src={currentImage}
            alt={title}
          />
        </div>
        <ul className={s.images_list}>
          {images.map((image, i) => {
            return (
              <li
                className={s.image}
                key={i}
              >
                <img
                  src={image}
                  alt={title}
                  onClick={(e) => {
                    e.stopPropagation(); // Запобігаємо події кліку на секції
                    setCurrentImage(image);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.info}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.price}>${price}</p>
        <p className={s.color}>
          <span>Color:</span> Green
        </p>

        <div className={s.sizes}>
          <span>Sizes:</span>

          <ul className={s.list}>
            {SIZES.map((size) => (
              <li
                onClick={() => setCurrentSize(size)}
                className={`${s.size} ${
                  currentSize === size ? s.active : ""
                }`}
                key={size}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <p className={s.description}>{description}</p>
        <div className={s.actions}>
          <button className={s.add} onClick={addToCart}>Add to cart</button>
          <button className={s.favorite}>Add to favorites</button>
        </div>

        <div className={s.bottom}>
          <p className={s.purchase}>19 people purchased</p>

          <Link to="/">Return to store</Link>
        </div>
        </div>
    </section>
  );
};
