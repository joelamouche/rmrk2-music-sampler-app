import React, { useEffect } from "react";
import { Song, Track, Instrument } from "reactronica";
import * as Tone from "tone";
import {
  fourBarDuration,
  ipfsHash,
  Slot,
  SlotList,
  slotList,
  SlotNote,
} from "./constants";
import { ProgressBarLoopTimer } from "./SamplerComponents/ProgressBar";
import { SlotButtons } from "./SamplerComponents/SlotButton";
const pinataUrlKick =
  "https://musicgateway.mypinata.cloud/ipfs/QmXDezB5wD2RHrTkRMxGURgQ3k5sChd4gEUEYbZWKLdax7/CHIMPOKO_KICKSNARE.wav";
const pinataUrlHH =
  "https://musicgateway.mypinata.cloud/ipfs/QmXDezB5wD2RHrTkRMxGURgQ3k5sChd4gEUEYbZWKLdax7/CHIMPOKO_HIHAT.wav";

export const buildSamples = (slotList: SlotList, ipfsHash: string) => {
  let samples = {};
  slotList.forEach((slot) => {
    samples[
      slot.slotNote
    ] = `https://musicgateway.mypinata.cloud/ipfs/${ipfsHash}/CHIMPOKO2_${slot.slotName}.wav`;
  });
  return samples;
};

// Simplified Drum Pads
export const Reactronica = () => {
  let initNotes: { [key: SlotNote]: boolean } = {};
  slotList.forEach((slot) => {
    initNotes[slot.slotNote] = false;
  });
  const [playingNotes, setPlayingNotes] = React.useState(initNotes);
  const [nextNotes, setNextNotes] = React.useState(initNotes);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [restartLoop, setRestartLoop] = React.useState(false);
  const [startLoopTime, setStartLoopTime] = React.useState(0);
  const [areSamplesLoaded, setAreSamplesLoaded] = React.useState(false);

  // Resume Audio Context
  useEffect(() => {
    const audioContext = new AudioContext();
    audioContext.resume();
  }, []);

  // Start Loop Script when samples are loaded
  useEffect(() => {
    if (areSamplesLoaded) {
      // Start Loop
      console.log("start looping for duration " + fourBarDuration);
      setStartLoopTime(Date.now());
      setRestartLoop(true);
      setInterval(() => {
        console.log("NEW LOOP");

        setIsPlaying(false);
        setPlayingNotes(initNotes);
        setRestartLoop(true);
      }, fourBarDuration * 1000 + 100);
    }
  }, [areSamplesLoaded]);

  // Restart loop when loading a new note
  //   useEffect(() => {
  //     // Restart only if a sample is paying
  //     if (Object.values(nextNotes).reduce(
  //       (previousValue, currentValue) => previousValue || currentValue,
  //       false
  //     )){
  //       console.log("stopping loop")
  //       setRestartLoop(true)

  //       setIsPlaying(false)
  //       setPlayingNotes(initNotes)
  //     } else {
  //       console.log("stopping loop without restarting")
  //       setIsPlaying(false)
  //       setPlayingNotes(initNotes)
  //     }
  //  }, [nextNotes]);

  useEffect(() => {
    if (
      //!isPlaying&&
      restartLoop
    ) {
      console.log("restarting loop");
      setRestartLoop(false);

      setIsPlaying(true);
      console.log("nextNotes", nextNotes);
      setPlayingNotes(nextNotes);
    }
  }, [
    //isPlaying,
    restartLoop,
  ]);

  // restart loop at the end of every loop
  //   useEffect(() => {
  //     console.log("stopping loop")
  //     //setIsPlaying(false)
  //     setRestartLoop(true)

  //     setPlayingNotes(initNotes)
  //  }, [playingNotes]);

  const updateNextNotes = (noteName: string, noteValue: boolean) => {
    setNextNotes({ ...nextNotes, [noteName]: noteValue });
  };
  // console.log("playingNotes",playingNotes)
  return (
    <div className="nes-container is-rounded is-dark">
      {ProgressBarLoopTimer(startLoopTime, fourBarDuration * 1000)}
      <div className="nes-table-responsive">
        <table className="nes-table is-bordered is-centered">
          <thead>
            <tr>
              <th>
                <span className="nes-text is-primary">Sampler</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {slotList.map((slot) => {
                // console.log(slot.slotName,playingNotes)
                // console.log(slot.slotName,nextNotes[slot.slotNote],playingNotes[slot.slotNote])
                return (
                  <td key={slot.slotName}>
                    <div className="nes-text is-primary">{slot.slotName}</div>
                    <div>
                      {SlotButtons(
                        slot,
                        updateNextNotes,
                        nextNotes[slot.slotNote],
                        playingNotes[slot.slotNote]
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>

        {/* ...other pads */}

        {/* Reactronica Components */}
        <Song isPlaying={isPlaying} bpm={123}>
          <Track>
            <Instrument
              type="sampler"
              notes={Object.keys(playingNotes)
                .filter((name) => playingNotes[name])
                .map((name) => {
                  return { name, duration: fourBarDuration };
                })}
              samples={buildSamples(slotList, ipfsHash)}
              onLoad={(buffers) => {
                // Runs when all samples are loaded
                console.log("**Samples Loaded**");
                setAreSamplesLoaded(true);
              }}
            />
          </Track>
        </Song>
      </div>
    </div>
  );
};
