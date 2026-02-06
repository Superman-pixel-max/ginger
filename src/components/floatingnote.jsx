import { useState } from "react";
import letterImg from "../images/letter.png"; 

const FloatingNote = ({ onOpen }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  

  return (
    
    <img
      src={letterImg}
      alt="floating note"
      onClick={() => {
        setVisible(false);
        onOpen();
      }}
      className="fixed w-48 top-96 left-4 cursor-pointer animate-floatAround z-30"
    />
  );
};

export default FloatingNote;
