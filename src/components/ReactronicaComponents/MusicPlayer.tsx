import React, { useEffect } from "react";
import { Song, Track, Instrument } from "reactronica";
import { KeyboardState, SamplePath, SampleSet, SlotNote } from "../../types";

export const buildSamples = (setList: SampleSet[]):{[key:SlotNote]:SamplePath} => {
    console.log("buildsamples")
  let samples = {};
  setList.forEach((set) => {
    set.slotList.forEach((slot) => {
      if (slot !== undefined) {
        samples[slot.slotNote] = `https://musicgateway.mypinata.cloud/ipfs/${
          set.ipfsHash
        }/${slot.slotFileOverride ? slot.slotFileOverride : slot.slotName}.wav`;
      }
    });
  });
  return samples;
};

// Simplified Drum Pads
export const MusicPlayer = (
  isPlaying: boolean,
  playingNotes: KeyboardState,
  sampleSet: SampleSet[],
  _bpm: number,
  numberOfBars,
  setAreSamplesLoaded: (boolean) => void
) => {
   const [builtSamples, setBuiltSamples] = React.useState({});
 const loopTimeInSeconds = (60 / _bpm) * 4 * numberOfBars;
  useEffect(()=>{
   console.log("RERENDER MUSIC PLAYER")
   setAreSamplesLoaded(false);
   setBuiltSamples(buildSamples(sampleSet))
  },[sampleSet])
  
  return (
    <Song isPlaying={isPlaying} bpm={_bpm}>
      <Track>
        <Instrument
          type="sampler"
          notes={Object.keys(playingNotes)
            .filter((name) => playingNotes[name])
            .map((name) => {
              return { name, duration: loopTimeInSeconds };
            })}
          samples={builtSamples}
          onLoad={(buffers) => {
            // Runs when all samples are loaded
            console.log("** SAMPLES LOADED **");
            setAreSamplesLoaded(true);
          }}
        />
      </Track>
    </Song>
  );
};
