import { useState } from "react";
import "../styles/folder.css";

export default function Folder({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="folder" onClick={handleClick}>
        <div className="left">
          <img src="" alt="" />
          <h2>{title}</h2>
        </div>
        <div className="right">
          <h2>{isOpen ? "▴" : "▾"}</h2>
        </div>
      </div>
      <div className="items" style={{ display: isOpen ? "block" : "none" }}>
        {children}
      </div>
    </>
  );
}
