import React, { useState } from "react";
import styles from "../../../styles/repos.module.scss";
import { IoMdArrowDropup } from "react-icons/io";
import { BsStar, BsLightbulb } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { CiPlane } from "react-icons/ci";
import { TbArtboard } from "react-icons/tb";

interface props {
  name?: string;
  language?: string;
  update?: string;
  publi?: string;
  classNm?: string;
}
const Repos: React.FC<props> = ({ language, update, classNm, publi, name }) => {
  const [toggle, setToggle] = useState<Boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className={styles.repos}>
        <div className={styles.repos__repoNames}>
          <div className={styles.repos__headerDiv}>
            <p>
              <span className={styles.repos__span1}>{name}</span>
              <span className={styles.repos__span2}>{publi}</span>
            </p>
          </div>
          <div className={styles.repos__stackDiv}>
            <p>
              <span className={styles.repos__span1}>
                <i className={classNm}></i>
                {language}
              </span>
              <span className={styles.repos__span2}>Updated on {update}</span>
            </p>
          </div>
        </div>
        <div className={styles.repos__starDiv}>
          <div className={styles.repos__starcontentDiv}>
            <p>
              <span className={styles.repos__span1}>
                <i>
                  <BsStar />
                </i>
              </span>
              <span className={styles.repos__span2}>star</span>
              <span className={styles.repos__span3} onClick={handleToggle}>
                <i>
                  <IoMdArrowDropup />
                </i>
              </span>
            </p>
          </div>

          <div
            className={`${styles.type} 
            ${toggle ? styles.showtype : ""}

              `}
          >
            <p className={styles.type__select} onClick={handleToggle}>
              <span style={{ fontWeight: "500" }}>Select order</span>
              <i>
                <FaTimes />
              </i>
            </p>

            <p className={styles.type__check}>
              <input type="checkbox" />
              <i>
                <BsLightbulb />
              </i>
              <label>Future ideas</label>
            </p>
            <p className={styles.type__check}>
              <input type="checkbox" />
              <i>
                <CiPlane />
              </i>
              <label>My stack</label>
            </p>
            <p className={styles.type__check}>
              <input type="checkbox" />
              <i>
                <TbArtboard />
              </i>
              <label>Inspiration</label>
            </p>
            <div className={styles.type__checkList}>+ Ceate List</div>
          </div>

          <div className={styles.repos__lineDiv}></div>
        </div>
      </div>
    </>
  );
};

export default Repos;
