import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import styles from "../../../styles/search.module.scss";
interface props {
  value?: string;
  onChange?: (e: any) => void;
  searchicon?: any;
  penicon?: any;
  placeholder?: string;
  width?: boolean;
  shadow?: boolean;
}
const Search: React.FC<props> = ({
  placeholder,
  searchicon,
  penicon,
  value,
  width,
  onChange,
  shadow,
}) => {
  return (
    <div
      className={`${styles.search} ${width ? styles.short : styles.long} ${
        shadow ? styles.shadow : ""
      }`}
    >
      {searchicon && (
        <span>
          <i>
            <BsSearch />
          </i>
        </span>
      )}
      <input
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
      />
      {penicon && <span className={styles.webHeader__slash}>/</span>}
    </div>
  );
};

export default Search;
