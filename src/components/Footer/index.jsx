import styles from "./footer.module.scss";
import TelloLogo from "../../assets/icons/TelloLogo.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import youtube from "../../assets/icons/youtube.svg";
import twitter from "../../assets/icons/twitter.svg";
import locationIcon from "../../assets/icons/pin.svg";
import email from "../../assets/icons/email.svg";
import Call from "../../assets/icons/phone.svg";
import CopyRight from "../../assets/icons/copyright.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.LogoSocial}>
            <a href="#">
              <img src={TelloLogo} alt="" />
            </a>
            <div className={styles.SocialBar}>
              <a href="#">
                <img src={instagram} alt="" />
              </a>
              <a href="#">
                <img src={facebook} alt="" />
              </a>
              <a href="#">
                <img src={youtube} alt="" />
              </a>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
            </div>
        </div>
        <div className={styles.MenuContainer}>
            <h3>Menu</h3>
            <ul className={`${styles.MenuList} ${styles.footerList}`}>
              <li>
                <a href="#">Yeni</a>
              </li>
              <li>
                <a href="#">Endirimlər</a>
              </li>
              <li>
                <a href="#">Aksessuarlar</a>
              </li>
              <li>
                <a href="#">Bütün brendlər</a>
              </li>
            </ul>
        </div>

        <div className={styles.helpContainer}>
            <h3>Kömək</h3>
            <ul className={`${styles.HelpList} ${styles.footerList}`}>
              <li>
                <a href="#">Tez-tez soruşulan suallar</a>
              </li>
              <li>
                <a href="#">Çatdırılma xidməti</a>
              </li>
              <li>
                <a href="#">Geri qaytarılma şərtləri</a>
              </li>
            </ul>
        </div>

        <div className={styles.ContactContainer}>
            <h3>Əlaqə</h3>
            <ul className={`${styles.ContactList} ${styles.footerList}`}>
              <li className={styles.contact}>
                <img src={locationIcon} alt="" />
                <a href="https://goo.gl/maps/LdX2Cvy1eTTYMvG98">
                  M. K. Ataturk avenue 89, Baku, Azerbaijan
                </a>
              </li>
              <li className={styles.contact}>
                <img src={email} alt="" /> <a href="#"> example@gmail.com</a>
              </li>
              <li className={styles.contact}>
                <img src={Call} alt="" /> <a href="#">*2108</a>
              </li>
            </ul>
        </div>
        <div className={styles.rules}>
          <a href="#">Qaydalar və şərtlər </a>
          <a href="#">Məxfilik siyasəti</a>
        </div>
      </div>
      <div className={styles.footerEnd}>
        {" "}
        <img src={CopyRight} alt="" />{" "}
        <span>PeojectX 2021. Bütün hüquqlar qorunur.</span>
      </div>
    </div>
  );
};

export default Footer;
