import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import styles from "./footer.module.css";
import jioIcon from '../../assets/jio-logo.png'

const Footer = () => {
  const appLinks = [
    { platform: "Google Play", url: "YOUR_GOOGLE_PLAY_LINK" }, // Replace with your actual links
    { platform: "App Store", url: "YOUR_APP_STORE_LINK" },     // Replace with your actual links
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-section"]}>
          <p className={styles["footer-title"]}>JioCinema</p>
          <ul className={styles["footer-list"]}>
            <li className={styles["footer-item"]}><a href="#">For You</a></li>
            <li className={styles["footer-item"]}><a href="#">Sports</a></li>
            <li className={styles["footer-item"]}><a href="#">Movies</a></li>
            <li className={styles["footer-item"]}><a href="#">TV Shows</a></li>
          </ul>
        </div>

        <div className={styles["footer-section"]}>
          <p className={styles["footer-title"]}>Support</p>
          <ul className={styles["footer-list"]}>
            <li className={styles["footer-item"]}><a href="#">Help Center</a></li>
            <li className={styles["footer-item"]}><a href="#">Terms Of Use</a></li>
            <li className={styles["footer-item"]}><a href="#">Privacy Policy</a></li>
            <li className={styles["footer-item"]}><a href="#">Content Complaints</a></li>
          </ul>
        </div>

        <div className={styles["footer-section"]}>
          <p className={styles["footer-title"]}>Connect With Us</p>
          <div className={styles["social-icons"]}>
            <a href="#" className={styles["social-icon"]}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className={styles["social-icon"]}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className={styles["social-icon"]}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className={styles["social-icon"]}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

        <div className={styles["footer-section"]}>
          <p className={styles["footer-title"]}>Download the App</p>
          <div className={styles["app-links"]}>
            {appLinks.map((link) => (
              <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
                
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles["footer-bottom"]}>
        <p>Copyright Star India Private Limited, 2024. All rights reserved.</p>
        <img className={styles.usericons} src={jioIcon} alt="icon" />
      </div>
    </footer>
  );
};

export default Footer;