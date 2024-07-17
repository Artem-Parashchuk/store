import { useDispatch, useSelector } from "react-redux";
import { selectShowForm } from "../../redux/user/selectors";
import { UserSignupForm } from "../UserSignupForm/UserSignupForm";
import s from "./UserForm.module.css";
import { toggleForm } from "../../redux/user/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const showForm = useSelector(selectShowForm);
const closeModal = () => {
    dispatch(toggleForm(false))
}
  return (
    showForm && (
      <>
        <div
          className={s.overlay}
          onClick={closeModal}
        ></div>
        <UserSignupForm closeModal={closeModal}/>
      </>
    )
  );
};

export default UserForm;
