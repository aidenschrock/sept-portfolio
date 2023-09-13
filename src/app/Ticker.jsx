import { Orbitron } from "next/font/google";
import "./ticker.css";
const orbitron = Orbitron({ subsets: ["latin"] });
export default function Ticker() {
  return (
    <>
      <div className={orbitron.className}>
        <div className="ticker-wrap h-16 text-base md:text-xl md:h-20 border-y-2">
          <div className="ticker gap-4 px-2">
            <span>&#11044;</span>
            <div>Making digital experiences more immersive with Three.js</div>
            <span>&#11044;</span>
            <div>Making digital experiences more immersive with Three.js</div>
            <span>&#11044;</span>
            <div>Making digital experiences more immersive with Three.js</div>
          </div>
          <div className="ticker gap-4 px-2">
            <span>&#11044;</span>
            <div>Making digital experiences more immersive with Three.js</div>
            <span>&#11044;</span>
            <div>Making digital experiences more immersive with Three.js</div>
            <span>&#11044;</span>
            <div>Making digital experiences more immersive with Three.js</div>
          </div>
        </div>
      </div>
    </>
  );
}
