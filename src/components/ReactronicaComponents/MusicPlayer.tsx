import React, { useEffect } from "react";
import { Song, Track, Instrument } from "reactronica";
import { KeyboardState, SampleSet } from "../../types";

export const buildSamples = (setList: SampleSet[]) => {
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
  const loopTimeInSeconds = (60 / _bpm) * 4 * numberOfBars;
  // console.log("playingNotes",playingNotes)
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
          samples={buildSamples(sampleSet)}
          onLoad={(buffers) => {
            // Runs when all samples are loaded
            console.log("**Samples Loaded**");
            setAreSamplesLoaded(true);
          }}
        />
      </Track>
    </Song>
  );
};
