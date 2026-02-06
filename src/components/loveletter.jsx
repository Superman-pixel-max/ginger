const LoveLetter = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
      <div className="bg-primary p-8 rounded-xl shadow-2xl w-96 text-center animate-pop">
        <h2 className="text-2xl text-accent font-bold mb-4">For You 💕</h2>
        <p className="text-background">
          Hi BooBoo, if you're reading this then its either 7th feb or I just couldn't keep myself from showing it to you.
          
          <br/>
          Its our first valentine's week and i'm not there with you but don't worry we'll have 399 more valentines weeks in our lives. I miss you so much and i promise to give you a rose , propose you , give you a chocolate , give you a teddy , make a promise , Hug you , Kiss you and celebrate valentines day with you on 28th when we meet.
          
          <br/>
          And knowing that you love me as much as i love you is probably the greatest feeling i've experienced, you my love are the most precious gift life ever gave me.
          <br/>
          You are my favorite person in this whole universe and I LOVE YOU THE MOST.
        </p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 top-[-33rem] left-[11rem] relative bg-pink-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoveLetter;
