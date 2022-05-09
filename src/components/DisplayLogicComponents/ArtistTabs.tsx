import { billyRayInputs, walfroyInputs } from "../../constants";
import { MusicInputs } from "../../types";

export const ArtistTab=(musicInput:MusicInputs,setMusicInput:(musicInput:MusicInputs)=>void)=>{
    return (<div className="nes-container is-rounded is-dark " style={{ textAlign:"center",maxWidth:""}}>
      <div>Choose Artist</div>
          <div style={{ display: "inline", margin:"0 1vmin 0 1vmin" }}>
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
          <div style={{ display: "inline" , margin:"0 1vmin 0 1vmin" }}>
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
        </div>)
}