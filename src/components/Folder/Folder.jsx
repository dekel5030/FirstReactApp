import { useState, useRef } from "react";
import styles from "./Folder.module.css";

export default function Folder({ title, children, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`${styles.folder} ${className}`}>
      <div className={styles.title} onClick={handleClick}>
        <div className={styles.left}>
          <img src="s" alt="" />
          <h2>{title}</h2>
        </div>
        <div className={styles.right}>
          <h2>{isOpen ? "▴" : "▾"}</h2>
        </div>
      </div>

      <div
        ref={contentRef}
        className={`${styles.items} ${isOpen ? styles.open : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
