import { useState } from "react";
import styles from "./FolderItem.module.css";

export default function FolderItem({ title, className = "", onClick }) {
  const [hide, sethide] = useState(false);

  function handleButtonClick() {
    sethide(!hide);
  }

  return (
    <div className={`${styles["folder-item"]} ${className}`} onClick={onClick}>
      <h4 className={styles.title}>{title}</h4>
      <button className={styles.visible} onClick={handleButtonClick}>
        {hide ? "unhide" : "hide"}
      </button>
    </div>
  );
}
