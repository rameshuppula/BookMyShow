import React, { useState } from "react";
import Logo from "../../Assets/Logo.png";
import styles from "./Navbar.module.css";
import LocationPopups from "../Popups/LocationPopups";

const Navbar = () => {
  const [location, setLocation] = useState(false);
  const data1 = [
    "Movies",
    "Stream",
    "Events",
    "Sports",
    "Buzz",
    "Play",
    "Activities",
  ];
  const data2 = ["ListYourShow", "Coorporates", "Offers", "GiftCards"];
  const locationMethod = () => {
    setLocation(!location);
  };
  return (
    <div>
      <div>
        <nav>
          <div className={styles.mainNavContainer}>
            <div className={styles.logoDivision}>
              <div>
                {" "}
                <img src={Logo} alt="bookingLogo" width="80px" height="60px" />
              </div>
              <div className={styles.searchDivision}>
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>

            <div className={styles.flexDivision}>
              <div>
                <select className={styles.opt} onClick={locationMethod}>
                  <option>Hyderabad</option>
                </select>
              </div>
              <div>
                <button className={styles.sign}>SignIn</button>
              </div>
              <div className={styles.toogling}>Toggle</div>
            </div>
          </div>
        </nav>
      </div>
      <div className={styles.dataonetwo}>
        <div className={styles.dataOne}>
          {data1.map((item) => (
            <div className={styles.dataOneChild}>
              <ul>
                <li>{item}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.dataTwo}>
          {data2.map((item) => (
            <div className={styles.dataTwoChild}>
              <ul>
                <li>{item}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      {location && <LocationPopups value={location} />}
    </div>
  );
};
export default Navbar;
