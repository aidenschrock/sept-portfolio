import { Orbitron } from "next/font/google";
import "./ticker.css";
const orbitron = Orbitron({ subsets: ["latin"] });
export default function Ticker() {
  return (
    <>
      <div className={orbitron.className}>
        <div className="ticker-wrap border-y-2">
          <div className="ticker gap-8 px-4">
            <div>Making digital experiences more immersive with Three.js</div>
            <div>Making digital experiences more immersive with Three.js</div>
            <div>Making digital experiences more immersive with Three.js</div>
          </div>
          <div className="ticker gap-8 px-4">
            <div>Making digital experiences more immersive with Three.js</div>
            <div>Making digital experiences more immersive with Three.js</div>
            <div>Making digital experiences more immersive with Three.js</div>
          </div>
        </div>
      </div>
    </>
  );
}
