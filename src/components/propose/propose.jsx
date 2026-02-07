import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Hyd from '../../images/hyd.png';

function Propose() {
  const fullText =
    "This Propose Day, I ask you to be my present and my future.\nLet's make a lifetime of memories together.";

  const [displayedText, setDisplayedText] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowQuestion(true), 800);
    }
  }, [index]);

  const handleYes = () => {
    setYesClicked(true);
  };

  const handleNo = (e) => {
    e.target.style.position = "absolute";
    e.target.style.top = Math.random() * 80 + "%";
    e.target.style.left = Math.random() * 80 + "%";
  };

  return (
    <div className=" twinkle text-center bg-secondary overflow-hidden flex flex-col items-center">

      {yesClicked && <Confetti />}

      <h2 className="mt-10 text-[32px] font-bold text-pink-600">
        Happy Propose Day Puchchuu! 💕
      </h2>

      <p className="mt-6 text-[22px] whitespace-pre-line text-gray-700 max-w-xl">
        {displayedText}
      </p>

      <img
        src={Hyd}
        alt="rose"
        className="w-64 mt-12 floating-rose"
      />

      {showQuestion && !yesClicked && (
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-red-500 mb-4">
            Will You Be Mine Forever? 💍
          </h3>

          <button
            onClick={handleYes}
            className="bg-red-500 text-white px-6 py-2 rounded-full mx-4 hover:scale-110 transition"
          >
            Yes ❤️
          </button>

          <button
            onMouseEnter={handleNo}
            className="bg-gray-400 text-white px-6 py-2 rounded-full mx-4 transition"
          >
            No 😅
          </button>
        </div>
      )}

      {yesClicked && (
        <h2 className="mt-10 text-3xl text-pink-600 font-bold animate-bounce">
          Now You're Mine 😭💖✨
        </h2>
      )}

      <style>
        {`
          .floating-rose {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

    </div>
  );
}

export default Propose;
