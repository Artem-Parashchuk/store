import s from "./UserSignupForm.module.css";
import sprite from "../../assets/sprite.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserThunk } from "../../redux/user/operations";

export const UserSignupForm = ({closeModal}) => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  
  const handleSubmit = e => {
    e.preventDefault()
    const isNotEmpty = Object.values(value).ever(val => !val)

    if(!isNotEmpty) return

    dispatch(createUserThunk(value))
    closeModal()
  }

  return (
    <div className={s.wrapper}>
      <button className={s.close} onClick={closeModal}>
        <svg className={s.icon}>
          <use href={`${sprite}#close`}></use>
        </svg>
      </button>

      <h2 className={s.title}>Sign up</h2>

      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.group}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={value.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.group}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={value.name}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.group}>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value={value.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <a className={s.link}>I already have an account</a>
        <button
          className={s.submit}
          type="submit"
        >
          Create an account
        </button>
      </form>
    </div>
  );
};
