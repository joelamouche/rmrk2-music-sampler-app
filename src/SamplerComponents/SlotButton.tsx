import { Slot } from "../constants";

export const SlotButtons=(slot:Slot,updateNextNotes,isNextPlayingNote:boolean,isPlayingNote:boolean)=>{
    return (<div>
      <button type="button" className="nes-btn is-success"
        onMouseDown={
          async () => {
            updateNextNotes(slot.slotNote,true)
          ;}
        }
      >
        on
      </button>
      <button type="button" className="nes-btn is-error"
         onMouseUp={() => {
           updateNextNotes(slot.slotNote,false)
          }
        }
      >
        off
      </button>
      <div><span className="nes-text is-primary">Next : </span>{isNextPlayingNote?<span className="nes-text is-success">on</span>:<span className="nes-text is-error">off</span>}</div>
      <div><span className="nes-text is-primary">Playing : </span>{isPlayingNote?<span className="nes-text is-success">on</span>:<span className="nes-text is-error">off</span>}</div>
      </div>)
  }