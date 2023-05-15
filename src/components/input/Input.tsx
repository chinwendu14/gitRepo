import React from "react";
import styles from "../../../styles/input.module.scss";
interface props {
  value?: string;
  onChange?: (e: any) => void;
  header?: string;
  placeholder?: string;
  width?: boolean;
  type?: string;
  name?: string;
  onBlur?: any;
}
const Input: React.FC<props> = ({
  placeholder,
  header,
  value,
  type,
  onBlur,
  width,
  name,
  onChange,
}) => {
  return (
    <div className={styles.input}>
      {header ? <p>{header}</p> : ""}
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
