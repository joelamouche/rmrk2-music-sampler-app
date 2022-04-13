import React, { useEffect } from "react";
import { Song, Track, Instrument } from "reactronica";
import * as Tone from "tone";
import {
  chimpoko2,
  chimpoko3,
  fourBarDuration,
  SampleSet,
  Slot,
  SlotList,
  SlotNote,
  trackList,
} from "./constants";
import { ProgressBarLoopTimer } from "./SamplerComponents/ProgressBar";
import { SlotButtons } from "./SamplerComponents/SlotButton";
const pinataUrlKick =
  "https://musicgateway.mypinata.cloud/ipfs/QmXDezB5wD2RHrTkRMxGURgQ3k5sChd4gEUEYbZWKLdax7/CHIMPOKO_KICKSNARE.wav";
const pinataUrlHH =
  "https://musicgateway.mypinata.cloud/ipfs/QmXDezB5wD2RHrTkRMxGURgQ3k5sChd4gEUEYbZWKLdax7/CHIMPOKO_HIHAT.wav";

  const allSets=[chimpoko2,chimpoko3]

export const buildSamples = (setList:SampleSet[]) => {
  let samples = {};
  setList.forEach((set)=>
    {set.slotList.forEach((slot) => {
      samples[
        slot.slotNote
      ] = `https://musicgateway.mypinata.cloud/ipfs/${set.ipfsHash}/${slot.slotFileOverride?slot.slotFileOverride:slot.slotName}.wav`;
    })
  })
  return samples;
};

// Simplified Drum Pads
export const Reactronica = () => {
  const initNotes: { [key: SlotNote]: boolean } = {};
  const allSamples:SlotList=[...chimpoko2.slotList,...chimpoko3.slotList]
    allSamples.forEach((slot) => {
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
      //start the loop a first time
      setRestartLoop(true);
      // start the loop sequence
      setInterval(() => {
        console.log("NEW LOOP");

        setIsPlaying(false);
        setPlayingNotes(initNotes);
        setRestartLoop(true);
      }, fourBarDuration * 1000 + 1);
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
      // set loop start time
      setStartLoopTime(Date.now());
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
    <div className="nes-container is-rounded is-dark Reactronica-frame">
      {ProgressBarLoopTimer(startLoopTime, fourBarDuration * 1000)}
      <div className="nes-table-responsive">
        <table className="nes-table is-bordered is-centered">
          <thead>
            <tr>
              <th>
                <span className="nes-text is-primary">Sampler</span>
              </th>
              {trackList.map((trackName)=>{
                return <th key={trackName}>
                  <span className="nes-text is-primary">{trackName}</span>
                </th>
              })}
            </tr>
          </thead>
          <tbody>
          {allSets.map((set)=>{
            return  (<tr key={set.setName}>
              <td key={set.setName}>
                <div className="nes-text is-primary">{set.setName}</div>
              </td>
                {trackList.map((trackName,i)=>{
                  if (i<set.slotList.length){
                    const slot=set.slotList[i]
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
                  } else {
                    return (    
                      <td key={trackName}>
                        <div className="nes-text is-primary">{trackName}</div>
                      </td>
                    );
                  }
                }) }
            </tr>)
          })}
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
              samples={buildSamples(allSets)}
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
