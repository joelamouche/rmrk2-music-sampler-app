import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
//import { fetchAndConsolidate } from './utils/getNftInfo';
import {
  nicolasBaseSet,
  nicolaSet2,
  nicolaSet3,
  nicolasTrackList,
  startBlock,
  walfroySet1,
  walfroySet2,
  walfroySet3,
  walfroySet4,
  walfroyTrackList,
} from "./constants";
import { FullSamplerComponent } from "./components/FullSamplerComponent";


const brvStyle={containerStyle:"nes-container is-rounded is-dark"}

function App() {
  const [selectedPage, selectPage] = React.useState("Billy Ray Valentine");
  // fetch nft info
  useEffect(() => {
    // TODO: implement this
    //fetchAndConsolidate(startBlock)
  }, []);
  return (
    <div className="App" style={{ fontFamily: "Press Start 2P" }}>
      <header className="App-header">
        <button
          type="button"
          className="nes-btn is-success"
          onMouseDown={async () => {
            selectPage("Billy Ray Valentine");
          }}
        >
          Billy Ray Valentine
        </button>
        <button
          type="button"
          className="nes-btn is-success"
          onMouseDown={async () => {
            selectPage("Walfroy");
          }}
        >
          Walfroy
        </button>
        {selectedPage === "Billy Ray Valentine"
          ? FullSamplerComponent(
              "Billy Ray Valentine",
              126,
              4,
              [nicolasBaseSet, nicolaSet2, nicolaSet3],
              nicolasTrackList,
              [
                ...nicolasBaseSet.slotList,
                ...nicolaSet2.slotList,
                ...nicolaSet3.slotList,
              ]
            )
          : FullSamplerComponent(
              "Walfroy",
              140,
              4,
              [walfroySet1, walfroySet2, walfroySet3, walfroySet4],
              walfroyTrackList,
              [
                ...walfroySet1.slotList,
                ...walfroySet2.slotList,
                ...walfroySet3.slotList,
                ...walfroySet4.slotList,
              ]
            )}
      </header>
    </div>
  );
}

export default App;
