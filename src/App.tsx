import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
//import { fetchAndConsolidate } from './utils/getNftInfo';
import {
  billyRayInputs,
  nicolasBaseSet,
  nicolaSet2,
  nicolaSet3,
  nicolasTrackList,
  startBlock,
  walfroyInputs,
  walfroySet1,
  walfroySet2,
  walfroySet3,
  walfroySet4,
  walfroyTrackList,
} from "./constants";
import { FullSamplerComponent } from "./components/FullSamplerComponent";
import { MusicInputs, SampleSet, SlotList, TrackName } from "./types";

function App() {
  // const [selectedPage, selectPage] = React.useState("Billy Ray Valentine");
  const [musicInput, setMusicInput] = React.useState(billyRayInputs);
  // fetch nft info
  useEffect(() => {
    // TODO: implement this
    //fetchAndConsolidate(startBlock)
  }, []);
  return (
    <div className="App" style={{ fontFamily: "Press Start 2P" }}>
      <header className="App-header">
        <div style={{ whiteSpace: "nowrap", overflowX: "auto" }}>
          <div style={{ display: "inlineBlock" }}>
            <button
              type="button"
              className={
                musicInput[0] === "Billy Ray Valentine"
                  ? "nes-btn is-success"
                  : "nes-btn is-primary"
              }
              onMouseDown={async () => {
                setMusicInput(billyRayInputs);
              }}
            >
              Billy Ray Valentine
            </button>
          </div>
          <div style={{ display: "inlineBlock" }}>
            <button
              type="button"
              className={
                musicInput[0] === "Walfroy"
                  ? "nes-btn is-success"
                  : "nes-btn is-primary"
              }
              onMouseDown={async () => {
                setMusicInput(walfroyInputs);
              }}
            >
              Walfroy
            </button>
          </div>
        </div>

        {
          // selectedPage === "Billy Ray Valentine"
          //   ? FullSamplerComponent(
          //       "Billy Ray Valentine",
          //       126,
          //       4,
          //       [nicolasBaseSet, nicolaSet2, nicolaSet3],
          //       nicolasTrackList,
          //       [
          //         ...nicolasBaseSet.slotList,
          //         ...nicolaSet2.slotList,
          //         ...nicolaSet3.slotList,
          //       ]
          //     )
          //   :
          FullSamplerComponent(...musicInput)
        }
      </header>
    </div>
  );
}

export default App;
