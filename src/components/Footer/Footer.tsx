import React from "react";
import faceBook from "../../assets/img/Facebook.svg";
import vk from "../../assets/img/Vk.svg";
import inst from "../../assets/img/Inst.svg";
import googlePlay from "../../assets/img/GooglePlay.svg";
import appStore from "../../assets/img/AppStore.svg";
import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <h2 className="logo">React</h2>
        <div className={classes.footer__rightSide}>
          <div className={classes.social}>
            <div className={classes.social__title}>Присоединяйтесь к нам</div>
            <div className={classes.social__icons}>
              <Link to="#" className={classes.social__link}>
                <img
                  src={faceBook}
                  alt="Facebook"
                  className={classes.social__icon}
                />
              </Link>
              <Link to="#" className={classes.social__link}>
                <img src={vk} alt="Vk" className={classes.social__icon} />
              </Link>
              <Link to="#" className={classes.social__link}>
                <img
                  src={inst}
                  alt="Instagram"
                  className={classes.social__icon}
                />
              </Link>
            </div>
          </div>
          <div className={classes.soft}>
            <span className={classes.soft__title}>
              Устанавливайте приложение
            </span>
            <div className={classes.soft__icons}>
              <Link to="#" className={classes.soft__link}>
                <img
                  src={googlePlay}
                  alt="GooglePlay"
                  className={classes.soft__icon}
                />
              </Link>
              <Link to="#" className={classes.soft__link}>
                <img
                  src={appStore}
                  alt="AppStore"
                  className={classes.soft__icon}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer__copyRight}>
        <span className={classes.author}>© Sionic</span>
        <span className={classes.info}>Правовая информация</span>
        <span className={classes.privacy__policy}>
          Политика конфиденциальности
        </span>
      </div>
    </footer>
  );
};

export default Footer;
