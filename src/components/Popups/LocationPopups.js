import React, { useState } from "react";
import styles from "./Location.module.css";

function LocationPopups({ value }) {
  const [close, setClose] = useState(value);
  const [data, setData] = useState([
    "Hyderabad",
    "Delhi",
    "Goa",
    "Sikkim",
    "Andhra",
    "Kolkata",
    "Mumbai",
    "Pune",
    "Kerala",
  ]);

  const footerData = [
    "Gachibowli",
    "Shamshabad",
    "Kukatpally",
    "Mallapur",
    "Hi-Tech City",
    "Habsiguda",
    "Jubilee Hills",
    "Secunderabad",
    "Banjara Hills",
    "Manikonda",
    "Uppal Kalan",
    "Ameerpet",
    "Shamirpet",
    "Sainikpuri",
    "Srinagar Colony",
    "Quthbullapur",
    "A C Guards",
    "AS Roa Nagar",
    "Abids Road",
    "Adarsh Nagar",
    "Adikmet",
    "Afzalgunj",
    "Agapura",
    "Ahmed Nagar",
    "Akbar Road",
    "Alexander Road",
    "Aliabad",
    "Alwal",
    "Amberpet",
    "Anand Bagh",
    "Ashok Nagar",
    "Akash Nagar",
  ];

  const [view, setView] = useState(false);

  const viewHndle = () => {
    setView(!view);
  };
  const hideMethod = () => {
    setView(!view);
  };

  const popCloseHndl = () => {
    setClose(false);
  };

  const searchMethod = (e) => {
    var name = e.target.value;
    console.log(name)
    const filterData = data.filter((item,i) =>  item.toLowerCase().includes(name.toLowerCase()));
    setData(filterData);
  };

  return (
    <div onClick={popCloseHndl}>
      <div className={styles.mainContainer}>
        <div className={styles.childContainer}>
          <div className={styles.popular}>
            <h6>Popular Cities</h6>
          </div>
          <div class="container-fluid">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={searchMethod}
              />
            </form>
          </div>
          <div className={styles.cardContainer}>
            {data.map((item) => (
              <div className={styles.locationCards}>
                <ul>
                  <li>{item}</li>
                </ul>
              </div>
            ))}
          </div>

          {view ? (
            <div className={styles.other}>
              <h6>other Cities</h6>
            </div>
          ) : (
            <div className={styles.View} onClick={viewHndle}>
              <h6>view all Cities</h6>
            </div>
          )}
          {view && (
            <div>
              <div className={styles.downCard}>
                {footerData.map((item) => (
                  <div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className={styles.View} onClick={hideMethod}>
                <h6>Hide All Cities</h6>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LocationPopups;
