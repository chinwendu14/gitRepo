import React, { useState } from "react";
import Search from "../search/Search";
import { RiGitRepositoryLine } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import styles from "../../../styles/subheader.module.scss";
interface props {
  value?: string;
  onChange?: (e: any) => void;
  publi?: (e: any) => void;
  all?: (e: any) => void;
  allLag?: (e: any) => void;
  html?: (e: any) => void;
  javascript?: (e: any) => void;
  typescript?: (e: any) => void;
  lastest?: (e: any) => void;
  name?: (e: any) => void;
  star?: (e: any) => void;
}
const SubHeader: React.FC<props> = ({
  value,
  onChange,
  all,
  publi,
  allLag,
  javascript,
  typescript,
  html,
  name,
  star,
  lastest,
}) => {
  const [toggletype, setToggletype] = useState<boolean>(false);
  const [togglelanguage, setTogglelanguage] = useState<Boolean>(false);
  const [togglesort, setTogglesort] = useState<Boolean>(false);
  const handleType = () => {
    setToggletype(!toggletype);
    setTogglelanguage(false);
    setTogglesort(false);
  };
  const handlelanguage = () => {
    setToggletype(false);
    setTogglelanguage(!togglelanguage);
    setTogglesort(false);
  };
  const handleSort = () => {
    setToggletype(false);
    setTogglelanguage(false);
    setTogglesort(!togglesort);
  };
  return (
    <div className={styles.subHeader}>
      <div className={styles.subHeader__searchDiv}>
        <Search
          onChange={onChange}
          value={value}
          placeholder="Find a repository..."
          shadow
        />
        <div className={styles.subHeader__sortgd}>
          <div className={styles.subHeader__sortDiv}>
            <p
              style={{ marginLeft: "20px" }}
              className={styles.subHeader__sortparagraph}
              onClick={handleType}
            >
              Type
              <i>
                <IoMdArrowDropup />
              </i>
            </p>
            <Type
              onClick={handleType}
              show={`${styles.type} ${toggletype ? styles.showtype : ""}`}
              all={all}
              publi={publi}
            />
          </div>
          <div className={styles.subHeader__sortDiv}>
            <p
              className={styles.subHeader__sortparagraph}
              onClick={handlelanguage}
            >
              Language
              <i>
                <IoMdArrowDropup />
              </i>
            </p>
            <Language
              onClick={handlelanguage}
              show={`${styles.type} ${styles.langauage} ${
                togglelanguage ? styles.showtype : ""
              }`}
              allLag={allLag}
              javascript={javascript}
              typescript={typescript}
              html={html}
            />
          </div>
          <div className={styles.subHeader__sortDiv}>
            <p className={styles.subHeader__sortparagraph} onClick={handleSort}>
              Sort
              <i>
                <IoMdArrowDropup />
              </i>
            </p>
            <Sort
              onClick={handleSort}
              show={`${styles.type} ${styles.sort} ${
                togglesort ? styles.showtype : ""
              }`}
              lastest={lastest}
              star={star}
              name={name}
            />
          </div>
          <div className={styles.subHeader__btnDiv}>
            <p>
              <i>
                <RiGitRepositoryLine />
              </i>
              New
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;

interface propsType {
  show?: string;
  onClick?: (e: any) => void;
  publi?: (e: any) => void;
  all?: (e: any) => void;
}
const Type: React.FC<propsType> = ({ onClick, show, publi, all }) => {
  return (
    <div className={show}>
      <p className={styles.type__select} onClick={onClick}>
        <span style={{ fontWeight: "500" }}>Select type</span>
        <i>
          <FaTimes />
        </i>
      </p>
      <p className={styles.type__check} onClick={all}>
        <i>
          <BsCheckLg />
        </i>
        <span style={{ marginLeft: "5px" }}>All</span>
      </p>
      <p className={styles.type__check} onClick={publi}>
        <span>Public</span>
      </p>

      <p className={styles.type__check}>
        <span>Private</span>
      </p>
      <p className={styles.type__check}>
        <span>Sources</span>
      </p>
      <p className={styles.type__check}>
        <span>Forks</span>
      </p>
      <p className={styles.type__check}>
        <span>Archived</span>
      </p>
      <p className={styles.type__check}>
        <span>Can be sponsored</span>
      </p>
      <p className={styles.type__check}>
        <span>Mirrors</span>
      </p>
      <p className={styles.type__check}>
        <span>Templets</span>
      </p>
    </div>
  );
};

interface propsLang {
  show?: string;
  onClick?: (e: any) => void;
  allLag?: (e: any) => void;
  html?: (e: any) => void;
  javascript?: (e: any) => void;
  typescript?: (e: any) => void;
}
const Language: React.FC<propsLang> = ({
  allLag,
  html,
  javascript,
  typescript,
  onClick,
  show,
}) => {
  return (
    <div className={show}>
      <p className={styles.type__select} onClick={onClick}>
        <span style={{ fontWeight: "500" }}>Select langauage</span>
        <i>
          <FaTimes />
        </i>
      </p>
      <p className={styles.type__check} onClick={allLag}>
        <i>
          <BsCheckLg />
        </i>
        <span style={{ marginLeft: "5px" }}>All</span>
      </p>
      <p className={styles.type__check} onClick={javascript}>
        <span>Javascript</span>
      </p>
      <p className={styles.type__check} onClick={typescript}>
        <span>Typescript</span>
      </p>
      <p className={styles.type__check} onClick={html}>
        <span>Html</span>
      </p>
    </div>
  );
};

interface propsSort {
  show?: string;
  onClick?: (e: any) => void;
  lastest?: (e: any) => void;
  name?: (e: any) => void;
  star?: (e: any) => void;
}
const Sort: React.FC<propsSort> = ({ onClick, show, name, star, lastest }) => {
  return (
    <div className={show}>
      <p className={styles.type__select} onClick={onClick}>
        <span style={{ fontWeight: "500" }}>Select order</span>
        <i>
          <FaTimes />
        </i>
      </p>
      <p className={styles.type__check} onClick={lastest}>
        <i>
          <BsCheckLg />
        </i>
        <span style={{ marginLeft: "5px" }}>Lastest update</span>
      </p>
      <p className={styles.type__check} onClick={name}>
        <span>Name</span>
      </p>
      <p className={styles.type__check} onClick={star}>
        <span>Star</span>
      </p>
    </div>
  );
};
