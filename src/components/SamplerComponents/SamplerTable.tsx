import { KeyboardState, SampleSet, TrackName } from "../../types";
import { SlotButtons } from "./SlotButton";
// Simplified Drum Pads
export const SamplerTable = (
  playingNotes: KeyboardState,
  nextNotes: KeyboardState,
  updateNextNotes: (
    noteName: string,
    noteValue: boolean,
    trackIndex: number
  ) => void,
  trackList: TrackName[],
  sets: SampleSet[]
) => {
  // console.log("playingNotes",playingNotes)
  return (
    <div className="nes-table-responsive">
      <table className="nes-table is-bordered is-centered">
        <thead>
          <tr>
            <th>
              <span className="nes-text is-primary">Sampler</span>
            </th>
            {trackList.map((trackName) => {
              return (
                <th key={trackName}>
                  <span className="nes-text is-primary">{trackName}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sets.map((set) => {
            return (
              <tr key={set.setName}>
                <td key={set.setName}>
                  <div className="nes-text is-primary">{set.setName}</div>
                </td>
                {trackList.map((trackName, i) => {
                  // place button for defined samples
                  if (
                    i < set.slotList.length &&
                    set.slotList[i] !== undefined
                  ) {
                    const slot = set.slotList[i];
                    return (
                      <td key={slot.slotName}>
                        {SlotButtons(
                          slot,
                          updateNextNotes,
                          nextNotes[slot.slotNote],
                          playingNotes[slot.slotNote],
                          i
                        )}
                      </td>
                    );
                  } else {
                    return (
                      <td key={trackName}>
                        <div className="nes-text is-primary">{"*"}</div>
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
