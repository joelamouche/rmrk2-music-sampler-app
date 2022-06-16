import { Slot } from "../../types";

export const SlotButtons = (
  slot: Slot,
  updateNextNotes: (
    noteName: string,
    noteValue: boolean,
    trackIndex: number
  ) => void,
  isNextPlayingNote: boolean,
  isPlayingNote: boolean,
  trackIndex: number
) => {
  return (
    <div className="Sample-component">
      <div className="nes-text is-primary" style={{ fontSize: "1vmin" }}>
        {slot.slotName}
      </div>
      <div style={{ padding: "3px" }}>
        {!isPlayingNote ? (
          <button
            type="button"
            className="nes-btn is-error"
            onMouseUp={() => {
              updateNextNotes(slot.slotNote, true, trackIndex);
            }}
          >
            OFF
          </button>
        ) : (
          <button
            type="button"
            className="nes-btn is-success"
            onMouseDown={async () => {
              updateNextNotes(slot.slotNote, false, trackIndex);
            }}
          >
            ON
          </button>
        )}
      </div>
      <div style={{ paddingTop: "3px" }}>
        <div>
          <span className="nes-text is-primary">Next : </span>
          {isNextPlayingNote ? (
            <span className="nes-text is-success">on</span>
          ) : (
            <span className="nes-text is-error">off</span>
          )}
        </div>
      </div>
    </div>
  );
};
