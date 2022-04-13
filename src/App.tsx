import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Reactronica } from "./Reactronica";
//import { fetchAndConsolidate } from './utils/getNftInfo';
import { startBlock } from "./constants";

function App() {
  // fetch nft info
  useEffect(() => {
    // TODO: implement this
    //fetchAndConsolidate(startBlock)
  }, []);
  return (
    <div className="App" style={{fontFamily: 'Press Start 2P'}}>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <Reactronica />
      </header>
    </div>
  );
}

export default App;
