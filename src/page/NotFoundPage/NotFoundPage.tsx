import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <div className={s.errorWrap}>
        <h1 data-t="404" className={s.titleError}>
          404
        </h1>
      </div>
      <h3 className={s.text}>
        Sorry, requested page was not found. <br />
        Please,
        <Link to="/">
          <span className={s.link}>return to Home Page</span>
        </Link>
      </h3>
    </div>
  );
}
