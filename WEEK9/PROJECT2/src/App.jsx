import { useState } from "react";

// Images
import DICE1_IMG from "./assets/images/dice1.png";
import DICE2_IMG from "./assets/images/dice2.png";
import DICE3_IMG from "./assets/images/dice3.png";
import DICE4_IMG from "./assets/images/dice4.png";
import DICE5_IMG from "./assets/images/dice5.png";
import DICE6_IMG from "./assets/images/dice6.png";

// Icons
import { CheckBadgeIcon, PencilSquareIcon } from "@heroicons/react/16/solid";

// Components
import Modal from "./components/modal/Modal";

const App = () => {
  const [result, setResult] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [player1Dice, setPlayer1Dice] = useState(1);
  const [player2Dice, setPlayer2Dice] = useState(1);
  const [player1, setPlayer1] = useState({
    username: "Player 1",
    isEditableUsername: false,
  });

  const onPlayGame = () => {
    // Set Loading
    setLoading(true);

    // Limit Loop Time
    let loopTime = 3000;
    const intervalDelay = 100;

    const interval = setInterval(() => {
      // To Produce the dice
      const randomDice1 = Math.floor(Math.random() * 6) + 1;
      const randomDice2 = Math.floor(Math.random() * 6) + 1;

      // Update Dice IMG
      setPlayer1Dice(randomDice1);
      setPlayer2Dice(randomDice2);

      // LoopTime Calculate
      loopTime -= intervalDelay;

      // Stop Interval
      if (loopTime <= 0) {
        // Clear Interval
        clearInterval(interval);

        // Set Loading
        setLoading(false);

        // Set Is Open
        setIsOpen(true);

        // Who is Winner?
        if (randomDice1 > randomDice2) {
          setResult(`${player1.username} Kazandı!`);
        } else if (randomDice1 < randomDice2) {
          setResult("Player 2 Kazandı!");
        } else {
          setResult("Berabere!");
        }
      }
    }, intervalDelay);
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-5">
      {/* TITLE */}
      <h1 className="text-6xl font-bold mb-10">DRAW</h1>

      {/* CONTAINER */}
      <div className="flex justify-center items-center gap-10 text-center">
        <div>
          <div className="flex justify-center items-center mb-2">
            {/* TITLE */}
            <input
              type="text"
              maxLength={15}
              value={player1.username}
              onChange={(e) =>
                setPlayer1({ ...player1, username: e.target.value })
              }
              disabled={!player1.isEditableUsername}
              className={`${
                player1.isEditableUsername && "border-green-500"
              } border-b border-[#101010] outline-none italic bg-transparent w-[100px] text-green-600 text-center`}
            />

            {/* EDIT BTN */}
            {!player1.isEditableUsername && (
              <button>
                <PencilSquareIcon
                  className="w-4"
                  onClick={() =>
                    setPlayer1({ ...player1, isEditableUsername: true })
                  }
                />
              </button>
            )}

            {player1.isEditableUsername && (
              <button>
                <CheckBadgeIcon
                  className="w-4"
                  onClick={() =>
                    setPlayer1({ ...player1, isEditableUsername: false })
                  }
                />
              </button>
            )}
          </div>

          {/* IMG */}
          <img src={getDice(player1Dice)} width={180} />
        </div>

        <div>
          {/* TITLE */}
          <p className="text-green-600 italic mb-2">Player 2</p>

          {/* IMG */}
          <img src={getDice(player2Dice)} width={180} />
        </div>
      </div>

      <div className="w-[25%] mx-auto">
        <button
          disabled={loading}
          onClick={onPlayGame}
          className="text-white rounded-lg disabled:bg-gray-300 disabled:text-black bg-green-500 hover:bg-green-600 active:bg-green-500 p-3 w-full shadow-sm text-center"
        >
          {loading ? "Yükleniyor..." : "Yeniden Dene"}
        </button>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {result}
      </Modal>
    </div>
  );
};

const getDice = (value) => {
  switch (value) {
    case 1:
      return DICE1_IMG;
    case 2:
      return DICE2_IMG;
    case 3:
      return DICE3_IMG;
    case 4:
      return DICE4_IMG;
    case 5:
      return DICE5_IMG;
    case 6:
      return DICE6_IMG;
    default:
      return DICE1_IMG;
  }
};

export default App;
