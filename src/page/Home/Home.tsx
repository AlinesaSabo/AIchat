import Form from "../../components/Form/Form";
import Title from "../../components/Title/Title";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.titleSection}>
        <Title />
      </div>
      <div className={s.formSection}>
        <Form />
      </div>
    </div>
  );
};

export default Home;
