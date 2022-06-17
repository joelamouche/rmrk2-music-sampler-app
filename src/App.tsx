import React, { useEffect } from "react";
import "./App.css";
import { Menu } from "./components/DisplayLogicComponents/Menu";
import { About } from "./components/InformationComponents/About";
import { MusicComponent } from "./components/MusicComponent";
import { NFTSection } from "./components/InformationComponents/NFTSection";

function App() {
  const [selectedPage, selectPage] = React.useState("Music");
  // fetch nft info
  useEffect(() => {
    // TODO: implement this
    //fetchAndConsolidate(startBlock)
  }, []);
  return (
    <div className="App" style={{ fontFamily: "Press Start 2P" }}>
      <header className="App-header">
        {Menu(selectedPage, selectPage)}
        <div style={{ fontSize: "4vmin", margin: "2vmin 0 2vmin 0" }}>
          STN STUDIOS
        </div>
        {selectedPage === "Music" ? <MusicComponent /> : selectedPage === "About" ?<About />:<NFTSection/>}
      </header>
    </div>
  );
}

export default App;
