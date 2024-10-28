import React from "react";
import WhatsappIcon from "../../assets/icons/Footer_whatsapp.svg";
import InstagramIcon from "../../assets/icons/Footer_inst.svg";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <h1 className={s.footerTitle}>Contact</h1>

      <div className={s.flexContainer}>
        <div className={`${s.footerItem} ${s.largeItem}`}>
          <h2>Phone</h2>
          <p>
            <a href="tel:+499999999999" className={s.phoneLink}>
              +49 999 999 99 99
            </a>
          </p>
        </div>
        
        <div className={`${s.footerItem} ${s.smallItem}`}>
          <h2>Socials</h2>
          <div className={s.socials}>
            <a href="https://www.instagram.com">
              <img src={InstagramIcon} alt="Instagram" className={s.icon} />
            </a>
            <a href="https://www.whatsapp.com">
              <img src={WhatsappIcon} alt="WhatsApp" className={s.icon} />
            </a>
          </div>
        </div>
      </div>

      <div className={s.flexContainer}>
        <div className={`${s.footerItem} ${s.largeItem}`}>
          <h2>Address</h2>
          <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
        </div>
        
        <div className={`${s.footerItem} ${s.smallItem}`}>
          <h2>Working Hours</h2>
          <p>24 hours a day</p>
        </div>
      </div>

      <div className={s.mapContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092216354006!2d13.375044699999998!3d52.5079329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1suk!2sde!4v1727974267048!5m2!1suk!2sde" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Tel-Ran">
        </iframe>
      </div>
    </footer>
  );
}