import Form from "../../components/Form/Form";
import Problems from "../../components/Problems/Problems";
import Title from "../../components/Title/Title";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={s.container}>
        <div className={s.titleSection}>
          <Title />
        </div>
        <div className={s.formSection}>
          <Form />
        </div>
      </div>
      <div>
        <Problems />
      </div>
    </div>
  );
};

export default Home;
