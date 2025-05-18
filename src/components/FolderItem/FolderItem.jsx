import { useState } from "react";
import styles from "./FolderItem.module.css";

export default function FolderItem({ title, className = "" }) {
  const [hide, sethide] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function handleButtonClick() {
    sethide(!hide);
  }

  function handleItemClick() {
    setEditMode(true);
  }

  return (
    <div
      className={`${styles["folder-item"]} ${className}`}
      onClick={handleItemClick}
    >
      <h4 className={styles.title}>{title}</h4>
      <button className={styles.visible} onClick={handleButtonClick}>
        {hide ? "unhide" : "hide"}
      </button>
    </div>
  );
}
