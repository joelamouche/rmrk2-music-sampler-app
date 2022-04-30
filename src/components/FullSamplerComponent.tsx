import React, { useEffect } from "react";
import { KeyboardState, SampleSet, SlotList, TrackName } from "../types";
import { ProgressBarLoopTimer } from "./SamplerComponents/ProgressBar";
import { SamplerTable } from "./SamplerComponents/SamplerTable";
import { MusicPlayer } from "./ReactronicaComponents/MusicPlayer";

export interface CustomStyles {
  containerStyle:string,
}
// Simplified Drum Pads
export const FullSamplerComponent = (
  title: string,
  _bpm: number,
  numberOfBars: number,
  allSets: SampleSet[],
  trackList: TrackName[],
  allSamples: SlotList
) => {
  const loopTime = (60000 / _bpm) * 4 * numberOfBars;
  const initNotes: KeyboardState = {};
  allSamples.forEach((slot) => {
    if (slot !== undefined) {
      initNotes[slot.slotNote] = false;
    }
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
      console.log("start looping for duration " + loopTime);
      //start the loop a first time
      setRestartLoop(true);
      // start the loop sequence
      setInterval(() => {
        console.log("NEW LOOP");

        setIsPlaying(false);
        setPlayingNotes(initNotes);
        setRestartLoop(true);
      }, loopTime);
      setStartLoopTime(Date.now());
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
      // setStartLoopTime(Date.now());
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

  // and turn off notes of the same track
  const updateNextNotes = (
    noteName: string,
    noteValue: boolean,
    trackIndex: number
  ) => {
    console.log("ok", noteName, noteValue, trackIndex);
    let sameTrackNotes = [];
    // look for note sin the same track number
    allSets.forEach((set: SampleSet) => {
      if (
        set.slotList[trackIndex] &&
        set.slotList[trackIndex].slotNote !== noteName
      ) {
        sameTrackNotes.push(set.slotList[trackIndex].slotNote);
      }
    });
    // turn them off
    let _nextNotes = { ...nextNotes, [noteName]: noteValue };
    sameTrackNotes.forEach((sameTrackNote) => {
      _nextNotes[sameTrackNote] = false;
    });
    setNextNotes(_nextNotes);
  };
  // console.log("playingNotes",playingNotes)
  return (
    <div className={`nes-container is-rounded is-dark Reactronica-frame`} >
      <div>
        <i className="nes-icon coin is-smal"></i>
        <span style={{ marginBottom: "2vmin" }}>{title}</span>
        <i className="nes-icon coin is-smal"></i>
      </div>
      {ProgressBarLoopTimer(startLoopTime, _bpm, numberOfBars)}
      {SamplerTable(
        playingNotes,
        nextNotes,
        updateNextNotes,
        trackList,
        allSets
      )}
      {MusicPlayer(
        isPlaying,
        playingNotes,
        allSets,
        _bpm,
        numberOfBars,
        setAreSamplesLoaded
      )}
    </div>
  );
};
