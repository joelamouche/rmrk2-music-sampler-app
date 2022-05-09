import React, { useEffect } from "react";
import _ from "lodash";
import { KeyboardState, SampleSet, SlotList, TrackName } from "../../types";
import { ProgressBarLoopTimer } from "./ProgressBar";
import { SamplerTable } from "./SamplerTable";
import { MusicPlayer } from "../ReactronicaComponents/MusicPlayer";

export interface CustomStyles {
  containerStyle: string;
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
  const [intervalRef, setIntervalRef] = React.useState(undefined);
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
      setIntervalRef(
        setInterval(() => {
          console.log("NEW LOOP");

          setIsPlaying(false);
          setPlayingNotes(initNotes);
          setRestartLoop(true);
        }, loopTime)
      );
      setStartLoopTime(Date.now());
      console.log("start time");
    } else {
      console.log("CLEAR INTERVAL FOR NEW SAMPLES");
      clearInterval(intervalRef);
      setNextNotes(initNotes);
    }
  }, [areSamplesLoaded]);

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
      if (!_.isEqual(playingNotes, nextNotes)) {
        setPlayingNotes(nextNotes);
      }
    }
  }, [
    //isPlaying,
    restartLoop,
  ]);

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

  return (
    <div className={`nes-container is-rounded is-dark Reactronica-frame`}>
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
