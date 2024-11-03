import cactus from "../../assets/images/Error404Page_cactus.png";
import React from "react";
import s from "./Error404Page.module.css";
import fourImage from "../../assets/images/Error404Page_4.png";
import { Link } from "react-router-dom";

export default function Error404Page() {
  return (
    <div className={s.errorContainer}>
      <div>
        <img src={fourImage} alt="Number four" className={s.fourImage} />
        <img src={cactus} alt="Cactus" className={s.errorImage} />
        <img src={fourImage} alt="Number four" className={s.fourImage} />
      </div>
      <p className={s.errorText}>Page Not Found</p>
      <p className={s.errorDescription}>
        We're sorry, the page you requested could not be found.
        <br />
        Please go back to the homepage.
      </p>
      <Link to="/" className={s.goHomeBtn}>
        Go Home
      </Link>
    </div>
  );
}
