import { useState } from "react";
import { motion } from "framer-motion";

function CardFlip({ image, trackInfo }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  function formatText(text) {
    return (
      text.charAt(0).toUpperCase() +
      text
        .slice(1)
        .replace(/([A-Z])/g, " $1")
        .trim()
    );
  }

  function renderTrackInfo(trackInfo) {
    return Object.entries(trackInfo).map(([key, value]) => (
      <p key={key} className="mb-2">
        <span className="font-bold">{formatText(key)}:</span>{" "}
        {formatText(value.toString())}
      </p>
    ));
  }

  return (
    <>
      <div
        className="flip-card bg-black bg-opacity-50 rounded-md flex items-center justify-center"
        style={{ width: "360px", height: "400px" }}
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front w-full h-full rounded-lg border-[1px] overflow-hidden flex flex-col items-center justify-center">
            <h2 className="text-white text-lg font-bold mb-2 mt-2 pl-3">
              {trackInfo.name}
            </h2>
            <img src={image} alt="Card Front" className="w-auto h-auto" />
          </div>
          <div className="flip-card-back w-full h-full bg-cover border-[1px] text-white rounded-lg p-4 overflow-scroll overflow-x-hidden">
            <h1 className="text-2xl font-bold">TrackInfo:</h1>
            {renderTrackInfo(trackInfo)}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default CardFlip;
