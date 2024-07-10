import { useDispatch } from "react-redux";
import s from "./App.module.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Layout } from "./components/Layout/Layout";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useEffect } from "react";
import { getCategoriesThunk } from "./redux/categories/operations";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoriesThunk())
  }, [dispatch])
  return (
    <div className={s.app}>
      <Header />

      <div className={s.container}>
        <Sidebar />
        <Layout />
      </div>

      <Footer/>
    </div>
  );
}

export default App;
